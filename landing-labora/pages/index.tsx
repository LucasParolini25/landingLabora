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
              FUTURO, <span className="text-red-600">HOY.</span>
            </h1>
            <p className="text-xl mb-8">
              Labora es tu plataforma de entrenamiento tecnológico para alcanzar tus metas profesionales
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
              Ver Programas
            </button>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Empresas y Organizaciones</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Partner logos will be added here */}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">
              NUESTROS <span className="text-red-600">PROGRAMAS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Program cards */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Desarrollo Full Stack</h3>
                <p className="text-gray-300 mb-4">
                  Aprende las tecnologías más demandadas en el desarrollo web moderno
                </p>
                <button className="text-red-600 font-bold hover:underline">
                  Saber más →
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Aceleración en QA</h3>
                <p className="text-gray-300 mb-4">
                  Conviértete en un experto en pruebas y aseguramiento de calidad
                </p>
                <button className="text-red-600 font-bold hover:underline">
                  Saber más →
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Aceleración en Java</h3>
                <p className="text-gray-300 mb-4">
                  Domina Java y sus frameworks más populares
                </p>
                <button className="text-red-600 font-bold hover:underline">
                  Saber más →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 