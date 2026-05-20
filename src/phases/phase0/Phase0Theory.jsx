import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function Phase0Theory() {

  const cardStyle = {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: 20,
    padding: 24,
  };

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
          Fase 0
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-slate-300 mb-10"
        >
          Prototipado de Baja Fidelidad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl text-slate-400 text-lg leading-8"
        >
          En esta etapa se valida el flujo,
          navegación y estructura de una app
          antes de iniciar diseño visual o desarrollo.
        </motion.p>

      </section>

      {/* GRID */}
      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          px-10
          pb-20
        "
      >

        {/* OBJETIVOS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={cardStyle}
        >
          <h3 className="text-2xl font-semibold mb-5">
            🎯 Objetivos
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>✔ Validar navegación</li>
            <li>✔ Detectar errores UX</li>
            <li>✔ Definir pantallas</li>
            <li>✔ Organizar flujo</li>
          </ul>
        </motion.div>

        {/* HERRAMIENTAS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={cardStyle}
        >
          <h3 className="text-2xl font-semibold mb-5">
            🛠 Herramientas
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>✏ Papel y lápiz</li>
            <li>🧩 Wireframes</li>
            <li>📝 Post-its</li>
            <li>🎨 Balsamiq</li>
            <li>🌐 Whimsical</li>
          </ul>
        </motion.div>

        {/* FILOSOFÍA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={cardStyle}
        >
          <h3 className="text-2xl font-semibold mb-5">
            🧠 Filosofía
          </h3>

          <p className="text-slate-300 leading-7">
            “Fallar rápido y barato”.
            Los errores UX deben encontrarse
            antes del desarrollo real.
          </p>
        </motion.div>

        {/* CLIENTE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={cardStyle}
        >
          <h3 className="text-2xl font-semibold mb-5">
            👤 Rol del Cliente
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>✔ Co-creador</li>
            <li>✔ Validador</li>
            <li>✔ Toma decisiones</li>
          </ul>
        </motion.div>

        {/* ECOMMERCE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={cardStyle}
        >
          <h3 className="text-2xl font-semibold mb-5">
            📱 Flujo Ecommerce
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>Login</li>
            <li>Registro</li>
            <li>Home</li>
            <li>Producto</li>
            <li>Carrito</li>
            <li>Checkout</li>
            <li>Pago</li>
          </ul>
        </motion.div>

        {/* CRITERIOS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={cardStyle}
        >
          <h3 className="text-2xl font-semibold mb-5">
            ✅ Para Avanzar
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>✔ Flujo aprobado</li>
            <li>✔ Navegación clara</li>
            <li>✔ Core definido</li>
            <li>✔ UX validado</li>
          </ul>
        </motion.div>

      </section>

      {/* CTA */}
      <section className="pb-24 flex justify-center">

        <Link to="/phase0/simulator">

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              px-10
              py-5
              rounded-2xl
              bg-blue-600
              hover:bg-blue-500
              text-xl
              font-semibold
              transition
            "
          >
            Entrar al Simulador
          </motion.button>

        </Link>

      </section>

    </div>
  );
}