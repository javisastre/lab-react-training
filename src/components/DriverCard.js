import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div>
      <div className="driver-license">
        <div className="left">
          <img src={img} alt="" className="round" />
        </div>
        <div className="right">
          <h2>
            <strong>{name}</strong>
          </h2>
          <Rating>{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DriverCard;
