import React, { useState, useEffect } from "react";

export default function YooKassaUnityLanding() {
  const [email, setEmail] = useState("");
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHeader(true), 300);
  }, []);

  const cards = [
    { icon: "/img/check.png", title: "Полная интеграция", text: "Приём платежей, web-hooks, чеки 54-ФЗ — всё из коробки." },
    { icon: "/img/book-open.png", title: "Документация RU/EN", text: "Чёткий гайд + пример сцены. Запустите демо и меняйте префабы." },
    { icon: "/img/server.png", title: "Безболезненный деплой", text: "UPM-пакет + Docker-сервер за 1 команду. Никаких шаманств." },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-[21%] bg-gradient-to-b from-[#0d1e37] to-[#122b55] flex-col items-center justify-center py-12 relative overflow-hidden">
        <img
          src="/img/logo-yookassa-unity-white.png"
          alt="YooKassa for Unity"
          className="w-[300px] h-auto z-10"
        />
        <div className="absolute inset-0 bg-[url('/img/noise.svg')] opacity-5 z-0"></div>
        <div className="absolute right-0 top-0 w-[6px] h-full bg-gradient-to-b from-blue-400 via-blue-300 to-transparent animate-pulse shadow-[0_0_12px_4px_rgba(96,165,250,0.3)]"></div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-white flex flex-col justify-center py-20 px-8 relative">
        {/* Header */}
        <header className="w-full max-w-5xl text-center mx-auto mt-1 mb-12">
          <h1 className={`text-6xl font-bold transition-opacity duration-1000 ${showHeader ? 'opacity-100' : 'opacity-0'}`}>YooKassa for Unity</h1>
          <p className="mt-5 text-gray-700 leading-snug text-base font-medium">
            Первый неофициальный SDK, который подключает YooKassa в Unity-игры на Android за 30 минут.
          </p>
        </header>

        {/* Cards */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 mx-auto">
          {cards.map((c,i) => (
            <div key={i} className="bg-white border border-slate-200 w-full max-w-[320px] mx-auto rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all p-6 flex flex-col items-start gap-6 group">
              <div className="bg-blue-600 rounded-xl w-16 h-16 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={c.icon} alt="" className="w-16 h-16" />
              </div>
              <h3 className="font-semibold text-base mt-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </section>

        {/* Email form */}
        <section className="w-full max-w-[390px] bg-white p-4 rounded-xl shadow-xl mt-28 mx-auto text-center border border-gray-300 hover:shadow-2x1 hover:scale-[1.01] transition-all">
          <p className="text-gray-800 mb-5 text-sm font-medium">
            Разработка уже идёт. Хотите получить ранний доступ и скидку Early-bird?
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Введите e-mail для раннего доступа"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-14 py-2 mb-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 shadow-inner placeholder:text-sm"
            />
            {email === "" && (
<div className="absolute right-6 top-1/2 -translate-y-1/2 text-xl text-blue-400 animate-float">
  💌
</div>
            )}
          </div>
          <button className="block w-50 mx-auto bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 hover:shadow-md transition-transform active:scale-95">
            Хочу уведомление
          </button>
        </section>

        {/* Footer */}
        <footer className="w-full text-center text-gray-500 text-sm mt-16 px-8">
          *YooKassa for Unity — это неофициальный community-плагин. YooKassa является товарным знаком АО «НКО ЮKassa».
        </footer>
      </main>
    </div>
  );
}
