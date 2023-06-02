import { FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowCircleLeft } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import lembahHarau2 from "../assets/lembahHarau2.png";
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

export default function LembahHarau() {
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
    <>
      <nav
        style={{ height: "55px" }}
        className=" flex  fixed justify-center z-50 bg-cyan-800  right-0 left-0 text-3xl pt-3 pl-3 cursor-pointer hover:text-white"
      >
        <Link to="/home">
          <HiArrowCircleLeft className="relative -left-[120px] text-white top-1 " />
        </Link>
        <FaMapMarkedAlt className="text-white mr-11 " />
      </nav>

      <div className="w-full h-[150px] bg-red-500  ">
        <img src={lembahHarau2} alt="" className="object-cover" />
      </div>

      <div className="text-[14px]  w-full h-[200px] mt-[300px] font-serif text-black text-center -mb-[90px] ">
        <h1
          className="text-4xl font-serif text-white font-extralight mb-5 "
          style={{ textDecoration: "underline 1px cyan" }}
        >
          <Typewriter
            options={{
              strings: ["Lembah Harau"],
              autoStart: true,
              loop: true,
              typeSpeed: -5,
            }}
          />
        </h1>
        <p>
          Terletak di Kabupaten Lima Puluh Kota, Lembah Harau menjadi surga bagi
          para pemanjat tebing. Tak hanya pemanjat tebing lokal yang menggilai
          lembah ini, pemanjat tebing asal luar negeri pun menjadikan
          tebing-tebing yang memagari lembah ini untuk ditaklukkan. Terdapat
          lebih dari 300 lokasi panjat tebing di Lembah Harau dengan ketinggian
          bervariasi. Ketinggian tebing berkisar antara 50 meter hingga 500
          meter. Para pemanjat tebing menjuluki lembah ini dengan Lembah
          Yosemite-nya Indonesia.
        </p>
        <br></br>
        <br></br>
        <p>
          Bukan hanya tebing, lembah harau juga memiliki air terjun yang indah,
          Ada beberapa air terjun yang sangat gampang di Akses, yaitu Air Terjun
          Boenta atau yang disebut masyarakat lokal dengan Sarosah Boenta dan
          Air Terjun Harau. Di Sarosah Boenta terdapat tiga air terjun dengan
          ketinggian lebih dari 30 meter. Anda juga dapat berenang karena ketiga
          air terjun ini memiliki kolam renang. Air terjun Sarasah Bunta pertama
          kali dibuka tanggal 14 Agustus 1926 oleh Asisten Residen Lima Puluh
          Kota, F. Rinner bersama Tuanku Laras Datuk Kuning Nan Hitam dan
          Asisten Demang Datuk Kodoh Nan Hitam. Prasasti penanda ini
          mengisyaratkan keindahan air terjun Sarasah Bunta. Tak jauh dari
          Sarosah Boenta, Anda juga bisa menikmati keindahan air terjun dengan
          ketinggian di atas lima puluh meter yang juga terletak di pinggir
          jalan. Di air terjun, Anda bisa menikmati berbagai penganan lokal yang
          dijual oleh masyarakat sambil menatap ke arah air terjun Akar Berayun.
        </p>
        <br></br>
        <br></br>
        <p>
          Terdapat tiga kawasan yang dapat anda tuju di lembah harau yaitu,
          Resort aka barayu,Resort sarasa bunta,Resort rimbo piobang.
        </p>
      </div>

      {/* ini bagaian footer */}
      <div className="relative w-full h-[250px] top-[850px] bg-cyan-600  ">
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
        <aside className="w-full h-[200px] flex justify-center absolute top-[1300px] ">
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
    </>
  );
}
