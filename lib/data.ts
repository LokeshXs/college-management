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
      name: "Dr. Manish Garg",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    
  },
  {
      id: 2,
      name: "Dr. Vaibhav Kumar Gupta",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
      id: 3,
      name: "Dr. Priyanka Gupta",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
      id: 4,
      name: "Dr. Harsh Chandrakant Trivedi",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];


export const LT_INFO=[
  {
    id:'LT1',
    name:"LT1",
    location:"Main Academic building"
  },
  {
    id:'LT2',
    name:"LT2",
    location:"Main Academic building"
  },
  {
    id:'LT3',
    name:"LT3",
    location:"Main Academic building"
  },
  {
    id:'LT4',
    name:"LT4",
    location:"Main Academic building"
  },
  {
    id:'LT5',
    name:"LT5",
    location:"Main Academic building"
  },
  {
    id:'LT6',
    name:"LT6",
    location:"Main Academic building"
  },
  {
    id:'LT7',
    name:"LT7",
    location:"Main Academic building"
  },
  {
    id:'LT8',
    name:"LT8",
    location:"Main Academic building"
  },
  {
    id:'LT9',
    name:"LT9",
    location:"Main Academic building"
  },
]

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


