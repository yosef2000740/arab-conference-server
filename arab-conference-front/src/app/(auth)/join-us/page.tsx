import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { SignUpFormDocktor } from "./_components/sign-up-docktor";
import { SignUpForm } from "./_components/sign-up";




export default  function JoinUs() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-dark-tremor-background-muted">
            <Tabs defaultValue="attendee" className="w-[50%]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="attendee">attendee</TabsTrigger>
                <TabsTrigger value="docktor">Doctor</TabsTrigger>
            </TabsList>
            <TabsContent value="attendee">
            <Card className="bg-dark-tremor-background-muted text-tremor-brand-inverted">
                    <CardHeader>
                        <CardTitle>Sign Up as attendee</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SignUpForm />
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        {/* <TextSplit className="text-lg text-border">OR</TextSplit> */}
                        {/* <Providers */}
                        {/*   providers={providers} */}
                        {/*   visibleProviders={visibleProviders} */}
                        {/* /> */}
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="docktor">
            <Card className="bg-dark-tremor-background-muted text-tremor-brand-inverted">
                    <CardHeader>
                        <CardTitle>Sign up as Doctor</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <SignUpFormDocktor />
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        {/* <TextSplit className="text-lg text-border">OR</TextSplit> */}
                        {/* <Providers */}
                        {/*   providers={providers} */}
                        {/*   visibleProviders={visibleProviders} */}
                        {/* /> */}
                    </CardFooter>
                </Card>
            </TabsContent>
            </Tabs>              
        </main>
    );
}
