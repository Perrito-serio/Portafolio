import Image from "next/image";
import Link from "next/link";
// Usamos solo iconos de 'fa' (FontAwesome) que son los más estables
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaGlobe, FaCode, FaWindows, FaCloud } from "react-icons/fa";

export default function DigitalCard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-10 px-4">
      
      {/* --- TARJETA PRINCIPAL --- */}
      <main className="w-full max-w-md bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-6">
        
        {/* 1. FOTO DE PERFIL */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-900 bg-gray-700">
            {/* Si tienes la foto, ponla en la carpeta public como 'perfil.jpg' */}
            <Image 
              src="/perfil.jpg" 
              alt="Profile" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. ENCABEZADO */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Tu Nombre
          </h1>
          <p className="text-cyan-400 font-medium text-lg">.NET Software Architect</p>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            Especialista en Clean Architecture, C#, y soluciones Cloud escalables.
          </p>
        </div>

        {/* 3. STACK TECNOLÓGICO (Iconos Seguros) */}
        <div className="flex gap-6 text-slate-500 justify-center py-4 border-y border-slate-700 w-full">
            {/* C# representation */}
            <div className="flex flex-col items-center gap-1 hover:text-purple-400 transition-colors">
                <FaCode className="text-2xl" />
                <span className="text-xs">C#</span>
            </div>
            
            {/* .NET representation */}
            <div className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors">
                <FaWindows className="text-2xl" />
                <span className="text-xs">.NET</span>
            </div>
            
            {/* Azure representation */}
            <div className="flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors">
                <FaCloud className="text-2xl" />
                <span className="text-xs">Azure</span>
            </div>
        </div>

        {/* 4. BOTONES DE ACCIÓN */}
        <div className="w-full flex flex-col gap-3 mt-2">
          <SocialButton 
            href="https://www.linkedin.com/in/tu-usuario" 
            icon={<FaLinkedin />} 
            label="LinkedIn" 
            color="hover:bg-blue-700"
          />
          <SocialButton 
            href="https://github.com/tu-usuario" 
            icon={<FaGithub />} 
            label="GitHub & Proyectos" 
            color="hover:bg-gray-700"
          />
          <SocialButton 
            href="/cv.pdf" 
            icon={<FaEnvelope />} 
            label="Descargar CV" 
            color="hover:bg-red-600"
          />
          <SocialButton 
            href="/" 
            icon={<FaGlobe />} 
            label="Ver Portafolio Completo" 
            color="hover:bg-emerald-600"
            isInternal={true}
          />
        </div>

        {/* 5. CONTACTO DIRECTO */}
        <div className="mt-4 pt-6 border-t border-slate-700 w-full text-center">
            <a 
              href="https://wa.me/51999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <FaWhatsapp className="text-xl" />
              Contactar por WhatsApp
            </a>
        </div>

      </main>
      
      <footer className="mt-10 text-slate-600 text-xs">
        © 2025 Desarrollado con Next.js & Tailwind
      </footer>
    </div>
  );
}

// Componente auxiliar
function SocialButton({ href, icon, label, color, isInternal = false }: any) {
  const styles = `group flex items-center justify-between w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl transition-all duration-300 hover:scale-[1.02] ${color} hover:border-transparent hover:shadow-lg cursor-pointer`;

  if (isInternal) {
    return (
        <Link href={href} className={styles}>
            <span className="flex items-center gap-3 font-medium text-slate-200">
                <span className="text-xl text-slate-400 group-hover:text-white transition-colors">{icon}</span>
                {label}
            </span>
        </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
      <span className="flex items-center gap-3 font-medium text-slate-200">
        <span className="text-xl text-slate-400 group-hover:text-white transition-colors">{icon}</span>
        {label}
      </span>
      <span className="text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}