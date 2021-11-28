const NumbersTable = ({ limit }) => {
  const buildArray = (num) => new Array(num).fill(0).map((e, i) => i + 1);

  return (
    <div className="iteration12">
      {buildArray(limit).map((element, i) => {
        return element % 2 === 0 ? (
          <div className="red" key={i}>
            {element}
          </div>
        ) : (
          <div className="white" key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
