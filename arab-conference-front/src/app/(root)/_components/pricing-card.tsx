import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";

export default function PricingCard() {

    const pricing = [
        {
            title: "Student",
            description: "Contact us for price details",
            price: "99E",
            features: [
                "Unlimted storage",
                "Unlimted network generation time",
                "Unlimted projects",
                "Free chat support",
                "Consulting services",
            ],
        },
        {
            title: "Student",
            description: "Contact us for price details",
            price: "99E",
            features: [
                "Unlimted storage",
                "Unlimted network generation time",
                "Unlimted projects",
                "Free chat support",
                "Consulting services",
            ],
        },
        {
            title: "Student",
            description: "Contact us for price details",
            price: "99E",
            features: [
                "Unlimted storage",
                "Unlimted network generation time",
                "Unlimted projects",
                "Free chat support",
                "Consulting services",
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
                        <Card className="flex flex-col justify-between hover:scale-105 duration-300 hover:gradient-border">
                            <CardHeader className="font-heading gap-y-3">
                                <CardTitle className="capitalize relative">
                                    {price.title}
                                </CardTitle>
                                <CardDescription className="text-foreground">
                                    {price.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="font-body h-full">
                                <ul className="list-disc ml-4 capitalize">
                                    {price.features.map((feature, index) => (
                                        <li key={index}>
                                            <p>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="text-lg w-full">Contact us</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
