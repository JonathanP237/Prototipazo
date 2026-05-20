import { validFlows } from "./flowRules";

export function analyzeFlow(nodes, edges) {

  const messages = [];

  // PANTALLAS NECESARIAS
  const requiredScreens = [
    "login",
    "registro",
    "home",
    "smartwatch",
    "lectura ppg",
    "historial",
    "perfil",
    "alertas",
    "configuración",
    "manuales",
    "reportes",
  ];

  requiredScreens.forEach((screen) => {

    const exists = nodes.some((node) => {

      return (
        node.data &&
        node.data.label &&
        node.data.label
          .toLowerCase()
          .includes(screen)
      );
    });

    if (!exists) {

      messages.push({
        type: "warning",
        text: `Falta pantalla ${screen}`,
      });
    }
  });

  // VALIDAR CONEXIONES
  for (const edge of edges) {

    const source = nodes.find(
      (node) => node.id === edge.source
    );

    const target = nodes.find(
      (node) => node.id === edge.target
    );

    // SEGURIDAD
    if (
      !source ||
      !target ||
      !source.data ||
      !target.data ||
      !source.data.label ||
      !target.data.label
    ) {
      continue;
    }

    const sourceLabel =
      source.data.label.toLowerCase();

    const targetLabel =
      target.data.label.toLowerCase();

    // VALIDAR SI EXISTE ESA CONEXIÓN
    const isValid = validFlows.some((flow) => {

      return (
        sourceLabel.includes(flow.from) &&
        targetLabel.includes(flow.to)
      );
    });

    // SI ES INCORRECTA
    if (!isValid) {

      messages.push({
        type: "error",
        text:
          `${source.data.label} no debería conectar a ${target.data.label}`,
      });
    }
  }

  // VALIDAR EXISTENCIA DE HOME
  const hasHome = nodes.some((node) => {

    return (
      node.data &&
      node.data.label &&
      node.data.label.toLowerCase() === "home"
    );
  });

  if (!hasHome) {

    messages.push({
      type: "warning",
      text: "No existe pantalla Home",
    });
  }

  // VALIDAR SI SMARTWATCH EXISTE
  const hasSmartwatch = nodes.some((node) => {

    return (
      node.data &&
      node.data.label &&
      node.data.label
        .toLowerCase()
        .includes("smartwatch")
    );
  });

  if (!hasSmartwatch) {

    messages.push({
      type: "warning",
      text: "No existe módulo Smartwatch",
    });
  }

  // VALIDAR SI EXISTE LECTURA PPG
  const hasPPG = nodes.some((node) => {

    return (
      node.data &&
      node.data.label &&
      node.data.label
        .toLowerCase()
        .includes("lectura ppg")
    );
  });

  if (!hasPPG) {

    messages.push({
      type: "warning",
      text: "No existe lectura PPG",
    });
  }

  // CONEXIONES OBLIGATORIAS
const requiredConnections = [

  ["login", "home"],

  ["home", "smartwatch"],
  ["home", "historial"],
  ["home", "perfil"],
  ["home", "alertas"],

  ["smartwatch", "lectura ppg"],

];

requiredConnections.forEach(
  ([from, to]) => {

    const exists = edges.some((edge) => {

      const source = nodes.find(
        (n) => n.id === edge.source
      );

      const target = nodes.find(
        (n) => n.id === edge.target
      );

      if (!source || !target) {
        return false;
      }

      return (
        source.data.label
          .toLowerCase()
          .includes(from) &&

        target.data.label
          .toLowerCase()
          .includes(to)
      );
    });

    if (!exists) {

      messages.push({
        type: "warning",
        text:
          `Falta conexión ${from} → ${to}`,
      });
    }
  }
);

  // SI TODO ESTÁ BIEN
  if (messages.length === 0) {

    messages.push({
      type: "success",
      text: "✔ Flujo UX de HeartSense correcto",
    });
  }

  return messages;
}