import NormalWhiteButton from "./buttons/NormalWhiteButton";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "60px" }}>
      <p style={{ margin: "10px"}}>Something went wrong</p>
      <NormalWhiteButton text="Try to load again" onClick={resetErrorBoundary}/>
    </div>
  );
}
export {Fallback};
