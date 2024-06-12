import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Username must be at least 6 characters.",
    }),
})

export const ConferenceSchema = z.object({
    name: z.string().min(6, {
        message: "Name Conference must be at least 6 characters."
    }),
    description: z.string().min(6, {
        message: "description Conference must be at least 6 characters."
    }),
    location: z.string().min(4, {
        message: "location must be 4 least characters"
    }),
    price: z.string().min(2, {
        message: "price must be 4 least characters"
    }),
    start:z.string().min(6,{
        message: "start data must be 4 least characters like 2024-02-23T00:22:25.614Z"
    })
    ,
    end:z.string().min(6,{
        message: "end data must be 4 least characters like 2024-02-23T00:22:25.614Z"
    }),
    topics: z.array(z.string(), {
        message: "topics must be selected of string"
    })
})

export const TopicsSchema=z.object({
    name:z.string().min(4,{
        message: "Name Topics must be at least 4 characters."
    }),
    description:z.string().min(4,{
        message: "description Topics must be at least 4 characters."

    })
})

