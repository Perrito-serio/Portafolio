import Image from "next/image";
import Link from "next/link";
// Usamos iconos seguros de FontAwesome que reflejan tu perfil real
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaGlobe, FaReact, FaWordpress, FaPython, FaMobileAlt } from "react-icons/fa";

export default function DigitalCard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-10 px-4">
      
      {/* --- TARJETA PRINCIPAL --- */}
      <main className="w-full max-w-md bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-6">
        
        {/* 1. FOTO DE PERFIL */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-900 bg-gray-700">
            {/* Recuerda: Tu foto debe estar en la carpeta public con el nombre 'perfil.jpg' */}
            <Image 
              src="/perfil.jpg" 
              alt="Giancarlo Muñoz" 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. ENCABEZADO (Datos del CV) */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Giancarlo Piero Muñoz H.
          </h1>
          <p className="text-teal-400 font-medium text-lg">Diseño y Desarrollo de Software</p>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            Especialista en soluciones Web y Móviles. Enfoque en generar valor y calidad.
          </p>
        </div>

        {/* 3. STACK TECNOLÓGICO (Actualizado a tu CV) */}
        <div className="flex gap-6 text-slate-500 justify-center py-4 border-y border-slate-700 w-full">
            {/* React / Web */}
            <div className="flex flex-col items-center gap-1 hover:text-blue-400 transition-colors">
                <FaReact className="text-2xl" />
                <span className="text-xs">React</span>
            </div>
            
            {/* Mobile / Flutter (Representado genéricamente para evitar errores) */}
            <div className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors">
                <FaMobileAlt className="text-2xl" />
                <span className="text-xs">Mobile</span>
            </div>
            
            {/* Python / Backend */}
            <div className="flex flex-col items-center gap-1 hover:text-yellow-400 transition-colors">
                <FaPython className="text-2xl" />
                <span className="text-xs">Python</span>
            </div>

             {/* WordPress */}
             <div className="flex flex-col items-center gap-1 hover:text-blue-300 transition-colors">
                <FaWordpress className="text-2xl" />
                <span className="text-xs">CMS</span>
            </div>
        </div>

        {/* 4. BOTONES DE ACCIÓN */}
        <div className="w-full flex flex-col gap-3 mt-2">
          {/* LinkedIn (Nota: Tu CV tenía un link genérico, asegúrate de editarlo si tienes el perfil exacto) */}
          <SocialButton 
            href="https://www.linkedin.com/in/giancarlo-piero-mu%C3%B1oz-herrera-657a90348/" 
            icon={<FaLinkedin />} 
            label="LinkedIn" 
            color="hover:bg-blue-700"
          />
          
          {/* GitHub (Link corregido a tu perfil) */}
          <SocialButton 
            href="https://github.com/Perrito-serio" 
            icon={<FaGithub />} 
            label="GitHub & Portafolio" 
            color="hover:bg-gray-700"
          />
          
          <SocialButton 
            href="mailto:gean.munoz.herrera@gmail.com" 
            icon={<FaEnvelope />} 
            label="Enviar Correo" 
            color="hover:bg-red-600"
          />
          
          <SocialButton 
            href="/" 
            icon={<FaGlobe />} 
            label="Ver Portafolio Web" 
            color="hover:bg-emerald-600"
            isInternal={true}
          />
        </div>

        {/* 5. CONTACTO DIRECTO (WhatsApp con tu número del CV) */}
        <div className="mt-4 pt-6 border-t border-slate-700 w-full text-center">
            <a 
              href="https://wa.me/51973553331" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold"
            >
              <FaWhatsapp className="text-xl" />
              Contactar al +51 973 553 331
            </a>
        </div>

      </main>
      
      <footer className="mt-10 text-slate-600 text-xs">
        © 2025 Giancarlo Muñoz - Next.js Portfolio
      </footer>
    </div>
  );
}

// Componente auxiliar (Sin cambios, funciona perfecto)
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