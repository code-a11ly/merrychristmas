'use client';
import { useEffect, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
  // add more fields here
};

export default function Forms() {
  

  const [dataToSend, setDataToSend] = useState({
    name: '',
    email: '',
    password: '',
    is_admin: false,
    role: 'Employee'
  });

  const handleInputChange = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setDataToSend((prev) => ({
      ...prev,
      [key]: value,
    }));
  };


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // registerUser();
      }}
    >
      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-md text-gray-400 mb-2">
          Seu Nome
        </label>
        <input
          type="text"
          id="name"
          // placeholder="Enter your name"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={dataToSend.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
        />
      </div>
      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-md text-gray-400 mb-2">
          Nome do Amig(a)
        </label>
        <input
          type="text"
          id="name"
          // placeholder="Enter your name"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={dataToSend.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
        />
      </div>
      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-normal text-gray-400 mb-2">
          Email do Amig(a)
        </label>
        <input
          type="text"
          id="email"
          placeholder="Informe email"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={dataToSend.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-red-500 text-md text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
