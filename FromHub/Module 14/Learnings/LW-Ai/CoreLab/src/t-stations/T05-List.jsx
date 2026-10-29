export default function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((f) => (
        <li key={f.id}>{f.name}</li>
      ))}
    </ul>
  );
}
