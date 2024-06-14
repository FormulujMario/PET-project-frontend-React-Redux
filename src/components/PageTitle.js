const PageTitle = ({ title }) => {
  return title.length > 12 ? (
    <h1 style={{ justifyContent: "space-between" }}>
      {title.split(" ").map((word) => {
        return <span key={word}>{word}</span>;
      })}
    </h1>
  ) : (
    <h1 style={{ justifyContent: "center" }}>{title}</h1>
  );
};

export default PageTitle;
