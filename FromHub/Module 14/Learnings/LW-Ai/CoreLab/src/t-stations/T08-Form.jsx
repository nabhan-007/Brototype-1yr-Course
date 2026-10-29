import { useState } from "react";

export default function FormTest() {
  const [name, setName] = useState("User");
  const [draft, setDraft] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (draft.trim()) {
      setName(draft);
    }
    setDraft("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h1>Welcome: {name}</h1>
    </>
  );
}
