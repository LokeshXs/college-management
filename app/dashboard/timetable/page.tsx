
"use client";


import DepartmentCard from "@/components/DepartmentCard";
import { TeachersDepartment } from "@/lib/data";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";


export default function Dashboard() {

  const {id} = useContext(AuthContext);
  const router = useRouter();

if(id === ""){
  router.push("/signin")
}
  
  return (
    <main className="p-4 max-sm:pb-20">
     
      <div className="flex flex-wrap  items-stretch gap-12 max-lg:gap-8 w-full max-sm:flex-col  ">
        {TeachersDepartment.map((departmentObj) => (
          <DepartmentCard
            key={departmentObj.id}
            name={departmentObj.name}
            code={departmentObj.selectId}
          />
        ))}
      </div>
    </main>
  );
}
