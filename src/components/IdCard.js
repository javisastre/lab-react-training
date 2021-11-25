const IdCard = ({ firstName, lastName, picture, gender, height, birth }) => {
  console.log(birth);
  return (
    <div className="card">
      <div className="left">
        <img src={picture} alt="profile" />
      </div>
      <div className="right">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.getDate()}/{birth.getMonth() + 1}/
          {birth.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
