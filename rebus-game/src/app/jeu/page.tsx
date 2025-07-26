'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomRebus, normalizeAnswer, type Rebus } from '@/data/rebus';

function JeuGameComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categorie = searchParams.get('categorie');
  
  const [gameRebus, setGameRebus] = useState<Rebus[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
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
    
    const isCorrect = normalized === correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setIsCorrectAnswer(isCorrect);
    setShowAnswer(true);
    setTimeout(nextRebus, 2000);
  };

  const handleHint = () => {
    setShowHint(true);
  };

  const handleAbandon = () => {
    // Afficher la bonne réponse sans donner de point
    setIsCorrectAnswer(false);
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
      setIsCorrectAnswer(false);
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
      setIsCorrectAnswer(false);
      setGameFinished(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-24 w-24 sm:h-32 sm:w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-base sm:text-lg text-gray-600">Chargement du jeu...</p>
        </div>
      </div>
    );
  }

  if (!categorie || gameRebus.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center w-full max-w-md mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">Erreur</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4 px-2">Catégorie non trouvée ou aucun rébus disponible.</p>
          <Link href="/categories" className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto inline-block">
            Retour aux catégories
          </Link>
        </div>
      </div>
    );
  }

  if (gameFinished) {
    const getScoreMessage = () => {
      if (score === 5) return { emoji: "🏆", title: "PARFAIT !", message: "Incroyable ! Tu es un vrai expert !", color: "from-yellow-400 to-orange-400" };
      if (score >= 4) return { emoji: "🌟", title: "EXCELLENT !", message: "Bravo ! Tu maîtrises bien !", color: "from-green-400 to-emerald-400" };
      if (score >= 3) return { emoji: "👍", title: "BIEN JOUÉ !", message: "Pas mal du tout !", color: "from-blue-400 to-indigo-400" };
      if (score >= 2) return { emoji: "😊", title: "C'est un début !", message: "Continue comme ça !", color: "from-purple-400 to-pink-400" };
      return { emoji: "💪", title: "Réessaye !", message: "Tu peux faire mieux !", color: "from-orange-400 to-red-400" };
    };
    
    const scoreData = getScoreMessage();
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 text-center w-full max-w-lg mx-auto relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
          
          <div className="relative z-10">
            {/* Score icon */}
            <div className={`text-6xl sm:text-7xl mb-4 bg-gradient-to-r ${scoreData.color} bg-clip-text text-transparent floating-animation`}>
              {scoreData.emoji}
            </div>
            
            {/* Title */}
            <h1 className={`text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r ${scoreData.color} bg-clip-text text-transparent`}>
              {scoreData.title}
            </h1>
            
            {/* Message */}
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              {scoreData.message}
            </p>
            
            {/* Score display */}
            <div className="bg-white/20 rounded-2xl p-4 sm:p-6 mb-6 backdrop-blur-sm border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <span className={`bg-gradient-to-r ${scoreData.color} bg-clip-text text-transparent`}>
                  {score}
                </span>
                <span className="text-gray-600">/5</span>
              </div>
              <p className="text-gray-600 text-sm">rébus trouvés</p>
            </div>
            
            {/* Action buttons */}
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={resetGame}
                className="w-full btn-success text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-sm sm:text-base border-0 flex items-center justify-center gap-2"
              >
                <span className="text-lg">🔄</span>
                Rejouer
              </button>
              <Link
                href="/categories"
                className="block w-full btn-primary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-sm sm:text-base border-0 flex items-center justify-center gap-2"
              >
                <span className="text-lg">🎯</span>
                Changer de catégorie
              </Link>
              <Link
                href="/"
                className="block w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="text-lg">🏠</span>
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-1 sm:p-2 md:p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header avec score et progression */}
        <div className="glass-card rounded-xl p-3 sm:p-4 md:p-6 mb-3 sm:mb-4 md:mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🧩</div>
              <div className="text-sm sm:text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Rébus {currentIndex + 1}/5
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl">🏆</div>
              <div className="text-sm sm:text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Score: {score}
              </div>
            </div>
          </div>
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${((currentIndex + 1) / 5) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Début</span>
            <span>{Math.round(((currentIndex + 1) / 5) * 100)}% complété</span>
            <span>Fin</span>
          </div>
        </div>

        {/* Image du rébus */}
        <div className="game-card rounded-xl p-3 sm:p-4 md:p-6 mb-3 sm:mb-4 md:mb-6 text-center">
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-2">
            <span className="text-xl sm:text-2xl">🔍</span>
            Qui suis-je ?
          </div>
          <div className="relative w-full h-40 sm:h-48 md:h-64 lg:h-80 mb-3 sm:mb-4 md:mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
            <Image
              src={currentRebus.image}
              alt="Rébus à deviner"
              fill
              className="object-contain rounded-xl transition-transform hover:scale-105 duration-300"
              onError={(e) => {
                // Image de fallback en cas d'erreur
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub24gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=";
              }}
            />
          </div>
          
          {showHint && (
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4 sm:p-6 mb-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💡</span>
                <span className="font-bold text-yellow-800">Indice</span>
              </div>
              <p className="text-yellow-700 text-sm sm:text-base leading-relaxed">
                {currentRebus.hint}
              </p>
            </div>
          )}
          
          {showAnswer && (
            <div className={`rounded-xl p-4 sm:p-6 mb-4 shadow-lg border ${
              isCorrectAnswer 
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
                : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{isCorrectAnswer ? '🎉' : '😔'}</span>
                <span className={`font-bold ${isCorrectAnswer ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrectAnswer ? 'Bravo !' : 'Dommage !'}
                </span>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isCorrectAnswer ? 'text-green-700' : 'text-red-700'
              }`}>
                <strong>Réponse:</strong> {currentRebus.answer}
              </p>
            </div>
          )}
        </div>

        {/* Zone de réponse et boutons */}
        {!showAnswer && (
          <div className="game-card rounded-xl p-3 sm:p-4 md:p-6">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <label htmlFor="answer" className="block text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="text-lg sm:text-xl">✍️</span>
                  Votre réponse:
                </label>
                <input
                  type="text"
                  id="answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleValidate()}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm sm:text-base transition-all duration-300 shadow-sm"
                  placeholder="Tapez le nom de la célébrité..."
                  autoFocus
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <button
                  onClick={handleValidate}
                  disabled={!userAnswer.trim()}
                  className="btn-primary text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm sm:text-base border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  <span className="text-lg">✅</span>
                  Valider
                </button>
                
                <button
                  onClick={handleHint}
                  disabled={showHint}
                  className="btn-secondary text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm sm:text-base border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  <span className="text-lg">💡</span>
                  {showHint ? 'Affiché' : 'Indice'}
                </button>
                
                <button
                  onClick={handleAbandon}
                  className="btn-danger text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm sm:text-base border-0 flex items-center justify-center gap-2"
                >
                  <span className="text-lg">🏳️</span>
                  Abandonner
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bouton retour */}
        <div className="text-center mt-4 sm:mt-6">
          <div className="glass-card rounded-xl p-3">
            <Link
              href="/categories"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5 5-5M18 12H6" />
              </svg>
              Retour aux catégories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-24 w-24 sm:h-32 sm:w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-base sm:text-lg text-gray-600">Chargement du jeu...</p>
      </div>
    </div>
  );
}

export default function JeuPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <JeuGameComponent />
    </Suspense>
  );
} 