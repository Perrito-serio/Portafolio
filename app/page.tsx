import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Hola, soy Developer
        </h1>
        <p className="text-xl text-gray-400 max-w-lg mx-auto">
          Arquitecto de Software & Desarrollador .NET.
          <br />
          Actualmente estoy construyendo mi nuevo portafolio.
        </p>
        
        <div className="pt-8">
          <Link 
            href="/card" 
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Ver mi Tarjeta Digital
          </Link>
        </div>
      </div>
    </main>
  );
}