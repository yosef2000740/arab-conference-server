import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SignInForm } from './_components/form';



export default async function SignIn() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-dark-tremor-background-muted">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-[90%] lg:w-full">
                <Card className="bg-dark-tremor-background-muted text-tremor-brand-inverted">
                    <CardHeader>
                        <CardTitle>Sign in to Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SignInForm />
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
        </main>
    );
}
