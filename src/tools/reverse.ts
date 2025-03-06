import {z} from "zod";

export const reverseTool = {
  name: "reverse",
  description: "Reverses the input string",
  parameters: z.object({
    input: z.string().describe("String to reverse"),
  }),
  execute: async ({input}: {input: string}) => {
    return input.split("").reverse().join("");
  },
};
