import { FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowCircleLeft } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ngarai2 from "../assets/ngarai2.jpg";
import "../App.css";
import mountain from "../assets/mountain.mp4";
import {
  FaBluetoothB,
  FaGithub,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function NgaraiSianok() {
  const ikon = [
    <FaBluetoothB />,
    <FaGithub />,
    <FaTelegram />,
    <FaWhatsapp />,
    <FaEnvelope />,
  ];
  const [infoKontak, setInfoKontak] = useState(null);

  const clickInfoKontak = (index) => {
    setInfoKontak(index);
  };
  const clickInfoKontakClose = () => {
    setInfoKontak();
  };

  const contact = [
    {
      bluetooth: "null",
    },
    {
      github: (
        <a
          className="text-white cursor-pointer hover:text-red-600 font-light "
          href="https://github.com/arroofi07"
        >
          https://github.com/arroofi07
        </a>
      ),
    },
    {
      telegram: "083863091351",
    },
    {
      wa: "085709466801",
    },
    {
      email: (
        <div className="text-[13px] -mt-[45px] ">
          <ul>
            <li>rehandoang418@gmail.com</li>

            <li>dinapohan24@gmail.com</li>

            <li>namauyusti97@gmail.com</li>

            <li>zalializa2@gmail.com</li>

            <li>arrooficr7@gmail.com</li>
            <li>aziza.tahnia12@gmail.com</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div>
      <nav
        style={{ height: "55px" }}
        className=" flex  justify-center z-50 bg-cyan-800 fixed right-0 left-0 text-3xl pt-3 pl-3 cursor-pointer hover:text-white"
      >
        <Link to="/home">
          <HiArrowCircleLeft className="relative  -left-[120px] text-white top-1 " />
        </Link>
        <FaMapMarkedAlt className="text-white mr-11 " />
      </nav>

      <div className="w-full h-[150px] relative bg-red-500  ">
        <img src={ngarai2} alt="" className="object-cover -mt-[10px]" />
      </div>

      <div className="text-[14px]  w-full h-[200px] mt-[360px] font-serif text-black text-center -mb-[400px] ">
        <h1
          className="text-4xl font-serif text-white font-extralight mb-5 "
          style={{ textDecoration: "underline 1px cyan" }}
        >
          <Typewriter
            options={{
              strings: ["Ngarai Sianok"],
              autoStart: true,
              loop: true,
              typeSpeed: -5,
            }}
          />
        </h1>
        <p>
          Ngarai Sianok adalah lembah curam (jurang) yang terletak di perbatasan
          kota Bukittinggi, Kecamatan IV Koto, Kabupaten Agam, Sumatera Barat.
          Lembah ini memanjang dan berkelok sebagai garis batas kota dari
          selatan ngarai Koto Gadang sampai ke nagari Sianok Anam Suku, dan
          berakhir di kecamatan Pelupuh. Ngarai Sianok memiliki pemandangan yang
          sangat indah dan juga dibuat sebagai salah satu objek wisata andalan
          provinsi Sumatera Barat.
        </p>
        <br></br>
        <br></br>
        <p>
          Bentuk Ngarai Sianok Ngarai Sianok merupakan lembah sempit yang
          dikelilingi oleh bukit-bukit bertebing curam yang dihiasi dengan
          aliran sungai kecil di tengahnya. Tebing tersebut memiliki ketinggian
          sekitar 100 m, membentang sepanjang 15 km, dan lebar kurang lebih 200
          m. Kontur lembah Sianok terbentuk karena proses turunnya sebagian
          lempeng bumi, sehingga menimbulkan patahan berupa tebing yang curam.
          Ngarai Sianok merupakan wujud visual yang paling jelas dari aktivitas
          pergerakan lempeng bumi (tektonik) di Pulau Sumatera. Proses
          terbentuknya patahan tersebut menghasilkan sebuah kawasan yang subur
          dengan panorama yang indah. Kawasan ini mempunyai sebutan lain, yaitu
          Lembah Pendiam , karena suasananya yang tenang dan damai.
        </p>
        <br></br>
        <br></br>
        <p>
          Di kawasan yang masih alami, beberapa flora dan fauna terdapat di
          kawasan ini. Sejarah Terbentuknya Ngarai Sianok Ngarai Sianok
          terbentuk akibat letusan gunung api purba yang lokasinya di Danau
          Maninjau, sekarang gunung itu bernama Gunung Tinjau. Melalui gerakan
          pergeseran horizontal sebesar 2 mm/hari selama ribuan tahun,
          terbentuklah celah lebar ngarai sianok ini. Proses geologi yang
          terjadi di Ngarai Sianok berasal dari luar bumi (eksogen) dan dalam
          bumi (endorgen). Bentang alam yang dihasilkan adalah sebuah lembah dan
          tebing yang menjulang luas.
        </p>
      </div>

      {/* ini bagaian footer */}
      <div className="relative w-full text-center h-[250px] top-[1170px] bg-cyan-600  ">
        <video
          src={mountain}
          className="object-cover h-[300px] "
          loop
          muted
          autoPlay
        ></video>
        <p className="absolute top-[100px] left-[95px] text-xl text-red-900 font-bold ">
          Hubungi kami di sini
        </p>
        <ul className="flex justify-center  absolute top-[170px] left-[80px] space-x-5 ">
          {ikon.map((listIkon, ikonIndex) => (
            <li
              onClick={() => clickInfoKontak(ikonIndex)}
              key={ikonIndex}
              className={`"  cursor-pointer hover:animate-spin transfrom-origin-center   text-red-900 text-3xl font-extralight ${
                ikonIndex === 0 ? "hidden" : ""
              } "`}
            >
              {listIkon}
            </li>
          ))}
        </ul>
      </div>
      {/* ini bagian contact/footer */}
      {infoKontak && (
        <aside className="w-full h-[200px] flex justify-center absolute top-[1350px] ">
          <ul
            id="infoKontak"
            style={{ border: "1px solid cyan" }}
            className={`w-[70%] h-[150px]  bg-cyan-600 mt-10 rounded-2xl text-center  `}
          >
            <AiFillCloseCircle
              onClick={clickInfoKontakClose}
              className="text-2xl mt-3 ml-2 "
            />
            {infoKontak !== null &&
              Object.keys(contact[infoKontak]).map((key) => (
                <li className="mt-8 " key={key}>
                  {contact[infoKontak][key]}
                </li>
              ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
