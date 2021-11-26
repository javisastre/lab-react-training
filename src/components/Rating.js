const Rating = ({ children }) => {
  const starGenerator = (stars) =>
    ''.padStart(5 - Math.round(stars), '☆').padStart(5, '★');

  return <div>{starGenerator(children)}</div>;
};

export default Rating;
