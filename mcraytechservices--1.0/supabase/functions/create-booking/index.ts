// import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
// import { Resend } from "https://esm.sh/resend@3.2.0";
// import { create, getNumericDate } from "https://deno.land/x/djwt@v3.0.2/mod.ts";

// /* ----------------------------------------
//    Utilities
// ---------------------------------------- */

// function formatDateReadable(dateStr: string): string {
//   const date = new Date(`${dateStr}T00:00:00`);
//   return date.toLocaleDateString("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// // ---- GOOGLE AUTH ----
// async function getGoogleAccessToken(): Promise<string> {
//   const clientEmail = Deno.env.get("GOOGLE_CLIENT_EMAIL");
//   const privateKey = Deno.env.get("GOOGLE_PRIVATE_KEY")?.replace(/\\n/g, "\n");

//   if (!clientEmail || !privateKey) {
//     throw new Error("Missing Google service account environment variables");
//   }

//   const now = Math.floor(Date.now() / 1000);

//   const jwt = await create(
//     { alg: "RS256", typ: "JWT" },
//     {
//       iss: clientEmail,
//       scope: "https://www.googleapis.com/auth/calendar",
//       aud: "https://oauth2.googleapis.com/token",
//       iat: now,
//       exp: now + 60 * 60, // 1 hour
//     },
//     privateKey,
//   );

//   const res = await fetch("https://oauth2.googleapis.com/token", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams({
//       grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
//       assertion: jwt,
//     }),
//   });

//   const data = await res.json();

//   if (!data.access_token) {
//     throw new Error("Google token error: " + JSON.stringify(data));
//   }

//   return data.access_token;
// }

// // ---- CREATE CALENDAR EVENT ----

// async function createCalendarEvent(params: {
//   accessToken: string;
//   calendarId: string;
//   name: string;
//   email: string;
//   bookingDate: string;
//   bookingTime: string;
// }) {
//   const { accessToken, calendarId, name, email, bookingDate, bookingTime } =
//     params;

//   const startDateTime = `${bookingDate}T${bookingTime}:00`;
//   const endDateTime = `${bookingDate}T${bookingTime}:00`;

//   const response = await fetch(
//     `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         summary: `Strategy Session – ${name}`,
//         description: `Client email: ${email}`,
//         start: { dateTime: startDateTime, timeZone: "Africa/Lagos" },
//         end: { dateTime: endDateTime, timeZone: "Africa/Lagos" },
//       }),
//     },
//   );

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(`Calendar event error: ${JSON.stringify(data)}`);
//   }

//   return data.id;
// }

// // ---- MAIN FUNCTION ----
// serve(async (req) => {
//   if (req.method === "OPTIONS") {
//     return new Response(null, {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers":
//           "authorization, x-client-info, apikey, content-type",
//       },
//     });
//   }

//   if (req.method !== "POST") {
//     return new Response("Method not allowed", { status: 405 });
//   }

//   try {
//     const {
//       name,
//       phone,
//       email,
//       businessName,
//       message,
//       bookingDate,
//       bookingTime,
//     } = await req.json();

//     if (!name || !email || !bookingDate || !bookingTime) {
//       return new Response(
//         JSON.stringify({ error: "Missing required fields" }),
//         {
//           status: 400,
//           headers: { "Access-Control-Allow-Origin": "*" },
//         },
//       );
//     }

//     const supabase = createClient(
//       Deno.env.get("SUPABASE_URL")!,
//       Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
//     );

//     // Prevent double booking
//     const { data: existing } = await supabase
//       .from("bookings")
//       .select("id")
//       .eq("booking_date", bookingDate)
//       .eq("booking_time", bookingTime)
//       .maybeSingle();

//     if (existing) {
//       return new Response(
//         JSON.stringify({ error: "Time slot already booked" }),
//         {
//           status: 409,
//           headers: { "Access-Control-Allow-Origin": "*" },
//         },
//       );
//     }

//     // 1️⃣ Create Google Calendar event FIRST
//     const eventId = await createCalendarEvent({
//       name,
//       email,
//       bookingDate,
//       bookingTime,
//     });

//     // 2️⃣ Save booking ONLY if calendar succeeded

