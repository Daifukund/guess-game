'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomRebus, normalizeAnswer, type Rebus } from '@/data/rebus';

export default function JeuPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categorie = searchParams.get('categorie');
  
  const [gameRebus, setGameRebus] = useState<Rebus[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categorie) {
      const rebus = getRandomRebus(categorie, 5);
      if (rebus.length === 0) {
        router.push('/categories');
        return;
      }
      setGameRebus(rebus);
      setLoading(false);
    }
  }, [categorie, router]);

  const currentRebus = gameRebus[currentIndex];

  const handleValidate = () => {
    if (!currentRebus) return;
    
    const normalized = normalizeAnswer(userAnswer);
    const correctAnswer = normalizeAnswer(currentRebus.answer);
    
    if (normalized === correctAnswer) {
      setScore(score + 1);
    }
    
    setShowAnswer(true);
    setTimeout(nextRebus, 2000);
  };

  const handleHint = () => {
    setShowHint(true);
  };

  const handleAbandon = () => {
    // Afficher la bonne réponse sans donner de point
    setShowAnswer(true);
    // Passer au rébus suivant après 2 secondes
    setTimeout(nextRebus, 2000);
  };

  const nextRebus = () => {
    if (currentIndex < gameRebus.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setShowHint(false);
      setShowAnswer(false);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    if (categorie) {
      const rebus = getRandomRebus(categorie, 5);
      setGameRebus(rebus);
      setCurrentIndex(0);
      setScore(0);
      setUserAnswer('');
      setShowHint(false);
      setShowAnswer(false);
      setGameFinished(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Chargement du jeu...</p>
        </div>
      </div>
    );
  }

  if (!categorie || gameRebus.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur</h1>
          <p className="text-gray-600 mb-4">Catégorie non trouvée ou aucun rébus disponible.</p>
          <Link href="/categories" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  if (gameFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Partie terminée !</h1>
          <p className="text-xl text-gray-700 mb-6">
            Tu as trouvé <span className="font-bold text-blue-600">{score}/5</span> rébus !
          </p>
          
          <div className="space-y-4">
            <button
              onClick={resetGame}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Rejouer
            </button>
            <Link
              href="/categories"
              className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Changer de catégorie
            </Link>
            <Link
              href="/"
              className="block w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header avec score et progression */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-700">
              Rébus {currentIndex + 1}/5
            </div>
            <div className="text-lg font-bold text-blue-600">
              Score: {score}
            </div>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Image du rébus */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
          <div className="relative w-full h-64 md:h-80 mb-4">
            <Image
              src={currentRebus.image}
              alt="Rébus à deviner"
              fill
              className="object-contain rounded-lg"
              onError={(e) => {
                // Image de fallback en cas d'erreur
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub24gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=";
              }}
            />
          </div>
          
          {showHint && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-yellow-700">
                <strong>Indice:</strong> {currentRebus.hint}
              </p>
            </div>
          )}
          
          {showAnswer && (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-700">
                <strong>Réponse:</strong> {currentRebus.answer}
              </p>
            </div>
          )}
        </div>

        {/* Zone de réponse et boutons */}
        {!showAnswer && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre réponse:
                </label>
                <input
                  type="text"
                  id="answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleValidate()}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tapez votre réponse..."
                  autoFocus
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleValidate}
                  disabled={!userAnswer.trim()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Valider
                </button>
                
                <button
                  onClick={handleHint}
                  disabled={showHint}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  {showHint ? 'Indice affiché' : 'Indice'}
                </button>
                
                <button
                  onClick={handleAbandon}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Abandonner
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bouton retour */}
        <div className="text-center mt-6">
          <Link
            href="/categories"
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Retour aux catégories
          </Link>
        </div>
      </div>
    </div>
  );
} 