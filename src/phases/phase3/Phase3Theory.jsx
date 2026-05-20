import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function Phase3Theory() {
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
          Fase 3
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl text-slate-300 mt-4 mb-4"
        >
          Prototipo Interactivo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-4xl text-slate-400 text-lg leading-8"
        >
          En esta fase el diseño se convierte en una simulación funcional
          donde el usuario puede interactuar con la interfaz.
        </motion.p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 px-10 pb-20">

        <Card title="🎯 Objetivo">
          Simular comportamiento real de la app.
        </Card>

        <Card title="⚙️ Interacciones">
          <ul className="space-y-2">
            <li>• Clicks reales</li>
            <li>• Navegación</li>
            <li>• Estados dinámicos</li>
            <li>• Validaciones</li>
          </ul>
        </Card>

        <Card title="🧪 UX Testing">
          <ul className="space-y-2">
            <li>Flujos completos</li>
            <li>Errores controlados</li>
            <li>Feedback del sistema</li>
          </ul>
        </Card>

        <Card title="📱 Ejemplo">
          Usuario: Login → Home → compra → pago → confirmación
        </Card>

      </section>
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

