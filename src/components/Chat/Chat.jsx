export default function Chat({ selected, text, handleTextChange }) {
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + selected.name}
        onChange={(e) => handleTextChange(e.target.value)}
      />
    </section>
  );
}
