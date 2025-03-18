import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const getGreeting = defineAction({
    input: z.object({
        name: z.string(),
        age: z.number(),
        isActive: z.boolean(),
    }),
    handler: async (input) => {
        console.log(input.age, input.isActive);


        return `Hello, ${input.name}`
    }
})