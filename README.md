# ludwig-emmanuel.dev

Portfolio de Ludwig-Emmanuel Dufour. Next.js en export statique, déployé sur Cloudflare Pages.
Direction visuelle empruntée à Fjelkore : noir, brume, vert forêt, touches d'ocre.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000/fr/ (le formulaire ne marche pas ici)
npm run build      # génère out/
npm run preview    # sert out/ + functions/ avec Wrangler, http://localhost:8788
```

## Contenu

Tout le texte est dans `src/content/` :

- `dictionary.ts` — textes d'interface FR/EN
- `projects.ts` — projets (une page par projet sous `/fr/work/<slug>/`)
- `path.ts` — expérience, formation, compétences, liens
- `odyssey.ts` — carnet du trek Santa Cruz

Photos : mettre les originaux dans un dossier, puis

```bash
node scripts/optimize-images.mjs <dossier> <collection>
```

Les WebP (960 / 1600 / 2800 px) sortent dans `public/images/<collection>/` et
`src/content/photos.json` enregistre leurs dimensions. On les référence ensuite
par `<collection>/<nom>`.

**Ajouter une histoire à l'Odyssée** : exporter ses photos dans une nouvelle
collection, puis ajouter une entrée dans `stories` (`src/content/odyssey.ts`).
La plus récente se place en premier : c'est celle que l'accueil met en vedette,
et la page `/odyssey/` les liste toutes.

## Cloudflare Pages

- Commande de build : `npm run build`
- Répertoire de sortie : `out`
- Variables (Settings > Variables and secrets) :
  - `BREVO_API_KEY` (secret) — clé **API** Brevo, pas la clé SMTP
  - `CONTACT_TO` — optionnel, destinataire des messages
  - `CONTACT_FROM` — optionnel, expéditeur vérifié (défaut `portfolio@ludwig-emmanuel.dev`)

`functions/api/contact.ts` reçoit le formulaire et l'envoie via l'API HTTP de Brevo.
