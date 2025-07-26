import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full floating-animation"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-white opacity-5 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white opacity-10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="text-center w-full max-w-lg relative z-10">
        {/* Main card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 mx-auto">
          {/* Logo/Title */}
          <div className="mb-6 sm:mb-8">
            <div className="text-6xl sm:text-7xl mb-4 floating-animation">🧩</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-4">
              Rébus
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6 sm:mb-8">
              Qui suis-je ?
            </h2>
          </div>
          
          {/* Description */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">
              ✨ Découvrez qui se cache derrière ces rébus visuels !<br/>
              🎯 Choisissez une catégorie et testez vos connaissances.
            </p>
            
            {/* CTA Button */}
            <Link 
              href="/categories"
              className="group inline-block btn-primary text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-xl text-lg sm:text-xl w-full sm:w-auto border-0 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                🎮 Jouer maintenant
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        
        {/* Footer text */}
        <p className="text-gray-500 text-sm mt-6 sm:mt-8">
          🇫🇷 Célébrités françaises • 📱 Compatible mobile • 🆓 Gratuit
        </p>
      </div>
    </div>
  );
}
