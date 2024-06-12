import { getLastConferences } from "@/query/queries";
import TopicCard from "./topic-card";

export default async function Topics() {

   const lastConference=await getLastConferences();


    const topics =  lastConference?.topics;
    console.log(topics);
    return (
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-muted">Explore Our Topics</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    The conference will be cover all this topics
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3">
            {topics?.map((topic:unknown, index:number) => (
                <TopicCard key={index} _id={topic} num={index+1}  />
            ))}
          </div>
        </div>
    )
}