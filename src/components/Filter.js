import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const DropdownLabel = styled.label`
  margin-right: 10px;
`;

const Filter = ({ filters, onFilterChange, onSearchChange }) => {
  const categories = ['camera', 'mobile', 'tablet', 'laptop', 'accessories','monitor','tv','earpod','smartwatch'];
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleDropdownChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category); 
  };

  return (
    <FilterContainer>
      <DropdownLabel>
        Select Category:
        <select value={selectedCategory} onChange={handleDropdownChange}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </DropdownLabel>
    </FilterContainer>
  );
};

export default Filter;
