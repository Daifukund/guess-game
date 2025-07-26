import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="text-center w-full max-w-md">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 sm:mb-4">
          Rébus
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 sm:mb-12">
          Qui suis-je ?
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-gray-700 px-4">
            Découvrez qui se cache derrière ces rébus visuels !
            Choisissez une catégorie et testez vos connaissances.
          </p>
          
          <Link 
            href="/categories"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-lg sm:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Jouer
          </Link>
        </div>
      </div>
    </div>
  );
}
