import React from "react";

const ImagetoSvg = ({ image, idv }) => {
  return (
    <svg
      width='200'
      height='190'
      viewBox='0 0 200 190'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className='machine-img'
    >
      <rect width='200' height='190' fill={`url(#pattern44320${idv})`} />
      <defs>
        <pattern
          id={`pattern44320${idv}`}
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref={`#image0_101_39${idv}`}
            transform='scale(0.005 0.00526316)'
          />
        </pattern>
        <image
          id={`image0_101_39${idv}`}
          width='200'
          height='190'
          xlinkHref={`data:image/png;base64,${image}`}
        />
      </defs>
    </svg>
  );
};

export default ImagetoSvg;
