import { useState } from "react";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import { Calendar as CalendarIcon, Clock, User, Mail, CheckCircle, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100).regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string().trim().min(1, "Email is required").max(255).email("Please enter a valid email address"),
  message: z.string().trim().max(1000).optional().transform(val => val || ""),
});

const sanitizeInput = (input: string): string => input.replace(/[<>]/g, "").trim();

type BookingStep = "date" | "time" | "details" | "confirmation";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM"
];

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Book = () => {
  const [step, setStep] = useState<BookingStep>("date");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { toast } = useToast();

  const resetForm = () => {
    setStep("date");
    setSelectedDate(undefined);
    setSelectedTime("");
    setName("");
    setEmail("");
    setMessage("");
    setFieldErrors({});
  };

  const validateForm = (): boolean => {
    const result = bookingSchema.safeParse({ name, email, message });
    if (!result.success) {
      const errors: FieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FieldErrors;
        if (!errors[field]) errors[field] = err.message;
      });
      setFieldErrors(errors);
      return false;
    }
    setFieldErrors({});
    return true;
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) return;
    if (!validateForm()) {
      toast({ title: "Validation Error", description: "Please fix the errors in the form.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const bookingDate = format(selectedDate, "yyyy-MM-dd");
      const sanitizedName = sanitizeInput(name);
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedMessage = sanitizeInput(message);

      const { error: dbError } = await supabase.from('bookings').insert({
        name: sanitizedName, email: sanitizedEmail, message: sanitizedMessage || null,
        booking_date: bookingDate, booking_time: selectedTime, status: 'pending'
      });
      if (dbError) throw new Error('Failed to save booking');

      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: sanitizedName, email: sanitizedEmail, message: sanitizedMessage,
          booking_date: format(selectedDate, "EEEE, MMMM d, yyyy"), booking_time: selectedTime,
          _subject: `New Booking Request from ${sanitizedName}`,
        }),
      });

      setStep("confirmation");
      toast({ title: "Booking Confirmed!", description: "You'll receive a confirmation email shortly." });
    } catch {
      toast({ title: "Booking Failed", description: "There was an error processing your booking. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const disabledDays = (date: Date) => {
    const today = startOfDay(new Date());
    const maxDate = addDays(today, 60);
    return isBefore(date, today) || isBefore(maxDate, date) || date.getDay() === 0 || date.getDay() === 6;
  };

  const steps = ["date", "time", "details"] as const;

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
            step === s || (step === "confirmation" && i < 3)
              ? "bg-primary text-primary-foreground"
              : i < ["date", "time", "details", "confirmation"].indexOf(step)
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground"
          )}>
            {i + 1}
          </div>
          {i < 2 && (
            <div className={cn(
              "w-16 h-0.5 mx-2",
              i < ["date", "time", "details", "confirmation"].indexOf(step) ? "bg-primary" : "bg-muted"
            )} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {step === "confirmation" ? "You're All Set!" : "Book Your Free Strategy Session"}
            </h1>
            {step !== "confirmation" && (
              <p className="text-lg text-muted-foreground">
                30-minute consultation with our growth experts — pick a date and time that works for you.
              </p>
            )}
          </div>

          <Card className="max-w-xl mx-auto shadow-soft-lg border-border/50">
            <CardContent className="p-8">
              {step !== "confirmation" && renderStepIndicator()}

              {step === "date" && (
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-4">
                    <CalendarIcon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">Select a Date</h3>
                  </div>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={disabledDays}
                    className="rounded-lg border bg-card"
                  />
                  <Button className="mt-6 w-full gradient-bg" disabled={!selectedDate} onClick={() => setStep("time")}>
                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}

              {step === "time" && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">Select a Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </p>
                  <div className="grid grid-cols-3 gap-2 max-h-[280px] overflow-y-auto">
                    {timeSlots.map((time) => (
                      <Button key={time} variant={selectedTime === time ? "default" : "outline"}
                        className={cn("h-10", selectedTime === time && "gradient-bg")}
                        onClick={() => setSelectedTime(time)}>
                        {time}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" onClick={() => setStep("date")} className="flex-1">
                      <ArrowLeft className="mr-2 w-4 h-4" /> Back
                    </Button>
                    <Button className="flex-1 gradient-bg" disabled={!selectedTime} onClick={() => setStep("details")}>
                      Continue <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === "details" && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">Your Details</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedDate && format(selectedDate, "EEEE, MMMM d")} at {selectedTime}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Smith" value={name}
                        onChange={(e) => { setName(e.target.value); if (fieldErrors.name) setFieldErrors(p => ({ ...p, name: undefined })); }}
                        maxLength={100} className={cn("mt-1.5", fieldErrors.name && "border-destructive")} />
                      {fieldErrors.name && <p className="text-sm text-destructive mt-1">{fieldErrors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@company.com" value={email}
                        onChange={(e) => { setEmail(e.target.value); if (fieldErrors.email) setFieldErrors(p => ({ ...p, email: undefined })); }}
                        maxLength={255} className={cn("mt-1.5", fieldErrors.email && "border-destructive")} />
                      {fieldErrors.email && <p className="text-sm text-destructive mt-1">{fieldErrors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="message">What would you like to discuss? (Optional)</Label>
                      <Textarea id="message" placeholder="Tell us about your project or goals..." value={message}
                        onChange={(e) => { setMessage(e.target.value); if (fieldErrors.message) setFieldErrors(p => ({ ...p, message: undefined })); }}
                        maxLength={1000} className={cn("mt-1.5 resize-none", fieldErrors.message && "border-destructive")} rows={3} />
                      {fieldErrors.message && <p className="text-sm text-destructive mt-1">{fieldErrors.message}</p>}
                      <p className="text-xs text-muted-foreground mt-1">{message.length}/1000</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" onClick={() => setStep("time")} className="flex-1">
                      <ArrowLeft className="mr-2 w-4 h-4" /> Back
                    </Button>
                    <Button className="flex-1 gradient-bg" disabled={!name || !email || isSubmitting} onClick={handleSubmit}>
                      {isSubmitting ? (<><Loader2 className="mr-2 w-4 h-4 animate-spin" /> Scheduling...</>) : (<>Schedule Meeting <CheckCircle className="ml-2 w-4 h-4" /></>)}
                    </Button>
                  </div>
                </div>
              )}

              {step === "confirmation" && (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
                  <p className="text-muted-foreground mb-6">Your free strategy session is confirmed for:</p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <p className="font-medium text-lg">{selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
                    <p className="text-primary font-semibold">{selectedTime}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                    <Mail className="w-4 h-4" />
                    <span>A confirmation email has been sent to {email}</span>
                  </div>
                  <Button className="w-full gradient-bg" onClick={resetForm}>Book Another Session</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;
