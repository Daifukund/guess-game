export interface Rebus {
  id: number;
  category: string;
  image: string;
  answer: string;
  hint: string;
}

export const rebus: Rebus[] = [
  {
    id: 1,
    category: "celebrite",
    image: "/rebus/celebrite/emmanuel-macron.jpg",
    answer: "emmanuel macron",
    hint: "Président de la République française"
  },
  {
    id: 2,
    category: "celebrite",
    image: "/rebus/celebrite/marcel-cerdan.jpg",
    answer: "marcel cerdan",
    hint: "Boxeur français légendaire, amoureux d'Édith Piaf"
  },
  {
    id: 3,
    category: "celebrite",
    image: "/rebus/celebrite/louis-de-fenus.jpg",
    answer: "louis de fenus",
    hint: "Humoriste et comédien français"
  },
  {
    id: 4,
    category: "celebrite",
    image: "/rebus/celebrite/pierre-bachelet.jpg",
    answer: "pierre bachelet",
    hint: "Chanteur français, interprète de 'Les Corons'"
  },
  {
    id: 5,
    category: "celebrite",
    image: "/rebus/celebrite/christophe-mae.jpg",
    answer: "christophe mae",
    hint: "Chanteur français, interprète de 'On s'attache'"
  },
  {
    id: 6,
    category: "celebrite",
    image: "/rebus/celebrite/gerard-depardieu.jpg",
    answer: "gerard depardieu",
    hint: "Acteur français mondialement connu"
  },
  {
    id: 7,
    category: "celebrite",
    image: "/rebus/celebrite/julien-dore.jpg",
    answer: "julien dore",
    hint: "Chanteur français, gagnant de la Nouvelle Star"
  },
  {
    id: 8,
    category: "celebrite",
    image: "/rebus/celebrite/mylene-farmer.jpg",
    answer: "mylene farmer",
    hint: "Chanteuse française iconique, 'Désenchantée'"
  },
  {
    id: 9,
    category: "celebrite",
    image: "/rebus/celebrite/florent-pagny.jpg",
    answer: "florent pagny",
    hint: "Chanteur français, coach dans The Voice"
  },
  {
    id: 10,
    category: "celebrite",
    image: "/rebus/celebrite/sophie-marceau.jpg",
    answer: "sophie marceau",
    hint: "Actrice française, star de 'La Boum'"
  },
  {
    id: 11,
    category: "celebrite",
    image: "/rebus/celebrite/maitre-gims.jpg",
    answer: "maitre gims",
    hint: "Rappeur français, membre du groupe Sexion d'Assaut"
  },
  {
    id: 12,
    category: "celebrite",
    image: "/rebus/celebrite/booba.jpg",
    answer: "booba",
    hint: "Rappeur français, surnommé le 'Duc de Boulogne'"
  },
  {
    id: 13,
    category: "animal",
    image: "/rebus/animal/gazelle.jpg",
    answer: "gazelle",
    hint: "Antilope gracieuse et rapide d'Afrique"
  },
  {
    id: 14,
    category: "animal",
    image: "/rebus/animal/serpent.jpg",
    answer: "serpent",
    hint: "Reptile sans pattes qui rampe"
  },
  {
    id: 15,
    category: "animal",
    image: "/rebus/animal/herisson.jpg",
    answer: "hérisson",
    hint: "Petit mammifère avec des piquants"
  },
  {
    id: 16,
    category: "animal",
    image: "/rebus/animal/etourneau.jpg",
    answer: "étourneau",
    hint: "Petit oiseau noir avec des reflets métalliques"
  },
  {
    id: 17,
    category: "animal",
    image: "/rebus/animal/elephant.jpg",
    answer: "éléphant",
    hint: "Le plus gros mammifère terrestre avec une trompe"
  },
  {
    id: 18,
    category: "animal",
    image: "/rebus/animal/singe.jpg",
    answer: "singe",
    hint: "Primate intelligent qui vit dans les arbres"
  }
];

export const categories = [
  { id: "celebrite", name: "Célébrités", enabled: true },
  { id: "animal", name: "Animaux", enabled: true },
  { id: "film", name: "Films & Dessins Animés", enabled: false },
  { id: "metier", name: "Métiers", enabled: false },
  { id: "ville", name: "Villes & Pays", enabled: false }
];

export function getRebusByCategory(category: string): Rebus[] {
  return rebus.filter(r => r.category === category);
}

export function getRandomRebus(category: string, count: number = 5): Rebus[] {
  const categoryRebus = getRebusByCategory(category);
  const shuffled = [...categoryRebus].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, categoryRebus.length));
}

export function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
} 