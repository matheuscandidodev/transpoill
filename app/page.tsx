"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  return (
    <main className="bg-white text-black pt-20">

      {/* NAVBAR */}
      <header className="w-full flex justify-between items-center px-4 md:px-8 py-4 bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm">
        <img src="/logo.png" className="w-24 md:w-32" />

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden">
          <button>☰</button>
        </div>
      </header>

      {/* SOBRE */}
      <section
        className="w-full h-screen flex items-center justify-start text-white relative"
        style={{
          backgroundImage: "url('/sobre.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="relative z-10 max-w-2xl px-6 text-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-5 leading-tight">  
            MAIS QUE CARGA, LEVAMOS A FORÇA QUE  {" "}
            <span className="border-b-8 border-red-600 pb-0">
              MOVE O BRASIL.
            </span>
          </h1>

          <p className="mt-4">
            Atuamos no transporte de combustíveis e soluções asfálticas com
            segurança, eficiência e compromisso em cada operação.
          </p>
        </motion.div>
      </section>

      {/* TÍTULO */}
      <motion.h1
        className="text-4xl font-bold text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Nossos serviços
      </motion.h1>

      <a
        href="https://wa.me/5585999999999"
        target="_blank"
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-green-500 p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        <img src="/whatsapp.png" className="w-11 h-11" />
      </a>

      {/* SERVIÇOS */}
<section className="py-16 md:py-20 flex flex-col gap-16 md:gap-24">

  {/* SERVIÇO 1 */}
  <div className="flex flex-col items-center text-center gap-8">

    <h2 className="text-2xl md:text-4xl font-bold text-center mt-16 md:mt-20">
      Transporte de emulsões asfálticas
    </h2>

    <motion.div
      className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img src="/card1.png" className="w-full h-64 object-cover" />

      <div className="p-6">
        Transporte especializado com segurança e eficiência para materiais asfálticos.
      </div>
    </motion.div>

    {/* VIDEO 1 */}
    <motion.div
      className="relative w-full h-[300px] md:h-[500px] lg:h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

      <h3 className="relative text-white text-3xl font-bold flex items-center justify-center h-full">
        Transportes de emulsões asfálticas e derivados
      </h3>
    </motion.div>

  </div>

  {/* SERVIÇO 2 */}
  <div className="flex flex-col items-center text-center gap-8">

    <h2 className="text-2xl md:text-4xl font-bold text-center mt-16 md:mt-20">
      Transporte de combustíveis claros
    </h2>

    <motion.div
      className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img src="/card2.png" className="w-full h-64 object-cover" />

      <div className="p-6">
        Transporte de combustíveis com alto padrão de segurança e controle.
      </div>
    </motion.div>

    {/* VIDEO 2 */}
    <motion.div
      className="relative w-full h-[300px] md:h-[500px] lg:h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
       <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/video2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

      <h3 className="relative text-white text-3xl font-bold flex items-center justify-center h-full">
        Transportes de combustíveis
      </h3>
    </motion.div>

  </div>

  {/* SERVIÇO 3 */}
  <div className="flex flex-col items-center text-center gap-8">

    <h2 className="text-2xl md:text-4xl font-bold text-center mt-16 md:mt-20">
      Soluções de transporte para todos os ramos
    </h2>

    <motion.div
      className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img src="/card3.png" className="w-full h-64 object-cover" />

      <div className="p-6">
        Atendemos postos, pavimentação, fazendas e diversos setores.
      </div>
    </motion.div>

    {/* VIDEO 3 */}
    <motion.div
      className="relative w-full h-[300px] md:h-[500px] lg:h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
       <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/video3.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

      <h3 className="relative text-white text-3xl font-bold flex items-center justify-center h-full">
        Soluções completas em transporte
      </h3>
    </motion.div>

  </div>

</section>

<section className="py-16 text-center max-w-4xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-4">
    Especialistas em transporte de alta performance
  </h2>

  <p className="text-gray-600">
    A Transpoil atua com excelência no transporte de combustíveis e derivados,
    garantindo segurança, agilidade e total conformidade com as normas do setor.
  </p>
</section>

<section className="py-10 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-12">Por que escolher a Transpoil?</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

    <div>
      <h3 className="font-bold text-xl mb-2">Segurança total</h3>
      <p className="text-gray-600">Seguimos rigorosamente todas as normas do setor.</p>
    </div>

    <div>
      <h3 className="font-bold text-xl mb-2">Frota moderna</h3>
      <p className="text-gray-600">Veículos preparados para qualquer operação.</p>
    </div>

    <div>
      <h3 className="font-bold text-xl mb-2">Equipe especializada</h3>
      <p className="text-gray-600">Profissionais treinados e qualificados.</p>
    </div>

  </div>
</section>

{/* CTA */}
<section className="py-10 bg-gray-100">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-6">

    {/* CARD ORÇAMENTO */}
    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-4">
        Faça já um orçamento
      </h3>

      <p className="text-gray-600 mb-6">
        Solicite uma cotação personalizada para transporte de combustíveis
        e soluções asfálticas com segurança e eficiência.
      </p>

      <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 hover:scale-110 transition duration-300">
        Solicitar orçamento
      </button>
    </div>

    {/* CARD CONTATO */}
    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-4">
        Fale com um de nossos comerciais
      </h3>

      <p className="text-gray-600 mb-6">
        Nossa equipe está pronta para te atender e oferecer a melhor solução
        para o seu negócio.
      </p>

      <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 hover:scale-110 transition duration-300">
        Falar no WhatsApp
      </button>
    </div>

  </div>
</section>

{/* NÚMEROS + LOGOS */}
<section className="py-20 bg-gray-300 text-black text-center">

  <div className="max-w-6xl mx-auto px-6">

    {/* NÚMEROS */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">

      <div>
        <img src="/certificado.png" className="mx-auto mb-4 w-12 h-12 opacity-80 hover:opacity-100 transition"   />
        <h2 className="text-4xl font-bold text-black">
          +<CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />
        </h2>
        <p className="mt-2">Anos de mercado</p>
      </div>

      <div>
        <img src="/caminhao.png" className="mx-auto mb-4 w-12 h-12 opacity-80 hover:opacity-100 transition" />
        <h2 className="text-4xl font-bold text-black">+
          <CountUp end={40} duration={2} enableScrollSpy scrollSpyOnce />
        </h2>
        <p className="mt-2">Caminhões na frota</p>
      </div>

      <div>
        <img src="/total.png" className="mx-auto mb-4 w-12 h-12 opacity-80 hover:opacity-100 transition" />
        <h3 className="text-5xl font-bold text-black">Total</h3>
        <p className="mt-2">Variedade de bases cadastradas</p>
      </div>

    </div>

    {/* LOGOS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">

      <img src="/dist1.png" className="mx-auto h-12 object-contain hover:opacity-100 transition" />
      <img src="/dist2.png" className="mx-auto h-12 object-contain hover:opacity-100 transition" />
      <img src="/dist3.png" className="mx-auto h-12 object-contain hover:opacity-100 transition" />
      <img src="/dist4.png" className="mx-auto h-12 object-contain hover:opacity-100 transition" />


    </div>

  </div>

</section>


{/* FOOTER */}
<footer className="bg-gray-500 text-gray-300 py-12">
 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6">

    {/* LOGO */}
    <div>
      <img src="/logo.png" className="w-32 mb-4" />
      <p>
        Transporte de combustíveis e soluções asfálticas com segurança,
        eficiência e compromisso.
      </p>
    </div>

    {/* LINKS */}
    <div>
      <h4 className="text-white font-bold mb-4">Links</h4>
      <ul className="space-y-2">
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>

    {/* CONTATO */}
    <div>
      <h4 className="text-white font-bold mb-4">Contato</h4>
      <p>Email: contato@transpoil.com</p>
      <p>Telefone: (00) 0000-0000</p>
    </div>

  </div>

  <div className="text-center mt-10 text-gray-500">
    © {new Date().getFullYear()} Transpoil - Todos os direitos reservados
  </div>
</footer>

</main>
);
}