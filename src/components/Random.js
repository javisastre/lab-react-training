const Random = ({ min, max }) => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <p>
        Random value between {min} and {max} => {getRandom(min, max)}
      </p>
    </div>
  );
};

export default Random;
