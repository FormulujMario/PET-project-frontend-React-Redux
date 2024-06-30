import scssVars from "./../scss/App.scss";

const PageTitle = ({ title }) => {
  const windowInnerWidth = document.documentElement.clientWidth;
  if (windowInnerWidth <= scssVars.breakpoint_md) {
    return <h1>{title}</h1>;
  } else {
    return title.length > 12 ? (
      <h1 style={{ justifyContent: "space-between" }}>
        {title.split(" ").map((word) => {
          return <span key={word}>{word}</span>;
        })}
      </h1>
    ) : (
      <h1 style={{ justifyContent: "center" }}>{title}</h1>
    );
  }
};

export default PageTitle;
