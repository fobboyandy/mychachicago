import React from "react";
import ImagetoSvg from "../checker/checkerimages/ImgtoSvg";

const StockSlots = ({
  item,
  index,
  setSelectedCoordinates,
  selectedCoordinates,
  stock,
  imgObj,
}) => {
  return (
    <div className='ss-ul' id={`s-${index + 1}`}>
      {/* <div
        className='ss-li'
        onClick={() => setSelectedCoordinates([index, 1])}
        style={{
          border:
            selectedCoordinates[0] === index &&
            selectedCoordinates[1] === 1 &&
            "6px solid black",
        }}
      >
        {item[1] === 0 ? 0 : item[1] || "null"}
        <ImagetoSvg
          idv={`simg-${index + 1}-1`}
          img={imgObj[stock[0][0]]?.img}
        />
      </div>
      <div
        className='ss-li'
        onClick={() => setSelectedCoordinates([index, 2])}
        style={{
          border:
            selectedCoordinates[0] === index &&
            selectedCoordinates[1] === 2 &&
            "6px solid black",
        }}
      >
        {item[2] === 0 ? 0 : item[2] || "null"}
      </div>
      <div
        className='ss-li'
        onClick={() => setSelectedCoordinates([index, 3])}
        style={{
          border:
            selectedCoordinates[0] === index &&
            selectedCoordinates[1] === 3 &&
            "6px solid black",
        }}
      >
        {item[3] === 0 ? 0 : item[3] || "null"}
      </div>
      <div
        className='ss-li'
        onClick={() => setSelectedCoordinates([index, 4])}
        style={{
          border:
            selectedCoordinates[0] === index &&
            selectedCoordinates[1] === 4 &&
            "6px solid black",
        }}
      >
        {item[4] === 0 ? 0 : item[4] || "null"}
      </div>
      <div
        className='ss-li'
        onClick={() => setSelectedCoordinates([index, 5])}
        style={{
          border:
            selectedCoordinates[0] === index &&
            selectedCoordinates[1] === 5 &&
            "6px solid black",
        }}
      >
        {item[5] === 0 ? 0 : item[5] || "null"}
      </div>
      <div
        className='ss-li'
        onClick={() => setSelectedCoordinates([index, 6])}
        style={{
          border:
            selectedCoordinates[0] === index &&
            selectedCoordinates[1] === 6 &&
            "6px solid black",
        }}
      >
        {item[6] === 0 ? 0 : item[6] || "null"}
      </div>

      <div
        className='ss-li'
        onClick={() => setSelectedCoordinates([index, 7])}
        style={{
          border:
            selectedCoordinates[0] === index &&
            selectedCoordinates[1] === 7 &&
            "6px solid black",
          marginRight: 0, //last index, no margin
        }}
      >
        {item[7] === 0 ? 0 : item[7] || "null"}
      </div> */}

      {Array(7)
        .fill(0)
        .map((o, i) => (
          <div
            className='ss-li'
            onClick={() => setSelectedCoordinates([index, i + 1])}
            style={{
              outline:
                selectedCoordinates[0] === index &&
                selectedCoordinates[1] === i + 1 &&
                "5px solid black",
              marginRight: i + 1 === 7 && 0, //last index, no margin
            }}
          >
            {item[i + 1] === 0 ? 0 : item[i + 1] || "null"}
            {!(
              stock[i][0] === "Snack" ||
              stock[i][0] === "Snack Large" ||
              stock[i][0] === "Snack Small"
            ) && (
              <div
                className='ss-img'
                onClick={() => console.log(stock[i]?.[0] !== "Snack")}
              >
                <ImagetoSvg
                  idv={`simg-${index}-${i}`}
                  image={imgObj[stock[i]?.[0]]?.img}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default StockSlots;
