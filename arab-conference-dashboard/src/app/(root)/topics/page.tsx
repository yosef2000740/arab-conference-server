import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getTopics } from "@/queries";
import TopicsForm from "./_components/topics-form";
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
                    <CardTitle>Add Topics</CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                    <TopicsForm />
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
