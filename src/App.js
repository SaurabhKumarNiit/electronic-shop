import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sorting from './components/Sorting';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';

const Wrapper = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortType, setSortType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);


  useEffect(() => {
    fetch('https://glad-rings-production.up.railway.app/getItems')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = selectedFilters => {
    setFilters(selectedFilters);
    filterProducts(selectedFilters, sortType);
  };

  const handleSortChange = selectedSort => {
    setSortType(selectedSort);
    filterProducts(filters, selectedSort);
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filterProducts = (selectedFilters, selectedSort) => {
    let sortedProducts = [...products];


    if (selectedFilters.length > 0) {
      sortedProducts = sortedProducts.filter(product => selectedFilters.includes(product.category));
    }

    if (selectedSort === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  

  return (
    <Wrapper>
    <Navbar />
      {/* <Filter filters={filters} onFilterChange={handleFilterChange} /> */}
      {/* <Sorting sortType={sortType} onSortChange={handleSortChange} /> */}
      <ProductList products={currentProducts} filters={filters} sortType={sortType} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Wrapper>
  );
};

export default App;
