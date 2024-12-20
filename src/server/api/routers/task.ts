import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const taskRouter = createTRPCRouter({
    testing: publicProcedure
        .input(z.object({ name: z.string(), age: z.number() }))
        .query(({ input }) => {
            return {
                say: `Hello ${input.name}, age : ${input.age}`
            };
        }),
    addTask: publicProcedure
        .input(z.object({
            title: z.string().min(1),
            description: z.string().nullable(),
            status: z.string().nullable()
        }))
        .query(({ input }) => {
            return {
                datas: `Title : ${input.title}. Description : ${input.description}. Status : ${input.status}`
            }
        })
});