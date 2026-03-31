"use client";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <main className="bg-white text-black pt-24">

      {/* HERO */}
      <section className="h-[60vh] flex items-center justify-center bg-black text-white text-center">
        <h1 className="text-5xl font-bold">Sobre a Transpoil</h1>
      </section>

      {/* HISTÓRIA */}
      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Nossa história</h2>

        <p className="text-gray-600 leading-relaxed">
          {/* você vai me mandar esse texto */}
        </p>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="font-bold text-xl mb-2">Segurança</h3>
            <p className="text-gray-600">...</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Experiência</h3>
            <p className="text-gray-600">...</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2">Cobertura</h3>
            <p className="text-gray-600">...</p>
          </div>

        </div>
      </section>

      {/* MAPA */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Onde estamos
        </h2>

        <div className="max-w-5xl mx-auto px-6">
          <iframe
            src="https://www.google.com/maps?q=Fortaleza&output=embed"
            className="w-full h-[400px] rounded-xl"
            loading="lazy"
          />
        </div>
      </section>

    </main>
  );
}