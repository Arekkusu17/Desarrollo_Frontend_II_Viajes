export function ErrorState({ message, retry }) {
  return (
    <div className="state" role="alert">
      <p>{message}</p>
      <button type="button" onClick={retry}>Reintentar</button>
    </div>
  );
}
