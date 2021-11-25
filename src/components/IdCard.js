const IdCard = ({ firstName, lastName, picture, gender, height, birth }) => {
  console.log(birth);
  return (
    <div>
      <div>
        <img src={picture} alt="profile" />
      </div>
      <div>
        <p>
          <strong>First Name: {firstName}</strong>
        </p>
        <p>
          <strong>Last Name: {lastName}</strong>
        </p>
        <p>
          <strong>Gender: {gender}</strong>
        </p>
        <p>
          <strong>Height: {height}</strong>
        </p>
        <p>
          <strong>Birth: {birth.getDay()} {birth.getDate()}</strong>
        </p>
      </div>
    </div>
  );
};

export default IdCard;
