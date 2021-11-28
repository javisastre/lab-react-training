import { useState } from 'react';

const Carousel = ({ imgs }) => {
  const [imgNum, setImgNum] = useState(0);

  const prev = () => {
    if (imgNum > 0) setImgNum(imgNum - 1);
  };

  const next = () => {
    if (imgNum < imgs.length - 1) setImgNum(imgNum + 1);
  };

  return (
    <div className="carousel">
      <div className="clickable-picture">
        <img alt="" src={imgs[imgNum]} />
      </div>
      <div className="like">
        <button id="prev" onClick={() => prev()}>
          Left
        </button>
        <button id="next" onClick={() => next()}>
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
