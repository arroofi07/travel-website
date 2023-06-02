import { useState } from "react";
import { FiCircle, FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import maninjau from "../assets/maninjau.jpg";
import lembah from "../assets/lembah-harau.jpg";
import ngaraiSianok from "../assets/ngaraiSianok.jpg";
import ngaraiSianok2 from "../assets/sianok.jpg";
import puncakLawang from "../assets/lawang.jpg";
import { useEffect } from "react";
import TypeWriter from "typewriter-effect";
import { GiCompass } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart, AiOutlineStar } from "react-icons/ai";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [change, setChange] = useState(false);

  let image = [
    {
      url: lembah,
      rating: 4.7,
      like: "1.7k",
      love1: <AiOutlineHeart />,
      love2: <AiFillHeart />,
    },
    {
      url: maninjau,
      rating: 4.6,
      like: "1.2k",
      love1: <AiOutlineHeart />,
      love2: <AiFillHeart />,
    },
    {
      url: ngaraiSianok,
      rating: 4.6,
      like: "2.6k",
      love1: <AiOutlineHeart />,
      love2: <AiFillHeart />,
    },
    {
      url: puncakLawang,
      rating: 4.6,
      like: "5.5k",
      love1: <AiOutlineHeart />,
      love2: <AiFillHeart />,
    },
    {
      url: ngaraiSianok2,
      rating: 4.6,
      like: "2.6k",
      love1: <AiOutlineHeart />,
      love2: <AiFillHeart />,
    },
  ];

  const h1Destinasi = [
    "Lembah Harau . . . ",
    "Danau Maninjau . . . ",
    "Ngarai Sianok . . . ",
    "Puncak Lawang . . . ",
    "Ngarai Sianok . . . ",
  ];
  const jumlahDestinasi = "5_Destinasi";
  const ikon = [<GiCompass />, <AiOutlineHeart />, <AiOutlineStar />];

  const prevSlide = () => {
    const isFristSlide = currentIndex === 0;
    const newIndex = isFristSlide ? image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setChange(false);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === image.length - 1;
    const newIndex2 = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex2);
    setChange(false);
  };

  function goToSlide(imagesSlide) {
    setCurrentIndex(imagesSlide);
  }

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentTime = time.toLocaleTimeString("id-ID", {
    timeZone: "Asia/Jakarta",
  });

  const clickHeart = () => {
    setChange(!change);
  };

  return (
    <>
      <p
        id="about"
        style={{ textShadow: "0 0 10px red" }}
        className="z-30 absolute text-5xl top-[500px]  right-[20px] text-white  "
      >
        <span className="text-[20px]">
          <TypeWriter
            options={{
              strings: ["Sumbar..."],
              autoStart: true,
              loop: true,
              typeSpeed: -5,
            }}
          />
        </span>
        {currentTime}
      </p>

      <h1
        style={{
          textShadow: "0 0 10px cyan",
          textDecoration: "underline 2px black ",
        }}
        className={` absolute top-[820px] text-white font-extralight text-[20px]   ml-[50px] `}
      >
        <TypeWriter
          options={{
            strings: [`${h1Destinasi[currentIndex]}`],
            autoStart: true,
            loop: true,
            typeSpeed: -5,
          }}
        />
      </h1>

      <div
        className={` text-white absolute text-[21px] top-[1135px]  left-[85px]  `}
      >
        <p className="opacity-70 left-7 z-30 top-[52px] absolute text-[17px] ">
          {image[currentIndex].rating}
        </p>
        <p className="opacity-70 left-7 z-30 top-[15px] absolute text-[17px] ">
          {image[currentIndex].like}
        </p>
        <p className="opacity-70 left-[158px] z-20 top-[14.5px] absolute text-[16px] ">
          {jumlahDestinasi}
        </p>
        <ul className="inline-block space-y-4 ">
          {ikon.map((listIkon, index) => (
            <li
              className={` ${
                index === 0 ? "absolute top-[15px] left-[130px] " : ""
              }`}
              key={index}
            >
              {listIkon}
            </li>
          ))}
        </ul>
      </div>

      <div className="top-[700px]  max-w-[1400px] h-[1294px]   w-full m-auto py-16 px-4 relative  ">
        <div
          style={{
            boxSizing: "border-box",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${image[currentIndex].url})`,
            ...(currentIndex === 2 && { backgroundPositionY: "-200px" }),
          }}
          className=" relative top-[100px] w-full h-[240px]  rounded-2xl bg-center
              bg-cover duration-500 group"
        >
          <p
            onClick={() => {
              clickHeart();
            }}
            className={` cursor-pointer text-red-600 font-extrabold absolute right-5 top-4 text-2xl rounded-full ${
              change ? "hidden" : ""
            } `}
          >
            {image[currentIndex].love1}
          </p>
          <p
            onClick={clickHeart}
            className={`cursor-pointer text-red-600 font-extrabold absolute right-5 top-4 text-2xl rounded-full ${
              !change ? "hidden" : ""
            } `}
          >
            {image[currentIndex].love2}
          </p>
          <FiChevronsLeft
            onClick={prevSlide}
            className=" cursor-pointer z-40 rounded-2xl bg-gray-500 bg-opacity-40  hidden group-hover:block -translate-x-0 translate-y-[-50%] absolute top-[124px] text-4xl  ml-2  "
          />
          <FiChevronsRight
            onClick={nextSlide}
            className="cursor-pointer rounded-2xl bg-gray-500 bg-opacity-40 hidden group-hover:block -translate-x-0 translate-y[50%] absolute top-[106px] -right-5 mr-7 text-4xl   "
          />
        </div>

        <ul className="flex justify-center space-x-3 ">
          {image.map((images, imagesIndex) => (
            <li key={imagesIndex} className="">
              <FiCircle
                onClick={() => goToSlide(imagesIndex)}
                className="text-[10px] mt-28 bg-black rounded-2xl cursor-pointer text-gray-600"
              />
            </li>
          ))}
        </ul>
        <p className="mt-24 font-serif font-bold text-white "> Trip Flows</p>
      </div>
    </>
  );
}
