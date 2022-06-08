import React, { useState } from "react";
import style from "./ImgGallery.module.scss";
const { Current_Img, Display_Img, Current, isCurrent } = style;

type Props = {
  links: string[];
};

export default function ImgGallery({ links }: Props) {
  const [currentImg, setCurrentImg] = useState<string>(links[0]);

  const imageList = links.map((link) => {
    const currentClass =
      link === currentImg ? [Current_Img, isCurrent].join(" ") : Current_Img;
    return (
      <li
        key={link}
        onClick={() => setCurrentImg(link)}
        className={currentClass}
      >
        <img src={link} alt={link} />
      </li>
    );
  });
  return (
    <div >
      <div className={Display_Img}>
        <img src={currentImg} alt={currentImg} />
      </div>
      <ul className={Current}>{imageList}</ul>
    </div>
  );
}
