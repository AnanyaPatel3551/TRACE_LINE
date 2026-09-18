import { z } from "zod";

// An `Email` describes the shape of one email record as it moves between
// our apps: who it's addressed to, its subject, when it was sent, and a
// unique id. This type has no logic of its own — it's just a contract
// that says "any Email object must have exactly these fields, with these
// kinds of values." It only exists while we're writing and compiling
// code; it disappears once the code runs.
export type Email = {
  id: string;
  recipient: string;
  subject: string;
  sentAt: Date;
};

// `EmailSchema` describes the same shape as `Email`, but as a real value
// that still exists while the program is running. TypeScript types are
// erased at compile time, so they can't check data that shows up from
// outside our own code — an API response, a form submission, a database
// row. Calling `EmailSchema.parse(someData)` actually inspects that data
// at runtime and throws an error if it doesn't match, so bad data gets
// caught immediately instead of causing confusing bugs later.
export const EmailSchema = z.object({
  id: z.string(),
  recipient: z.string().email(),
  subject: z.string(),
  sentAt: z.date(),
});
