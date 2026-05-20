import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    {
      label: "Inicio",
      path: "/",
    },
    {
      label: "Fase 0",
      path: "/phase0",
    },
    {
      label: "Fase 1",
      path: "/phase1",
    },
    {
      label: "Fase 2",
      path: "/phase2",
    },
    {
      label: "Fase 3",
      path: "/phase3",
    },
  ];

  return (
    <div
      className="
        w-full
        sticky
        top-0
        z-50
        bg-slate-950/80
        backdrop-blur
        border-b
        border-slate-800
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          px-8
          py-4
        "
      >

        {/* IZQUIERDA */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate(-1)}
            className="
              px-4
              py-2
              rounded-xl
              bg-slate-800
              hover:bg-slate-700
              transition
            "
          >
            ← Volver
          </button>

          <h1 className="font-semibold">
            Prototipazo
          </h1>

        </div>

        {/* DERECHA */}
        <div className="flex gap-3">

          {links.map((link) => {

            const active =
              location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
              >

                <div
                  className={`
                    px-4
                    py-2
                    rounded-xl
                    transition
                    text-sm

                    ${
                      active
                        ? "bg-blue-600"
                        : "bg-slate-800 hover:bg-slate-700"
                    }
                  `}
                >
                  {link.label}
                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </div>
  );
}