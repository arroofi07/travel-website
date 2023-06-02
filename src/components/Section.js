import Typewriter from "typewriter-effect";
import "../App.css";
import { MdHighlightOff } from "react-icons/md";
import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Section() {
  const [isHidden, setIsHidden] = useState(false);

  const artikel = [
    {
      url: "lembah-harau",
      title: "Lembah Harau",
    },
    {
      url: "danau-maninjau",
      title: "Danau Maninjau",
    },
    {
      url: "ngarai-sianok",
      title: "Ngarai Sianok",
    },
    {
      url: "danau-singkarak",
      title: "Danau Singkarak ",
    },
    {
      url: "puncak-lawang",
      title: "Puncak Lawang",
    },
  ];

  const handleClik = () => {
    setIsHidden(true);
  };
  const handleClik2 = () => {
    setIsHidden(false);
  };

  return (
    <div id="section">
      <p className="absolute text-4xl mt-24 z-30 ml-5 font-serif font-extrabold ">
        NQQ Explorer
      </p>

      <button
        onClick={isHidden ? handleClik2 : handleClik}
        style={{ border: "0.5px solid cyan", boxShadow: "0 0 10px cyan" }}
        className="hover:tex-white hover:bg-black z-30 bg-cyan-700 absolute top-[200px] text-white
       w-[100px] ml-10 h-[30px] rounded-xl text-[16px] font-serif  "
      >
        Destination
      </button>

      <p
        style={{ textShadow: "0  0 10px red" }}
        className="absolute z-30 top-[270px] ml-7  text-xl text-white "
      >
        <Typewriter
          options={{
            strings: [
              "Temukan destinasi wisata yang ingin anda tuju disini.....",
            ],
            autoStart: true,
            loop: true,
            typeSpeed: -5,
          }}
        />
      </p>

      <div className="top-[399px] absolute z-40  max-w-[400px] h-[200px] w-full m-auto py-16 px-4 ">
        <MdHighlightOff
          onClick={handleClik2}
          className={`cursor-pointer absolute left-5 top-4 text-2xl  text-red-700 ${
            isHidden ? "" : "hidden"
          }`}
        />
        <aside
          id="boxStarted"
          style={{
            border: "1px solid red",
          }}
          className={
            isHidden
              ? "font-serif text-white pl-2 pt-8 bg-cyan-900 bg-opacity-50 z-50 max-w-[500px] h-[270px] rounded-2xl -mt-[50px]"
              : "hidden"
          }
        >
          <p className="font-extrabold">
            Pilih objek wisata yang ingin anda tuju di bawah ini:
          </p>
          <ul>
            {artikel.map((listArtikel, index) => (
              <li
                key={index}
                className="mb-2 mt-2 -ml-1 pl-2 hover:bg-cyan-500 hover:rounded-[3px] hover:text-black w-[300px] hover:bg-opacity-100 "
              >
                <Link to={listArtikel.url}>{listArtikel.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
