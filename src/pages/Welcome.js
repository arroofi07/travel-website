import React from "react";
import univ from "../assets/univ.jpg";
import { Link } from "react-router-dom";
import ptik from "../assets/ptik.jpeg";
import  TypeWriter from 'typewriter-effect'
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Welcome() {
  const ikons = [
    <a href="https://www.facebook.com/bunghatta.univ" style={{ color: "blue" }}>
      <FaFacebook />
    </a>,
    <a href="https://twitter.com/beritabunghatta" style={{ color: "skyblue" }}>
      <FaTwitterSquare />
    </a>,
    <a
      href="https://www.instagram.com/universitasbunghatta/"
      style={{ color: "red" }}
    >
      {" "}
      <FaInstagram />{" "}
    </a>,
    <a
      href="https://www.youtube.com/channel/UCYdTfnDWzpYhoi6jh6Iej-A"
      style={{ color: "red" }}
    >
      {" "}
      <FaYoutube />
    </a>,
    <a
      href="https://www.linkedin.com/school/universitas-bung-hatta"
      style={{ color: "skyblue" }}
    >
      <FaLinkedin />
    </a>,
  ];

  const fakultas = [
    <a href="https://ekonomi.bunghatta.ac.id/index.php/id/">
      Fakultas Ekonomi <br /> dan bisnis
    </a>,
    <a href="https://hukum.bunghatta.ac.id/">fakultas Hukum</a>,
    <a href="https://fkip.bunghatta.ac.id/index.php/id/">
      Fakultas Keguruan <br /> Dan Ilmu Pendidikan
    </a>,
    <a href="https://fib.bunghatta.ac.id/index.php/id/">
      Fakultas Ilmu Budaya
    </a>,
    <a href="https://ftsp.bunghatta.ac.id/index.php/id/">
      Fakultas Teknik Sipil <br /> Dan Perencanaan
    </a>,
    <p>
      Fakultas Perikanan <br /> Dan Ilmu Kelautan
    </p>,
    <a href="https://fti.bunghatta.ac.id/">
      Fakultas Teknologi <br /> Industri
    </a>,
  ];

  const fasilitas = [
    <a href="https://bunghatta.ac.id/page-6-penunjang-perkuliahan.html">
      Penunjang Perkuliahan
    </a>,
    <a href="https://bunghatta.ac.id/page-14-beasiswa.html">Beasiswa</a>,
    <a href="https://bunghatta.ac.id/page-8-kegiatan-kemahasiswaan.html">
      Kegiatan Kemahasiswaan
    </a>,
    <a href="https://bunghatta.ac.id/page-9-layanan-it.html">Layanan IT</a>,
  ];

  return (
    <div className="w-full h-[180vh] relative z-50 text-center font-serif   ">
      <img src={univ} alt="" className="object-cover w-full h-[200px] " />
      <Link to="home">
        <button
          style={{ border: "1px solid cyan", boxShadow: "0 0 10px black" }}
          className="bg-yellow-500 text-black hover:bg-black hover:text-white font-serif  mt-[10%] w-[25%] rounded-xl  "
        >
          Get Started
        </button>
      </Link>

      <div className="w-full mt-5 pt-3  h-[100px]  text-center  ">
        <p className="text-white text-[14px] font-serif font-extralight ">
          Kami, mahasiswa Universitas Bung Hatta dari prodi ptik, menjalankan
          kerja kelompok yang solid dan sinergis dalam pembuatan website ini.
          Dengan saling berbagi tugas, ide, dan kemampuan, kami merencanakan,
          merancang, dan mengembangkan situs web ini dengan tujuan menciptakan
          pengalaman online yang optimal. Setiap anggota kelompok kami memiliki
          peran khusus, termasuk pemrograman, desain, penulisan konten,
          pengujian.
        </p>
      </div>

      <h1 
      style={{textShadow:'0 0 10px cyan'}}
      className="mt-[130px] -mb-[120px] text-white text-[30px] " >
       <TypeWriter
       options={{
        strings: ["PTIK"],
        autoStart:true,
        loop:true,
        typeSpeed:-5,
       }}
       />
      </h1>

      <div className=" w-full h-[300px] mt-[120px] flex justify-center items-center  ">
        <img
          id="ptik"
          src={ptik}
          alt=""
          className="w-[330px] h-[250px] rounded-3xl "
        ></img>
      </div>

      <p className="mt-[20px] text-white text-[14px] ">
        "Kemajuan suatu bangsa tidak hanya tergantung pada kekayaan alamnya,
        tetapi terutama pada kualitas sumber daya manusianya"<br></br>
        <span className="text-[13px]  ">'Bung Hatta'</span>
      </p>
      <br></br>
      <br></br>
      <p className="text-white font-serif text-[14px] ">
        Dengan adanya website ini kami harap mampu untuk mengoptimalkan kualitas
        SDM, yang bisa memanfaatkan faktor geostrategis dan wawasan nusantara
        terutama di provinsi sumatera barat.
      </p>

      {/* bagian footer  */}
      <div className="w-full h-[390px]  pt-6 flex bg-cyan-700 mt-[20px] justify-center ">
        <p className="text-black text-[20px]  font-bold absolute   ">
          UNIVERSITAS BUNG HATTA{" "}
        </p>

        {/* fakultas */}
        <ul className="-m-20 mt-10   w-[120px] h-[300px] ">
          <h2 className="text-left font-bold ">FAKULTAS</h2>
          {fakultas.map((listFakultas, index) => (
            <li
              key={index}
              className="hover:text-red-500 hover:underline  text-white  mb-2 text-[12px] text-left "
            >
              {listFakultas}{" "}
            </li>
          ))}
        </ul>

        {/* Fasilitas */}
        <ul className="ml-[120px] mt-10  w-[120px] ">
          <h2 className="text-left font-bold ">FASILITAS</h2>
          {fasilitas.map((listFasilitas, index) => (
            <li
              key={index}
              className="hover:text-red-500 hover:underline  text-white  mb-2 text-[12px] text-left "
            >
              {listFasilitas}
            </li>
          ))}
        </ul>

        {/* ikons */}
        <ul className=" h-[100px] mt-10 ml-6 -mr-20 text-[30px] ">
          {ikons.map((listIkon, index) => (
            <li key={index} className="mt-5 hover:animate-bounce ">
              {" "}
              {listIkon}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
