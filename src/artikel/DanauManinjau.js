import { FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowCircleLeft } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import maninjau from "../assets/maninjau.jpg";
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

export default function DanauManinjau() {
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
          <HiArrowCircleLeft className="relative  -left-[120px] z-50 text-white top-1" />
        </Link>
        <FaMapMarkedAlt className="text-white mr-11 " />
      </nav>

      <div className="w-full h-[150px] relative bg-red-500  ">
        <img src={maninjau} alt="" className="object-cover -mt-[10px]" />
      </div>

      <div className="text-[14px]  w-full h-[200px] mt-[450px] font-serif text-black text-center -mb-[90px] ">
        <h1
          className="text-4xl font-serif text-white font-extralight mb-5 "
          style={{ textDecoration: "underline 1px cyan" }}
        >
          <Typewriter
            options={{
              strings: ["Danau Maninjau"],
              autoStart: true,
              loop: true,
              typeSpeed: -5,
            }}
          />
        </h1>
        <p>
          Danau Maninjau, Danau Legendaris di Jantung Agam Daya tarik Danau
          Maninjau terletak pada keindahan panorama alamnya yang bisa dilihat
          dari kejauhan. Danau Maninjau merupakan sebuah danau vulkanik yang
          berada tepat di jantung Kabupaten Agam, Sumatera Barat. Terletak di
          ketinggian kurang lebih 460 meter diatas permukaan laut, danau ini
          membentang seluas 100 km persegi dengan kedalaman rata-rata 105 meter.
          Dengan luasnya tersebut, Maninjau menjadi danau terluas kesebelas di
          Indonesia. Menurut sejarahnya, danau ini terbentuk akibat erupsi
          vulkanik dari Gunung Sitinjau yang terjadi kurang lebih 52.000 tahun
          yang lalu. Kaldera yang terbentuk sedemikian luas kemudian berkembang
          menjadi sebuah danau. Hal ini sama seperti yang terjadi pada Danau
          Toba di Sumatera Utara dan Danau Batur di Bali.
        </p>
        <br></br>
        <br></br>
        <p>
          Di luar kacamata keilmuan, terdapat sebuah legenda yang berkembang
          secara turun temurun di kalangan masyarakat setempat mengenai asal
          muasal dari danau ini. Legenda ini dikenal orang sebagai ‘Bujang
          Sembilan’, yang menceritakan kisah 10 bersaudara kakak beradik yang
          terdiri dari 9 orang bujang dan seorang gadis. Alkisah sang gadis
          menjalin kasih dengan pemuda bernama Sigiran, tetapi kisah cinta
          berujung dengan munculnya fitnah dari kesembilan bujang. Para bujang
          ini menuduh hubungan yang terjadi antara keduanya telah melampaui
          batas norma masyarakat. Dengan tuduhan yang dilontarkan oleh
          kesembilan saudaranya, sang gadis beserta kekasihnya kemudian
          bersumpah. Keduanya akan melompat ke kawah Gunung Tinjau (Sitinjau)
          untuk membuktikan kesucian diri mereka. Sebelum melompat, mereka
          berkata dengan lantang, jika mereka bersalah maka gunung tersebut
          tidak akan meletus, tetapi jika mereka berdua tidak bersalah maka
          gunung tersebut akan meletus. Kisah ini pun berakhir dengan meletusnya
          Gunung Sitinjau sehingga membuktikan keduanya tidak bersalah.
        </p>
        <br></br>
        <br></br>
        <p>
          Daya tarik Danau Maninjau terletak pada keindahan panorama alamnya
          yang bisa dilihat dari kejauhan. Karenanya, tidak lengkap jika
          membahas Danau Maninjau tanpa membahas spot ideal untuk menikmatinya.
          Terutama bagi para pecinta fotografi pastinya tidak ingin melewatkan
          keindahan tersebut tanpa mengabadikannya. Spot terbaik untuk mengamati
          Danau Maninjau adalah dari tengah kawasan yang disebut kelok 44, yaitu
          dari sekitar kelok 23 hingga kelok 30. Di sekitar area inilah
          pemandangan bentangan danau yang dihiasi hamparan sawah nan subur
          terlihat sangat indah dan dapat memberikan ketenangan hati bagi mereka
          yang menyaksikannya
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
        <aside className="w-full h-[200px] flex justify-center absolute top-[1750px] ">
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
