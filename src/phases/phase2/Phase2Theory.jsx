import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const cardStyle = {
  background: "#0f172a",
  border: "1px solid #1e293b",
  borderRadius: 20,
  padding: 24,
};

export default function Phase2Theory() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-10 pt-20 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold mb-6"
        >
          Fase 2
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-slate-300 mt-4 mb-4"
        >
          Diseño de Alta Fidelidad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-4xl text-slate-400 text-lg leading-8"
        >
          Aquí se transforma el wireframe en una interfaz visual realista
          con colores, tipografía y componentes definidos.
        </motion.p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 px-10 pb-20">

        <Card title="🎯 Objetivo">
          Convertir wireframes en diseño visual final.
        </Card>

        <Card title="🎨 Elementos clave">
          <ul className="space-y-2">
            <li>• Color</li>
            <li>• Tipografía</li>
            <li>• Iconografía</li>
            <li>• Espaciado</li>
          </ul>
        </Card>

        <Card title="🧠 Principios UX/UI">
          <ul className="space-y-2">
            <li>Consistencia</li>
            <li>Contraste</li>
            <li>Jerarquía visual</li>
            <li>Accesibilidad</li>
          </ul>
        </Card>

        <Card title="📱 Ejemplo">
          Login con diseño real: colores, botones, animaciones suaves
        </Card>

      </section>

      <CTA />
    </div>
  );
}

function Card({ title, children }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} style={cardStyle}>
      <h3 className="text-2xl font-semibold mb-5">{title}</h3>
      <div className="text-slate-300">{children}</div>
    </motion.div>
  );
}

function CTA() {
  return (
    <div className="pb-24 flex justify-center">
      <Link to="/phase2/simulator">
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