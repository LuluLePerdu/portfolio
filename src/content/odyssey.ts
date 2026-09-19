import type { T } from "@/lib/i18n";

export interface Photo {
  /** Base name in public/images/peru, without the -900/-2000 suffix. */
  file: string;
  /** Pixel size of the large variant, used for srcset and layout. */
  w: number;
  h: number;
  caption: T;
}

export interface Chapter {
  title: T;
  text: T;
  /** Each inner array is one row of the gallery; a row shares a single height. */
  rows: Photo[][];
}

const p = (file: string, w: number, h: number, fr: string, en: string): Photo => ({
  file,
  w,
  h,
  caption: { fr, en },
});

export const heroPhoto = p("img_e9462", 2000, 3527, "Un sommet de la Cordillère Blanche dans les nuages", "A Cordillera Blanca summit in the clouds");
export const journalHero = p("img_e9454", 2000, 2667, "Le sentier au fond de la vallée de Santa Cruz", "The trail along the Santa Cruz valley floor");
export const teaserPhoto = p("kdcr2599", 1080, 608, "Campement au pied des glaciers", "Camp below the glaciers");

export const chapters: Chapter[] = [
  {
    title: { fr: "Huaraz, avant le départ", en: "Huaraz, before leaving" },
    text: {
      fr: "Tout commence à Huaraz, à un peu plus de 3 000 m. On y reste quelques jours pour laisser le corps s'habituer à l'altitude, pendant que les sommets enneigés attendent au bout de chaque rue.",
      en: "It all starts in Huaraz, a little over 3,000 m up. We stay a few days to let the body adjust to the altitude, while the snowy peaks wait at the end of every street.",
    },
    rows: [[
      p("img_e9432", 2000, 1500, "Huaraz et la Cordillère au loin", "Huaraz with the Cordillera in the distance"),
      p("img_9416", 2000, 1500, "La ville la nuit, la veille du départ", "The city at night, the eve of departure"),
      p("img_e9433", 2000, 1500, "Premier regard sur les montagnes", "A first look at the mountains"),
    ]],
  },
  {
    title: { fr: "La vallée s'ouvre", en: "The valley opens" },
    text: {
      fr: "Le sentier remonte le long d'une rivière, à travers les buissons et les pâturages. On croise plus de moutons et de vaches que de randonneurs.",
      en: "The trail climbs along a river, through brush and pasture. We pass more sheep and cows than hikers.",
    },
    rows: [[
      p("img_e9454", 2000, 2667, "Le sentier serpente au fond de la vallée", "The trail winds along the valley floor"),
      p("img_9519", 2000, 2667, "Pause au bord du ruisseau", "A break by the stream"),
      p("dsf0812", 2000, 1502, "Voisins de sentier", "Trail neighbours"),
      p("img_e9458", 1573, 3320, "Pâturage sous les glaciers", "Grazing below the glaciers"),
    ]],
  },
  {
    title: { fr: "En altitude", en: "Up high" },
    text: {
      fr: "Plus on monte, plus l'air se raréfie et plus les couleurs deviennent irréelles. Le lac d'Arhuaycocha, à 4 420 m, a un bleu qui ne ressemble à rien. Puis vient le col de Punta Unión, à 4 750 m.",
      en: "The higher we climb, the thinner the air and the more unreal the colours. Arhuaycocha lake, at 4,420 m, has a blue like nothing else. Then comes Punta Unión pass, at 4,750 m.",
    },
    rows: [[
      p("faue4532", 1080, 608, "Lagune sur les hauts plateaux", "A lagoon on the high plateau"),
      p("gnyb7522", 1080, 608, "Arhuaycocha, 4 420 m", "Arhuaycocha, 4,420 m"),
    ], [
      p("img_9565", 2000, 2667, "Crêtes enneigées", "Snow-covered ridges"),
      p("img_e9462", 2000, 3527, "Le sommet sort des nuages", "The summit breaks through the clouds"),
      p("img_e9554", 2000, 2667, "Murets de pierre et glacier", "Stone walls and glacier"),
    ]],
  },
  {
    title: { fr: "Les nuits", en: "The nights" },
    text: {
      fr: "Le soir, la tente, le réchaud et le silence. Le froid tombe d'un coup quand le soleil passe derrière la crête.",
      en: "In the evening: the tent, the stove and the silence. The cold drops all at once when the sun slips behind the ridge.",
    },
    rows: [[
      p("kdcr2599", 1080, 608, "Campement au pied des glaciers", "Camp below the glaciers"),
      p("img_9522", 2000, 2667, "Le réchaud au crépuscule", "The stove at dusk"),
    ]],
  },
];

export function src(photo: Photo, size: "sm" | "lg") {
  return `/images/peru/${photo.file}-${size === "sm" ? 900 : 2000}.webp`;
}

export function srcSet(photo: Photo) {
  const smW = Math.min(900, photo.w);
  return `${src(photo, "sm")} ${smW}w, ${src(photo, "lg")} ${photo.w}w`;
}
