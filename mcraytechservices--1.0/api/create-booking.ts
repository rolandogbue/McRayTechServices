import { supabaseAdmin } from "../server/supabase-admin";
import { isSlotAvailable, createCalendarEvent } from "../server/google-calendar";
import { sendEmails } from "../server/email";
import { parse, addMinutes } from "date-fns";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      phone,
      email,
      businessName,
      message,
      bookingDate,
      bookingTime,
    } = req.body;

    const start = parse(
      `${bookingDate} ${bookingTime}`,
      "yyyy-MM-dd h:mm a",
      new Date()
    );
    const end = addMinutes(start, 30);

    const available = await isSlotAvailable(start, end);
    if (!available) {
      return res.status(409).json({ error: "Time slot already booked" });
    }

    await supabaseAdmin.from("bookings").insert({
      name,
      phone,
      email,
      business_name: businessName,
      message,
      booking_date: bookingDate,
      booking_time: bookingTime,
      status: "confirmed",
    });

    await createCalendarEvent(
      `Strategy Call – ${name}`,
      message || "",
      start,
      end
    );

    await sendEmails({
      clientEmail: email,
      clientName: name,
      details: `${name} booked ${bookingDate} at ${bookingTime}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking failed" });
  }
}
