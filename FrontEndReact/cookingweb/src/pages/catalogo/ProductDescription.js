import React from 'react';

const ProductDescription = (product) => {
  const MAX_LINES = 7;
  const lines = product.description.split('\n');  
  const remainingLines = MAX_LINES - lines.length;
  const filledLines = [...lines, ...Array(remainingLines).fill('')];  
  return (
    <p>
      {filledLines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export default ProductDescription;
