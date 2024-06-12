import exp from "constants"
import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Username must be at least 6 characters.",
    }),
})
// {
// 	"firstName":"jams",
// 	"lastName":"ton",
// 	"phoneNumber":"01128124601",
// 	"email":"jamsn@gmail.com",
// 	"password":"123456",
// }

export const visaSchema = z.object({
    cardNumber: z.string().min(16, {
        message: "card Number must be at least 16 characters."
    }),
    expirationDate: z.string().min(5, {
        message: "expiration Date must be at least 5 characters."
    }),
    cvv: z.string().min(3, {
        message: "cvv must be at least 3 characters."
    })
})

export const signUpSchema = z.object({
    firstName: z.string().min(2, {
        message: "firstName must be at least 2 characters."
    }),
    lastName: z.string().min(2, {
        message: "lastName must be at least 2 characters."
    }),
    phoneNumber: z.string().min(11, {
        message: "phoneNumber must be at least 11 characters."
    }),
    email: z.string().email({
        message: "Invalid email address."
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters."
    }),
    type: z.string().min(2, {
        message: "type must be at least 2 characters."
    })
})

export const signUpSchemaDocktor = z.object({
    firstName: z.string().min(2, {
        message: "firstName must be at least 2 characters."
    }),
    lastName: z.string().min(2, {
        message: "lastName must be at least 2 characters."
    }),
    phoneNumber: z.string().min(11, {
        message: "phoneNumber must be at least 11 characters."
    }),
    email: z.string().email({
        message: "Invalid email address."
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters."
    }),
    type: z.string().min(2, {
        message: "type must be at least 2 characters."
    }),
    speakerRole: z.string().min(2, {
        message: "speakerRole must be at least 2 characters."
    }),
    description: z.string().min(20, {
        message: "description must be at least 20 characters."
    })
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

