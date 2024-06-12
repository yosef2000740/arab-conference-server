import { CiLogin } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { GoGoal } from "react-icons/go";
import { MdOutlinePayments } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";

export default function HowToUse() {
    const steps = [
        {
            title: "Step 1: Set Up Your Account",
            description: "setting up your account with our AI-powered potato disease detection platform. Sign up and get ready to streamline your crop management process.",
            icon: <CiLogin className="h-12 w-12" />
        },
        {
            title: "Step 2:Select the confrence",
            description: "select the confrence you want to attend and get the ticket for the same.",
            icon: <GoGoal className="h-12 w-12 text-gray-500 dark:text-gray-400" />
        },
        {
            title: "Step 3: payment",
            description: "pay the amount for the ticket and get the confirmation mail for the same.",
            icon: <MdOutlinePayments className="h-12 w-12 text-gray-500 dark:text-gray-400" />
        },
        {
            title: "Step 4:waiting accept",
            description: "wait for the acceptance of the ticket and get the confirmation mail for the same.",
            icon: <MdDownloadDone className="h-12 w-12 text-gray-500 dark:text-gray-400" />
        }
    ]
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center items-center text-muted">How To Apply</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={index} className="space-y-4 border border-accent p-4 rounded-md border-dashed">
                                <div className="rounded-lg  p-4 dark:bg-gray-800">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-accent">{step.title}</h3>
                                    <p className="dark:text-gray-400 text-muted">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
