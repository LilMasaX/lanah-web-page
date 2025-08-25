"use client";
import React, { useState, useEffect } from 'react';

const CrochetBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none bg-white">
      </div>
    );
  }

  // SVG de gatito tierno
const KittenSVG = ({ color = "#fbbf24", size = 32 }) => (
<svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-sm">
{/* Cuerpo */}
<ellipse cx="50" cy="70" rx="18" ry="15" fill={color} opacity="0.8"/>
{/* Cabeza */}
<circle cx="50" cy="45" r="16" fill={color} opacity="0.8"/>
{/* Orejas */}
<path d="M38 35 L45 28 L50 35 Z" fill={color} opacity="0.9"/>
<path d="M50 35 L55 28 L62 35 Z" fill={color} opacity="0.9"/>
{/* Orejitas internas */}
<path d="M41 33 L45 30 L47 33 Z" fill="#F29367" opacity="0.6"/>
<path d="M53 33 L55 30 L59 33 Z" fill="#F29367" opacity="0.6"/>
{/* Ojos */}
<ellipse cx="46" cy="42" rx="2" ry="3" fill="#1f2937"/>
<ellipse cx="54" cy="42" rx="2" ry="3" fill="#1f2937"/>
<ellipse cx="46.5" cy="41" rx="0.8" ry="1" fill="white"/>
<ellipse cx="54.5" cy="41" rx="0.8" ry="1" fill="white"/>
{/* Naricita */}
<path d="M50 47 L48 49 L52 49 Z" fill="#F29367"/>
{/* Boquita */}
<path d="M50 49 Q47 52 44 50" stroke="#1f2937" strokeWidth="1" fill="none" strokeLinecap="round"/>
<path d="M50 49 Q53 52 56 50" stroke="#1f2937" strokeWidth="1" fill="none" strokeLinecap="round"/>
{/* Colita */}
<path d="M32 75 Q25 70 28 60 Q30 65 35 68" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8"/>
{/* Patitas */}
<ellipse cx="42" cy="82" rx="3" ry="5" fill={color} opacity="0.7"/>
<ellipse cx="58" cy="82" rx="3" ry="5" fill={color} opacity="0.7"/>
</svg>
);

// SVG de bola de lana detallada
const YarnBallSVG = ({ color = "#f472b6", size = 28 }) => (
<svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-sm">
{/* Bola base */}
<circle cx="50" cy="50" r="30" fill={color} opacity="0.8"/>
{/* Textura de hilos enrollados */}
<path d="M25 35 Q50 30 75 35 Q70 50 75 65 Q50 70 25 65 Q30 50 25 35" 
    stroke={color} strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="3,2"/>
<path d="M30 25 Q50 45 70 25 Q75 50 70 75 Q50 55 30 75 Q25 50 30 25" 
    stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="2,1"/>
<path d="M35 40 Q50 20 65 40 Q80 50 65 60 Q50 80 35 60 Q20 50 35 40" 
    stroke={color} strokeWidth="1" fill="none" opacity="0.3"/>
{/* Hilo suelto */}
<path d="M75 45 Q85 40 90 35 Q95 30 85 25" 
    stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
{/* Brillo */}
<ellipse cx="42" cy="38" rx="6" ry="4" fill="white" opacity="0.3" transform="rotate(-20 42 38)"/>
</svg>
);

// SVG de aguja de crochet
const CrochetHookSVG = ({ size = 24 }) => (
<svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-sm">
{/* Mango */}
<rect x="20" y="45" width="50" height="8" rx="4" fill="#D9F2E6" opacity="0.8"/>
{/* Parte metálica */}
<rect x="70" y="47" width="15" height="4" rx="2" fill="#DAD4CD" opacity="0.9"/>
{/* Gancho */}
<path d="M85 49 Q88 47 87 45 Q86 44 85 45" stroke="#DAD4CD" strokeWidth="2" fill="none" strokeLinecap="round"/>
{/* Detalles del mango */}
<circle cx="30" cy="49" r="1.5" fill="#F29367" opacity="0.8"/>
<circle cx="40" cy="49" r="1.5" fill="#F29367" opacity="0.8"/>
<circle cx="50" cy="49" r="1.5" fill="#F29367" opacity="0.8"/>
</svg>
);

