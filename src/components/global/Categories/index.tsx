import React from "react";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="relative">
        <img
          src="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg"
          alt="Men"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <p className="text-white text-lg font-semibold">Men</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg"
          alt="Women"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <p className="text-white text-lg font-semibold">Women</p>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg"
          alt="Kid"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <p className="text-white text-lg font-semibold">Kid</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
