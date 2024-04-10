import AccountCard from "@/components/AccountCard";
import { Button } from "@/components/ui/button";
import { AccountTypes } from "@/lib/data";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center  p-6 max-sm:px-2 pt-20  m-auto">
      <section className="max-w-[1400px]  w-full flex items-center gap-12 max-xl:flex-col-reverse">
        <article className="flex-1 text-lg leading-relaxed max-sm:text-base text-muted-foreground ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quod
          eum nihil quam, incidunt praesentium ad dolorem placeat provident
          expedita nemo dolor dolore cupiditate harum tempore sit iure totam.
          Laboriosam.
        </article>
        <div className="flex-[2] flex flex-col items-center gap-12  ">
          <div className="flex flex-col items-center gap-20 max-sm:gap-8 bg-muted px-12 max-lg:px-8 py-20 max-sm:py-12  rounded-2xl ">
          <h2 className="text-4xl font-semibold max-sm:text-3xl text-center text-primary">Choose an Account</h2>
          <div className="flex max-sm:flex-col items-center gap-12 max-lg:gap-8">
            {AccountTypes.map((accObj) => (
              <AccountCard
                key={accObj.id}
                accountType={accObj.type}
                accountTypeDescription={accObj.description}
                accountTypeImage={accObj.image}
                accountSignupLink={accObj.link}
              />
            ))}
            
          </div>
          </div>

          <Button asChild>
            <Link href="/signin">
            Back to login
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
