import { z } from "zod";
import { createStudentSchema, createTeacherSchema } from "./validationSchemas";

export const AccountTypes = [
  {
    id: "acc1",
    type: "Teacher",
    description: "loremdjkasjdklasjhdas",
    image: "/teachersignup.png",
    link: "/signup/teacher",
  },
  {
    id: "acc2",
    type: "Student",
    description: "loremdjkasjdklasjhdas",
    image: "/studentsignup.png",
    link: "/signup/student",
  },
];

export const TeachersDepartment = [
  {
    id: "dep1",
    selectId: "CSE",
    name: "Computer Science(CSE)",
  },
  {
    id: "dep2",
    selectId: "ECE",
    name: "Electronic and Communication(ECE)",
  },
  {
    id: "dep3",
    selectId: "HSS",
    name: "Humanities and Social Science(HSS)",
  },
  {
    id: "dep4",
    selectId: "MTH",
    name: "Mathematics(MTH)",
  },
  {
    id: "dep5",
    selectId: "PHY",
    name: "Physics(PHY)",
  },
];

export const USERS:any[] = [];
