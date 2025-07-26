import Link from "next/link";
import { categories } from "@/data/rebus";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center w-full max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 px-2">
          Choisissez une catégorie
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              {category.enabled ? (
                <Link
                  href={`/jeu?categorie=${category.id}`}
                  className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-4 sm:p-6 border-2 border-transparent hover:border-blue-300 min-h-[120px] flex flex-col justify-center"
                >
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    5 rébus à deviner
                  </p>
                </Link>
              ) : (
                <div className="block bg-gray-100 rounded-lg shadow-lg p-4 sm:p-6 border-2 border-gray-200 cursor-not-allowed opacity-60 min-h-[120px] flex flex-col justify-center">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-500 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400">
                    Bientôt disponible
                  </p>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                    À venir
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div>
          <Link
            href="/"
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
} 