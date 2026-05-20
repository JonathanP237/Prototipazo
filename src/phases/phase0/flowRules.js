export const validFlows = [

  // AUTENTICACIÓN
  { from: "login", to: "registro" },
  { from: "login", to: "home" },

  // HOME
  { from: "home", to: "smartwatch" },
  { from: "home", to: "historial" },
  { from: "home", to: "perfil" },
  { from: "home", to: "alertas" },
  { from: "home", to: "configuración" },
  { from: "home", to: "manuales" },
  { from: "home", to: "reportes" },

  // SMARTWATCH
  { from: "smartwatch", to: "lectura ppg" },

  // PERFIL
  { from: "perfil", to: "configuración" },

  // REPORTES
  { from: "reportes", to: "historial" },
];

export function isValidConnection(from, to) {

  return validFlows.some((flow) => {

    return (
      from.toLowerCase().includes(
        flow.from
      ) &&
      to.toLowerCase().includes(
        flow.to
      )
    );
  });
}