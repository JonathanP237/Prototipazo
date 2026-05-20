import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function Phase1Theory() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-10 pt-20 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold mb-6"
        >
          Fase 1
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-slate-300 mt-4 mb-4"
        >
          Wireframes Digitales
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-4xl text-slate-400 text-lg leading-8"
        >
          En esta fase se traduce el flujo de la Fase 0 en estructuras visuales
          simples que representan la distribución de los elementos en pantalla.
        </motion.p>
      </section>

      {/* GRID */}
      <section className="grid md:grid-cols-2 gap-6 px-10 pb-20">

        <Card title="🎯 Objetivo">
          Definir la estructura visual de cada pantalla sin diseño final.
        </Card>

        <Card title="📐 Características">
          <ul className="space-y-2">
            <li>• Diseño en bloques</li>
            <li>• Sin colores finales</li>
            <li>• Jerarquía básica</li>
            <li>• Layout móvil</li>
          </ul>
        </Card>

        <Card title="🛠 Herramientas">
          <ul className="space-y-2">
            <li>Figma (wireframe mode)</li>
            <li>Balsamiq</li>
            <li>Whimsical</li>
            <li>Papel digitalizado</li>
          </ul>
        </Card>

        <Card title="📱 Ejemplo">
          Login → Input email/password → botón login → Home
        </Card>

      </section>

      <CTA />
    </div>
  );
}

function Card({ title, children }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="text-slate-300">{children}</div>
    </motion.div>
  );
}

function CTA() {
  return (
    <div className="pb-24 flex justify-center">
      <Link to="/phase1/simulator">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-blue-600 rounded-xl cursor-pointer"
        >
          Ir al Simulador
        </motion.button>
      </Link>
    </div>
  );
}