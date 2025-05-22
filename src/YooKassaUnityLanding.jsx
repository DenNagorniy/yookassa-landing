// src/YooKassaUnityLanding.jsx
import React, { useState } from "react";

export default function YooKassaUnityLanding() {
  const [email, setEmail] = useState("");

  const cards = [
    {
      icon: "/yookassa-landing/img/check.png",
      title: "Полная интеграция",
      text: "Приём платежей, web-hooks, чеки 54-ФЗ — всё из коробки.",
      alt: "Полная интеграция",
    },
    {
      icon: "/yookassa-landing/img/book-open.png",
      title: "Документация RU/EN",
      text: "Чёткий гайд + пример сцены. Запустите демо и меняйте префабы.",
      alt: "Документация",
    },
    {
      icon: "/yookassa-landing/img/server.png",
      title: "Безболезненный деплой",
      text: "UPM-пакет + Docker-сервер за 1 команду. Никаких шаманств.",
      alt: "Деплой",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-1/3 bg-gradient-to-b from-[#0d1e37] to-[#122b55] items-center justify-center">
        <div className="text-center text-white">
          <img
            src="/yookassa-landing/img/logo-yookassa-unity-white.png"
            alt="YooKassa for Unity"
            className="mx-auto w-32 mb-4"
          />
          <h2 className="text-2xl font-semibold">
            YooKassa
            <br />
            for Unity
          </h2>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-white py-12 px-6 flex flex-col items-center">
        {/* Header */}
        <header className="w-full max-w-4xl text-center mb-12">
          <h1 className="text-4xl font-bold">YooKassa for Unity</h1>
          <p className="mt-2 text-gray-600">
            Первый неофициальный SDK, который подключает YooKassa в Unity-игры
            на Android за 30 минут.
          </p>
        </header>

        {/* Cards */}
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map(({ icon, title, text, alt }, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-start gap-4"
            >
              <div className="bg-blue-600 p-3 rounded-full">
                <img src={icon} alt={alt} className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </section>

        {/* Email form */}
        <section className="w-full max-w-4xl bg-gray-50 p-6 rounded-xl shadow-sm">
          <p className="text-gray-700 mb-4 text-center">
            Разработка уже идёт. Хотите получить ранний доступ и скидку Early-bird?
            Оставьте e-mail.
          </p>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:shadow transition-transform active:scale-95">
            Хочу уведомление
          </button>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-4xl text-gray-500 text-sm text-center mt-12">
          *YooKassa for Unity — это неофициальный SDK, созданный независимыми
          разработчиками. Он не связан с YooMoney или Сбером. Используется на свой
          страх и риск.
        </footer>
      </main>
    </div>
  );
}