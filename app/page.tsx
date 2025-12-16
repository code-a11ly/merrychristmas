'use client';
import Image from "next/image";
import Snow from './snow/snow';
import Card from './card/card';

import "./globals.css";
import { quicksand } from "./fonts";
import { sacramento } from "@/app/fonts";

export default function Home() {


  return (
    <>
    <Snow />
    <div className="
        flex min-h-screen items-center justify-center font-sans
        bg-[url('/christmas_balls.png')]
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-white z-50">
        <p
          className={`
            slide-message
            whitespace-nowrap
            py-2
            text-red-500
            text-lg
            font-semibold
            ${quicksand.className}
          `}
        >
          🎄 Neste Natal, que a luz da esperança ilumine cada lar,
          que a paz preencha os corações
          e que o amor esteja presente em cada detalhe.

          ✨ A equipe de Tecnologia da Informação deseja a todos
          um Natal repleto de alegria, união e momentos inesquecíveis,
          e que o Ano Novo traga novas conquistas, saúde e sucesso.

          🎅 Feliz Natal e um próspero Ano Novo! 🎁
        </p>
      </div>

      <Image
        src="/tree.png"
        alt="Tree"
        width={500}
        height={1000}
        className="h-screen w-auto object-cover"
        priority
      />

      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 sm:items-start">

        <h1 className={`${quicksand.className} text-4xl font-bold text-white-500`}>
          A equipe da TI<br/>deseja a todos um
        </h1>

        <h1 className={`
          ${sacramento.className}
          text-white
          leading-none
          text-6xl
          sm:text-7xl
          md:text-8xl
          lg:text-9xl
          xl:text-[10rem]
          2xl:text-[12rem]
        `}>
          Feliz<br/>Natal
        </h1>

      </main>
      <Card />

    </div>
    </>
  );
}
