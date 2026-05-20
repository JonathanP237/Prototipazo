export default function UXPanel({
  messages,
  selectedElement,
  onUpdateElement,
  showValidation,
  onToggleValidation,
}) {

  const handleChange = (field, value) => {
    if (!selectedElement) return;
    const updatedValue =
      field === "width" || field === "height"
        ? Number(value)
        : value;
    onUpdateElement(selectedElement.id, {
      [field]: updatedValue,
    });
  };

  return (
    <div
      style={{
        width: 320,
        background: "#0f172a",
        borderLeft:
          "1px solid #1e293b",
        padding: 20,
        overflowY: "auto",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
          }}
        >
          Validación UX/UI
        </h2>
        <div>
          <button
            onClick={() => onToggleValidation(true)}
            style={{
              marginRight: 8,
              padding: "6px 10px",
              borderRadius: 8,
              border: "1px solid #334155",
              background: showValidation ? "#0f172a" : "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Mostrar
          </button>
          <button
            onClick={() => onToggleValidation(false)}
            style={{
              padding: "6px 10px",
              borderRadius: 8,
              border: "1px solid #334155",
              background: showValidation ? "#2563eb" : "#0f172a",
              color: "white",
              cursor: "pointer",
            }}
          >
            Ocultar
          </button>
        </div>
      </div>

      {selectedElement ? (
        <div
          style={{
            marginBottom: 24,
            padding: 16,
            borderRadius: 16,
            background: "#111827",
          }}
        >
          <h3
            style={{
              color: "#f8fafc",
              marginBottom: 12,
            }}
          >
            Editar elemento
          </h3>

          <div
            style={{
              marginBottom: 12,
              color: "#cbd5e1",
              fontSize: 14,
            }}
          >
            Tipo: {selectedElement.type}
          </div>

          <label
            style={{
              display: "block",
              marginBottom: 10,
              color: "#e2e8f0",
            }}
          >
            Ancho
            <input
              type="number"
              value={selectedElement.width}
              onChange={(event) =>
                handleChange("width", event.target.value)
              }
              style={{
                width: "100%",
                marginTop: 6,
                padding: 8,
                borderRadius: 8,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "white",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              marginBottom: 10,
              color: "#e2e8f0",
            }}
          >
            Alto
            <input
              type="number"
              value={selectedElement.height}
              onChange={(event) =>
                handleChange("height", event.target.value)
              }
              style={{
                width: "100%",
                marginTop: 6,
                padding: 8,
                borderRadius: 8,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "white",
              }}
            />
          </label>

          {selectedElement.type === "Button" && (
            <label
              style={{
                display: "block",
                marginBottom: 10,
                color: "#e2e8f0",
              }}
            >
              Texto del botón
              <input
                type="text"
                value={selectedElement.label}
                onChange={(event) =>
                  handleChange("label", event.target.value)
                }
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid #334155",
                  background: "#0f172a",
                  color: "white",
                }}
              />
            </label>
          )}
        </div>
      ) : (
        <div
          style={{
            marginBottom: 24,
            padding: 16,
            borderRadius: 16,
            background: "#111827",
            color: "#cbd5e1",
            fontSize: 14,
          }}
        >
          Selecciona un elemento en el canvas para editar su tamaño y texto.
        </div>
      )}

      {showValidation ? (
        messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: 14,
              padding: 14,
              borderRadius: 12,
              color: "white",
              background:
                msg.type === "success"
                  ? "#166534"
                  : msg.type === "warning"
                  ? "#92400e"
                  : "#991b1b",
            }}
          >
            {msg.text}
          </div>
        ))
      ) : (
        <div
          style={{
            marginTop: 10,
            padding: 14,
            borderRadius: 12,
            color: "#cbd5e1",
            background: "#111827",
          }}
        >
          Validación oculta.
        </div>
      )}
    </div>
  );
}