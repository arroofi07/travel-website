import { Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import LembahHarau from "../artikel/LembahHarau";
import DanauManinjau from "../artikel/DanauManinjau";
import NgaraiSianok from "../artikel/NgaraiSianok";
import DanauSingkarak from "../artikel/DanauSingkarak";
import PuncakLawang from "../artikel/PuncakLawang";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <>
      {isMobile ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lembah-harau" element={<LembahHarau />} />
          <Route path="/danau-maninjau" element={<DanauManinjau />} />
          <Route path="/ngarai-sianok" element={<NgaraiSianok />} />
          <Route path="/danau-singkarak" element={<DanauSingkarak />} />
          <Route path="/puncak-lawang" element={<PuncakLawang />} />
        </Routes>
      ) : (
        <h1 className="ml-[10%] mt-[20%] text-5xl text-white font-extrabold ">
          Website ini hanya bisa diakses melalui perangkat Mobile
        </h1>
      )}
    </>
  );
}

export default App;
