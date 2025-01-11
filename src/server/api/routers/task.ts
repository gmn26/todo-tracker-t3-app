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
    fetchTask: publicProcedure
        .query(async ({ ctx }) => {
            return ctx.db.task.findMany({
                orderBy: {
                    createdAt: "desc",
                }
            })
        }),
    fetchByStatus: publicProcedure
        .input(z.object({ status: z.string().min(1) }))
        .query(async ({ ctx, input }) => {
            return ctx.db.task.findMany({
                where: {
                    status: input.status,
                },
                orderBy: {
                    createdAt: "desc",
                }
            })
        }),
    addTask: publicProcedure
        .input(z.object({
            title: z.string().min(1),
            description: z.string().nullable(),
            dueDate: z.coerce.date(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.task.create({
                data: {
                    title: input.title,
                    description: input.description,
                    dueDate: input.dueDate,
                }
            })
        }),
    countByStatus: publicProcedure
        .input(z.object({ status: z.string().min(1) }))
        .query(async ({ ctx, input }) => {
            return ctx.db.task.count({
                where: {
                    status: input.status,
                },
            })
        }),
});