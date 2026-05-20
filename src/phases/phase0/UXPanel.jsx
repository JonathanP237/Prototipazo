export default function UXPanel({ messages }) {

  return (
    <div
      style={{
        width: 300,
        background: "#0f172a",
        borderLeft: "1px solid #1e293b",
        padding: 20,
        color: "white",
        overflowY: "auto",
      }}
    >
      <h2>Validación UX</h2>

      {messages.map((msg, index) => (

        <div
          key={index}
          style={{
            padding: 12,
            marginBottom: 10,
            borderRadius: 10,
            background:
              msg.type === "error"
                ? "#7f1d1d"
                : msg.type === "warning"
                ? "#78350f"
                : "#14532d",
          }}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}