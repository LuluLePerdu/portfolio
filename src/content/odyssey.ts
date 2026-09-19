import type { T } from "@/lib/i18n";
import manifest from "./photos.json";

/**
 * A photo from public/images, referenced by "<collection>/<name>" as written
 * in photos.json by scripts/optimize-images.mjs.
 */
export interface Photo {
  id: keyof typeof manifest;
  caption: T;
}

export interface Chapter {
  title: T;
  text: T;
  /** Each inner array is one row of the gallery; a row shares a single height. */
  rows: Photo[][];
}

export interface Story {
  slug: string;
  title: string;
  place: T;
  year: string;
  summary: T;
  stats: [T, T][];
  /** Tall photo used behind the story's title. */
  hero: Photo;
  /** Wide, high-resolution photo used on the home page and the index. */
  cover: Photo;
  chapters: Chapter[];
}

export function photoInfo(photo: Photo) {
  return manifest[photo.id];
}

export function srcSet(photo: Photo) {
  const { widths } = photoInfo(photo);
  return widths.map((w) => `/images/${photo.id}-${w}.webp ${w}w`).join(", ");
}

export function src(photo: Photo) {
  const { widths } = photoInfo(photo);
  return `/images/${photo.id}-${widths[Math.min(1, widths.length - 1)]}.webp`;
}

const p = (id: Photo["id"], fr: string, en: string): Photo => ({ id, caption: { fr, en } });

/** Photos of me, used outside the journal. */
export const me = {
  portrait: p("me/profile", "Ludwig-Emmanuel Dufour", "Ludwig-Emmanuel Dufour"),
  silhouette: p("me/silhouette", "Ludwig-Emmanuel en montagne", "Ludwig-Emmanuel in the mountains"),
  ridge: p("me/ridge", "Sur une crête, au-dessus d'un cirque glaciaire", "On a ridge above a glacial cirque"),
};

export const heroPhoto = p("peru/img_e9462", "Un sommet de la Cordillère Blanche dans les nuages", "A Cordillera Blanca summit in the clouds");

/*
 * To add a story: export the photos with
 *   node scripts/optimize-images.mjs <folder> <collection>
 * then add an entry below. The newest story goes first; it's the one the home page features.
 */
export const stories: Story[] = [
  {
    slug: "santa-cruz",
    title: "Santa Cruz",
    place: { fr: "Cordillère Blanche, Pérou", en: "Cordillera Blanca, Peru" },
    year: "2024",
    summary: {
      fr: "Quatre jours à pied dans les Andes péruviennes, un col à 4 750 m, et des nuits sous la tente à regarder les glaciers.",
      en: "Four days on foot through the Peruvian Andes, a pass at 4,750 m, and nights in a tent watching the glaciers.",
    },
    stats: [
      [{ fr: "Distance", en: "Distance" }, { fr: "≈ 50 km", en: "≈ 50 km" }],
      [{ fr: "Point culminant", en: "High point" }, { fr: "4 750 m", en: "4,750 m" }],
      [{ fr: "Durée", en: "Duration" }, { fr: "4 jours", en: "4 days" }],
      [{ fr: "Année", en: "Year" }, { fr: "2024", en: "2024" }],
    ],
    hero: p("peru/img_e9454", "Le sentier au fond de la vallée de Santa Cruz", "The trail along the Santa Cruz valley floor"),
    cover: p("peru/img_9565", "Crêtes enneigées au-dessus des pentes dorées", "Snowy ridges above golden slopes"),
    chapters: [
      {
        title: { fr: "Huaraz, avant le départ", en: "Huaraz, before leaving" },
        text: {
          fr: "Tout commence à Huaraz, à un peu plus de 3 000 m. On y reste quelques jours pour laisser le corps s'habituer à l'altitude, pendant que les sommets enneigés attendent au bout de chaque rue.",
          en: "It all starts in Huaraz, a little over 3,000 m up. We stay a few days to let the body adjust to the altitude, while the snowy peaks wait at the end of every street.",
        },
        rows: [
          [
            p("peru/img_e9432", "Huaraz et la Cordillère au loin", "Huaraz with the Cordillera in the distance"),
            p("peru/img_9416", "La ville la nuit, la veille du départ", "The city at night, the eve of departure"),
            p("peru/img_e9433", "Premier regard sur les montagnes", "A first look at the mountains"),
          ],
        ],
      },
      {
        title: { fr: "La vallée s'ouvre", en: "The valley opens" },
        text: {
          fr: "Le sentier remonte le long d'une rivière, à travers les buissons et les pâturages. On croise plus de moutons et de vaches que de randonneurs.",
          en: "The trail climbs along a river, through brush and pasture. We pass more sheep and cows than hikers.",
        },
        rows: [
          [
            p("peru/img_e9454", "Le sentier serpente au fond de la vallée", "The trail winds along the valley floor"),
            p("peru/img_9519", "Pause au bord du ruisseau", "A break by the stream"),
            p("peru/dsf0812", "Voisins de sentier", "Trail neighbours"),
            p("peru/img_e9458", "Pâturage sous les glaciers", "Grazing below the glaciers"),
          ],
        ],
      },
      {
        title: { fr: "En altitude", en: "Up high" },
        text: {
          fr: "Plus on monte, plus l'air se raréfie et plus les couleurs deviennent irréelles. Le lac d'Arhuaycocha, à 4 420 m, a un bleu qui ne ressemble à rien. Puis vient le col de Punta Unión, à 4 750 m.",
          en: "The higher we climb, the thinner the air and the more unreal the colours. Arhuaycocha lake, at 4,420 m, has a blue like nothing else. Then comes Punta Unión pass, at 4,750 m.",
        },
        rows: [
          [
            p("peru/faue4532", "Lagune sur les hauts plateaux", "A lagoon on the high plateau"),
            p("peru/gnyb7522", "Arhuaycocha, 4 420 m", "Arhuaycocha, 4,420 m"),
          ],
          [
            p("peru/img_9565", "Crêtes enneigées", "Snow-covered ridges"),
            p("peru/img_e9462", "Le sommet sort des nuages", "The summit breaks through the clouds"),
            p("peru/img_e9554", "Murets de pierre et glacier", "Stone walls and glacier"),
          ],
        ],
      },
      {
        title: { fr: "Les nuits", en: "The nights" },
        text: {
          fr: "Le soir, la tente, le réchaud et le silence. Le froid tombe d'un coup quand le soleil passe derrière la crête.",
          en: "In the evening: the tent, the stove and the silence. The cold drops all at once when the sun slips behind the ridge.",
        },
        rows: [
          [
            p("peru/kdcr2599", "Campement au pied des glaciers", "Camp below the glaciers"),
            p("peru/img_9522", "Le réchaud au crépuscule", "The stove at dusk"),
          ],
        ],
      },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
