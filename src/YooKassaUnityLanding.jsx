import { useState } from "react";
import { motion } from "framer-motion";

// Simple SVG icons instead of lucide-react (чтобы не ставить lib)
const IconCheck = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current">
    <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconBook = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" strokeWidth="2" />
  </svg>
);
const IconServer = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current">
    <rect x="2" y="3" width="20" height="8" rx="2" strokeWidth="2" />
    <rect x="2" y="13" width="20" height="8" rx="2" strokeWidth="2" />
    <path d="M6 7h.01M6 17h.01" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Tailwind utility card & button
const Card = ({ children }) => (
  <div className="border border-slate-200 shadow-md hover:shadow-lg transition-shadow bg-white rounded-xl">
    {children}
  </div>
);
const CardContent = ({ children }) => (
  <div className="p-6 flex flex-col items-start gap-4">{children}</div>
);
const Input = (props) => (
  <input
    {...props}
    className={`px-4 py-3 rounded-lg border outline-none focus:ring-2 ring-blue-500 transition ${props.className || ""}`}
  />
);
const Button = ({ children, ...rest }) => (
  <button
    {...rest}
    className="rounded-lg px-6 py-4 font-semibold text-white shadow-md hover:shadow-lg active:scale-95 transition"
    style={{ backgroundColor: brandAccent }}
  >
    {children}
  </button>
);

// Colors
const brandBgFrom = "#0d1e37";
const brandBgTo = "#122b55";
const brandAccent = "#0066ff";

export default function YooKassaUnityLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <IconCheck className="w-8 h-8" />,
      title: "Полная интеграция",
      text: "Приём платежей, web‑hooks, чеки 54‑ФЗ — всё из коробки.",
    },
    {
      icon: <IconBook className="w-8 h-8" />,
      title: "Документация RU/EN",
      text: "Чёткий гайд + пример сцены. Запустите демо и меняйте префабы.",
    },
    {
      icon: <IconServer className="w-8 h-8" />,
      title: "Безболезненный деплой",
      text: "UPM‑пакет + Docker‑сервер за 1 команду. Никаких шаманств.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* Left stripe */}
      <aside
        className="hidden md:flex w-24 lg:w-72 flex-col items-center justify-center"
        style={{ backgroundImage: `linear-gradient(180deg, ${brandBgFrom} 0%, ${brandBgTo} 100%)` }}
      >
        {logoError ? (
          <motion.span className="text-white text-2xl rotate-90 md:rotate-0">YooKassa</motion.span>
        ) : (
          <motion.img
            src="/logo-yookassa-unity.png"
            alt="YooKassa logo"
            className="w-28 lg:w-44 select-none"
            onError={() => setLogoError(true)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center p-6 bg-white text-slate-900">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center mt-12"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">YooKassa for Unity</h1>
          <p className="text-base md:text-xl text-slate-600">
            Первый неофициальный SDK, который подключает YooKassa в&nbsp;Unity‑игры на&nbsp;Android за 30&nbsp;минут.
          </p>
        </motion.header>

        {/* Benefits */}
        <section className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full px-2">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardContent>
                <div className="p-2 rounded-2xl text-white" style={{ backgroundColor: brandAccent }}>
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
                <p className="text-slate-600 leading-relaxed">{b.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Email form */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 w-full max-w-md">
          <Card>
            <CardContent className="items-center">
              {submitted ? (
                <>
                  <IconCheck className="w-12 h-12 text-green-500" />
                  <p className="text-xl font-medium text-center text-slate-800">Спасибо! Мы сообщим первыми о старте альфы.</p>
                </>
              ) : (
                <>
                  <p className="text-center text-lg text-slate-700">Хотите ранний доступ и скидку Early‑bird? Оставьте e‑mail.</p>
                  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <Input required type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Button type="submit">Хочу уведомление</Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </motion.section>

        <footer className="mt-24 mb-8 text-slate-500 text-sm text-center max-w-2xl">
          *YooKassa for Unity — неофициальный community‑плагин. YooKassa является товарным знаком АО «НКО ЮKassa».*
        </footer>
      </main>
    </div>
  );
}