//     const { data: booking, error } = await supabase
//       .from("bookings")
//       .insert({
//         name,
//         email,
//         phone,
//         business_name: businessName,
//         message,
//         booking_date: bookingDate,
//         booking_time: bookingTime,
//         status: "confirmed",
//         google_event_id: eventId,
//       })
//       .select()
//       .single();

//     if (error) throw error;

//     /* ---------- EMAILS ---------- */

//     const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

//     // 1️⃣ Email to business
//     await resend.emails.send({
//       from: "Free Strategy Session <bookings@mcraytechservices.com>",
//       to: ["solutions@mcraytechservices.com"],
//       subject: "📅 New Booking Received",
//       html: `
//      <h2>30 min Free Strategy Session Booking</h2>
//      <p><strong>Name:</strong> ${name}</p>
//      <p><strong>Email:</strong> ${email}</p>
//      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
//      <p><strong>Business:</strong> ${businessName || "—"}</p>
//      <p><strong>Date:</strong> ${formatDateReadable(bookingDate)}</p>
//      <p><strong>Time:</strong> ${bookingTime} (WAT)</p>
//      <p><strong>Message:</strong> ${message || "None"}</p>
//    `,
//     });

//     // 2️⃣ Confirmation email to client
//     await resend.emails.send({
//       from: "McRay Tech Services <bookings@mcraytechservices.com>",
//       to: [email],
//       subject: "Booking Confirmed",
//       html: `
//      <p>Hello ${name}, <br><br>
//      Thank you for booking a free strategy session with us!</p>
//      <h3>This session is designed to:</h3>
//      <ul>
//       <li>Learn more about your business, goals, and identify key challenges in your business operations</li><br>
//       <li>Explore opportunities for growth and efficiency</li><br>
//       <li>Develop a strategic plan tailored to your needs</li><br>
//       <li>Answer any questions you may have about services</li><br>
//      </ul>
//       <h3>Your booking details:</h3>
//         <p><strong>Date:</strong> ${formatDateReadable(bookingDate)}</p>
//         <p><strong>Time:</strong> ${bookingTime} (WAT)</p>
//       <p>Please make sure you're in a quiet space and bring along any key information you'd like us to know about your business.</p>
//       <p>If you need to reschedule, please contact us. We look forward to seeing you.</p><br>
//       <p>— McRay Tech Services Team 🖤</p>
//    `,
//     });

//     /* ------------------------------
//        Calendar (NON-BLOCKING)
//        THIS IS ISSUE #2 FIX
//     ------------------------------ */

//     try {
//       const accessToken = await getGoogleAccessToken();

//       const calendarEventId = await createCalendarEvent({
//         accessToken,
//         calendarId: Deno.env.get("GOOGLE_CALENDAR_ID")!,
//         name,
//         email,
//         bookingDate,
//         bookingTime,
//       });

//       await supabase
//         .from("bookings")
//         .update({ calendar_event_id: calendarEventId })
//         .eq("id", booking.id);
//     } catch (calendarError) {
//       console.error("CALENDAR SYNC FAILED:", calendarError);
//       // deliberately NOT throwing
//     }

//     return new Response(JSON.stringify({ success: true, booking: data }), {
//       status: 200,
//       headers: { "Access-Control-Allow-Origin": "*" },
//     });
//   } catch (err) {
//     console.error("BOOKING ERROR:", err);

//     return new Response(JSON.stringify({ error: "Internal Server Error" }), {
//       status: 500,
//       headers: { "Access-Control-Allow-Origin": "*" },
//     });
//   }
// });

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@3.2.0";
import { create } from "https://deno.land/x/djwt@v3.0.2/mod.ts";

/* ----------------------------------------
   Utilities
---------------------------------------- */

function formatDateReadable(dateStr: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function addMinutes(dateTime: string, minutes: number): string {
  const d = new Date(dateTime);
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
}

/* ----------------------------------------
   Google Auth
---------------------------------------- */

async function getGoogleAccessToken(): Promise<string> {
  const clientEmail = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = Deno.env.get("GOOGLE_PRIVATE_KEY")?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google service account credentials");
  }

  const now = Math.floor(Date.now() / 1000);

  const jwt = await create(
    { alg: "RS256", typ: "JWT" },
    {
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/calendar",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    },
    privateKey,
  );

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(JSON.stringify(data));
  }

  return data.access_token;
}

