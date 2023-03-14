import { z } from "zod";

export const userDto = z.object({
  name: z.string(),
  email: z.string().email("is not a valid email")
});

