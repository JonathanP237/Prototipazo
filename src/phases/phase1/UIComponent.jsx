import { useState } from "react";

export default function UIComponent({
  element,
  moveElement,
  resizeElement,
  onRename,
  selected,
  onSelect,
}) {

  const {
    id,
    type,
    x,
    y,
    width,
    height,
    label,
  } = element;

  const [dragging, setDragging] =
    useState(false);
  const [resizing, setResizing] =
    useState(false);

  const startDrag = (e) => {
    e.preventDefault();
    onSelect?.();

    setDragging(true);

    const startX = e.clientX;
    const startY = e.clientY;

    const initialX = x;
    const initialY = y;

    const onPointerMove = (event) => {
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;

      moveElement(
        id,
        initialX + dx,
        initialY + dy
      );
    };

    const onPointerUp = () => {
      setDragging(false);

      window.removeEventListener(
        "pointermove",
        onPointerMove
      );
      window.removeEventListener(
        "pointerup",
        onPointerUp
      );
    };

    window.addEventListener(
      "pointermove",
      onPointerMove
    );
    window.addEventListener(
      "pointerup",
      onPointerUp
    );
  };

  const startResize = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onSelect?.();

    setResizing(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const initialWidth = width || 100;
    const initialHeight = height || 50;

    const onPointerMove = (event) => {
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;

      resizeElement(
        id,
        Math.max(40, initialWidth + dx),
        Math.max(24, initialHeight + dy)
      );
    };

    const onPointerUp = () => {
      setResizing(false);

      window.removeEventListener(
        "pointermove",
        onPointerMove
      );
      window.removeEventListener(
        "pointerup",
        onPointerUp
      );
    };

    window.addEventListener(
      "pointermove",
      onPointerMove
    );
    window.addEventListener(
      "pointerup",
      onPointerUp
    );
  };

  const baseStyle = {
    position: "absolute",
    left: x,
    top: y,
    width: width || 100,
    height: height || 50,
    cursor: "move",
    userSelect: "none",
    touchAction: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    fontWeight: 700,
    color: "#0f172a",
    border: dragging
      ? "2px solid #2563eb"
      : selected
      ? "2px dashed #2563eb"
      : "1px solid #94a3b8",
    boxShadow: selected ? "0 0 0 3px rgba(37,99,235,0.15)" : "none",
  };

  const resizeHandleStyle = {
    position: "absolute",
    right: 4,
    bottom: 4,
    width: 10,
    height: 10,
    borderRadius: 2,
    background: "#f8fafc",
    border: "1px solid #64748b",
    cursor: "se-resize",
    display: selected ? "block" : "none",
    zIndex: 2,
  };

  switch (type) {

    case "Text":
      return (
        <div
          draggable={false}
          onPointerDown={startDrag}
          onDoubleClick={() => {
            const newLabel = window.prompt(
              "Nuevo nombre:",
              label || "TEXTO"
            );
            if (newLabel !== null && newLabel !== undefined) {
              onRename?.(id, { label: newLabel });
            }
          }}
          onClick={onSelect}
          style={{
            ...baseStyle,
            width: width || 180,
            height: height || 24,
            background: "#f1f5f9",
          }}
        >
          {label || "TEXTO"}
          <div
            style={resizeHandleStyle}
            onPointerDown={startResize}
          />
        </div>
      );

    case "Card":
      return (
        <div
          draggable={false}
          onPointerDown={startDrag}
          onDoubleClick={() => {
            const newLabel = window.prompt(
              "Nuevo nombre:",
              label || "CARD"
            );
            if (newLabel !== null && newLabel !== undefined) {
              onRename?.(id, { label: newLabel });
            }
          }}
          onClick={onSelect}
          style={{
            ...baseStyle,
            width: width || 240,
            height: height || 120,
            borderRadius: 16,
            background: "#e2e8f0",
          }}
        >
          {label || "CARD"}
          <div
            style={resizeHandleStyle}
            onPointerDown={startResize}
          />
        </div>
      );

    case "Button":
      return (
        <div
          draggable={false}
          onPointerDown={startDrag}
          onDoubleClick={() => {
            const newLabel = window.prompt(
              "Nuevo nombre:",
              label || "BOTÓN"
            );
            if (newLabel !== null && newLabel !== undefined) {
              onRename?.(id, { label: newLabel });
            }
          }}
          onClick={onSelect}
          style={{
            ...baseStyle,
            width: width || 220,
            height: height || 50,
            borderRadius: 12,
            background: "#93c5fd",
          }}
        >
          {label || "BOTÓN"}
          <div
            style={resizeHandleStyle}
            onPointerDown={startResize}
          />
        </div>
      );

    case "Input":
      return (
        <div
          draggable={false}
          onPointerDown={startDrag}
          onDoubleClick={() => {
            const newLabel = window.prompt(
              "Nuevo nombre:",
              label || "INPUT"
            );
            if (newLabel !== null && newLabel !== undefined) {
              onRename?.(id, { label: newLabel });
            }
          }}
          onClick={onSelect}
          style={{
            ...baseStyle,
            width: width || 220,
            height: height || 50,
            borderRadius: 12,
            background: "#e2e8f0",
          }}
        >
          {label || "INPUT"}
          <div
            style={resizeHandleStyle}
            onPointerDown={startResize}
          />
        </div>
      );

    default:
      return null;
  }
}