import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 12,
        background: "#0f172a",
        border: "2px solid #334155",
        color: "white",
        minWidth: 120,
        textAlign: "center",
      }}
    >
      {/* TOP */}
      <Handle
        type="target"
        position={Position.Top}
      />

      {/* LEFT */}
      <Handle
        type="target"
        position={Position.Left}
      />

      {/* RIGHT */}
      <Handle
        type="source"
        position={Position.Right}
      />

      {/* BOTTOM */}
      <Handle
        type="source"
        position={Position.Bottom}
      />

      <div>{data.label}</div>
    </div>
  );
}