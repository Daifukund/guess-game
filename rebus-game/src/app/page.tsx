import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Rébus
        </h1>
        <h2 className="text-3xl text-gray-600 mb-12">
          Qui suis-je ?
        </h2>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700 max-w-md mx-auto">
            Découvrez qui se cache derrière ces rébus visuels !
            Choisissez une catégorie et testez vos connaissances.
          </p>
          
          <Link 
            href="/categories"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Jouer
          </Link>
        </div>
      </div>
    </div>
  );
}
