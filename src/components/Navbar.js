import React, { useState } from "react";
import { FiAlignJustify, FiHome } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import ubh from "../assets/ubh.png";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [info, setInfo] = useState(false);

  function clickInfo() {
    setInfo(!info);
    setActive();
  }

  function HandleClick() {
    setActive(!active);
    setInfo();
  }
  const list = [
    {
      url: "section",
      title: "Home",
    },
    {
      url: "about",
      title: "Destinasi",
    },
    {
      url: "contact",
      title: "Contact",
    },
  ];

  return (
    <>
      <nav
        style={{ height: "55px" }}
        className="pointer-events-none flex  justify-center z-[100] bg-cyan-800 fixed right-0 left-0 text-3xl pt-3 pl-3 cursor-pointer"
      >
        <FiHome className=" text-white mr-4 " />
        <BsFillQuestionCircleFill
          onClick={clickInfo}
          className="hover:text-white pointer-events-auto z-30 ml-[100px] -mr-[140px]  text-black"
        />
        <FiAlignJustify
          onClick={HandleClick}
          className=" pointer-events-auto fixed left-5 active:text-red-800 hover:text-white "
        />
      </nav>

      {/* ini baris navbarNav */}
      {active && (
        <nav
          style={{
            width: "100%",
            height: "10vh",
            top: "55px",
            borderBottom: "2px solid cyan",
          }}
          className="bg-cyan-600 z-50 fixed right-0  "
        >
          <ul className="flex justify-center space-x-6 mt-3 ">
            {list.map((item, index) => (
              <li
                className={`duration-500  text-white text-[17px] mt-2 ml-1 pl-2 hover:bg-cyan-900 hover:text-white  cursor-pointer w-[67px] rounded ${
                  index === 2 ? "w-[73px]" : ""
                }${index === 1 ? "w-[85px]" : ""} `}
                key={index}
              >
                <Link to={item.url} smooth={true} duration={500}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {info && (
        <div
          style={{
            borderBottom: "2px solid cyan",
            boxShadow: "0 0 10px cyan ",
          }}
          className="text-center w-full h-[58%]  bg-cyan-600 z-50 fixed top-14 right-0  "
        >
          <img
            src={ubh}
            alt=""
            className=" mt-5 object-contain w-[100px] relative left-[37%] "
          />
          <p className="mt-2 font-serif text-white text-[14px] ">
            selamat datang di penjelajah nqq, saya adalah pemilik situs web ini
            Saya seorang mahasiswa di Universitas Bung Hatta, mudah-mudahan
            situs web ini dapat membantu Anda menemukan tujuan perjalanan
            wisata, Website ini belum sempurna, dan komentar serta saran Anda
            tentang website ini dapat membantu website ini dapat berkembang.
            <br></br>
            <br></br>
            Website ini dikerjakan oleh 6 orang, saya sebagai programmer, dan 5
            orang lainnya sebagai pencari informasi yang akurat tentang
            destinasi wisata dari berbagai sumber.
          </p>
        </div>
      )}
    </>
  );
}
