import lembahHarau from "../assets/lembah-harau.jpg";
import ngaraisianok from "../assets/sianok.jpg";
import maninjau from "../assets/lawang.jpg";
import danauSingkarak from "../assets/singkarak.jpg";
import puncakLawang from "../assets/puncak_lawang.jpg";
import { GoGlobe } from "react-icons/go";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { useState } from "react";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

export default function TripFlow() {
  const daftar = [
    {
      gambar: lembahHarau,
      ikon: <GoGlobe />,
      yes: <AiTwotoneLike />,
      no: <AiTwotoneDislike />,
      title: "Lembah Harau",
      url: "lembah-harau",
      prov: "Sumatera Barat",
      Kab: "Payakumbuh",
    },
    {
      gambar: maninjau,
      ikon: <GoGlobe />,
      yes: <AiTwotoneLike />,
      no: <AiTwotoneDislike />,
      title: "Danau Maninjau",
      url: "danau-maninjau",
      prov: "Sumatera Barat",
      Kab: "Agam",
    },
    {
      gambar: ngaraisianok,
      ikon: <GoGlobe />,
      yes: <AiTwotoneLike />,
      no: <AiTwotoneDislike />,
      title: "Ngarai Sianok",
      url: "ngarai-sianok",
      prov: "Sumatera Barat",
      Kab: "Agam",
    },
    // {
    //   gambar: puncakLawang,
    //   ikon:<GoGlobe/>,
    //   title: "Puncak Lawang",
    //   prov: "Sumatera Barat",
    //   Kab: "Agam",
    // },
    {
      gambar: danauSingkarak,
      ikon: <GoGlobe />,
      yes: <AiTwotoneLike />,
      no: <AiTwotoneDislike />,
      title: "Danau Singkarak",
      url: "danau-singkarak",
      prov: "Sumatera Barat",
      Kab: "Solok dan Tanah Datar",
    },
    {
      gambar: puncakLawang,
      ikon: <GoGlobe />,
      yes: <AiTwotoneLike />,
      no: <AiTwotoneDislike />,
      title: "Puncak Lawang",
      url: "puncak-lawang",
      prov: "Sumatera Barat",
      Kab: "Agam",
    },
  ];

  // const likeIkon = [
  //   {
  //     yes: <GoThumbsup />,
  //     no: <GoThumbsdown />,
  //   },
  //   {
  //     yes: <GoThumbsup />,
  //     no: <GoThumbsdown />,
  //   },
  //   {
  //     yes: <GoThumbsup />,
  //     no: <GoThumbsdown />,
  //   },
  //   {
  //     yes: <GoThumbsup />,
  //     no: <GoThumbsdown />,
  //   },
  // ];

  const [likeIndices, setLikeIndices] = useState([]);
  const [disLikeIndices, setDisLikeIndices] = useState([]);
  const clickLike = (index) => {
    if (likeIndices.includes(index)) {
      // Ikon sudah diklik sebelumnya, jadi hapus dari likeIndices
      setLikeIndices(likeIndices.filter((index2) => index2 !== index));
    } else {
      // Ikon belum diklik sebelumnya, tambahkan ke likeIndices
      setLikeIndices([...likeIndices, index]);
    }

    if (disLikeIndices.includes(index)) {
      setDisLikeIndices(disLikeIndices.filter((index2) => index2 !== index));
    }
  };
  const clickDisLike = (index) => {
    if (disLikeIndices.includes(index)) {
      // Ikon sudah diklik sebelumnya, jadi hapus dari likeIndices
      setDisLikeIndices(disLikeIndices.filter((index2) => index2 !== index));
    } else {
      // Ikon belum diklik sebelumnya, tambahkan ke likeIndices
      setDisLikeIndices([...disLikeIndices, index]);
    }

    if (likeIndices.includes(index)) {
      setLikeIndices(likeIndices.filter((index2) => index2 !== index));
    }
  };

  // ini baris untuk membuat logika alamt google map

  const alamat = [
    {
      latitude: -0.109389,
      longitude: 100.663725,
    },
    {
      latitude: -0.310608,
      longitude: 100.192012,
    },
    {
      latitude: -0.307006,
      longitude: 100.359723,
    },
    {
      latitude: -0.609571,
      longitude: 100.541842,
    },
    {
      latitude: -0.264184,
      longitude: 100.242712,
    },
  ];

  return (
    <div
      // style={{ borderLeft: "2px dashed black" }}
      className="-top-[100px]  max-w-[1400px] h-[1010px]   w-full m-auto py-16 px-4 relative  "
    >
      <ul className={`z-20 space-y-[190px] absolute  top-[75px] left-[25px] `}>
        {alamat.map((lokasi, index) => {
          const { latitude, longitude } = lokasi;
          const mapLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

          return (
            <li className="">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[20px] text-white "
              >
                <SiGooglemaps className="space-y-[600px] hover:text-red-500  " />
                {/* lokasi {index + 1}; */}
              </a>
            </li>
          );
        })}
      </ul>

      <ol className="space-y-8">
        {daftar.map((listDaftar, index) => (
          <li
            key={index}
            className={` inline-block text-left pb-[20px] text-[17px] font-serif bg-cyan-800 bg-opacity-50 relative bg-center  w-full  rounded-2xl box-border -ml-[0.1px] s-mt-[60px] h-[180px] `}
          >
            <img
              src={listDaftar.gambar}
              alt=""
              className="absolute  object-cover rounded-2xl w-[150px] ml-2 mt-[35px]  h-[120px] "
            />
            <h1 className="ml-[197px] text-xl font-bold mb-4 mt-8 cursor-pointer ">
              <Link to={listDaftar.url}> {listDaftar.title}</Link>
            </h1>
            <p className="ml-[170px] text-[13px] text-white flex ">
              <span className="mr-2 text-white ">{listDaftar.ikon}</span>
              {listDaftar.prov}{" "}
            </p>
            <p className="ml-[197px] text-[13px] text-white ">
              {listDaftar.Kab}{" "}
            </p>

            <h1
              onClick={() => clickLike(index)}
              className={`absolute right-12 top-[154px] cursor-pointer hover:text-red-600 ${
                likeIndices.includes(index) ? "text-red-500 " : ""
              }`}
            >
              {listDaftar.yes}
            </h1>
            <h1
              onClick={() => clickDisLike(index)}
              className={`absolute right-3 top-[154px] cursor-pointer hover:text-red-600 ${
                disLikeIndices.includes(index) ? "text-red-500 " : ""
              }`}
            >
              {listDaftar.no}
            </h1>
          </li>
        ))}
      </ol>

      {/* ini baris like  */}
      {/* <ol>
        {likeIkon.map((listLike, index) => (
          <li className="text-xl text-black z-50 space-y-[200px] relative">
         
          </li>
        ))}
      </ol> */}
    </div>
  );
}
