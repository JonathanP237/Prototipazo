import { uiComponents } from "./components";

export default function Sidebar() {

  const onDragStart = (
    event,
    componentType
  ) => {

    event.dataTransfer.setData(
      "componentType",
      componentType
    );
  };

  return (
    <div
      style={{
        width: "clamp(180px, 22vw, 220px)",
        minWidth: 180,
        background: "#0f172a",
        padding: 20,
        borderRight:
          "1px solid #1e293b",
        overflowY: "auto",
      }}
    >

      <h2
        style={{
          color: "white",
          marginBottom: 20,
        }}
      >
        Componentes
      </h2>

      {uiComponents.map((component) => (

        <div
          key={component.type}
          draggable
          onDragStart={(e) =>
            onDragStart(
              e,
              component.type
            )
          }
          style={{
            padding: 14,
            marginBottom: 12,
            borderRadius: 12,
            background: "#1e293b",
            color: "white",
            cursor: "grab",
            textAlign: "center",
          }}
        >
          {component.type}
        </div>

      ))}
    </div>
  );
}