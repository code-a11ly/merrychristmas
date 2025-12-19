'use client';

import dynamic from "next/dynamic";
import { useState } from 'react';

const Countdown = dynamic(() => import("./countdown/countdown"), {
  ssr: false,
});

export default function Card() {
  // Just a FIXED timestamp (safe for SSR)
  const targetDate = new Date("2025-12-25T00:00:00").getTime();


  return (

      <main className="flex h-fit w-fit m-10 max-w-3xl rounded-lg flex-col items-center justify-between py-8 px-8 bg-white sm:items-start">

        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">

          
          <Countdown targetDate={targetDate} />
          

          {/*
          <p className="max-w-md text-lg leading-8 text-zinc-600">
            Quer enviar uma{" "}
            <a
              className="font-medium text-zinc-950"
            >
              Mensagem de Natal
            </a>
            ?
          </p>
          */}
        </div>

        {/* Submit Button */}
        {/*
        <button
          type="submit"
          className="flex justify-center gap-4 mt-2 w-full bg-red-500 text-md text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Enviar mensagem
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

        </button>
        */}
      </main>
  );
}
