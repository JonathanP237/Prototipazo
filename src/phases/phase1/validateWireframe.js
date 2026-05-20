export function validateWireframe(elements) {

  const messages = [];

  const hasLogo = elements.some(
    (e) => e.type === "Logo"
  );

  const inputCount = elements.filter(
    (e) => e.type === "Input"
  ).length;

  const hasButton = elements.some(
    (e) => e.type === "Button"
  );

  if (!hasLogo) {
    messages.push({
      type: "error",
      text: "Falta el logo",
    });
  }

  if (inputCount < 2) {
    messages.push({
      type: "error",
      text: "Faltan inputs",
    });
  }

  if (!hasButton) {
    messages.push({
      type: "error",
      text: "Falta botón login",
    });
  }

  // VALIDAR ELEMENTOS FUERA DE PANTALLA
  elements.forEach((el) => {

    if (
      el.x < 0 ||
      el.y < 0 ||
      el.x > 320 ||
      el.y > 760
    ) {
      messages.push({
        type: "warning",
        text:
          `${el.type} está fuera de pantalla`,
      });
    }
  });

  if (messages.length === 0) {
    messages.push({
      type: "success",
      text:
        "✔ Wireframe HeartSense correcto",
    });
  }

  return messages;
}