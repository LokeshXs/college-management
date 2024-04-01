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


export const TEACHERS = [
  {
      id: 1,
      name: "John Smith",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    
  },
  {
      id: 2,
      name: "Emily Johnson",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
      id: 3,
      name: "Michael Williams",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
      id: 4,
      name: "Jessica Brown",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
      id: 5,
      name: "David Jones",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
      id: 6,
      name: "Sarah Miller",
      image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
      id: 7,
      name: "Christopher Wilson",
      image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
      id: 8,
      name: "Amanda Davis",
      image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
      id: 9,
      name: "James Taylor",
      image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
      id: 10,
      name: "Rachel Moore",
      image: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

export const USERS:any[] = [
  {
    username:'testteacher',
    email:'test@gmail.com',
    department:'CSE',
    password:'Password@123',
    role:'TEACHER'
  },
  {
    rollno:'teststudent',
    email:'test@gmail.com',
    password:'Password@123',
    role:"STUDENT"
  },
];
