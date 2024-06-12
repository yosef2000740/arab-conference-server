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

import Select from 'react-select';
  
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { useTransition,useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { ConferenceSchema, TopicsSchema } from "@/schema"
import { createTopics } from "@/queries"


const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#070616', // Change this to the desired background color
      // You can also customize other properties here, like border color, etc.
    }),
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#04214C' : '#04214C',
    }),
  };
  



export default function TopicsForm() {
    const [_, startTransition] = useTransition();


    
    const form = useForm<z.infer<typeof TopicsSchema>>({
        resolver: zodResolver(TopicsSchema),
        defaultValues: {
            name: "",
            description:""
        },
    })

    async function onSubmit(values: z.infer<typeof TopicsSchema>) {
        console.log(values)
        startTransition(() => {
            createTopics(values).then((res) => {
                if (res.secccuss) {
                    toast({
                        variant: "default",
                        title: "created successfully!",
                        description: res.secccuss,
                    })
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="w-full" >
                            <FormControl>
                                <Input
                                    placeholder="SOLD"
                                    label="name"
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
                    name="description"
                    render={({ field }) => (
                        <FormItem >
                            <FormControl>
                                <Input
                                    placeholder="description"
                                    label="description"
                                    variant="bordered"
                                    className="placeholder:capitalize text-tremor-brand-inverted text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
             <Button type="submit">Add topics</Button>
            </form>
        </Form>
    );
}
