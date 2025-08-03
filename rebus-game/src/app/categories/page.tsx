import Link from "next/link";
import { categories } from "@/data/rebus";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="glass-card rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="text-2xl sm:text-3xl mb-2">🎯</div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
            Choisissez une catégorie
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm">
            Défiez-vous sur TOUS les rébus d'une catégorie !
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {categories.map((category, index) => (
            <div key={category.id} className="relative group">
              {category.enabled ? (
                <Link
                  href={`/jeu?categorie=${category.id}`}
                  className="block game-card rounded-xl hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border-2 border-transparent hover:border-indigo-200 min-h-[120px] sm:min-h-[140px] flex flex-col justify-center group-hover:scale-105"
                >
                  <div className="text-2xl sm:text-3xl mb-2">
                    {category.id === 'celebrite' && '⭐'}
                    {category.id === 'animal' && '🦁'}
                    {category.id === 'pays' && '🌍'}
                    {category.id === 'film' && '🎬'}
                    {category.id === 'metier' && '👔'}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
                    {category.name}
                  </h2>
                                     <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                     {category.id === 'celebrite' && 'Tous les 16 rébus'}
                     {category.id === 'animal' && 'Tous les 17 rébus'}
                     {category.id === 'pays' && 'Tous les 26 rébus'}
                     {!['celebrite', 'animal', 'pays'].includes(category.id) && 'Tous les rébus'}
                   </p>
                  <div className="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-full inline-block">
                    🎮 Disponible
                  </div>
                </Link>
              ) : (
                <div className="block glass-card rounded-xl p-4 sm:p-6 border-2 border-white/10 cursor-not-allowed opacity-60 min-h-[120px] sm:min-h-[140px] flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50"></div>
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl mb-2">
                      {category.id === 'film' && '🎬'}
                      {category.id === 'metier' && '👔'}
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-gray-500 mb-1 sm:mb-2">
                      {category.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                      Bientôt disponible
                    </p>
                    <div className="text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded-full inline-block">
                      🚧 En développement
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    À venir
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Back Button */}
        <div className="glass-card rounded-xl p-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5 5-5M18 12H6" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
} 