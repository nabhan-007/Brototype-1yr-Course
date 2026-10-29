export default function TaskList({ items }) {
  return (
    <>
      <hr />
      {items.length > 0 && <p>Total: {items.length}</p>}
      {items.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        items.map((val, index) => <p key={index}>{val}</p>)
      )}
      <hr />
    </>
  );
}
