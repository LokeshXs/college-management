import { FilePieChart,TextSearch ,UserPlus ,ShieldPlus  } from 'lucide-react';
import DashboardLink from "./DashboardLink";

export default function MobileDashboard() {
  return (
   <nav className='fixed bottom-2 w-full flex justify-center z-10 md:hidden '>
      <div className="mt-4 flex  gap-12 max-sm:gap-8 bg-muted py-2 px-8 rounded-2xl max-w-full ">
          <DashboardLink href="/dashboard/timetable"><FilePieChart /></DashboardLink>
          <DashboardLink href="/dashboard/chat"><TextSearch /></DashboardLink>
          <DashboardLink href="/dashboard/leacturetheater">
            <UserPlus />
          </DashboardLink>
          
        </div>
   </nav>
  );
}
