import { FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowCircleLeft } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import PuncakLawang2 from "../assets/puncak_lawang.jpg";
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

export default function PuncakLawang() {
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

      <div className="w-full h-[150px] relative ">
        <img
          src={PuncakLawang2}
          alt=""
          className="object-cover absolute top-[54px] "
        />
      </div>

      <div className="text-[14px]  w-full h-[200px] mt-[180px] font-serif text-black text-center -mb-[440px] ">
        <h1
          className="text-4xl font-serif text-white font-extralight mb-5 "
          style={{ textDecoration: "underline 1px cyan" }}
        >
          <Typewriter
            options={{
              strings: ["Puncak Lawang"],
              autoStart: true,
              loop: true,
              typeSpeed: -5,
            }}
          />
        </h1>
        <p>
          Puncak Lawang adalah destinasi wisata alam yang menakjubkan yang
          terletak di Kabupaten Agam, Sumatera Barat, Indonesia. Terletak di
          ketinggian sekitar 1.200 meter di atas permukaan laut, Puncak Lawang
          menawarkan pemandangan indah dan panorama luar biasa dari atas Bukit
          Barisan yang menjulang tinggi. Saat tiba di Puncak Lawang, pengunjung
          akan disuguhkan dengan pemandangan yang menakjubkan dari Danau
          Maninjau yang berada di bawah. Pemandangan ini merupakan kombinasi
          yang sempurna antara danau yang indah dengan pegunungan yang hijau,
          menciptakan suasana yang menenangkan dan memukau.
        </p>
        <br></br>
        <br></br>
        <p>
          Selain pemandangan yang spektakuler, Puncak Lawang juga menjadi titik
          awal untuk melakukan kegiatan paralayang. Para penggemar olahraga
          ekstrem dapat merasakan sensasi terbang di udara dan menikmati
          panorama menakjubkan sepanjang penerbangan mereka. Puncak Lawang juga
          menawarkan fasilitas pendukung yang baik, seperti area parkir, warung
          makan, dan tempat istirahat. Pengunjung dapat bersantai sambil
          menikmati minuman hangat atau makanan ringan tradisional sambil
          menikmati keindahan alam sekitar.
        </p>
        <br></br>
        <br></br>
        <p>
          Sebagai pecinta fotografi, Puncak Lawang adalah surga yang tak
          terlupakan. Keindahan alam yang menakjubkan, kabut yang menyelubungi
          pegunungan, dan panorama unik akan menciptakan momen-momen berharga
          yang dapat diabadikan dalam foto. Jika Anda mencari tempat yang
          menawarkan pemandangan spektakuler dan pengalaman yang tak terlupakan,
          Puncak Lawang adalah destinasi yang sempurna. Nikmati keindahan alam
          yang luar biasa, terbang dengan paralayang, dan raih kenangan tak
          terlupakan di tempat ini."
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
        <aside className="w-full h-[200px] flex justify-center absolute top-[1150px] ">
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
