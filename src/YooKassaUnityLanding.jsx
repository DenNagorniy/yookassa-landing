import React, { useState, useEffect } from "react";
import checkIcon from './assets/check.png';
import bookIcon from './assets/book-open.png';
import serverIcon from './assets/server.png';
import logoWhite from './assets/logo-yookassa-unity-white.png';

export default function YooKassaUnityLanding() {
  const [email, setEmail] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHeader(true), 300);
  }, []);

  const cards = [
    { icon: checkIcon, title: "Полная интеграция", text: "Приём платежей, web-hooks, чеки 54-ФЗ — всё из коробки." },
    { icon: bookIcon, title: "Документация RU/EN", text: "Чёткий гайд + пример сцены. Запустите демо и меняйте префабы." },
    { icon: serverIcon, title: "Безболезненный деплой", text: "UPM‑пакет + Docker‑сервер за 1 команду. Никаких шаманств." },
  ];

  const handleSubmit = async () => {
    if (!email) {
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000);
      return;
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycby2lzQVzHaefBQ9RX9MX8VE6Xq1DZI9YM1-LKvkrIVJLXwDNwE16pq2s_wF-Y5UFM5FUw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Ошибка при отправке:", err);
    }
  };

  return (
    <div className="flex min-h-screen text-sm">
      <aside className="hidden md:flex w-[21%] bg-gradient-to-b from-[#0d1e37] to-[#122b55] flex-col items-center justify-center py-12 relative overflow-hidden">
        <img src={logoWhite} alt="YooKassa for Unity" className="w-[300px] h-auto z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,_transparent_1px)] [background-size:10px_10px] opacity-5 z-0" />
        <div className="absolute right-0 top-0 w-[6px] h-full bg-gradient-to-b from-blue-400 via-blue-300 to-transparent animate-pulse shadow-[0_0_12px_4px_rgba(96,165,250,0.3)]"></div>
      </aside>

      <main className="flex-1 bg-white flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8">
        <header className="w-full max-w-5xl text-center mx-auto mt-1 mb-12 px-2">
          <h1 className={`text-5xl md:text-6xl font-bold transition-opacity duration-1000 ${showHeader ? 'opacity-100' : 'opacity-0'}`}>YooKassa for Unity</h1>
          <p className="mt-5 text-gray-700 leading-snug text-base font-medium">
            Первый неофициальный SDK, который подключает YooKassa в Unity-игры на Android за 30 минут.
          </p>
        </header>

        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 mx-auto px-4">
          {cards.map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 max-w-[320px] mx-auto rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all p-6 flex flex-col items-start gap-4 group opacity-0 translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}>
              <div className="bg-blue-600 rounded-xl w-14 h-14 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <img src={c.icon} alt="" className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-base mt-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </section>

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
            {tooltipVisible && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-3 py-1 text-xs bg-red-100 text-red-500 rounded shadow-sm transition-opacity animate-fade-in-up">
                Пожалуйста, введите e-mail
              </div>
            )}
            {submitted && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-3 py-1 text-xs bg-green-100 text-green-600 rounded shadow-sm transition-opacity animate-fade-in-up">
                Спасибо, вы подписались!
              </div>
            )}
          </div>
          <button onClick={handleSubmit} className="block w-48 mx-auto bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 hover:shadow-md transition-transform active:scale-95">
            Хочу уведомление
          </button>
        </section>

        <footer className="w-full text-center text-gray-500 text-sm mt-16 px-8">
          *YooKassa for Unity — это неофициальный community-плагин. YooKassa является товарным знаком АО «НКО ЮKassa».
        </footer>
      </main>
    </div>
  );
}