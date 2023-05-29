import { FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowCircleLeft } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import singkarak2 from "../assets/singkarak2.png";
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

export default function DanauSingkarak() {
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
        <Link to="/">
          <HiArrowCircleLeft className="relative -left-[120px] text-white top-1 " />
        </Link>
        <FaMapMarkedAlt className="text-white mr-11 " />
      </nav>

      <div className="w-full h-[150px] relative ">
        <img
          src={singkarak2}
          alt=""
          className="object-cover absolute top-[54px] "
        />
      </div>

      <div className="text-[14px]  w-full h-[200px] mt-[160px] font-serif text-black text-center -mb-[440px] ">
        <h1
          className="text-4xl font-serif text-white font-extralight mb-5 "
          style={{ textDecoration: "underline 1px cyan" }}
        >
          <Typewriter
            options={{
              strings: ["Danau Singkarak"],
              autoStart: true,
              loop: true,
              typeSpeed: -5,
            }}
          />
        </h1>
        <p>
          {" "}
          Danau Singkarak adalah sebuah danau yang membentang di dua kabupaten
          yang terdapat di provinsi Sumatra Barat, Indonesia, yaitu kabupaten
          Solok dan kabupaten Tanah Datar. Danau ini memiliki luas 107,8 km² dan
          merupakan danau terluas kedua di pulau Sumatra setelah danau toba di
          Sumatra Utara. Danau ini merupakan hulu dari sungai atau Batang
          Ombilin. Namun sebagian air danau ini dialirkan melalui terowongan
          menembus Bukit Barisan ke Batang Anai untuk menggerakkan generator
          PLTA Singkarak di dekat Lubuk Alung, kabupaten Padang Pariaman.
        </p>
        <br></br>
        <br></br>
        <p>
          Danau Singkarak sangat bermanfaat bagi masyarakat di sekitarnya.
          Selain sebagai sumber pengairan lahan pertanian, danau ini juga
          dimanfaatkan sebagai pembangkit listrik yang airnya dialiskan melewati
          terowongan menembus Bukit Barisan ke Batang Anai untuk menggerakkan
          generator PLTA Singkarak di dekat Lubuk Alung Kabupaten Padang
          Pariaman. Tidak hanya itu saja manfaat danau ini. Danau Singkarak juga
          menjadi tempat pembudidayaan ikan serta sebagai tempat wisata. Danau
          Singkarak memiliki pemandangan alam yang indah dan menakjubkan. Jika
          dipandang dari tepian danau, akan terlihat keindahan danau yang
          dikelilingi bukit-bukit yang hijau. Dengan pemandangan yang indah ini,
          maka tidak salah jika objek wisata ini menjadi tempat wisata favorit
          di Provinsi Sumatera Barat.
        </p>
        <br></br>
        <br></br>
        <p>
          Selain terkenal akan keindahan alamnya, Danau Singkarak juga terkenal
          akan spesies ikan endemiknya, yaitu ikan Bilih. Ikan bilih ini
          merupakan spesies ikan yang hanya hidup di Danau Singkarak saja. Ikan
          ini sangat unik karena hanya dapat hidup di danau ini dan jika diambil
          kemudian di taruh di akuarium ikan ini tidak dapat bertahan hidup.
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
        <aside className="w-full h-[200px] flex justify-center absolute top-[1120px] ">
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
