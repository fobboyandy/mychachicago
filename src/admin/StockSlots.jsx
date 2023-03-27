import React from "react";

const StockSlots = ({
  item,
  index,
  setSelectedCoordinates,
  selectedCoordinates,
}) => {
  return (
    <div className='ss-ul' id={`s-${index + 1}`}>
      <div
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
      </div>
    </div>
  );
};

export default StockSlots;
