import React, { useState } from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  opacity: 0; /* Set initial opacity to 0 */
  animation: fadeIn 2.0s ease-in-out forwards;
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
  padding: 10px;
  width: 200px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SearchInput = styled.input`
  width: 97%;
  padding: 10px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 92%;
    margin-right: auto;
    margin-left: auto;
  }
`;

const ProductList = ({ products, filters, sortType }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products
    ? products
        .filter(product => (filters.length === 0 || filters.includes(product.category)))
        .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => (sortType === 'asc' ? a.price - b.price : b.price - a.price))
    : [];

  return (
    <>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProductContainer>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
          </ProductCard>
        ))}
      </ProductContainer>
    </>
  );
};

export default ProductList;
