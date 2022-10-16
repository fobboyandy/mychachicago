import React from "react";
import "./index.scss";

const Boba = ({ drink }) => {
  return (
    <div className='drink-cups'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill-rule='evenodd'
        stroke-linejoin='round'
        stroke-miterlimit='2'
        clip-rule='evenodd'
        viewBox='0 0 32 32'
      >
        <path d='M7.055 10H6a1 1 0 0 0 0 2h1.105l1.703 15.331A3 3 0 0 0 11.79 30h8.42a3 3 0 0 0 2.982-2.669L24.895 12H26a1 1 0 0 0 0-2h-1.055C24.447 5.503 20.629 2 16 2c-4.629 0-8.447 3.503-8.945 8Zm15.239 7.298c-2.913.533-4.755-.136-6.596-.72-1.655-.524-3.31-.951-6.065.068l1.163 10.464a1 1 0 0 0 .994.89h8.42a1 1 0 0 0 .994-.89l1.09-9.812ZM14 24.269a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM18 23a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3.527-3.795L22.883 12H9.117l.289 2.603c3.074-1.036 4.985-.537 6.896.069 1.695.537 3.39 1.192 6.225.533ZM22.929 10A7.005 7.005 0 0 0 16 4a7.005 7.005 0 0 0-6.929 6h13.858Z' />
      </svg>
      <div className='qty'>{drink.smallqty + drink.largeqty}</div>
    </div>
  );
};

export default Boba;
