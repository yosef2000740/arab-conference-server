"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function PricingCard() {

    const pricing = [
        {
            title: "Student",
            price: "Free",
            features: [
                "attendee conferance",
                "Give some internship",
                "Some gift",
            ],
        },
       {
            title: "Nourmal attendee",
            price: "99E",
            features: [
                "attendee conferance",
                "Give some internship",
                "Some gift",
            ],
        },

        {
            title: "Speaker",
            price: "999E",
            features: [
                "Join as Speaker",
                "Give you Free taket other conferance",
                "Free chat support",
            ],
        },
    ]

    return (
        <div
            className="flex flex-col gap-8 py-10"
        >
            <div id="pricing" className="container space-y-12 px-4 md:px-6">
                <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center items-center text-muted">
                    Join us now!
                </span>
                <div className="flex flex-col lg:flex-row gap-10 items-center justify-center text-center">
                    {pricing.map((price, index) => (
                        <Card key={index} className="flex flex-col justify-between hover:scale-105 duration-300 hover:gradient-border w-full">
                            <CardHeader className="font-heading gap-y-3">
                                <CardTitle className="capitalize relative">
                                    {price.title}
                                </CardTitle>
                                <CardDescription className="text-foreground">
                                    {price.price}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="font-body h-full text-left">
                                <ul className="list-disc ml-4 capitalize">
                                    {price.features.map((feature, index) => (
                                        <li key={index}>
                                            <span className="text-wrap">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link href="/sign-in" className="w-full">
                                   <Button className="text-lg w-full">Contact us</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
