const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    category: "Toys",
    price: 364.97,
    tags: ["New Arrival", "Trending"],
    brand: "BrandC",
    meta: {
      created_at: "2023-03-12",
      updated_At: "2023-01-06",
      barcode: "mOAHZl5ZXGsE",
      qrcode: "UByoVt43WYd4",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    category: "Home Appliances",
    price: 557.51,
    tags: ["Sale", "Trending"],
    brand: "BrandE",
    meta: {
      created_at: "2020-05-11",
      updated_At: "2022-03-25",
      barcode: "MXXo4smHYrHO",
      qrcode: "HzALt6XtU90x",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    category: "Clothing",
    price: 10.97,
    tags: ["New Arrival"],
    brand: "BrandA",
    meta: {
      created_at: "2024-09-26",
      updated_At: "2024-11-20",
      barcode: "jddMwYAtkUYc",
      qrcode: "ZzhPJjriEj1F",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for Product 4",
    category: "Home Appliances",
    price: 10.04,
    tags: ["Popular", "Limited Edition"],
    brand: "BrandB",
    meta: {
      created_at: "2023-09-07",
      updated_At: "2020-12-20",
      barcode: "aXyiX2gXVGFm",
      qrcode: "gZExgiRuY8gV",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description for Product 5",
    category: "Sports",
    price: 100.24,
    tags: ["Limited Edition"],
    brand: "BrandD",
    meta: {
      created_at: "2021-10-03",
      updated_At: "2022-09-01",
      barcode: "1YaouW6I87eG",
      qrcode: "yMBV4b9vQf7n",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description for Product 6",
    category: "Home Appliances",
    price: 415.05,
    tags: ["Trending", "Popular", "Discounted"],
    brand: "BrandA",
    meta: {
      created_at: "2023-09-02",
      updated_At: "2023-07-26",
      barcode: "1Huxj9Zmk6FB",
      qrcode: "9pvvaW6Ydw15",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description for Product 7",
    category: "Home Appliances",
    price: 14.42,
    tags: ["Limited Edition", "New Arrival"],
    brand: "BrandC",
    meta: {
      created_at: "2021-06-09",
      updated_At: "2021-08-23",
      barcode: "qlVyzfwhkH8R",
      qrcode: "sRpCwVKRhJsv",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description for Product 8",
    category: "Toys",
    price: 250.56,
    tags: ["Popular"],
    brand: "BrandB",
    meta: {
      created_at: "2022-06-10",
      updated_At: "2024-05-17",
      barcode: "tX4bMGc1BfpP",
      qrcode: "mOsl5jhqNkNb",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 9,
    name: "Product 9",
    description: "Description for Product 9",
    category: "Home Appliances",
    price: 381.12,
    tags: ["Trending"],
    brand: "BrandE",
    meta: {
      created_at: "2023-12-25",
      updated_At: "2024-07-16",
      barcode: "svHR5F6Qw20k",
      qrcode: "tONyzAAjnK3v",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 10,
    name: "Product 10",
    description: "Description for Product 10",
    category: "Home Appliances",
    price: 902.58,
    tags: ["Trending"],
    brand: "BrandC",
    meta: {
      created_at: "2021-02-05",
      updated_At: "2023-06-04",
      barcode: "lTMw9bUZuPZG",
      qrcode: "aiV33dvTPoBB",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 11,
    name: "Product 11",
    description: "Description for Product 11",
    category: "Electronics",
    price: 624.5,
    tags: ["Sale", "Trending"],
    brand: "BrandA",
    meta: {
      created_at: "2021-09-12",
      updated_At: "2020-04-26",
      barcode: "xktrcnaKDISe",
      qrcode: "NYcIDq5BUP8s",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 12,
    name: "Product 12",
    description: "Description for Product 12",
    category: "Sports",
    price: 663.74,
    tags: ["Popular"],
    brand: "BrandE",
    meta: {
      created_at: "2023-09-12",
      updated_At: "2020-06-19",
      barcode: "8fGJNFYj345B",
      qrcode: "RS9pxTEHE692",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 13,
    name: "Product 13",
    description: "Description for Product 13",
    category: "Clothing",
    price: 357.65,
    tags: ["Discounted"],
    brand: "BrandB",
    meta: {
      created_at: "2023-06-30",
      updated_At: "2022-08-02",
      barcode: "8ZenTYfZIVp1",
      qrcode: "OSF7FgYGjxrY",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 14,
    name: "Product 14",
    description: "Description for Product 14",
    category: "Toys",
    price: 872.35,
    tags: ["Sale", "Popular", "Trending"],
    brand: "BrandD",
    meta: {
      created_at: "2022-03-06",
      updated_At: "2024-07-03",
      barcode: "M7sgO3tr5Ifw",
      qrcode: "Zr3P1Kxfvfdp",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 15,
    name: "Product 15",
    description: "Description for Product 15",
    category: "Clothing",
    price: 89.54,
    tags: ["Sale", "Trending"],
    brand: "BrandD",
    meta: {
      created_at: "2023-12-21",
      updated_At: "2020-03-29",
      barcode: "TRPaSxYw8FrZ",
      qrcode: "4IFRO1e6eynL",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 16,
    name: "Product 16",
    description: "Description for Product 16",
    category: "Home Appliances",
    price: 338.74,
    tags: ["Popular", "Trending", "Discounted"],
    brand: "BrandB",
    meta: {
      created_at: "2024-09-22",
      updated_At: "2020-10-31",
      barcode: "E4nwux4GcOR0",
      qrcode: "g8rgMK8f5eqT",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 17,
    name: "Product 17",
    description: "Description for Product 17",
    category: "Toys",
    price: 668.53,
    tags: ["Popular", "Sale"],
    brand: "BrandE",
    meta: {
      created_at: "2020-11-01",
      updated_At: "2022-07-11",
      barcode: "piGbH9Kvn0Ih",
      qrcode: "YmegmKOXkTry",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 18,
    name: "Product 18",
    description: "Description for Product 18",
    category: "Electronics",
    price: 99.35,
    tags: ["Sale", "Trending"],
    brand: "BrandD",
    meta: {
      created_at: "2023-10-11",
      updated_At: "2023-04-17",
      barcode: "PN3HIr9jNTS4",
      qrcode: "Ytlq7ppE9mln",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 19,
    name: "Product 19",
    description: "Description for Product 19",
    category: "Books",
    price: 509.91,
    tags: ["New Arrival", "Trending"],
    brand: "BrandC",
    meta: {
      created_at: "2023-07-29",
      updated_At: "2022-12-30",
      barcode: "R0vRk9SwViSe",
      qrcode: "A2qOwvjnPCIC",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 20,
    name: "Product 20",
    description: "Description for Product 20",
    category: "Electronics",
    price: 250.92,
    tags: ["Trending", "New Arrival"],
    brand: "BrandE",
    meta: {
      created_at: "2021-06-15",
      updated_At: "2021-03-31",
      barcode: "DnSuwFqtgPAV",
      qrcode: "9MHUQ3rYWXim",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 21,
    name: "Product 21",
    description: "Description for Product 21",
    category: "Electronics",
    price: 309.8,
    tags: ["Trending", "New Arrival"],
    brand: "BrandE",
    meta: {
      created_at: "2020-05-15",
      updated_At: "2021-07-01",
      barcode: "XdltScbIiodv",
      qrcode: "OXKJOCEMPgLy",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 22,
    name: "Product 22",
    description: "Description for Product 22",
    category: "Sports",
    price: 678.83,
    tags: ["Sale", "Trending"],
    brand: "BrandD",
    meta: {
      created_at: "2021-09-08",
      updated_At: "2020-09-28",
      barcode: "zvTGHcyE4Ihf",
      qrcode: "2jWDeT2rqjs2",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 23,
    name: "Product 23",
    description: "Description for Product 23",
    category: "Home Appliances",
    price: 123.22,
    tags: ["Sale", "New Arrival"],
    brand: "BrandC",
    meta: {
      created_at: "2024-08-09",
      updated_At: "2021-12-30",
      barcode: "DIsJLc9FYPKY",
      qrcode: "uMh8Ad2y1In6",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 24,
    name: "Product 24",
    description: "Description for Product 24",
    category: "Electronics",
    price: 135.25,
    tags: ["Sale", "Trending", "Discounted"],
    brand: "BrandD",
    meta: {
      created_at: "2023-04-20",
      updated_At: "2021-06-18",
      barcode: "7QbzrTRZA7xV",
      qrcode: "Nobf3gFBzyfM",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 25,
    name: "Product 25",
    description: "Description for Product 25",
    category: "Books",
    price: 634.6,
    tags: ["Sale"],
    brand: "BrandC",
    meta: {
      created_at: "2022-10-04",
      updated_At: "2023-09-24",
      barcode: "DRzn62ysVG2Q",
      qrcode: "r5rdRf22Bv1H",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 26,
    name: "Product 26",
    description: "Description for Product 26",
    category: "Books",
    price: 925.99,
    tags: ["Discounted", "New Arrival", "Trending"],
    brand: "BrandA",
    meta: {
      created_at: "2022-09-30",
      updated_At: "2021-08-26",
      barcode: "1wueu7HB7L2B",
      qrcode: "nSdVJwY6BxnG",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 27,
    name: "Product 27",
    description: "Description for Product 27",
    category: "Books",
    price: 371.47,
    tags: ["Discounted", "Limited Edition", "Popular"],
    brand: "BrandD",
    meta: {
      created_at: "2020-05-04",
      updated_At: "2024-10-20",
      barcode: "BICV6uSP4HCF",
      qrcode: "nycSyUICP6HA",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 28,
    name: "Product 28",
    description: "Description for Product 28",
    category: "Sports",
    price: 625.47,
    tags: ["Trending", "Discounted"],
    brand: "BrandA",
    meta: {
      created_at: "2021-04-30",
      updated_At: "2020-04-10",
      barcode: "wgfl9QFsawFp",
      qrcode: "L5Rw0Vnv7hkT",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 29,
    name: "Product 29",
    description: "Description for Product 29",
    category: "Electronics",
    price: 83.12,
    tags: ["Popular", "Sale", "Discounted"],
    brand: "BrandD",
    meta: {
      created_at: "2020-10-26",
      updated_At: "2022-11-26",
      barcode: "bcX3OfQhW1jk",
      qrcode: "asvtV2qaCwQV",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 30,
    name: "Product 30",
    description: "Description for Product 30",
    category: "Books",
    price: 713.07,
    tags: ["Popular", "New Arrival"],
    brand: "BrandE",
    meta: {
      created_at: "2020-07-06",
      updated_At: "2020-12-02",
      barcode: "JhCzh8bxsSsu",
      qrcode: "5dKRm6RXkn1x",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 31,
    name: "Product 31",
    description: "Description for Product 31",
    category: "Toys",
    price: 679.23,
    tags: ["Discounted"],
    brand: "BrandD",
    meta: {
      created_at: "2022-01-15",
      updated_At: "2021-08-12",
      barcode: "UQ602FCRj3oY",
      qrcode: "mWLzstErbX2p",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 32,
    name: "Product 32",
    description: "Description for Product 32",
    category: "Books",
    price: 468.5,
    tags: ["Limited Edition"],
    brand: "BrandA",
    meta: {
      created_at: "2024-08-31",
      updated_At: "2022-12-21",
      barcode: "hjhUST5su2cE",
      qrcode: "yDOGhzWtwiwX",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 33,
    name: "Product 33",
    description: "Description for Product 33",
    category: "Home Appliances",
    price: 468.51,
    tags: ["Discounted", "Sale"],
    brand: "BrandE",
    meta: {
      created_at: "2021-04-12",
      updated_At: "2020-03-24",
      barcode: "LnN8XIR3AU9y",
      qrcode: "N7jisDKc1iEv",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 34,
    name: "Product 34",
    description: "Description for Product 34",
    category: "Clothing",
    price: 898.03,
    tags: ["Trending", "Discounted"],
    brand: "BrandC",
    meta: {
      created_at: "2023-06-23",
      updated_At: "2023-09-20",
      barcode: "KgypSSmQECDh",
      qrcode: "7C2iRrT8yKgH",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 35,
    name: "Product 35",
    description: "Description for Product 35",
    category: "Sports",
    price: 221.3,
    tags: ["Limited Edition", "New Arrival", "Sale"],
    brand: "BrandA",
    meta: {
      created_at: "2020-04-17",
      updated_At: "2022-04-21",
      barcode: "hkPBT60KZOVT",
      qrcode: "aUKwZV8q2rMP",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 36,
    name: "Product 36",
    description: "Description for Product 36",
    category: "Home Appliances",
    price: 797.15,
    tags: ["Trending"],
    brand: "BrandC",
    meta: {
      created_at: "2021-10-12",
      updated_At: "2020-07-28",
      barcode: "rlR04LovnZZq",
      qrcode: "lwKJHJfRz3Ti",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 37,
    name: "Product 37",
    description: "Description for Product 37",
    category: "Electronics",
    price: 953.12,
    tags: ["New Arrival"],
    brand: "BrandC",
    meta: {
      created_at: "2023-01-15",
      updated_At: "2024-11-16",
      barcode: "FGHiq6cf4TR3",
      qrcode: "s3vzVHj4n3IB",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 38,
    name: "Product 38",
    description: "Description for Product 38",
    category: "Toys",
    price: 936.91,
    tags: ["New Arrival", "Sale", "Trending"],
    brand: "BrandC",
    meta: {
      created_at: "2023-06-21",
      updated_At: "2024-08-21",
      barcode: "MSbipBhiK32w",
      qrcode: "ypyT20ua45WD",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 39,
    name: "Product 39",
    description: "Description for Product 39",
    category: "Electronics",
    price: 755.92,
    tags: ["Trending", "Limited Edition"],
    brand: "BrandB",
    meta: {
      created_at: "2021-02-02",
      updated_At: "2023-07-28",
      barcode: "ZSLGt5Rw6B2Y",
      qrcode: "BLigI7YA878P",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 40,
    name: "Product 40",
    description: "Description for Product 40",
    category: "Electronics",
    price: 302.18,
    tags: ["New Arrival"],
    brand: "BrandA",
    meta: {
      created_at: "2022-03-31",
      updated_At: "2021-08-31",
      barcode: "bw3YH6EuKmiO",
      qrcode: "gENereewkPOG",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 41,
    name: "Product 41",
    description: "Description for Product 41",
    category: "Sports",
    price: 261.97,
    tags: ["Popular", "Trending"],
    brand: "BrandA",
    meta: {
      created_at: "2023-01-16",
      updated_At: "2020-08-24",
      barcode: "orkz5DqKWjwF",
      qrcode: "WWYDRzG3mcm4",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 42,
    name: "Product 42",
    description: "Description for Product 42",
    category: "Home Appliances",
    price: 599.23,
    tags: ["Discounted"],
    brand: "BrandC",
    meta: {
      created_at: "2023-04-21",
      updated_At: "2023-10-25",
      barcode: "KO6reSs2izhw",
      qrcode: "iur7uOUPLXmK",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 43,
    name: "Product 43",
    description: "Description for Product 43",
    category: "Home Appliances",
    price: 695.23,
    tags: ["Popular", "Limited Edition", "Trending"],
    brand: "BrandD",
    meta: {
      created_at: "2024-10-15",
      updated_At: "2024-03-07",
      barcode: "Em4FibchsUkO",
      qrcode: "OnWBnVJqwu9u",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: false,
      },
      {
        size: "XL",
        available: false,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 44,
    name: "Product 44",
    description: "Description for Product 44",
    category: "Sports",
    price: 829.71,
    tags: ["New Arrival"],
    brand: "BrandD",
    meta: {
      created_at: "2024-03-25",
      updated_At: "2020-09-02",
      barcode: "EORYfuFuJ1Rk",
      qrcode: "Zur2IJZVupYZ",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 45,
    name: "Product 45",
    description: "Description for Product 45",
    category: "Electronics",
    price: 73.8,
    tags: ["Trending"],
    brand: "BrandA",
    meta: {
      created_at: "2023-06-12",
      updated_At: "2022-08-31",
      barcode: "UuuywwzzLpyN",
      qrcode: "Fy9oFRcl2G7m",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 46,
    name: "Product 46",
    description: "Description for Product 46",
    category: "Toys",
    price: 234.48,
    tags: ["Popular", "Discounted", "Trending"],
    brand: "BrandA",
    meta: {
      created_at: "2021-04-30",
      updated_At: "2023-02-14",
      barcode: "omerNKkosPLQ",
      qrcode: "ncSmEEW4B8Qt",
    },
    images: ["https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 47,
    name: "Product 47",
    description: "Description for Product 47",
    category: "Home Appliances",
    price: 735.2,
    tags: ["New Arrival", "Discounted", "Trending"],
    brand: "BrandD",
    meta: {
      created_at: "2021-07-25",
      updated_At: "2023-08-15",
      barcode: "abByeh2M1wpu",
      qrcode: "e7GXrYm3Har4",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 48,
    name: "Product 48",
    description: "Description for Product 48",
    category: "Electronics",
    price: 94.43,
    tags: ["Sale"],
    brand: "BrandB",
    meta: {
      created_at: "2024-10-01",
      updated_At: "2024-06-28",
      barcode: "JVR66kYgMlmV",
      qrcode: "pNMDqCBEh5hz",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: false,
      },
    ],
  },
  {
    id: 49,
    name: "Product 49",
    description: "Description for Product 49",
    category: "Books",
    price: 294.13,
    tags: ["Limited Edition", "Trending"],
    brand: "BrandC",
    meta: {
      created_at: "2021-07-19",
      updated_At: "2022-10-09",
      barcode: "gOTp0DNn19nR",
      qrcode: "RZ52RU2mSD4O",
    },
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    sizes: [
      {
        size: "S",
        available: true,
      },
      {
        size: "M",
        available: false,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
  {
    id: 50,
    name: "Product 50",
    description: "Description for Product 50",
    category: "Sports",
    price: 334.33,
    tags: ["Sale", "Popular"],
    brand: "BrandC",
    meta: {
      created_at: "2023-06-09",
      updated_At: "2024-06-26",
      barcode: "KSUdb1NTqE5q",
      qrcode: "kAqpeZma825t",
    },
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    sizes: [
      {
        size: "S",
        available: false,
      },
      {
        size: "M",
        available: true,
      },
      {
        size: "L",
        available: true,
      },
      {
        size: "XL",
        available: true,
      },
      {
        size: "XXL",
        available: true,
      },
    ],
  },
];

export default products;
