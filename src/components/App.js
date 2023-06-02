import { Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import LembahHarau from "../artikel/LembahHarau";
import DanauManinjau from "../artikel/DanauManinjau";
import NgaraiSianok from "../artikel/NgaraiSianok";
import DanauSingkarak from "../artikel/DanauSingkarak";
import PuncakLawang from "../artikel/PuncakLawang";
import { isMobile } from "react-device-detect";
import Welcome from "../pages/Welcome";

function App() {
  return (
    <>
      {isMobile ? (
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/home/lembah-harau" element={<LembahHarau />} />
          <Route path="/home/danau-maninjau" element={<DanauManinjau />} />
          <Route path="/home/ngarai-sianok" element={<NgaraiSianok />} />
          <Route path="/home/danau-singkarak" element={<DanauSingkarak />} />
          <Route path="/home/puncak-lawang" element={<PuncakLawang />} />
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
