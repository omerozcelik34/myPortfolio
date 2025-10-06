import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-center lg:justify-between">
      <div className="flex flex-col items-start justify-center space-y-6 basis-2/3">
        {/* my name */}
        <div className="text-3xl font-bold">
          Merhaba, Ben Seyit Ömer Özçelik
        </div>
        {/* summary */}
        <p className="lg:pr-20 xl:pr-4">
          Merhaba, ben Seyit Ömer Özçelik. Kocaeli Üniversitesi Bilgisayar
          Programcılığı mezunu, bir Frontend Developer'ım. Ağırlıklı olarak
          React tarafında çalışarak modern, hızlı ve kullanıcı odaklı responsive
          arayüzler geliştiriyorum. frontend yetkinliklerimin yanı sıra, geçmiş
          tecrübelerimden gelen bir temel backend bilgisine sahibim. Sürekli
          öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
        </p>
        {/* location */}
        <div className="flex flex-row items-center space-x-2">
          <IoLocationOutline />
          <p>Derince, Kocaeli</p>
        </div>
        {/* Info */}
        <div className="flex flex-row items-center space-x-2">
          <GoDotFill className="text-green-400" />
          <p>Yeni Projelere Açık</p>
        </div>
        {/* Links */}
        <div className="flex flex-row items-center space-x-3 mt-5">
          <Link
            className="transition-all hover:-translate-y-1 hover:scale-120 duration-300"
            href={"https://github.com/omerozcelik34"}
          >
            <FiGithub className="text-2xl" />
          </Link>
          <Link
            className="transition-all hover:-translate-y-1 hover:scale-120 duration-300"
            href={"https://www.linkedin.com/in/seyitomerozcelik/"}
          >
            <FiLinkedin className="text-2xl" />
          </Link>
          <Link
            className="transition-all hover:-translate-y-1 hover:scale-120 duration-300"
            href={"https://www.instagram.com/omerozcelik34/#"}
          >
            <FiInstagram className="text-2xl" />
          </Link>
        </div>
      </div>

      <Image
        className="w-[260px] h-[290px] sm:w-[400px] sm:h-[440px] lg:w-[300px] lg:h-[330px] shadow-lg/70 rounded-3xl"
        src={"/seyit.jpg"}
        alt="pp"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Hero;
