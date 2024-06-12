"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { useTransition } from "react"
import { toast } from "@/components/ui/use-toast"
import { useAuth } from "@/context/Auth"
import { redirect } from "next/navigation"
import { useLoalStorage } from "@/hooks/useLocalStorage"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signUpSchema } from "@/schema"
import { createAttendeeAccount } from "@/query/queries"

// import { useSearchParams } from "next/navigation"

export function SignUpForm() {
    const {isAuth}=useAuth();
    if(isAuth){
        toast({title:"You are aleardy login !"})
        redirect("/");
    }
    const [_, startTransition] = useTransition();
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
           firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            password:"",
            type:"attendee",
        },
    })


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signUpSchema>) {
        startTransition(async () => {
            const res=await createAttendeeAccount(values);
            if(res.error){
                toast({
                    variant:"destructive",
                    title:res.error
                });
                return;
            }
            toast({title:res.secccuss});
            redirect("/sign-in");
        });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className="text-xl">firstName</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Jon"
                                    className="placeholder:capitalize text-black text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className="text-xl">lastName</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder="Doe"
                                    className="placeholder:capitalize text-tremor-brand-inverted text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className="text-xl">phoneNumber</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="08012345678"
                                    className="placeholder:capitalize text-tremor-brand-inverted text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (

                        <FormItem >
                            <FormLabel className="text-xl">email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="jon@gmail.com"
                                    className="placeholder:capitalize text-tremor-brand-inverted text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className="text-xl">password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="password"
                                    className="placeholder:capitalize text-tremor-brand-inverted text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

