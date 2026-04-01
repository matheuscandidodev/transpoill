"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
 
// ─── CountUp isolado para não forçar "use client" no page inteiro
function StatNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
 
  return <div ref={ref}>{suffix}{count}</div>;
}
 
// ─── Vídeo lazy: só carrega quando entra na viewport
function LazyVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
 
  // 1) Observa o container — quando entra na tela, marca como visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
 
  // 2) Só chama play() DEPOIS que o <video> foi montado no DOM
  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.load(); // garante que o source foi lido
      videoRef.current.play().catch(() => {});
    }
  }, [visible]);
 
  return (
    <div ref={containerRef} className="relative w-full h-[300px] md:h-[560px] overflow-hidden bg-zinc-900">
      {visible && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/55" />
      <p className="relative z-10 h-full flex items-center justify-center text-white text-2xl md:text-4xl font-black tracking-tight px-6 text-center uppercase">
        {label}
      </p>
    </div>
  );
}
 
// ─── Serviço com layout assimétrico (imagem à esquerda ou direita)
function Servico({
  titulo, descricao, imgSrc, videoSrc, poster, videoLabel, reverse,
}: {
  titulo: string; descricao: string; imgSrc: string;
  videoSrc: string; poster: string; videoLabel: string; reverse?: boolean;
}) {
  return (
    <div className="border-t border-zinc-200">
      {/* Cabeçalho do serviço */}
      <motion.div
        className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-0`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Imagem */}
        <div className="md:w-1/2 h-72 md:h-[420px] overflow-hidden">
          <img
            src={imgSrc}
            alt={titulo}
            width={800}
            height={420}
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>
 
        {/* Texto */}
        <div className={`md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 bg-white ${reverse ? "md:items-end md:text-right" : ""}`}>
          <span className="text-xs font-bold tracking-[0.25em] text-red-600 uppercase mb-3">
            Serviço
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-zinc-900 leading-tight mb-4">
            {titulo}
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-md">
            {descricao}
          </p>
          <a
            href="https://wa.me/5585999999999"
            target="_blank"
            className="mt-6 inline-block text-sm font-bold tracking-widest uppercase border-b-2 border-red-600 text-zinc-900 hover:text-red-600 transition"
          >
            Solicitar transporte →
          </a>
        </div>
      </motion.div>
 
      {/* Vídeo */}
      <LazyVideo src={videoSrc} poster={poster} label={videoLabel} />
    </div>
  );
}
 
// ─────────────────────────────────────────
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
 
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <main className="bg-white text-zinc-900" style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif" }}>
 
      {/* ── GOOGLE FONT ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500&display=swap');
        body { font-family: 'Barlow', Arial, sans-serif; }
        .font-display { font-family: 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif; }
      `}</style>
 
      {/* ── NAVBAR ── */}
      <header className="w-full flex justify-between items-center px-6 md:px-12 py-4 bg-white fixed top-0 left-0 z-50 border-b border-zinc-100">
        <img src="/logo.png" alt="Transpoil" width={120} height={40} className="w-24 md:w-32 h-auto" />
 
        {/* Desktop */}
        <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-widest uppercase text-zinc-600">
          {["Home", "Sobre", "Serviços", "Contato"].map((item) => (
            <a key={item} href="#" className="hover:text-red-600 transition">{item}</a>
          ))}
        </nav>
 
        <a
          href="https://wa.me/5585999999999"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:bg-red-700 transition"
        >
          Falar com comercial
        </a>
 
        {/* Mobile */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>
 
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-2xl font-black uppercase tracking-wider">
          {["Home", "Sobre", "Serviços", "Contato"].map((item) => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)} className="hover:text-red-600 transition">{item}</a>
          ))}
        </div>
      )}
 
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden flex items-end">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/sobre.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </motion.div>
 
        <motion.div
          className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-5xl"
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-red-500 uppercase mb-6">
            Transporte especializado
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[96px] font-black text-white leading-[0.95] uppercase mb-6">
            Mais que carga,<br />
            levamos a força<br />
            <span className="text-red-600">que move o Brasil.</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
            Transporte de combustíveis e soluções asfálticas com segurança,
            eficiência e compromisso em cada operação.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="https://wa.me/5585999999999"
              target="_blank"
              className="bg-red-600 text-white font-bold tracking-widest uppercase text-sm px-8 py-4 hover:bg-red-700 transition"
            >
              Solicitar orçamento
            </a>
            <a href="#servicos" className="border border-white/40 text-white font-bold tracking-widest uppercase text-sm px-8 py-4 hover:bg-white/10 transition">
              Ver serviços
            </a>
          </div>
        </motion.div>
 
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-white/30" />
          <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-x-6">scroll</span>
        </motion.div>
      </section>
 
      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="pt-4">
        <div className="px-6 md:px-16 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase">O que fazemos</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-zinc-900 uppercase mt-2">
              Nossos serviços
            </h2>
          </motion.div>
        </div>
 
        <Servico
          titulo="Transporte de emulsões asfálticas"
          descricao="Operações especializadas com equipamentos adequados para manuseio seguro de materiais asfálticos, garantindo qualidade do produto e prazo de entrega."
          imgSrc="/card1.png"
          videoSrc="/video1.mp4"
          poster="/thumb1.jpg"
          videoLabel="Emulsões asfálticas e derivados"
        />
        <Servico
          titulo="Transporte de combustíveis claros"
          descricao="Frota certificada para transporte de gasolina, diesel e etanol com alto padrão de segurança, rastreamento em tempo real e conformidade com a legislação vigente."
          imgSrc="/card2.png"
          videoSrc="/video2.mp4"
          poster="/thumb1.jpg"
          videoLabel="Combustíveis claros"
          reverse
        />
        <Servico
          titulo="Soluções para todos os ramos"
          descricao="Atendemos postos de combustíveis, construtoras de pavimentação, agropecuárias e indústrias com rotas planejadas e suporte logístico completo."
          imgSrc="/card3.png"
          videoSrc="/video3.mp4"
          poster="/thumb1.jpg"
          videoLabel="Soluções completas em transporte"
        />
      </section>
 
      {/* ── POR QUE ESCOLHER ── */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase">Diferenciais</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase mt-2">
              Por que escolher<br />a Transpoil?
            </h2>
          </motion.div>
 
          <div className="grid md:grid-cols-3 gap-0 border border-zinc-800">
            {[
              { n: "01", title: "Segurança total", desc: "Seguimos rigorosamente todas as normas ANP e ABNT para transporte de produtos perigosos." },
              { n: "02", title: "Frota moderna", desc: "Veículos rastreados, revisados e preparados para operar em qualquer rodovia do país." },
              { n: "03", title: "Equipe especializada", desc: "Motoristas e técnicos treinados com certificações específicas para cargas perigosas." },
            ].map(({ n, title, desc }) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 border-b md:border-b-0 md:border-r border-zinc-800 last:border-0 hover:bg-zinc-900 transition"
              >
                <span className="font-display text-6xl font-black text-red-600 block mb-4">{n}</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── NÚMEROS ── */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-3 gap-16 text-center md:text-left">
            {[
              { icon: "/certificado.png", end: 10, suffix: "+", label: "Anos de mercado" },
              { icon: "/caminhao.png", end: 40, suffix: "+", label: "Caminhões na frota" },
              { icon: "/total.png", end: 0, label: "Bases cadastradas", custom: "Total" },
            ].map(({ icon, end, suffix, label, custom }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img src={icon} alt={label} width={48} height={48} className="w-10 h-10 mb-4 brightness-0 invert opacity-80" />
                <div className="font-display text-6xl md:text-7xl font-black leading-none mb-2">
                  {custom ? custom : <StatNumber end={end} suffix={suffix} />}
                </div>
                <p className="text-white/70 text-sm tracking-wider uppercase">{label}</p>
              </motion.div>
            ))}
          </div>
 
          {/* Logos parceiros */}
          <div className="mt-20 border-t border-red-500 pt-12">
            <p className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase mb-8">Alguns de nossos parceiros & distribuidoras</p>
            <div className="flex flex-wrap gap-10 items-center justify-start">
              {/* dist1, dist2, dist3 — fundo branco: pill branco para aparecer no fundo vermelho */}
              {["/dist1.png", "/dist2.png", "/dist3.png", "/dist4.png", "/dist5.png"].map((src, i) => (
                <div key={i} className="bg-white/90 rounded px-8 py-2 hover:bg-white transition">
                  <img src={src} alt={`Parceiro ${i + 1}`} width={100} height={40} className="h-8 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 text-white p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase">Pronto para começar?</span>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase mt-2 max-w-lg leading-tight">
                Fale com nossa equipe comercial
              </h2>
              <p className="text-zinc-400 mt-4 max-w-md">
                Solicite uma cotação personalizada. Nossa equipe responde em até 2 horas úteis.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <a
                href="https://wa.me/5585999999999"
                target="_blank"
                className="bg-red-600 text-white font-bold tracking-widest uppercase text-sm px-10 py-4 hover:bg-red-700 transition text-center"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@transpoil.com"
                className="border border-zinc-700 text-white font-bold tracking-widest uppercase text-sm px-10 py-4 hover:bg-zinc-800 transition text-center"
              >
                Enviar e-mail
              </a>
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* ── FOOTER ── */}
      <footer className="bg-zinc-950 text-zinc-500 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="/logo.png" alt="Transpoil" width={128} height={40} className="w-32 h-auto mb-4 brightness-0 invert opacity-70" />
            <p className="text-sm leading-relaxed">
              Transporte de combustíveis e soluções asfálticas com segurança, eficiência e compromisso.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Sobre", "Serviços", "Contato"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Contato</h4>
            <div className="space-y-3 text-sm">
              <p>contato@transpoil.com</p>
              <p>(00) 0000-0000</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-16 mt-12 pt-8 border-t border-zinc-800 text-xs">
          © {new Date().getFullYear()} Transpoil. Todos os direitos reservados.
        </div>
      </footer>
 
      {/* ── WHATSAPP FLUTUANTE ── */}
      <a
        href="https://wa.me/5585999999999"
        target="_blank"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-xl hover:scale-110 hover:bg-green-600 transition z-50"
      >
        <img src="/whatsapp.png" alt="WhatsApp" width={44} height={44} className="w-11 h-11" />
      </a>
 
    </main>
  );
}