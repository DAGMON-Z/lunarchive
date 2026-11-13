# LUNARCHIVE

**Stories of the machines NASA left on the Moon, on Mars and in deep space, told for explorers aged 8 to 14.**

A NASA Space Apps Challenge 2026 project for the challenge
[Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars](https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/).

**Live site:** https://lunarchive-wheat.vercel.app

---

## What it is

Rovers, landers, descent stages and probes finish their work and stay where they stopped. Most children only hear about missions that are still running. LUNARCHIVE lets each of those silent machines tell its own story, and lets children rebuild them to learn how they worked.

## Features

| Feature | What it does |
|---|---|
| **Relic Vault** | 28 relics, each with a story, the science it made possible, a fun fact, why it was left behind, and a quiz. |
| **In Its Own Words** | Every relic introduces itself in first person. The story can be read aloud. |
| **Relic Rescue Rover** | A 3D game with three worlds. Build a rover and drive across the Moon or Mars, or fly a scout ship through deep space to the Voyager and Pioneer probes. Rebuild each relic by choosing parts by the job they do, then switch it on to hear what it discovered. |
| **Be the Relic** | A mission simulator. The child becomes one machine and lives its real mission in order: launch day, the journey, the landing or flyby, the things it really did, and the way it really ended. All 28 relics have a mission, each with real dates. |
| **Surface Landing Map** | NASA maps of the Moon and Mars with every relic pinned at its real landing coordinates. |
| **Timeline** | Sixty years of explorers in order, from Ranger (1964) to Ingenuity (2024). |
| **Deep Space wing** | Voyager 1 and 2 and Pioneer 10 and 11, the travellers that never stopped. |
| **Badges and certificate** | Each correct quiz earns a badge. The certificate updates with every badge and can be downloaded. |
| **English and Arabic** | Full translation with right-to-left layout. |

## For teachers and parents

- **Audience:** children aged 8 to 14, and curious adults.
- **A 20-minute lesson:** pick one relic, read or listen to its story, rebuild it in the Arena, answer the quiz, print the certificate.
- **Privacy:** no account and no data collection. Badges and the certificate name stay in the browser.
- **Accessibility:** two languages, read-aloud stories, keyboard and touch controls, short sentences in plain words.

## Run it locally

The site is plain HTML, CSS and JavaScript. There is nothing to build.

```bash
git clone https://github.com/DAGMON-Z/lunarchive.git
cd lunarchive
python3 -m http.server 8000
```

Then open http://localhost:8000.

An internet connection is needed for the fonts, icons, Three.js and the live NASA photos.

## Project structure

```
index.html              The page
css/style.css           Custom styles on top of Tailwind
js/translations.js      English and Arabic interface text and relic translations
js/app.js               Relic data, cards, map, quiz, gallery, narration, certificate
js/extras.js            Deep Space wing, relic voices, map coordinates, timeline
js/arena.js             Relic Rescue Rover, the 3D game
js/missions-data.js     Be the Relic: the real timeline of each mission
js/missions.js          Be the Relic: the mission simulator
js/tailwind-config.js   Theme colours and fonts
assets/                 NASA maps of the Moon and Mars
```

## Built with

- HTML, CSS and JavaScript, with no build step
- [Three.js](https://threejs.org/) r128 for the 3D game and starfield
- [Tailwind CSS](https://tailwindcss.com/) and [Font Awesome](https://fontawesome.com/) from CDNs
- The Web Speech API for read-aloud stories

## NASA data and resources

| Used for | Source |
|---|---|
| Mission facts | [NASA Science mission pages](https://science.nasa.gov/missions/) and the [NASA Space Science Data Coordinated Archive](https://nssdc.gsfc.nasa.gov/) |
| Photos | [NASA Image and Video Library](https://images.nasa.gov/), loaded live through its public API |
| Maps | [NASA Solar System Treks](https://trek.nasa.gov/): LRO Wide Angle Camera global mosaic (Moon) and Viking MDIM 2.1 colour mosaic (Mars) |

The 3D models in the game are simple shapes built for this project. They are simplified and not to scale.

## Licence

Code is released under the [MIT Licence](LICENSE). NASA imagery and data are in the public domain and are credited to NASA. This project is not endorsed by NASA.
