export default function LoaderBars() {
  return (
    <div id="loadingContainer">
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="box" id={`loader${n}`} />
      ))}
    </div>
  );
}
