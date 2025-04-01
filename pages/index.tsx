import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Labora - Entrena para el futuro, hoy</title>
        <meta name="description" content="Plataforma de entrenamiento tecnológico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold mb-4">
              ENTRENA PARA EL <br />
              FUTURO, <span className="text-primary">HOY.</span>
            </h1>
            <p className="text-xl mb-8">
              Labora es tu plataforma de entrenamiento tecnológico para alcanzar tus metas profesionales
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold">
              Ver Programas
            </button>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Empresas y Organizaciones</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Add partner logos here */}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">
              NUESTROS <span className="text-primary">PROGRAMAS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Program cards will go here */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 