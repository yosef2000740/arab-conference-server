import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getSpeakerReq } from "@/queries";
import RequestScroll from "./request-scroll";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import NoRequest from "./no_request";
import { Button } from "@/components/ui/button";




export default async function RequestSpeaker() {
   

    const speakersRequest = await getSpeakerReq();

    const isPending = speakersRequest.filter((speaker: any) => speaker.status === "pending");

    return (
        <div className="w-full">
            <Card className="bg-dark-tremor-brand-faint text-tremor-brand-inverted">
                <CardHeader className="items-center">
                    <CardTitle>Requests as Speaker</CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                    <ScrollArea className="h-48 w-full rounded-md border p-4">
                        {isPending.length > 0 ? (
                            isPending.map((speaker: any, k:number) => (
                                <div className="flex flex-col gap-4 p-4" key={k}>
                                    <RequestScroll key={k} _id={speaker._id} status={speaker.status} speaker={speaker.speaker} conference={speaker.conference} />
                                    <Separator className="my-2" />
                                </div>
                            ))
                        ) : (
                            <NoRequest />
                        )}
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button
                    >
                        all speaker
                    </Button>
                    {/* Any additional content for the footer */}
                </CardFooter>
            </Card>
        </div>
    );
}
