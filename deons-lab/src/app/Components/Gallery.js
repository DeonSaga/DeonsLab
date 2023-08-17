"use client";
import React, { useState } from "react";

const Gallery = ({ media }) => {
  console.log(media);
  const [images, setimages] = useState(media ? media : []);
  return (
    <div className="gridContainer">
      {media.map((entry, index) => (
        <Item href={entry} index={index} />
      ))}
    </div>
  );
};

export default Gallery;

const Item = ({ href, index }) => {
  console.log(href);
  return (
    <div className="gridItem">
      <img src={href.src} />
    </div>
  );
};