return (
<div className="fixed inset-0 overflow-hidden pointer-events-none bg-amber-100">
{/* Partículas de lana flotantes */}
{Array.from({ length: 20 }).map((_, i) => (
<div
  key={`particle-${i}`}
  className="absolute rounded-full opacity-30"
  style={{
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${2 + Math.random() * 6}px`,
    height: `${2 + Math.random() * 6}px`,
    background: i % 4 === 0 ? '#FADADD' : i % 4 === 1 ? '#F6B78D' : i % 4 === 2 ? '#D9F2E6' : '#F29367',
    animation: `drift ${10 + Math.random() * 8}s linear infinite`,
    animationDelay: `${Math.random() * 8}s`
  }}
/>
))}
{/* Partículas de lana flotantes */}
{Array.from({ length: 20 }).map((_, i) => (
<div
  key={`particle-${i}`}
  className="absolute rounded-full opacity-30"
  style={{
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${2 + Math.random() * 6}px`,
    height: `${2 + Math.random() * 6}px`,
    background: i % 4 === 0 ? '#FADADD' : i % 4 === 1 ? '#F6B78D' : i % 4 === 2 ? '#D9F2E6' : '#F29367',
    animation: `drift ${10 + Math.random() * 8}s linear infinite`,
    animationDelay: `${Math.random() * 8}s`
  }}
/>
))}

{/* Gatitos flotantes */}
{Array.from({ length: 7 }).map((_, i) => (
<div
  key={`kitten-${i}`}
  className="absolute"
  style={{
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 80}%`,
    animation: `float ${6 + Math.random() * 3}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 4}s`
  }}
>
  <KittenSVG 
    color={
      i % 4 === 0 ? '#F6B78D' : // Melocotón suave
      i % 4 === 1 ? '#F29367' : // Naranja pastel
      i % 4 === 2 ? '#FADADD' : // Rosa pastel claro
      '#D9F2E6' // Menta suave
    }
    size={24 + Math.random() * 16}
  />
</div>
))}

{/* Bolas de lana rodantes y saltarinas */}
{Array.from({ length: 12 }).map((_, i) => (
<div
  key={`yarn-${i}`}
  className="absolute"
  style={{
    left: `${Math.random() * 95}%`,
    top: `${Math.random() * 90}%`,
    animation: i % 3 === 0 ? `roll ${8 + Math.random() * 4}s linear infinite` : 
              i % 3 === 1 ? `bounce ${4 + Math.random() * 2}s ease-in-out infinite` :
              `float ${6 + Math.random() * 3}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 6}s`
  }}
>
  <YarnBallSVG 
    color={
      i % 5 === 0 ? '#FADADD' : // Rosa pastel claro
      i % 5 === 1 ? '#F6B78D' : // Melocotón suave
      i % 5 === 2 ? '#D9F2E6' : // Menta suave
      i % 5 === 3 ? '#F29367' : // Naranja pastel
      '#DAD4CD' // Gris cálido claro
    }
    size={20 + Math.random() * 20}
  />
</div>
))}

{/* Agujas de crochet flotantes y activas */}
{Array.from({ length: 5 }).map((_, i) => (
<div
  key={`hook-${i}`}
  className="absolute opacity-25"
  style={{
    left: `${Math.random() * 85}%`,
    top: `${Math.random() * 85}%`,
    animation: i % 2 === 0 ? `wiggle ${4 + Math.random() * 2}s ease-in-out infinite` : 
              `spin ${8 + Math.random() * 4}s linear infinite`,
    animationDelay: `${Math.random() * 3}s`,
    transform: `rotate(${Math.random() * 360}deg)`
  }}
>
  <CrochetHookSVG size={20 + Math.random() * 10} />
</div>
))}

{/* Hilos serpenteantes mejorados */}
{Array.from({ length: 6 }).map((_, i) => (
<div
  key={`thread-${i}`}
  className="absolute opacity-25"
  style={{
    left: `${Math.random() * 80}%`,
    top: `${Math.random() * 80}%`,
  }}
>
  <svg 
    width="150" 
    height="100" 
    viewBox="0 0 150 100"
    style={{
      animation: `sway ${5 + Math.random() * 3}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 4}s`
    }}
  >
    <path
      d={`M10,50 Q${40 + Math.random() * 20},${20 + Math.random() * 20} ${80 + Math.random() * 20},${40 + Math.random() * 20} Q${120 + Math.random() * 20},${60 + Math.random() * 20} 140,50`}
      stroke={
        i % 5 === 0 ? '#FADADD' : // Rosa pastel claro
        i % 5 === 1 ? '#F6B78D' : // Melocotón suave
        i % 5 === 2 ? '#D9F2E6' : // Menta suave
        i % 5 === 3 ? '#F29367' : // Naranja pastel
        '#DAD4CD' // Gris cálido claro
      }
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    >
      <animate
        attributeName="stroke-dasharray"
        values="0,300;150,150;0,300"
        dur={`${8 + Math.random() * 4}s`}
        repeatCount="indefinite"
      />
    </path>
  </svg>
</div>
))}

{/* Corazones y estrellitas mejorados */}
{Array.from({ length: 10 }).map((_, i) => (
<div
  key={`decoration-${i}`}
  className="absolute opacity-20"
  style={{
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 90}%`,
    fontSize: `${10 + Math.random() * 8}px`,
    animation: `twinkle ${3 + Math.random() * 2}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 4}s`,
    color: i % 2 === 0 ? '#FADADD' : '#F6B78D'
  }}
>
  {i % 3 === 0 ? '♥' : i % 3 === 1 ? '✨' : '⭐'}
</div>
))}

<style jsx>{`
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-15px) rotate(2deg); }
  66% { transform: translateY(-8px) rotate(-1deg); }
}

@keyframes roll {
  0% { transform: translateX(-50px) rotate(0deg); }
  100% { transform: translateX(100vw) rotate(720deg); }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(5deg) scale(1.05); }
  75% { transform: rotate(-5deg) scale(0.95); }
}

@keyframes sway {
  0%, 100% { transform: translateX(0px) rotate(0deg); }
  50% { transform: translateX(10px) rotate(2deg); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.2); }
}

@keyframes drift {
  0% { 
    transform: translateY(100vh) translateX(0px) scale(0); 
    opacity: 0; 
  }
  10% { 
    opacity: 0.3; 
    transform: scale(1);
  }
  90% { 
    opacity: 0.3; 
  }
  100% { 
    transform: translateY(-10vh) translateX(50px) scale(0.5); 
    opacity: 0; 
  }
}

@keyframes spin {
  0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
}

@keyframes dance {
  0%, 100% { transform: translateY(0px) rotate(-5deg) scale(1); }
  25% { transform: translateY(-8px) rotate(5deg) scale(1.1); }
  50% { transform: translateY(-4px) rotate(-2deg) scale(0.95); }
  75% { transform: translateY(-12px) rotate(3deg) scale(1.05); }
}
`}</style>
</div>
);
};

export default CrochetBackground;