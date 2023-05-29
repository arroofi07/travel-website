import mountain from "../assets/mountain.mp4";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import {
  FaBluetoothB,
  FaGithub,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
const Contact = () => {
  const ikon = [
    <FaBluetoothB />,
    <FaGithub />,
    <FaTelegram />,
    <FaWhatsapp />,
    <FaEnvelope />,
  ];
  const [infoKontak, setInfoKontak] = useState(null);
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

  const clickInfoKontak = (index) => {
    setInfoKontak(index);
  };
  const clickInfoKontakClose = () => {
    setInfoKontak();
  };
  return (
    <div
      id="contact"
      className="w-full h-[300px] relative
    top-[255%]   "
    >
      <video
        src={mountain}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover opacity-90 "
      />
      <p className="absolute top-[100px] left-[90px] text-xl text-red-900 font-bold ">
        Hubungi kami di sini
      </p>

      <ul className="flex justify-center  absolute top-[170px] left-[75px] space-x-5 ">
        {ikon.map((listIkon, ikonIndex) => (
          <li
            onClick={() => clickInfoKontak(ikonIndex)}
            key={ikonIndex}
            className={`cursor-pointer hover:animate-spin transfrom-origin-center   text-red-900 text-3xl font-extralight" ${
              ikonIndex === 0 ? "hidden" : ""
            } `}
          >
            {listIkon}
          </li>
        ))}
      </ul>

      {infoKontak && (
        <aside className="w-full h-[200px] flex justify-center absolute -top-[100px] ">
          <ul
            id="infoKontak"
            style={{ border: "1px solid cyan" }}
            className={`w-[70%] h-[150px]  bg-cyan-600 mt-10 rounded-2xl text-center  `}
          >
            <AiFillCloseCircle
              onClick={clickInfoKontakClose}
              style={{ color: "" }}
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
};
export default Contact;
