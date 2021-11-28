import { useState } from 'react';

const LikeButton = () => {
  const [content, setContent] = useState([0, 'Likes']);

  const getColor = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    return colors[content[0] % colors.length];
  };

  const getContent = () => {
    if (content[0] === 0) {
      setContent([1, 'Like']);
    } else {
      setContent([content[0] + 1, 'Likes']);
    }
  };

  return (
    <div>
      <button
        onClick={(e) => getContent()}
        style={{ backgroundColor: getColor(), color: 'white' }}
      >
        {content[0]} {content[1]}
      </button>
    </div>
  );
};

export default LikeButton;
