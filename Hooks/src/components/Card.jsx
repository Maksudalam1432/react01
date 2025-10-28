import React from 'react';

function Card({name,city,img}) {
   
  return (
    <div className="w-[300px] bg-white rounded-2xl p-5 shadow-lg text-center flex-row  ">
      <img
        className="w-[150px] h-[150px] object-cover rounded-full mx-auto mt-4"
        src={img}
        alt="Profile"
      />
      <h1 className="text-2xl font-semibold mt-4">{name}</h1>
      <p className="text-gray-600 mt-2">
        {city}
      </p>
    </div>
  );
}

export default Card;
