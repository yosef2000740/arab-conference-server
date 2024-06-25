import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAttendeeReq } from "@/queries";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import NoRequest from "./no_request";
import AttendeeDetails from "./attendee-details";
import { Button } from "@/components/ui/button";

export default async function RequestAttendee() {
    const attendees = await getAttendeeReq();

    const isPending = attendees.filter((speaker: any) => speaker.status === "pending");

    return (
        <div className="w-full">
            <Card className="">
                <CardHeader className="items-center">
                    <CardTitle>Requests as Attendee</CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                    <ScrollArea className="h-48 w-full rounded-md border p-4">
                        {isPending.length > 0 ? (
                            isPending.map((attendee: any, k: number) => (
                                <div className="flex flex-col gap-4 p-4" key={k}>
                                    <AttendeeDetails _id={attendee._id} attendee={attendee.attendee} conference={attendee.conference} status={attendee.status} />
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
                        all attendee
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
