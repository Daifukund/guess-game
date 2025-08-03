export interface Rebus {
  id: number;
  category: string;
  image: string;
  answer: string;
  hint: string;
}

export const rebus: Rebus[] = [
  // CÉLÉBRITÉS (16 rébus)
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
    answer: "louis de funes",
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
    category: "celebrite",
    image: "/rebus/celebrite/lesfrereslumieres.jpg",
    answer: "les freres lumiere",
    hint: "Inventeurs du cinématographe"
  },
  {
    id: 14,
    category: "celebrite",
    image: "/rebus/celebrite/leonardodicaprio.jpg",
    answer: "leonardo dicaprio",
    hint: "Acteur américain oscarisé"
  },
  {
    id: 15,
    category: "celebrite",
    image: "/rebus/celebrite/lesfreresmongolfiere.jpg",
    answer: "les freres montgolfier",
    hint: "Inventeurs de la montgolfière"
  },
  {
    id: 16,
    category: "celebrite",
    image: "/rebus/celebrite/asterix.jpg",
    answer: "asterix",
    hint: "Héros de bande dessinée gauloise"
  },

  // ANIMAUX (17 rébus)
  {
    id: 17,
    category: "animal",
    image: "/rebus/animal/gazelle.jpg",
    answer: "gazelle",
    hint: "Antilope gracieuse et rapide d'Afrique"
  },
  {
    id: 18,
    category: "animal",
    image: "/rebus/animal/serpent.jpg",
    answer: "serpent",
    hint: "Reptile sans pattes qui rampe"
  },
  {
    id: 19,
    category: "animal",
    image: "/rebus/animal/herisson.jpg",
    answer: "hérisson",
    hint: "Petit mammifère avec des piquants"
  },
  {
    id: 20,
    category: "animal",
    image: "/rebus/animal/etourneau.jpg",
    answer: "étourneau",
    hint: "Petit oiseau noir avec des reflets métalliques"
  },
  {
    id: 21,
    category: "animal",
    image: "/rebus/animal/elephant.jpg",
    answer: "éléphant",
    hint: "Le plus gros mammifère terrestre avec une trompe"
  },
  {
    id: 22,
    category: "animal",
    image: "/rebus/animal/singe.jpg",
    answer: "singe",
    hint: "Primate intelligent qui vit dans les arbres"
  },
  {
    id: 23,
    category: "animal",
    image: "/rebus/animal/fauconpelerin.jpg",
    answer: "faucon pèlerin",
    hint: "Rapace le plus rapide du monde"
  },
  {
    id: 24,
    category: "animal",
    image: "/rebus/animal/malinois.jpg",
    answer: "malinois",
    hint: "Chien de berger belge très intelligent"
  },
  {
    id: 25,
    category: "animal",
    image: "/rebus/animal/marabou.jpg",
    answer: "marabout",
    hint: "Grand échassier d'Afrique au bec massif"
  },
  {
    id: 26,
    category: "animal",
    image: "/rebus/animal/grizzli.jpg",
    answer: "grizzli",
    hint: "Ours brun d'Amérique du Nord"
  },
  {
    id: 27,
    category: "animal",
    image: "/rebus/animal/geaibleu.jpg",
    answer: "geai bleu",
    hint: "Oiseau bleu intelligent d'Amérique du Nord"
  },
  {
    id: 28,
    category: "animal",
    image: "/rebus/animal/martinpecheur.jpg",
    answer: "martin-pêcheur",
    hint: "Petit oiseau coloré qui pêche les poissons"
  },
  {
    id: 29,
    category: "animal",
    image: "/rebus/animal/moineau.jpg",
    answer: "moineau",
    hint: "Petit oiseau très commun en ville"
  },
  {
    id: 30,
    category: "animal",
    image: "/rebus/animal/suricat.jpg",
    answer: "suricate",
    hint: "Petit mammifère d'Afrique qui monte la garde"
  },
  {
    id: 31,
    category: "animal",
    image: "/rebus/animal/serpentasonette.jpg",
    answer: "serpent à sonnette",
    hint: "Serpent venimeux avec une queue qui fait du bruit"
  },
  {
    id: 32,
    category: "animal",
    image: "/rebus/animal/mantereligieuse.jpg",
    answer: "mante religieuse",
    hint: "Insecte prédateur qui semble prier"
  },
  {
    id: 33,
    category: "animal",
    image: "/rebus/animal/tortue.jpg",
    answer: "tortue",
    hint: "Reptile avec une carapace protectrice"
  },

  // PAYS (26 rébus)
  {
    id: 34,
    category: "pays",
    image: "/rebus/pays/autriche.jpg",
    answer: "autriche",
    hint: "Pays alpin, capitale Vienne"
  },
  {
    id: 35,
    category: "pays",
    image: "/rebus/pays/australie.jpg",
    answer: "australie",
    hint: "Continent-pays avec les kangourous"
  },
  {
    id: 36,
    category: "pays",
    image: "/rebus/pays/benin.jpg",
    answer: "bénin",
    hint: "Pays d'Afrique de l'Ouest, ancienne colonie française"
  },
  {
    id: 37,
    category: "pays",
    image: "/rebus/pays/bulgarie.jpg",
    answer: "bulgarie",
    hint: "Pays des Balkans, capitale Sofia"
  },
  {
    id: 38,
    category: "pays",
    image: "/rebus/pays/capvert.jpg",
    answer: "cap-vert",
    hint: "Archipel au large de l'Afrique de l'Ouest"
  },
  {
    id: 39,
    category: "pays",
    image: "/rebus/pays/cotedivoire.jpg",
    answer: "côte d'ivoire",
    hint: "Pays d'Afrique de l'Ouest, capitale Yamoussoukro"
  },
  {
    id: 40,
    category: "pays",
    image: "/rebus/pays/croatie.jpg",
    answer: "croatie",
    hint: "Pays des Balkans en forme de croissant"
  },
  {
    id: 41,
    category: "pays",
    image: "/rebus/pays/espagne.jpg",
    answer: "espagne",
    hint: "Pays de la péninsule ibérique, capitale Madrid"
  },
  {
    id: 42,
    category: "pays",
    image: "/rebus/pays/dominique.jpg",
    answer: "dominique",
    hint: "Île des Caraïbes, surnommée l'île Nature"
  },
  {
    id: 43,
    category: "pays",
    image: "/rebus/pays/cuba.jpg",
    answer: "cuba",
    hint: "Grande île des Caraïbes, capitale La Havane"
  },
  {
    id: 44,
    category: "pays",
    image: "/rebus/pays/ilescaiman.jpg",
    answer: "îles caïman",
    hint: "Territoire britannique dans les Caraïbes"
  },
  {
    id: 45,
    category: "pays",
    image: "/rebus/pays/grenade.jpg",
    answer: "grenade",
    hint: "Petite île des Caraïbes, l'île aux épices"
  },
  {
    id: 46,
    category: "pays",
    image: "/rebus/pays/liban.jpg",
    answer: "liban",
    hint: "Pays du Moyen-Orient, capitale Beyrouth"
  },
  {
    id: 47,
    category: "pays",
    image: "/rebus/pays/mali.jpg",
    answer: "mali",
    hint: "Pays d'Afrique de l'Ouest, capitale Bamako"
  },
  {
    id: 48,
    category: "pays",
    image: "/rebus/pays/maroc.jpg",
    answer: "maroc",
    hint: "Pays d'Afrique du Nord, capitale Rabat"
  },
  {
    id: 49,
    category: "pays",
    image: "/rebus/pays/saintelucie.jpg",
    answer: "sainte-lucie",
    hint: "Île des Caraïbes avec ses fameux Pitons"
  },
  {
    id: 50,
    category: "pays",
    image: "/rebus/pays/saintmarin.jpg",
    answer: "saint-marin",
    hint: "Micro-État enclavé en Italie"
  },
  {
    id: 51,
    category: "pays",
    image: "/rebus/pays/perou.jpg",
    answer: "pérou",
    hint: "Pays d'Amérique du Sud avec le Machu Picchu"
  },
  {
    id: 52,
    category: "pays",
    image: "/rebus/pays/roumanie.jpg",
    answer: "roumanie",
    hint: "Pays d'Europe de l'Est, capitale Bucarest"
  },
  {
    id: 53,
    category: "pays",
    image: "/rebus/pays/russie.jpg",
    answer: "russie",
    hint: "Plus grand pays du monde, capitale Moscou"
  },
  {
    id: 54,
    category: "pays",
    image: "/rebus/pays/syri.jpg",
    answer: "syrie",
    hint: "Pays du Moyen-Orient, capitale Damas"
  },
  {
    id: 55,
    category: "pays",
    image: "/rebus/pays/suede.jpg",
    answer: "suède",
    hint: "Pays nordique, capitale Stockholm"
  },
  {
    id: 56,
    category: "pays",
    image: "/rebus/pays/seychelle.jpg",
    answer: "seychelles",
    hint: "Archipel paradisiaque de l'océan Indien"
  },
  {
    id: 57,
    category: "pays",
    image: "/rebus/pays/grece.jpg",
    answer: "grèce",
    hint: "Berceau de la démocratie, capitale Athènes"
  },
  {
    id: 58,
    category: "pays",
    image: "/rebus/pays/malaysie.jpg",
    answer: "malaisie",
    hint: "Pays d'Asie du Sud-Est, capitale Kuala Lumpur"
  },
  {
    id: 59,
    category: "pays",
    image: "/rebus/pays/macedoine.jpg",
    answer: "macédoine du nord",
    hint: "Pays des Balkans, capitale Skopje"
  }
];

export const categories = [
  { id: "celebrite", name: "Célébrités", enabled: true },
  { id: "animal", name: "Animaux", enabled: true },
  { id: "pays", name: "Pays", enabled: true },
  { id: "film", name: "Films & Dessins Animés", enabled: false },
  { id: "metier", name: "Métiers", enabled: false }
];

export function getRebusByCategory(category: string): Rebus[] {
  return rebus.filter(r => r.category === category);
}

export function getAllRebusByCategory(category: string): Rebus[] {
  return getRebusByCategory(category);
}

export function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
} 