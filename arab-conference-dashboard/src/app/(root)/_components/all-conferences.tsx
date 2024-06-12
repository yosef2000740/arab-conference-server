import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Conference } from "./conference";
import { Separator } from "@/components/ui/separator"
import { getConferences } from "@/queries";
import { Button } from "@/components/ui/button";
export async function AllConferences() {
    const conferences = await getConferences();
    return (
        <>
            <main className="w-full ">
                <Card className="text-tremor-brand-inverted">
                    <CardHeader className="items-center">
                        <CardTitle>show conference</CardTitle>
                    </CardHeader>
                    <CardContent className="w-full">
                        <ScrollArea className="h-72 w-full rounded-md border p-4">
                            {conferences.map((conference: any, k: number) => (
                                <div key={k} className="flex flex-col gap-4 ">
                                    <Conference conference={conference} />
                                    <Separator className="my-4" />
                                </div>
                            ))}
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button
                        >
                            all conference
                        </Button>
                    </CardFooter>
                </Card>
            </main>

        </>
    )
}
