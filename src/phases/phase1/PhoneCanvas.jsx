import UIComponent from "./UIComponent";

export default function PhoneCanvas({
  elements,
  onDrop,
  onDragOver,
  moveElement,
  resizeElement,
  onRenameElement,
  selectedId,
  onSelectElement,
}) {

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        background: "#020617",
        padding: 20,
      }}
    >

      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        style={{
          width: "clamp(220px, 80vw, 340px)",
          aspectRatio: "390 / 844",
          maxHeight: "80vh",
          background: "#f8fafc",
          borderRadius: 40,
          position: "relative",
          overflow: "hidden",
          border: "10px solid #1e293b",
          boxShadow: "0 0 30px rgba(0,0,0,0.35)",
        }}
      >

        {elements.map((element) => (
          <UIComponent
            key={element.id}
            element={element}
            moveElement={moveElement}
            resizeElement={resizeElement}
            onRename={onRenameElement}
            selected={element.id === selectedId}
            onSelect={() => onSelectElement(element.id)}
          />
        ))}

      </div>
    </div>
  );
}