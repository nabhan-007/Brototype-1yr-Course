export default function Profile({ name, role, age }) {
  return (
    <div
      style={{ outline: "2px solid red", width: "fit-content", padding: "5px" }}
    >
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Age: {age}</p>
    </div>
  );
}
