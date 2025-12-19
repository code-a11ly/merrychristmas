'use client';
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetDate: number;
};

const calculateTimeLeft = (target: number): TimeLeft | null => {
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number): string => String(n).padStart(2, "0");

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "DIAS" },
  { key: "hours", label: "HORAS" },
  { key: "minutes", label: "MINUTOS" },
  { key: "seconds", label: "SEGUNDOS" },
];

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#4f4f4f]">
        É NATAL! ✨
      </h1>
    );
  }

  return (
    <>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#4f4f4f]">
        FALTAM
      </h1>

      <div className="flex gap-5">
        {UNITS.map(({ key, label }) => (
          <div key={key} className="text-center">
            <div className="bg-red-500 text-white text-3xl w-20 p-2 rounded-md">
              {pad(timeLeft[key])}
            </div>
            <span className="block text-gray-400 text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>

      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#4f4f4f]">
        PARA O NATAL
      </h1>
    </>
  );
}
