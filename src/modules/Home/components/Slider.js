import React from 'react';
import './Slider.css';

const Slider = ({products}) => {
  return (
      <div className="slider-wrapper">
        {

          products.map((product) => (
              <img key={`slider_image_${product.id}`} src={product.img}
                   alt={product.name}/>
          ))
        }
      </div>
  );
};

export default Slider;
