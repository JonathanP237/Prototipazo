import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import {
  useCallback,
  useRef,
  useState,
} from "react";

import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";
import { initialNodes } from "./nodes";
import { isValidConnection } from "./flowRules";
import UXPanel from "./UXPanel";
import { analyzeFlow } from "./analyzeFlow";
import Navbar from "../../components/Navbar";

export default function Phase0() {

  const reactFlowWrapper = useRef(null);

  const isMobile = window.innerWidth < 900;

  const [showUXPanel, setShowUXPanel] =
    useState(!isMobile);

  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState([]);

  const nodeTypes = {
    custom: CustomNode,
  };

  // CONEXIONES
  const onConnect = (params) => {

    const valid = isValidConnection(
      params.source,
      params.target
    );

    const newEdge = {
      ...params,
      animated: true,
      style: {
        stroke: valid
          ? "#22c55e"
          : "#ef4444",
        strokeWidth: 3,
      },
    };

    setEdges((eds) =>
      addEdge(newEdge, eds)
    );
  };

  // DRAG OVER
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // DROP
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData(
        "application/reactflow"
      );

      if (!type) return;

      const bounds =
        reactFlowWrapper.current.getBoundingClientRect();

      const position = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };

      const newNode = {
        id: `${type}-${Date.now()}`,
        type: "custom",
        position,
        data: {
          label: type,
        },
      };

      setNodes((nds) =>
        nds.concat(newNode)
      );
    },
    [setNodes]
  );

  // VALIDACIÓN UX
  const messages = analyzeFlow(
    nodes,
    edges
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#020617",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >

        {/* FLOW */}
        <div
          ref={reactFlowWrapper}
          style={{
            flex: 1,
            position: "relative",
          }}
        >

          {/* BOTÓN UX */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 20,
              display: "flex",
              gap: 10,
            }}
          >

            <button
              onClick={() =>
                setShowUXPanel(!showUXPanel)
              }
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "none",
                background: "#1e293b",
                color: "white",
                cursor: "pointer",
              }}
            >
              {showUXPanel
                ? "Ocultar"
                : "Mostrar"} UX
            </button>

          </div>

          {/* REACT FLOW */}
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            deleteKeyCode={[
              "Backspace",
              "Delete",
            ]}
          >

            <Background />

            <Controls />

            <MiniMap
              nodeColor="#334155"
              maskColor="rgba(15, 23, 42, 0.6)"
              style={{
                backgroundColor: "#0f172a",
              }}
            />

          </ReactFlow>

        </div>

        {/* PANEL UX */}
        {showUXPanel && (
          <UXPanel messages={messages} />
        )}

      </div>

    </div>
  );
}