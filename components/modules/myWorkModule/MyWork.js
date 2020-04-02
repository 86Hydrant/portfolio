const MyWork = ({ title, image, info }) => {
  return (
    <div className="projectContainer">
      <img src={image} alt="Screenshot of Project" />
      <div className="infoContainer">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default MyWork;
