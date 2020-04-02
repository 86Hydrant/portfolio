const MyWork = ({ title, image, infoList }) => {
  return (
    <div className="projectContainer">
      <img src={image} alt="Screenshot of Project" />
      <div className="infoContainer">
        <h3>{title}</h3>
        <ul>
          {infoList
            ? infoList.map(item => {
                return <li>{item.text}</li>;
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default MyWork;
