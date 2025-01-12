import ResponsiveNavbar from "@/components/global/navbar";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};
const products = [
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with 1600 DPI sensitivity.",
    price: 19.99,
    brand: "LogiTech",
    qrcode: "QR12345",
    barcode: "BC123456789",
    stock: 120,
    discount: 10,
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with blue switches.",
    price: 69.99,
    brand: "KeyChron",
    qrcode: "QR12346",
    barcode: "BC123456788",
    stock: 80,
    discount: 15,
  },
  {
    name: "USB-C Hub",
    description: "5-in-1 USB-C hub with HDMI and power delivery.",
    price: 24.99,
    brand: "Anker",
    qrcode: "QR12347",
    barcode: "BC123456787",
    stock: 150,
    discount: 5,
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable stand for tablets and smartphones.",
    price: 14.99,
    brand: "Ugreen",
    qrcode: "QR12348",
    barcode: "BC123456786",
    stock: 200,
    discount: 20,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable speaker with 10-hour battery life.",
    price: 39.99,
    brand: "JBL",
    qrcode: "QR12349",
    barcode: "BC123456785",
    stock: 100,
    discount: 25,
  },
  {
    name: "Noise-Canceling Headphones",
    description: "Over-ear headphones with active noise canceling.",
    price: 99.99,
    brand: "Sony",
    qrcode: "QR12350",
    barcode: "BC123456784",
    stock: 50,
    discount: 10,
  },
  {
    name: "Portable Charger",
    description: "10,000mAh portable charger with dual USB output.",
    price: 29.99,
    brand: "Xiaomi",
    qrcode: "QR12351",
    barcode: "BC123456783",
    stock: 300,
    discount: 10,
  },
  {
    name: "Smartwatch",
    description: "Fitness tracker with heart rate monitoring.",
    price: 199.99,
    brand: "Apple",
    qrcode: "QR12352",
    barcode: "BC123456782",
    stock: 30,
    discount: 5,
  },
  {
    name: "Gaming Monitor",
    description: "27-inch 144Hz monitor with 1ms response time.",
    price: 249.99,
    brand: "Acer",
    qrcode: "QR12353",
    barcode: "BC123456781",
    stock: 40,
    discount: 20,
  },
  {
    name: "External SSD",
    description: "1TB USB 3.2 external solid-state drive.",
    price: 109.99,
    brand: "Samsung",
    qrcode: "QR12354",
    barcode: "BC123456780",
    stock: 70,
    discount: 15,
  },
  {
    name: "Action Camera",
    description: "4K action camera with waterproof case.",
    price: 129.99,
    brand: "GoPro",
    qrcode: "QR12355",
    barcode: "BC123456779",
    stock: 60,
    discount: 10,
  },
  {
    name: "Laptop Backpack",
    description: "Water-resistant backpack with 15-inch laptop compartment.",
    price: 49.99,
    brand: "Timbuk2",
    qrcode: "QR12356",
    barcode: "BC123456778",
    stock: 150,
    discount: 15,
  },
  {
    name: "Streaming Webcam",
    description: "1080p HD webcam with built-in microphone.",
    price: 39.99,
    brand: "Razer",
    qrcode: "QR12357",
    barcode: "BC123456777",
    stock: 100,
    discount: 5,
  },
  {
    name: "Electric Kettle",
    description: "1.7L electric kettle with auto shut-off feature.",
    price: 29.99,
    brand: "Philips",
    qrcode: "QR12358",
    barcode: "BC123456776",
    stock: 80,
    discount: 10,
  },
  {
    name: "Wireless Charger",
    description: "Fast wireless charging pad for smartphones.",
    price: 19.99,
    brand: "Belkin",
    qrcode: "QR12359",
    barcode: "BC123456775",
    stock: 180,
    discount: 10,
  },
  {
    name: "Electric Toothbrush",
    description: "Rechargeable toothbrush with multiple modes.",
    price: 49.99,
    brand: "Oral-B",
    qrcode: "QR12360",
    barcode: "BC123456774",
    stock: 90,
    discount: 15,
  },
  {
    name: "Smart Plug",
    description: "WiFi-enabled plug with voice control.",
    price: 14.99,
    brand: "TP-Link",
    qrcode: "QR12361",
    barcode: "BC123456773",
    stock: 250,
    discount: 5,
  },
  {
    name: "Gaming Chair",
    description: "Ergonomic gaming chair with adjustable height.",
    price: 199.99,
    brand: "Secretlab",
    qrcode: "QR12362",
    barcode: "BC123456772",
    stock: 35,
    discount: 20,
  },
  {
    name: "Robot Vacuum",
    description: "Smart robot vacuum cleaner with app control.",
    price: 299.99,
    brand: "iRobot",
    qrcode: "QR12363",
    barcode: "BC123456771",
    stock: 25,
    discount: 10,
  },
  {
    name: "LED Desk Lamp",
    description: "Dimmable LED desk lamp with USB charging port.",
    price: 24.99,
    brand: "BenQ",
    qrcode: "QR12364",
    barcode: "BC123456770",
    stock: 200,
    discount: 15,
  },
];
const ProductPage = ({ params }: Props) => {
  const { category } = params;

  return (
    <div className="flex flex-col min-h-screen w-full">
      <ResponsiveNavbar />
      <div className="gap-3 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => {
          return <div>{product.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
