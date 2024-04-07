import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";

export default function TheaterCard(){

  return (
    <Link href="leacturetheater/dda" className="hover:-translate-y-2 transition-all duration-300 hover:shadow-lg max-sm:w-full">
    <Card className="overflow-hidden ">
      <CardContent className="p-0">
        <Image src="/theater.jpg" width={300} height={300} alt="theater" className="max-sm:w-full" />
      </CardContent>
      <CardFooter className="flex flex-col gap-1 items-start p-2">
      <p className="text-lg font-medium">Theater name</p>
      <p className="text-base text-muted-foreground">Theater location</p>
      </CardFooter>
    </Card>
    </Link>
  )
}