import {
  useState,
} from "react";

import Navbar from "../../components/Navbar";

import Sidebar from "./Sidebar";
import PhoneCanvas from "./PhoneCanvas";

const defaultElementProps = {
  Text: {
    width: 180,
    height: 24,
    label: "TEXTO",
  },
  Card: {
    width: 240,
    height: 120,
    label: "CARD",
  },
  Button: {
    width: 220,
    height: 50,
    label: "BOTÓN",
  },
  Input: {
    width: 220,
    height: 50,
    label: "INPUT",
  },
};

export default function Phase1() {

  const [elements, setElements] =
    useState([]);
  const [selectedId, setSelectedId] =
    useState(null);

  const moveElement = (
    id,
    newX,
    newY
  ) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            x: newX,
            y: newY,
          };
        }
        return el;
      })
    );
  };

  const updateElement = (
    id,
    updates
  ) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, ...updates } : el
      )
    );
  };

  const resizeElement = (
    id,
    newWidth,
    newHeight
  ) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id
          ? {
              ...el,
              width: Math.max(40, newWidth),
              height: Math.max(24, newHeight),
            }
          : el
      )
    );
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    event.preventDefault();

    const type =
      event.dataTransfer.getData(
        "componentType"
      );

    if (!type) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const defaultProps =
      defaultElementProps[type] || {
        width: 200,
        height: 80,
        label: type,
      };

    const newElement = {
      id: `${type}-${Date.now()}`,
      type,
      x,
      y,
      width: defaultProps.width,
      height: defaultProps.height,
      label: defaultProps.label,
    };

    setElements((prev) => [
      ...prev,
      newElement,
    ]);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#020617",
        display: "flex",
        flexDirection: "column",
      }}
    >

      <Navbar />

      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "auto",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: 0,
        }}
      >

        <Sidebar />

        <PhoneCanvas
          elements={elements}
          onDrop={onDrop}
          onDragOver={onDragOver}
          moveElement={moveElement}
          resizeElement={resizeElement}
          onRenameElement={updateElement}
          selectedId={selectedId}
          onSelectElement={setSelectedId}
        />

      </div>

    </div>
  );
}