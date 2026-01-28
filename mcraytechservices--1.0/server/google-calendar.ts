import { google } from "googleapis";

const auth = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  undefined,
  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/calendar"]
);

export const calendar = google.calendar({ version: "v3", auth });

export async function isSlotAvailable(
  start: Date,
  end: Date
): Promise<boolean> {
  const res = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID!,
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    singleEvents: true,
  });

  return (res.data.items?.length ?? 0) === 0;
}

export async function createCalendarEvent(
  summary: string,
  description: string,
  start: Date,
  end: Date
) {
  return calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID!,
    requestBody: {
      summary,
      description,
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
    },
  });
}
