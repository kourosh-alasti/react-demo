export function Greeting({ name, ...props }) {
  return (
    <>
      <h1>Hello {name}</h1>
      <span>{JSON.stringify(props)}</span>
    </>
  );
}
