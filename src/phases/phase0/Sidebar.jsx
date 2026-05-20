const items = [
  "Login",
  "Registro",
  "Recuperar Contraseña",
  "Home",
  "Detalle Producto",
  "Carrito",
  "Checkout",
  "Pago",
  "Confirmación",
  "Perfil",
  "Favoritos",
  "Búsqueda",
  "Configuración",
];

export default function Sidebar({ addNode }) {
  return (
    <div
      style={{
        width: 260,
        height: "100vh",
        background: "#0f172a",
        borderRight: "1px solid #1e293b",
        padding: 20,
        boxSizing: "border-box",
        overflowY: "auto",
        flexShrink: 0,
      }}
    >
      <h2
        style={{
          color: "white",
          marginTop: 0,
          marginBottom: 20,
        }}
      >
        Componentes
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {items.map((item) => (
          <div
  key={item}
  draggable
  onDragStart={(event) => {
    event.dataTransfer.setData(
      "application/reactflow",
      item
    );

    event.dataTransfer.effectAllowed = "move";
  }}
  style={{
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    background: "#1e293b",
    color: "white",
    cursor: "grab",
    fontSize: 14,
    boxSizing: "border-box",
  }}
>
  + {item}
</div>
        ))}
      </div>
    </div>
  );
}