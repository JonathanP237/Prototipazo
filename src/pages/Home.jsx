import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {

  const phases = [
    {
      title: "Fase 0",
      subtitle: "Baja Fidelidad",
      description:
        "Validación de flujo, estructura y navegación.",
      path: "/phase0",
      color: "from-sky-700 to-blue-500",
    },
    {
      title: "Fase 1",
      subtitle: "Media Fidelidad",
      description:
        "Wireframes digitales y arquitectura UX.",
      path: "/phase1",
      color: "from-blue-700 to-indigo-500",
    },
    {
      title: "Fase 2",
      subtitle: "Alta Fidelidad",
      description:
        "Diseño visual, identidad y experiencia.",
      path: "/phase2",
      color: "from-indigo-700 to-cyan-500",
    },
    {
      title: "Fase 3",
      subtitle: "Prototipo Funcional",
      description:
        "Lógica real, MVP y validación técnica.",
      path: "/phase3",
      color: "from-cyan-700 to-sky-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <section className="px-10 pt-20 pb-10">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          Prototipazo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-slate-400
            mt-6
            max-w-3xl
            text-lg
            leading-8
          "
        >
          Plataforma interactiva para aprender
          el proceso completo de prototipado
          de software mediante teoría,
          simulación y validación UX/UI.
        </motion.p>

      </section>

      {/* FILOSOFÍA */}
      <section className="px-10 pb-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-8
          "
        >

          <h2 className="text-2xl font-semibold mb-5">
            🧠 Filosofía del sistema
          </h2>

          <p className="text-slate-300 leading-8 max-w-4xl">
            El prototipado no consiste únicamente
            en diseñar interfaces, sino en validar
            ideas, reducir incertidumbre y detectar
            errores antes del desarrollo real.
          </p>

          <div
            className="
              grid
              md:grid-cols-3
              gap-4
              mt-8
            "
          >

            <div className="bg-slate-800 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">
                ⚡ Fallar rápido
              </h3>

              <p className="text-slate-400 text-sm">
                Detectar problemas antes de programar.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">
                🧩 Validar UX
              </h3>

              <p className="text-slate-400 text-sm">
                Evaluar navegación y experiencia.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">
                🤝 Co-creación
              </h3>

              <p className="text-slate-400 text-sm">
                El cliente participa activamente.
              </p>
            </div>

          </div>

        </motion.div>

      </section>

      {/* FASES */}
      <section
        className="
          px-10
          pb-20
          grid
          md:grid-cols-2
          gap-6
        "
      >

        {phases.map((phase, index) => (

          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * index,
            }}
          >

            <Link to={phase.path}>

              <div
                className={`
                  p-8
                  rounded-3xl
                  bg-gradient-to-r
                  ${phase.color}
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  cursor-pointer
                  shadow-xl
                `}
              >

                <h2 className="text-3xl font-bold">
                  {phase.title}
                </h2>

                <h3 className="text-lg mt-2 opacity-90">
                  {phase.subtitle}
                </h3>

                <p className="mt-5 text-white/80 leading-7">
                  {phase.description}
                </p>

              </div>

            </Link>

          </motion.div>

        ))}

      </section>

    </div>
  );
}