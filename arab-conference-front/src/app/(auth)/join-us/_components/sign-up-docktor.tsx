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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useTransition } from "react"
import { toast } from "@/components/ui/use-toast"
import { useAuth } from "@/context/Auth"
import { redirect } from "next/navigation"
import { useLoalStorage } from "@/hooks/useLocalStorage"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signUpSchemaDocktor } from "@/schema"
import { createDocktorAccount, signInUser } from "@/query/queries"
import { Textarea } from "@/components/ui/textarea"
// import { useSearchParams } from "next/navigation"

export function SignUpFormDocktor() {
    const {setItem}=useLoalStorage("token")
    const {isAuth}=useAuth();
    if(isAuth){
        toast({title:"You are aleardy login !"})
        redirect("/");
    }
    const [_, startTransition] = useTransition();
    const form = useForm<z.infer<typeof signUpSchemaDocktor>>({
        resolver: zodResolver(signUpSchemaDocktor),
        defaultValues: {
           firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            password:"",
            speakerRole:"",
            type:"speaker",
            description:""
        },
    })


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signUpSchemaDocktor>) {
        startTransition(async () => {
            const res=await createDocktorAccount(values);
            if (res.secccuss) {
                toast({
                    variant: "default",
                    title: "done account is created!",
                    description: res.secccuss,
                })

                // navigate to home page
                redirect("/sign-in");

            }
            if (res.error) {
                toast({
                    variant: "destructive",
                    title: "Uh opps , try again !",
                    description: res.error,
                })
            }
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
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className="text-xl">description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="description"
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
                name="speakerRole"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-xl">Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="scientific">scientific</SelectItem>
                            <SelectItem value="organizing">organizing</SelectItem>
                            <SelectItem value="advisory">advisory</SelectItem>
                            </SelectContent>
                        </Select>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

