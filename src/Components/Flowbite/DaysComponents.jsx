import React from "react";

import { MdVerified } from "react-icons/md";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpeg";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ el, i }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <img
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            // width={500}
            // height={300}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <img
            src={images.creatorbackground2}
            alt="profile"
            // width={200}
            // height={200}
            className={Style.daysComponent_box_img_1}
            objectFit="covers"
          />
          <img
            src={images.creatorbackground2}
            alt="profile"
            // width={200}
            // height={200}
            className={Style.daysComponent_box_img_2}
            objectFit="covers"
          />
          <img
            src={images.creatorbackground2}
            alt="profile"
            // width={200}
            // height={200}
            className={Style.daysComponent_box_img_3}
            objectFit="covers"
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <img
                src={el.user}
                alt="profile"
                // width={30}
                // height={30}
                objectFit="covers"
                className={Style.daysComponent_box_title_info_profile_img}
              />
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
