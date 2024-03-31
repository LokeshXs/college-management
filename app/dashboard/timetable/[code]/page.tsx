import TeacherCard from "@/components/TeacherCard";
import { TEACHERS } from "@/lib/data";

export default function SubjectTeachers() {
  return (
    <main className="text-2xl">
      <div className="flex flex-wrap max-md:justify-center  items-stretch gap-12 max-lg:gap-8 w-full max-sm:flex-col   ">
        {TEACHERS.map((teacherObj) => (
          <TeacherCard
            key={teacherObj.id}
            name={teacherObj.name}
            image={teacherObj.image}
          />
        ))}
      </div>
    </main>
  );
}
