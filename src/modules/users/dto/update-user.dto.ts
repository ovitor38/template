import { z } from "zod";

export const userUpdateDto = z.object({
  id: z.number().or(z.string()),
  name: z.string().optional(),
  email: z.string().email().optional(),
});
