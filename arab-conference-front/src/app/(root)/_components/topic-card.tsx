import { getServicesIcon } from "@/lib/icons";
import { getAllTopicsByID } from "@/query/queries";
type Props = {
    _id: unknown;
    num: number;
}

export default async function TopicCard(
    {
        _id,
        num
    }: Props
) {
    const topic=await getAllTopicsByID(_id);

    console.log(topic);
    return (
        <div className="rounded-lg bg-background border border-primary p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md ">
              <span className="h-6 w-6 fill-accent dark:fill-primary">{num}</span>
              <h3 className="mt-4 text-lg font-semibold text-muted">{topic.name}</h3>
              <p className="mt-2 text-sm">
               {topic.description}
              </p>
        </div>
    )
}