/* ----------------------------------------
   Google Calendar
---------------------------------------- */

async function createCalendarEvent(params: {
  accessToken: string;
  calendarId: string;
  name: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
}) {
  const start = `${params.bookingDate}T${params.bookingTime}:00`;
  const end = addMinutes(start, 30);

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${params.calendarId}/events`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${params.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: `Strategy Session – ${params.name}`,
        description: `Client: ${params.email}`,
        start: { dateTime: start, timeZone: "Africa/Lagos" },
        end: { dateTime: end, timeZone: "Africa/Lagos" },
      }),
    },
  );

  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));

  return data.id;
}

/* ----------------------------------------
   Main
---------------------------------------- */

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
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
    } = await req.json();

    if (!name || !email || !bookingDate || !bookingTime) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Prevent double booking
    const { data: existing } = await supabase
      .from("bookings")
      .select("id")
      .eq("booking_date", bookingDate)
      .eq("booking_time", bookingTime)
      .maybeSingle();

    if (existing) {
      return new Response(JSON.stringify({ error: "Time slot taken" }), {
        status: 409,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    // ✅ INSERT FIRST (ALWAYS)
    const { data: booking, error } = await supabase
      .from("bookings")
      .insert({
        name,
        email,
        phone,
        business_name: businessName,
        message,
        booking_date: bookingDate,
        booking_time: bookingTime,
        status: "confirmed",
      })
      .select()
      .single();

    if (error) throw error;

    // ---------- Emails (non-blocking)
    const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);
    resend.emails
      .send({
        /* business email */
        from: "Free Strategy Session <bookings@mcraytechservices.com>",
        to: ["solutions@mcraytechservices.com"],
        subject: "📅 New Booking Received",
        html: `
     <h2>30 min Free Strategy Session Booking</h2>
     <p><strong>Name:</strong> ${name}</p>
     <p><strong>Email:</strong> ${email}</p>
     <p><strong>Phone:</strong> ${phone || "N/A"}</p>
     <p><strong>Business:</strong> ${businessName || "—"}</p>
     <p><strong>Date:</strong> ${formatDateReadable(bookingDate)}</p>
     <p><strong>Time:</strong> ${bookingTime} (WAT)</p>
     <p><strong>Message:</strong> ${message || "None"}</p>
   `,
      })
      .catch(console.error);
    resend.emails
      .send({
        /* client email */
        from: "McRay Tech Services <bookings@mcraytechservices.com>",
        to: [email],
        subject: "Booking Confirmed",
        html: `
     <p>Hello ${name}, <br><br>
     Thank you for booking a free strategy session with us!</p>
     <h3>This session is designed to:</h3>
     <ul>
      <li>Learn more about your business, goals, and identify key challenges in your business operations</li><br>
      <li>Explore opportunities for growth and efficiency</li><br>
      <li>Develop a strategic plan tailored to your needs</li><br>
      <li>Answer any questions you may have about services</li><br>
     </ul>
      <h3>Your booking details:</h3>
        <p><strong>Date:</strong> ${formatDateReadable(bookingDate)}</p>
        <p><strong>Time:</strong> ${bookingTime} (WAT)</p>
      <p>Please make sure you're in a quiet space and bring along any key information you'd like us to know about your business.</p>
      <p>If you need to reschedule, please contact us. We look forward to seeing you.</p><br>
      <p>— McRay Tech Services Team 🖤</p>
   `,
      })
      .catch(console.error);

    // ---------- Calendar (non-blocking)
    try {
      const token = await getGoogleAccessToken();
      const eventId = await createCalendarEvent({
        accessToken: token,
        calendarId: Deno.env.get("GOOGLE_CALENDAR_ID")!,
        name,
        email,
        bookingDate,
        bookingTime,
      });

      await supabase
        .from("bookings")
        .update({ google_event_id: eventId })
        .eq("id", booking.id);
    } catch (err) {
      console.error("Calendar sync failed:", err);
    }

    return new Response(JSON.stringify({ success: true, booking }), {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    console.error("BOOKING ERROR:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }
});
