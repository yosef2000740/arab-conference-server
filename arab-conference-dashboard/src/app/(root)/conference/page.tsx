import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ConferenceForm from "./_components/conference-form";
import { getTopics } from "@/queries";
export default async function Page() {
    const topics = await getTopics();
    const options = topics.map((topic:any) => ({
        value: topic._id,
        label: topic.name,
    }));
    
    return (
        <div className="h-full">
            <Card className="bg-dark-tremor-brand-faint text-tremor-brand-inverted">
                <CardHeader className="items-center">
                    <CardTitle>Add Conference</CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                    <ConferenceForm options={options} />
                </CardContent>
                <CardFooter className="flex flex-col">
                    {/* <TextSplit className="text-lg text-border">OR</TextSplit> */}
                    {/* <Providers */}
                    {/*   providers={providers} */}
                    {/*   visibleProviders={visibleProviders} */}
                    {/* /> */}
                </CardFooter>
            </Card>
        </div>
    );
}
