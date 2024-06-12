"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { signInSchema } from "@/schema"
import { signInUser } from "@/queries"
import { useTransition } from "react"
import { toast } from "@/components/ui/use-toast"
import { useAuth } from "@/context/Auth"
import { redirect } from "next/navigation"
import { useLoalStorage } from "@/hooks/useLocalStorage"
// import { useSearchParams } from "next/navigation"

export function SignInForm() {
    const {setItem}=useLoalStorage("token")
    const {isAuth}=useAuth();
    if(isAuth){
        toast({title:"You are aleardy login !"})
        redirect("/");
    }
    const [_, startTransition] = useTransition();
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signInSchema>) {
        startTransition(() => {
            signInUser(values).then((res) => {
                if (res.secccuss) {
                    toast({
                        variant: "default",
                        title: "welcome back!",
                        description: res.secccuss,
                    })
                    console.log(res.user);
                    setItem(res.user.data._id);

                    // navigate to home page
                    window.location.href = "/";

                }
                if (res.error) {
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: res.error,
                    })
                }
            })
        })
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem >
                            <FormControl>
                                <Input
                                    placeholder="jon@gmail.com"
                                    label="email"
                                    variant="bordered"
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
                            <FormControl>
                                <Input
                                    placeholder="password"
                                    label="password"
                                    variant="bordered"
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

