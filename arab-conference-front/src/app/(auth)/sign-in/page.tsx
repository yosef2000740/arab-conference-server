import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SignInForm } from "./_components/sign-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";





export default  function SignIn() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-dark-tremor-background-muted">

            <Card className="bg-dark-tremor-background-muted text-tremor-brand-inverted">
                    <CardHeader>
                        <CardTitle>Sign In account</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <SignInForm />
                    </CardContent>
                    <CardFooter className="flex flex-col">
                       <Link href={"/join-us"} className="text-tremor-brand-inverted">
                            <Button
                                className="text-muted"
                                variant="link"
                            >
                                don't have account ? join-us
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>             
        </main>
    );
}
