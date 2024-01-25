import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about",
  },
  
  {
    id: 391,
    title: "Pricing",
    newTab: false,
    path: "/pricing",
  },

  {
    id: 3,
    title: "Clients",
    newTab: false,
    path: "/docs",
  },

  {
    id: 6,
    title: "Free Ai Tools",
    newTab: false,
    path: "/ai-examples",
    submenu: [
      {
        id: 66,
        title: "Legal Document Generator",
        newTab: false,
        path: "/ai-examples/content-writing-tool",
      },
      {
        id: 67,
        title: "Business Name Generator",
        newTab: false,
        path: "/ai-examples/business-name-generator",
      },
      {
        id: 69,
        title: "Product Name Generator",
        newTab: false,
        path: "/ai-examples/product-name-generator",
      },
      {
        id: 70,
        title: "Spreadsheet Generator",
        newTab: false,
        path: "/ai-examples/spreadsheet-generator",
      },
      {
        id: 71,
        title: "Interview Question Generator",
        newTab: false,
        path: "/ai-examples/interview-question-generator",
      },
    ],
  },
];
export default menuData;
