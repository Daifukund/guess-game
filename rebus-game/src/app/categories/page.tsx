import Link from "next/link";
import { categories } from "@/data/rebus";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Choisissez une catégorie
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              {category.enabled ? (
                <Link
                  href={`/jeu?categorie=${category.id}`}
                  className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 border-2 border-transparent hover:border-blue-300"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">
                    5 rébus à deviner
                  </p>
                </Link>
              ) : (
                <div className="block bg-gray-100 rounded-lg shadow-lg p-6 border-2 border-gray-200 cursor-not-allowed opacity-60">
                  <h2 className="text-xl font-semibold text-gray-500 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-400">
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
        
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
} 