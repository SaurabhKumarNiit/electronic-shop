import React from 'react';
import styled from 'styled-components';

const SortingContainer = styled.div`
  margin-bottom: 20px;
`;

const Sorting = ({ sortType, onSortChange }) => {
  const handleSortChange = selectedSort => {
    onSortChange(selectedSort);
  };

  return (
    <SortingContainer>
        <h3>Filter By Price</h3>
      <label>
        <input type="radio" name="sort" value="asc" checked={sortType === 'asc'} onChange={() => handleSortChange('asc')} /> Low to High
      </label>
      <label>
        <input type="radio" name="sort" value="desc" checked={sortType === 'desc'} onChange={() => handleSortChange('desc')} />High To Low
      </label>
    </SortingContainer>
  );
};

export default Sorting;
