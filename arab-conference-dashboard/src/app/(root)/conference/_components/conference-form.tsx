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
import { ConferenceSchema } from "@/schema"
import { createConference } from "@/queries"
import { useLoalStorage } from "@/hooks/useLocalStorage"


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
  

type Props={
    options:{ value: string; label: string; }[]
}

export default function ConferenceForm({options}:Props) {
    const [_, startTransition] = useTransition();
    const [topics, setTopics] = useState<string[]>([]);
    const {getItem}=useLoalStorage("token") 
    
    console.log(getItem());
    
    const form = useForm<z.infer<typeof ConferenceSchema>>({
        resolver: zodResolver(ConferenceSchema),
        defaultValues: {
            name: "",
            description: "",
            location: "",
            price: "",
            start: "",
            end: "",
            topics: []
        },
    })

    async function onSubmit(values: z.infer<typeof ConferenceSchema>) {
        console.log(values)
        startTransition(() => {
            createConference(values,getItem()).then((res) => {
                if (res.secccuss) {
                    toast({
                        variant: "default",
                        title: "Conference created successfully!",
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
                                    placeholder="Egyption conference"
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
                <div className="flex w-full gap-8">
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="w-full" >
                            <FormControl>
                                <Input
                                    placeholder="Egyption conference"
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
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem >
                            <FormControl>
                                <Input
                                    placeholder="location"
                                    label="Maadi"
                                    variant="bordered"
                                    className="placeholder:capitalize text-tremor-brand-inverted text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                </div>
                <div className="flex w-full gap-8">
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormControl>
                                <Input
                                    placeholder="price"
                                    label="price"
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
                    name="start"
                    render={({ field }) => (
                        <FormItem  className="w-full">
                            <FormControl>
                                <Input
                                    placeholder="2020-12-12"
                                    label="start data"
                                    variant="bordered"
                                    className="placeholder:capitalize text-tremor-brand-inverted text-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                </div>
                <FormField
                    control={form.control}
                    name="end"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormControl>
                                <Input
                                    placeholder="end data"
                                    label="end data"
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
                    name="topics"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                {...field}
                                isMulti
                                options={options}
                                classNamePrefix="select"
                                className="text-green-500"
                                onChange={(val) => field.onChange(val.map(item => item.value))}
                                value={options.filter(option => field.value.includes(option.value))}
                                styles={customStyles}
                             />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                <Button type="submit">Add Conference</Button>
            </form>
        </Form>
    );
}
