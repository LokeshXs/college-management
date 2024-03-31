
import DashboardLink from "@/components/DashboardLink";
import { Button } from "@/components/ui/button";
import MobileDashboard from "@/components/MobileDashboard";

interface Props {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  

  return (
    <>
      <div className="w-full py-4 bg-muted flex justify-end px-6">
        <div className="flex gap-6 items-center">
         
         
        </div>
      </div>
      <nav className="fixed top-0 left-0 h-screen p-4 w-60 bg-muted max-md:hidden">
        <div className="h-32 bg-primary rounded-sm flex items-center justify-center">
          <p className="text-6xl font-bold text-muted">SDS </p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <DashboardLink href="/dashboard">Time Table</DashboardLink>
          <DashboardLink href="/dashboard/users">Chat</DashboardLink>
          <DashboardLink href="/dashboard/createuser">
          LT Availability
          </DashboardLink>
         
        </div>
      </nav>

      <MobileDashboard  />

      <div className="py-4 pl-[288px] max-md:pl-4 pr-4 max-md:pb-20">
        {children}
      </div>
    </>
  );
}
