import { Separator } from "@/components/ui/separator"
import { Button } from "@nextui-org/button";
import { MdPriceChange } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";


type Props = {
    conference: any
}

export function Conference({ conference }: Props) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-center">{conference.name}</h2>
            <div className="flex gap-4 w-full text-xl items-center justify-center">
                <Button
                    variant="faded"
                    className="text-dark-tremor-ring text-lg bg-yellow-300 px-4 py-1 flex w-1/3"
                >
                    <MdPriceChange size={25} />
                    <span className="w-full">
                        {conference.price}$
                    </span>
                </Button>
                <Button
                    variant="faded"
                    className="text-dark-tremor-ring text-lg  px-4 py-1 flex w-1/3"
                >
                    <CiLocationArrow1 className="text-white" />
                    <span className="text-gray-400 w-full">{conference.location}</span>
                </Button>
            </div>
        </div>
    )
}
