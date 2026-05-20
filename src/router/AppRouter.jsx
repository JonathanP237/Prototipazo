import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Home from "../pages/Home";

import Phase0Theory from "../phases/phase0/Phase0Theory";
import Phase0 from "../phases/phase0/Phase0";

import Phase1Theory from "../phases/phase1/Phase1Theory";
import Phase1 from "../phases/phase1/Phase1";

import Phase2Theory from "../phases/phase2/Phase2Theory";
import Phase2 from "../phases/phase2/Phase2";

import Phase3Theory from "../phases/phase3/Phase3Theory";
import Phase3 from "../phases/phase3/Phase3";

export default function AppRouter() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* FASE 0 */}
        <Route
          path="/phase0"
          element={<Phase0Theory />}
        />

        <Route
          path="/phase0/simulator"
          element={<Phase0 />}
        />

        {/* FASE 1 */}
        <Route
          path="/phase1"
          element={<Phase1Theory />}
        />

        <Route
          path="/phase1/simulator"
          element={<Phase1 />}
        />

        {/* FASE 2 */}
        <Route
          path="/phase2"
          element={<Phase2Theory />}
        />

        <Route
          path="/phase2/simulator"
          element={<Phase2 />}
        />

        {/* FASE 3 */}
        <Route
          path="/phase3"
          element={<Phase3Theory />}
        />

        <Route
          path="/phase3/simulator"
          element={<Phase3 />}
        />

      </Routes>

    </BrowserRouter>
  );
}