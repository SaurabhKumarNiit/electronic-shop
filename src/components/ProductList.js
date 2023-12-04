import React, { useState } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  opacity: 0; /* Set initial opacity to 0 */
  animation: fadeIn 2s ease-in-out forwards;
  margin-top: 20px;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;

  @media (max-width: 767px) {
    width: 400px;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SearchInput = styled.input`
  margin-top: 40px;
  width: 97%;
  padding: 10px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 92%;
    margin-right: auto;
    margin-left: auto;
  }
`;

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const items = [
    {
      imageUrl: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
      Id: 1,
      price: 75000,
      category:"Mobile",
      title: "Apple iPhone 15 (128 GB) - Blue",

      description:
        " iPhone 15 comes with Dynamic Island. 48MP Main camera with 2x Telephoto. All-day battery life. USB-C. 6.1”. ",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71bErtQPC3L._SX679_.jpg",
      Id: 2,
      price: 85000,
      title: "Apple iPhone 15 Plus (128 GB) - Pink",
      category:"Mobile",
      description:
        " iPhone 15 plus comes with Dynamic Island. 48MP Main camera with 2x Telephoto. All-day battery life. USB-C. 6.7”.",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/412CKVTe8dL._SX300_SY300_QL70_FMwebp_.jpg",
      Id: 3,
      price: 130000,
      title: "Apple iPhone 15 Pro (128 GB) - Natural Titanium",
      category:"Mobile",
      description:
        "iPhone 15 Pro Max has a strong and light aerospace-grade titanium design.The 6.1” Super Retina XDR display with ProMotion ramps up refresh rates to 120Hz when you need exceptional graphics performance",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41zb7hwFUmL._SX300_SY300_QL70_FMwebp_.jpg",
      Id: 4,
      price: 155000,
      title: "Apple iPhone 15 Pro Max (256 GB) - Blue Titanium",
      category:"Mobile",
      description:
        " iPhone 15 Pro Max has a strong and light aerospace-grade titanium design.The 6.7” Super Retina XDR display with ProMotion ramps up refresh rates to 120Hz when you need exceptional graphics performance",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg",
      Id: 5,
      price: 39000,
      title: "Apple 2022 10.9-inch iPad (Wi-Fi, 64GB) - Blue (10th Generation)",
      category:"Tablet",
      description:
        "Striking 10.9-inch Liquid Retina display with True Tone A14 Bionic chip with 6-core CPU and 4-core GPU",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg",
      Id: 6,
      price: 86000,
      title:
        "Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)",
        category:"Tablet",
      description:
        "Brilliant 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color M2 chip with 8-core CPU and 10-core GPU",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61k05QwLuML._SX679_.jpg",
      Id: 7,
      price: 74500,
      title:
        "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Purple (5th Generation)",
        category:"Tablet",
      description:
        "27.69 cm (10.9-inch) Liquid Retina display1 with True Tone, P3 wide colour and an anti-reflective coating Apple M1 chip with Neural Engine",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41Ysn+-PrUL._SX342_SY445_.jpg",
      Id: 8,
      price: 47000,
      title:
        "Apple 2021 iPad Mini with A15 Bionic chip (Wi-Fi, 64GB) - Purple (6th Generation)",
        category:"Tablet",
      description:
        "21.08 cm (8.3-inch) Liquid Retina display with True Tone and wide colour A15 Bionic chip with Neural Engine Touch ID for secure authentication",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/41At6UlfYJL._SY445_SX342_QL70_FMwebp_.jpg",
      Id: 9,
      price: 126600,
      title: "Apple 2023 MacBook Air",
      category:"Laptop",
      description:
        "Apple 2023 MacBook Air Laptop with M2 chip: 38.91 cm (15.3-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera,Touch ID. Works with iPhone/iPad; Silver",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
      Id: 10,
      price: 79000,
      title: "Apple MacBook Air Laptop M1 chip",
      category:"Laptop",
      description:
        "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/31YH5wvKCfL._SY445_SX342_QL70_FMwebp_.jpg",
      Id: 11,
      price: 140000,
      title: "Apple 2022 MacBook Pro with M2 chip",
      category:"Laptop",
      description:
        "Apple 2022 MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 512GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera; Space Grey ​​​​​​​",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61KBIj28ZUL._SX679_.jpg",
      Id: 12,
      price: 175000,
      title: "Apple 2023 iMac",
      category:"Laptop",
      description:
        "Apple 2023 iMac (24-inch, M3 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 512GB) - Silver",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61vtLhO6fDL._SY741_.jpg",
      Id: 13,
      price: 1699,
      title: "Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
      category:"Accessory",
      description:
        "The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go.",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/71L5lSfJIPS._SX679_.jpg",
      Id: 14,
      price: 10000,
      title: "New Apple AirTag 4 Pack",
      category:"Accessory",
      description:
        "Keep track of and find your items alongside friends and devices in the Find My app",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/31JRSIw+r6L._SY300_SX300_.jpg",
      Id: 15,
      price: 4900,
      title: "Apple iPhone 14 Pro Max Clear Case with MagSafe ​​​​​​​",
      category:"Accessory",
      description:
        "Crafted with a blend of optically clear polycarbonate and flexible materials, the case fits right over the buttons for easy use.",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/21tSxYXUGfL._SY445_SX342_QL70_FMwebp_.jpg",
      Id: 16,
      price: 4900,
      title: "Apple Silicone Case with MagSafe (for iPhone 13 Mini) - Blue Jay",
      category:"Accessory",
      description:
        "The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there’s a soft microfibre lining for even more protection.",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/61sRKTAfrhL._SX679_.jpg",
      Id: 17,
      price: 20000,
      title: "Apple AirPods Pro (2nd Generation) ​​​​​​​",
      category:"Accessory",
      description:
        "AirPods Pro feature up to 2x more Active Noise Cancellation, and dynamic head tracking for immersive sound ,up to 6 hours of listening time.",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/41tou6n1qYL._SY445_SX342_QL70_FMwebp_.jpg",
      Id: 18,
      price: 89500,
      title: "Apple Watch Ultra 2 [GPS + Cellular 49mm]",
      category:"Smartwatch",
      description:
        "Smartwatch with Rugged Titanium Case & Blue Ocean Band One Size. Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Bright Retina Display",
    },
  ];

  const filteredProducts = items.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || product.category === selectedCategory)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const uniqueCategories = Array.from(
    new Set(items.map((product) => product.category))
  );

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Search your products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

   {/* <h5>select category</h5> */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* <h5>filter by price</h5> */}
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
      <option value="">filter by price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <h2>Apple Products List</h2>
      {/* Render items */}
      <ProductContainer>
        {sortedProducts.map((item) => (
          <ProductCard key={item.Id}>
            <ProductImage src={item.imageUrl} alt={`Item ${item.Id}`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ₹ {item.price}</p>
          </ProductCard>
        ))}
      </ProductContainer>
    </div>
  );
};

const ProductList = ({ products, filters, sortType }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products
    ? products
        .filter(
          (product) =>
            filters.length === 0 || filters.includes(product.category)
        )
        .filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) =>
          sortType === "asc" ? a.price - b.price : b.price - a.price
        )
    : [];

  return (
    <>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <ProductContainer>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
          </ProductCard>
        ))}
      </ProductContainer> */}
    </>
  );
};

// export default ProductList;

export default ItemList;
