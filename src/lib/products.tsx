export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "HP ProBook 450 G9",
    price: 899.99,
    description: "Powerful business laptop with Intel Core i7, 16GB RAM, and 512GB SSD.",
    image: "/images/hp-probook.jpg",
  },
  {
    id: "2",
    name: "Dell Inspiron 15",
    price: 749.99,
    description: "High-performance laptop with Intel Core i5, 8GB RAM, and long battery life.",
    image: "/images/dell-inspiron.jpg",
  },
  {
    id: "3",
    name: "iPhone 14 Pro",
    price: 1099.99,
    description: "Apple’s latest smartphone with A16 Bionic chip and Dynamic Island design.",
    image: "/images/iphone14pro.jpg",
  },
  {
    id: "4",
    name: "Samsung Galaxy S23",
    price: 999.99,
    description: "Flagship Android phone with stunning display and pro-grade camera.",
    image: "/images/galaxy-s23.jpg",
  },
  {
    id: "5",
    name: "Sony WH-1000XM5 Headphones",
    price: 399.99,
    description: "Industry-leading noise cancellation and crystal-clear sound quality.",
    image: "/images/sony-wh1000xm5.jpg",
  },
  {
    id: "6",
    name: "Apple Watch Series 9",
    price: 499.99,
    description: "Smartwatch with advanced health tracking and sleek aluminum design.",
    image: "/images/apple-watch.jpg",
  },
];
