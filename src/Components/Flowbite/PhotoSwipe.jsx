import React, { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpeg";
import revet1 from "../../assets/revet1.jpg";
import revet2 from "../../assets/revet2.jpg";
import revet3 from "../../assets/revet3.jpg";
import hindges1 from "../../assets/hindges1.jpg";
import flushbolt from "../../assets/flushbolt.jpg";
import doorcloser from "../../assets/doorcloser.jpg";
import hightensile from "../../assets/hightensile.jpg";
import panicdevice from "../../assets/panicdevice.jpg";
import anchor2 from "../../assets/anchor2.jpg";
import anchor3 from "../../assets/anchor3.jpg";
import anchor4 from "../../assets/anchor4.jpg";
import wood from "../../assets/wood.jpg";
const PhotoSwipe = () => {
  const [currentList, setCurrentList] = useState(1); // State to track current list

  const list1 = [
    { id: 1, description: "", image: img1 },
    { id: 2, description: "", image: img2 },
    { id: 3, description: "", image: img5 },
    { id: 4, description: "", image: revet1 },
    { id: 5, description: "", image: img3 },
    { id: 6, description: "", image: anchor3 },
  ];

  const list2 = [
    { id: 1, description: "", image: img3 },
    { id: 2, description: "", image: anchor2 },
    { id: 3, description: "", image: anchor3 },
    { id: 4, description: "", image: anchor4 },
  ];

  const list3 = [
    // { id: 1, description: "Item 1", image: img3 },
    { id: 1, description: "Item 2", image: img4 },
    // { id: 3, description: "Item 3", image: img5 },
  ];

  const list4 = [
    { id: 1, description: "Item 4", image: img5 },
    // { id: 2, description: "Item 5", image: img6 },
    // { id: 3, description: "Item 5", image: img7 },
  ];

  const list5 = [
    { id: 1, description: "Item 7", image: wood },
    // { id: 2, description: "Item 8", image: img3 },
    // { id: 3, description: "Item 9", image: img1 },
    // { id: 4, description: "Item 7", image: img2 },
    // { id: 5, description: "Item 8", image: img3 },
    // { id: 6, description: "Item 9", image: img1 },
  ];

  const handleListClick = (listNumber) => {
    setCurrentList(listNumber);
  };

  const renderImages = () => {
    let images;
    switch (currentList) {
      case 1:
        images = list1;
        break;
      case 2:
        images = list2;
        break;
      case 3:
        images = list3;
        break;
      case 4:
        images = list4;
        break;
      case 5:
        images = list5;
        break;
      default:
        console.log(console.error());
    }
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {images.map((item) => (
          <div key={item.id} className=" rounded-lg border-2 text-center ">
            <img
              className=" object-contain w-full h-48"
              src={item.image}
              alt={item.description}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div class="flex items-center justify-center">
        <div class="container w-9/12 ">
          <div class="flex items-center justify-center flex-wrap whitespace-nowrap py-4">
            <button
              onClick={() => handleListClick(1)}
              type="button"
              class="blue-button"
            >
              All categories
            </button>
            <button
              type="button"
              onClick={() => handleListClick(2)}
              class="black-button"
            >
              Anchor Fasteners
            </button>
            <button
              type="button"
              onClick={() => handleListClick(3)}
              class="black-button"
            >
              Self Tapping Screw
            </button>
            <button
              onClick={() => handleListClick(4)}
              type="button"
              class="black-button"
            >
              Self Drilling Screw
            </button>
            <button
              type="button"
              onClick={() => handleListClick(5)}
              class="black-button"
            >
              Wood Screw
            </button>
          </div>
          {renderImages()}
        </div>
      </div>
    </div>
  );
};

export default PhotoSwipe;
