/* ----------------------------------------------------
   1. NASA RELICS BASE DATA
---------------------------------------------------- */
const RELICS_DATA = [
    // --- MOON HARDWARE ---
    {
        id: 'apollo11-stage',
        name: 'Apollo 11 Eagle Descent Stage',
        target: 'Moon',
        location: 'Sea of Tranquility',
        year: '1969',
        status: 'Resting Historic Monument',
        icon: 'fa-monument',
        color: 'moonSilver',
        shortDesc: 'The bottom half of the lunar module that carried Neil Armstrong and Buzz Aldrin to humanity\'s first moonwalk.',
        story: 'On July 20, 1969, the Eagle landed gently in the gray dust of the Moon. When Armstrong and Aldrin were ready to fly home, they blasted off using the TOP half of their lander, leaving this four-legged gold-wrapped launchpad behind. Attached to one of its legs is a small plaque that reads: "We came in peace for all mankind."',
        science: 'Tested structural landing gear on soft lunar regolith and proved humans could perform precision landings on another celestial world.',
        fact: 'The TV camera that showed the first moonwalk to about 600 million people on Earth is still on the Moon, standing near it!',
        abandoned: 'The Eagle was built in two parts on purpose. The bottom half had the landing legs, the big landing engine, and the fuel needed to land, and it also worked as a launch pad. When the astronauts were ready to go home, only the small top half lifted off. Carrying the heavy bottom half back up would have needed a lot more rocket fuel, so it was left behind on purpose.',
        lat: 44,
        lng: 54,
        quiz: {
            question: "What is written on the plaque attached to Eagle's leg?",
            options: [
                "Property of planet Earth",
                "We came in peace for all mankind",
                "First to touch the Moon",
                "NASA Space Command 1969"
            ],
            correct: 1
        }
    },
    {
        id: 'apollo12-stage',
        name: 'Apollo 12 Intrepid Descent Stage',
        target: 'Moon',
        location: 'Ocean of Storms',
        year: '1969',
        status: 'Precision Landing Monument',
        icon: 'fa-monument',
        color: 'moonSilver',
        shortDesc: 'The descent stage of Apollo 12, which achieved a pinpoint target landing right next to Surveyor 3.',
        story: 'Astronauts Pete Conrad and Alan Bean steered Intrepid to land within walking distance of the robotic Surveyor 3 probe. The four-legged gold descent stage served as their home base during two moonwalks before they launched back up into orbit.',
        science: 'Demonstrated precise targeted landing control and deployed the first full Apollo Lunar Surface Experiments Package (ALSEP).',
        fact: 'Astronaut Pete Conrad joked as he stepped onto the surface: "That may have been a small one for Neil, but that\'s a long one for me!"',
        abandoned: 'Intrepid\'s bottom half did its job the moment it landed. Rockets can only lift so much, so the astronauts used it as a launch pad and left it behind to keep the cabin light enough to reach orbit. The top half was later steered to crash into the Moon on purpose, and the science station left nearby recorded the shaking.',
        lat: 50,
        lng: 40,
        quiz: {
            question: "What robotic probe did Apollo 12 land right next to?",
            options: ["Surveyor 3", "Viking 1", "Pathfinder", "Lunokhod 1"],
            correct: 0
        }
    },
    {
        id: 'apollo14-stage',
        name: 'Apollo 14 Antares Descent Stage',
        target: 'Moon',
        location: 'Fra Mauro Highlands',
        year: '1971',
        status: 'Highland Base',
        icon: 'fa-monument',
        color: 'moonSilver',
        shortDesc: 'The landing base for Alan Shepard and Edgar Mitchell in the rugged lunar highlands.',
        story: 'After Apollo 13 missed its landing, Apollo 14 touched down in the rugged Fra Mauro region. Alan Shepard brought along two golf balls and improvised a club, hitting golf balls across the lunar surface while Antares stood nearby as his launchpad.',
        science: 'Investigated lunar crater ejecta blankets to determine the geological history and age of the Moon\'s impact basins.',
        fact: 'Alan Shepard hit two golf balls on the Moon, claiming the second one went "miles and miles and miles!"',
        abandoned: 'Antares was a one-way ride: its bottom half existed only to land and then to launch the top half. To get Alan Shepard and Edgar Mitchell home safely, everything they didn\'t need was left behind, including the bottom half of the lander and even their little two-wheeled tool cart. The top half was crashed into the Moon on purpose, too.',
        lat: 52,
        lng: 42,
        quiz: {
            question: "What sport did Alan Shepard play on the Moon near the Antares lander?",
            options: ["Baseball", "Golf", "Soccer", "Basketball"],
            correct: 1
        }
    },
    {
        id: 'apollo15-stage',
        name: 'Apollo 15 Falcon Descent Stage',
        target: 'Moon',
        location: 'Hadley-Apennine',
        year: '1971',
        status: 'First J-Mission Base',
        icon: 'fa-monument',
        color: 'moonSilver',
        shortDesc: 'The descent platform that brought the first Lunar Roving Vehicle to the Moon.',
        story: 'Falcon carried heavy scientific gear and the first motorized buggy into the shadow of 15,000-foot lunar mountains. Its landing engine created a deep blast crater in the soil upon touchdown.',
        science: 'Supported extended stay times (over 66 hours) and long-range geological exploration of Hadley Rille.',
        fact: 'Astronaut David Scott performed a famous gravity experiment here by dropping a feather and a hammer at the same time!',
        abandoned: 'Falcon\'s bottom half was only built to land and to work as a launch pad. To lift off with their precious moon rocks and still reach orbit, Dave Scott and Jim Irwin had to leave heavy things behind. That\'s why Falcon\'s bottom half, along with the moon buggy, stayed on the Moon.',
        lat: 36,
        lng: 49,
        quiz: {
            question: "What two items were dropped simultaneously to prove Galileo's gravity theory on Apollo 15?",
            options: ["A ball and a rock", "A feather and a hammer", "A wrench and a screw", "A coin and a leaf"],
            correct: 1
        }
    },
    {
        id: 'apollo16-stage',
        name: 'Apollo 16 Orion Descent Stage',
        target: 'Moon',
        location: 'Descartes Highlands',
        year: '1972',
        status: 'Highland Outpost',
        icon: 'fa-monument',
        color: 'moonSilver',
        shortDesc: 'The descent stage that brought John Young and Charles Duke to the lunar highlands.',
        story: 'Orion landed at the highest elevation of any Apollo mission. Astronauts used its base as a research station while collecting ancient lunar crustal rocks from Cayley Plains.',
        science: 'Showed that the lunar highlands were formed by impact debris rather than ancient volcanic eruptions.',
        fact: 'Astronaut Charlie Duke left a framed photograph of his family on the lunar dust near Orion.',
        abandoned: 'Orion was designed to be used only once. After John Young and Charles Duke finished their three days on the Moon, only the small top cabin blasted off to meet the mothership Casper in orbit. The bottom half stayed behind because the little top engine could never have lifted it, and nobody needed it anymore.',
        lat: 54,
        lng: 50,
        quiz: {
            question: "What personal item did astronaut Charlie Duke leave on the Moon near Orion?",
            options: ["A framed family photo", "His wristwatch", "A wedding ring", "A school textbook"],
            correct: 0
        }
    },
    {
        id: 'apollo17-stage',
        name: 'Apollo 17 Challenger Descent Stage',
        target: 'Moon',
        location: 'Taurus-Littrow Valley',
        year: '1972',
        status: 'Final Apollo Base',
        icon: 'fa-monument',
        color: 'moonSilver',
        shortDesc: 'The landing base for the final human crew to walk on the Moon in the 20th century.',
        story: 'Challenger landed in a narrow valley between mountains that rise higher than Earth\'s Grand Canyon is deep. Astronaut Eugene Cernan and scientist-astronaut Harrison Schmitt spent over 3 days exploring mountains and volcanic valley floors before flying home.',
        science: 'Gathered orange volcanic glass beads and collected the heaviest single haul of lunar samples in history (110 kg).',
        fact: 'Eugene Cernan carved his daughter\'s initials "TDC" into the lunar soil before climbing aboard to leave!',
        abandoned: 'Challenger stayed behind for the same reason as the other landers: its small top cabin could only lift itself. And because Apollo 17 was the last Moon landing of the program, the missions planned after it (Apollo 18, 19 and 20) were cancelled because of budget cuts. So nobody ever came back.',
        lat: 38,
        lng: 57,
        quiz: {
            question: "Who was the last human to walk on the Moon during the Apollo 17 mission?",
            options: ["Buzz Aldrin", "Eugene Cernan", "Neil Armstrong", "Michael Collins"],
            correct: 1
        }
    },
    {
        id: 'lunar-rover',
        name: 'Apollo Lunar Roving Vehicle (LRV)',
        target: 'Moon',
        location: 'Hadley, Descartes & Taurus-Littrow',
        year: '1971 - 1972',
        status: 'Parked Moon Buggies (3 Total)',
        icon: 'fa-car-side',
        color: 'moonSilver',
        shortDesc: 'An electric moon buggy folded like origami under the lander so astronauts could go on galactic road trips.',
        story: 'Astronauts unfolded these battery-powered dune buggies on Apollo 15, 16, and 17! Made of light aluminum with woven piano-wire tires, they allowed astronauts to travel miles away from their landers with heavy moon rocks. All three remain parked on the Moon today!',
        science: 'Allowed astronauts to collect deep geological samples from mountain ranges and crater rims far beyond walking distance.',
        fact: 'Its tires were made of steel piano wire woven like mesh instead of rubber, because rubber turns brittle in space cold!',
        abandoned: 'The moon buggy was never meant to fly home. It weighs over 200 kilograms, but the small top cabin could only carry the astronauts and their moon rocks. Its batteries could not be recharged on the Moon either, so it was built for just a few days of driving. The astronauts parked it for good.',
        lat: 37,
        lng: 52,
        quiz: {
            question: "Why were the Lunar Rover tires made of woven piano wire instead of rubber?",
            options: [
                "Rubber is too heavy",
                "Rubber turns brittle and breaks in cold space",
                "Piano wire looks cooler",
                "To prevent punctures from nails"
            ],
            correct: 1
        }
    },
    {
        id: 'alsep-package',
        name: 'Apollo ALSEP Experiments',
        target: 'Moon',
        location: 'Various Apollo Sites',
        year: '1969 - 1972',
        status: 'Silent Science Stations',
        icon: 'fa-solar-panel',
        color: 'moonSilver',
        shortDesc: 'Nuclear-powered science stations set up by Apollo astronauts to measure moonquakes and solar wind.',
        story: 'The crews of Apollo 12, 14, 15, 16 and 17 each set up an Apollo Lunar Surface Experiments Package (ALSEP) containing seismometers, magnetometers, and dust detectors powered by small radioisotope generators. They transmitted valuable moon data back to Earth until 1977!',
        science: 'Discovered that the Moon experiences internal moonquakes and has a small metallic core.',
        fact: 'They detected thousands of moonquakes, proving the Moon is not geologically dead!',
        abandoned: 'These stations were switched off on purpose. On September 30, 1977, NASA sent the last command to shut them down because the equipment was getting old and the money and people were needed for other space missions. They had worked for nearly eight years, much longer than the year they were designed for, and there was nobody on the Moon to repair them.',
        lat: 48,
        lng: 46,
        quiz: {
            question: "What surprising activity did ALSEP seismometers detect on the Moon?",
            options: ["Moonquakes", "Volcanic eruptions", "Tunneled lakes", "Rainstorms"],
            correct: 0
        }
    },
    {
        id: 'retroreflector-arrays',
        name: 'Lunar Laser Ranging Retroreflectors',
        target: 'Moon',
        location: 'Apollo 11, 14, 15 Sites',
        year: '1969 - 1971',
        status: 'Active Optical Targets',
        icon: 'fa-lightbulb',
        color: 'moonSilver',
        shortDesc: 'Mirror arrays left by Apollo crews that scientists still hit with lasers from Earth today!',
        story: 'These passive panels of quartz corner-cube prisms require no electrical power. Scientists on Earth fire high-powered laser beams at them through telescopes and time how long the light takes to bounce back, measuring the exact distance to the Moon.',
        science: 'Proved that the Moon is spiraling away from the Earth at a rate of about 3.8 centimeters per year!',
        fact: 'These are the ONLY Apollo experiments on the Moon still actively used by scientists today!',
        abandoned: 'These mirrors were never switched off, and they aren\'t really broken. They have no batteries and no electronics, so there is nothing to repair, and the astronauts left them in place on purpose so they could be used for many years. Over the decades, dust and tiny scratches have made them weaker, but scientists still bounce lasers off them today. Abandoned, but not forgotten!',
        lat: 42,
        lng: 51,
        quiz: {
            question: "How fast is the Moon moving away from Earth each year according to laser measurements?",
            options: ["3.8 centimeters", "10 meters", "1 kilometer", "3.8 kilometer"],
            correct: 0
        }
    },
    {
        id: 'surveyor-3',
        name: 'Surveyor 3 Robot Probe',
        target: 'Moon',
        location: 'Ocean of Storms',
        year: '1967',
        status: 'Visited by Apollo 12',
        icon: 'fa-satellite-dish',
        color: 'moonSilver',
        shortDesc: 'A robotic lander that scooped lunar soil 2 years BEFORE humans landed on the Moon.',
        story: 'Surveyor 3 landed on the Moon in 1967 to dig into the surface with a tiny claw. Two years later, Apollo 12 astronauts Pete Conrad and Alan Bean landed right next to it! They walked over, snapped photos with Surveyor, and unbolted its camera to bring it back home to Earth science labs.',
        science: 'Provided the first proof that the Moon\'s surface was firm enough to hold a heavy manned spacecraft without sinking.',
        fact: 'It is the only robot on another world ever visited and inspected by human astronauts from Earth!',
        abandoned: 'Surveyor 3 was a robot built for one job: to scoop and photograph the Moon\'s soil. After its first two weeks, the Sun set and the long, freezing lunar night began, and it stopped answering. Later, Apollo 12 astronauts took its camera and some parts home to study how materials age on the Moon, and left the rest because it wasn\'t worth the weight.',
        lat: 51,
        lng: 39,
        quiz: {
            question: "Who visited Surveyor 3 two years after it landed on the Moon?",
            options: [
                "Aliens",
                "Apollo 12 Astronauts",
                "Curiosity Rover",
                "Nobody ever saw it"
            ],
            correct: 1
        }
    },
    {
        id: 'surveyor-1',
        name: 'Surveyor 1 Probe',
        target: 'Moon',
        location: 'Oceanus Procellarum',
        year: '1966',
        status: 'First US Lunar Soft Lander',
        icon: 'fa-satellite-dish',
        color: 'moonSilver',
        shortDesc: 'America\'s very first spacecraft to make a gentle soft landing on another celestial body.',
        story: 'In June 1966, Surveyor 1 touched down softly on three podded legs and sent back over 11,000 clear television images of the lunar landscape, reassuring engineers that spacecraft wouldn\'t sink into deep dust.',
        science: 'Analyzed lunar radar reflectivity and surface bearing strength prior to Apollo planning.',
        fact: 'It survived the brutal cold of the 14-day lunar night and powered back on to keep transmitting!',
        abandoned: 'Surveyor 1 was a pioneer scout, built to test whether the Moon was safe to land on. It did its job and then kept going through several lunar nights, but its aging battery slowly lost strength and it went quiet in early 1967. There was no way to fix a robot on the Moon, so it was left where it landed.',
        lat: 52,
        lng: 35,
        quiz: {
            question: "What major fear about the Moon's surface did Surveyor 1 help disprove?",
            options: [
                "That it was made of quicksand-like dust",
                "That it was boiling hot everywhere",
                "That it was covered in oceans",
                "That it had zero gravity"
            ],
            correct: 0
        }
    },
    {
        id: 'lunar-orbiter-crash-sites',
        name: 'Lunar Orbiter Spacecraft (1-5)',
        target: 'Moon',
        location: 'Lunar Impact Zones',
        year: '1966 - 1967',
        status: 'Deliberately Impacted',
        icon: 'fa-satellite',
        color: 'moonSilver',
        shortDesc: 'Five mapping satellites that photographed 99% of the Moon before being commanded to crash.',
        story: 'NASA launched five Lunar Orbiter satellites to map potential landing sites for Apollo astronauts. After completing their photographic missions, NASA purposefully commanded them to impact the lunar surface so their radio frequencies wouldn\'t interfere with future Apollo flights.',
        science: 'Created the first high-resolution global photographic atlas of the lunar surface.',
        fact: 'Lunar Orbiter 1 took the very first photo of Earth from the Moon\'s orbit in 1966!',
        abandoned: 'Their mission was finished: all the photos were taken, and their film and steering gas were almost used up. The Moon\'s gravity is lumpy, which makes spacecraft in low orbit drift and crash sooner or later. So NASA chose to guide most of them into the surface on purpose, keeping their radios from getting in the way of the Apollo missions.',
        lat: 33,
        lng: 61,
        quiz: {
            question: "Why were the Lunar Orbiter satellites commanded to crash into the Moon?",
            options: [
                "To clear radio signals for Apollo missions",
                "They ran out of fuel unexpectedly",
                "They were shot down",
                "To test explosive impacts"
            ],
            correct: 0
        }
    },
    {
        id: 'saturn-s4b-stages',
        name: 'Saturn V S-IVB Third Stages',
        target: 'Moon',
        location: 'Various Lunar Coordinates',
        year: '1970 - 1972',
        status: 'Seismic Impactors',
        icon: 'fa-shuttle-space',
        color: 'moonSilver',
        shortDesc: 'Massive rocket booster stages intentionally slammed into the Moon to create artificial seismic waves.',
        story: 'Starting with Apollo 13, NASA guided the massive spent third stage (S-IVB) of the Saturn V rocket into the Moon at about 5,800 mph! The deliberate crash generated massive shockwaves picked up by ALSEP seismic sensors deployed by earlier astronauts.',
        science: 'Allowed scientists to map the thickness and density of the lunar crust and interior mantle.',
        fact: 'When the Apollo 13 rocket stage crashed in 1970, the seismometers astronauts had left behind felt the Moon shake for more than three hours!',
        abandoned: 'After the S-IVB fired its engine to send the astronauts toward the Moon, its fuel was empty and it had no more job to do. Instead of leaving it as space junk, NASA steered the later ones into the Moon so the crash would shake the surface like a giant hammer, and the seismometers left by earlier astronauts could listen.',
        lat: 46,
        lng: 37,
        quiz: {
            question: "What happened when heavy rocket stages were crashed into the Moon?",
            options: [
                "The Moon rang like a bell on seismometers",
                "The Moon split into pieces",
                "It created artificial gravity",
                "Nothing was detected"
            ],
            correct: 0
        }
    },
    {
        id: 'ranger-probes',
        name: 'Ranger Probes (7, 8 & 9)',
        target: 'Moon',
        location: 'Mare Cognitum, Tranquillitatis & Alphonsus',
        year: '1964 - 1965',
        status: 'High-Speed Impactors',
        icon: 'fa-bullseye',
        color: 'moonSilver',
        shortDesc: 'Kamikaze camera probes that snapped thousands of close-up photos right up until impact.',
        story: 'The Ranger spacecraft were designed as suicide missions: fly directly toward the Moon and broadcast real-time photos back to Earth every second until crashing into the surface at thousands of miles per hour.',
        science: 'Captured close-up photos far sharper than any telescope on Earth could take at the time.',
        fact: 'Ranger 9 transmitted live television images of its lunar crash landing to millions of TV viewers on Earth!',
        abandoned: 'They were never supposed to survive. The Ranger probes had no landing system. Their plan was to fly straight at the Moon, taking photos closer and closer, and then crash. Being left on the Moon was part of the design: the very last photo was the goal.',
        lat: 48,
        lng: 41,
        quiz: {
            question: "How did Ranger spacecraft send photos before crashing?",
            options: [
                "Broadcasted live TV signals back to Earth",
                "Dropped film canisters with parachutes",
                "Stored them on floppy disks",
                "They didn't send photos"
            ],
            correct: 0
        }
    },

    // --- MARS HARDWARE ---
    {
        id: 'opportunity-oppy',
        name: 'Opportunity Rover ("Oppy")',
        target: 'Mars',
        location: 'Endeavour Crater',
        year: '2004 - 2018',
        status: 'Retired Martian Explorer',
        icon: 'fa-robot',
        color: 'marsRed',
        shortDesc: 'The brave golf-cart-sized rover that was built to last 90 days but explored Mars for over 14 epic years!',
        story: 'Oppy bounced onto Mars inside giant airbags and embarked on an unbelievable 28-mile journey! It climbed craters, survived dust storms, and sent back thousands of incredible photos. In 2018, a giant planet-wide dust storm covered its solar panels. Its last message showed that its battery was low and the sky had gone dark with dust. People on Earth put it into words: "My battery is low and it\'s getting dark."',
        science: 'Discovered clear geological evidence that liquid water once flowed freely across the surface of ancient Mars.',
        fact: 'Oppy set the all-time off-world driving record, traveling further than a full marathon (28.06 miles)!',
        abandoned: 'In June 2018 a giant dust storm covered Mars and blocked the sunlight Opportunity used for power. Its solar panels couldn\'t make electricity and it fell silent. NASA sent more than 1,000 commands to wake it, but nothing answered, so the mission was declared over in February 2019. No person or robot could reach it to brush the dust off.',
        lat: 49,
        lng: 57,
        quiz: {
            question: "How long was Opportunity originally planned to last on Mars?",
            options: ["10 years", "90 days", "1 year", "5 years"],
            correct: 1
        }
    },
    {
        id: 'spirit-rover',
        name: 'Spirit Rover (MER-A)',
        target: 'Mars',
        location: 'Gusev Crater',
        year: '2004 - 2010',
        status: 'Stationary Pioneer',
        icon: 'fa-robot',
        color: 'marsRed',
        shortDesc: 'Opportunity\'s twin rover that explored a vast rugged impact crater and fought through tough terrain.',
        story: 'Spirit landed on the opposite side of Mars from Opportunity. Despite a stuck front wheel that dragged through the dirt, Spirit made amazing discoveries until it got stuck in soft sand at a site called Troy in 2009.',
        science: 'The stuck wheel accidentally scraped away topsoil to reveal pure silica deposits, a strong clue that hot springs or steam vents once existed on Mars.',
        fact: 'Its dragged broken wheel led to its greatest scientific discovery: clues that hot water or steam once reached the surface!',
        abandoned: 'In 2009 Spirit drove into soft sand at a place called Troy and got stuck, with its wheels spinning. Engineers tried to free it for months using a test rover on Earth, but couldn\'t. Then the Martian winter came, Spirit was tilted away from the Sun and ran out of power. Its last message arrived in March 2010, and NASA stopped listening in 2011.',
        lat: 52,
        lng: 38,
        quiz: {
            question: "How did Spirit rover accidentally discover evidence of ancient Martian hot springs?",
            options: [
                "By dragging its broken wheel through topsoil",
                "By using a laser drill",
                "By falling off a cliff",
                "By blowing away sand with thrusters"
            ],
            correct: 0
        }
    },
    {
        id: 'sojourner-rover',
        name: 'Sojourner Rover & Pathfinder Base',
        target: 'Mars',
        location: 'Ares Vallis',
        year: '1997',
        status: 'Pioneer Martian Scout',
        icon: 'fa-microchip',
        color: 'marsRed',
        shortDesc: 'The world\'s first robotic wheel-based rover on Mars, about the size of a microwave oven.',
        story: 'Named after civil rights activist Sojourner Truth, this tiny rover, weighing about 10.5 kilograms (23 pounds), rolled off its Pathfinder base station in July 1997. It nudged up against Martian rocks nicknamed "Barnacle Bill" and "Yogi", using an X-ray instrument to find out what Mars was made of.',
        science: 'Proved that lightweight robotic wheeled rovers could navigate Martian soil safely and conduct autonomous science.',
        fact: 'Sojourner was so small that engineers tested its driving maneuvers on Earth inside a child\'s sandbox!',
        abandoned: 'Sojourner could only talk to Earth through the Pathfinder base station. In late September 1997, after nearly three months, Pathfinder stopped sending messages, probably because its battery gave out after so many freezing Martian nights. Without its base, little Sojourner had no way to call home, even though it was only designed to last about a week.',
        lat: 43,
        lng: 44,
        quiz: {
            question: "How big was Sojourner, humanity's first Mars rover?",
            options: [
                "Size of a school bus",
                "Size of a microwave oven",
                "Size of a coin",
                "Size of a monster truck"
            ],
            correct: 1
        }
    },
    {
        id: 'perseverance-shield',
        name: 'Perseverance Jettisoned Heat Shield & Sky Crane',
        target: 'Mars',
        location: 'Jezero Crater',
        year: '2021',
        status: 'Discarded Entry Gear',
        icon: 'fa-shield-cat',
        color: 'marsRed',
        shortDesc: 'The thermal blanket and sky-crane debris that protected the Perseverance rover during its "7 Minutes of Terror".',
        story: 'When Perseverance screamed into Mars\' atmosphere at 12,000 mph, its giant heat shield took the brunt of 2,300°F heat. Once safely slowed down, the rover jettisoned the shield and landed via Sky Crane. In 2022, Perseverance spotted a shiny piece of its own thermal blanket, dropped during the landing, caught on a rock. The Ingenuity helicopter flew over to photograph the wrecked backshell and parachute.',
        science: 'Engineers study high-resolution photographs of this fallen debris to learn how thermal protection materials erode during atmospheric reentry.',
        fact: 'The piece of blanket was spotted caught on a jagged Martian rock about 2 kilometres from where the landing gear came down!',
        abandoned: 'These parts were thrown away on purpose. The heat shield only had to work for a few minutes of fiery entry, and the sky crane only had to lower the rover and then fly away and crash. Once their one-time jobs were done, carrying them would only add weight, so they were dropped and left on Mars. Scientists now study them to build better shields.',
        lat: 39,
        lng: 59,
        quiz: {
            question: "What temperature did Perseverance's heat shield protect against during atmospheric entry?",
            options: ["500°F", "2,300°F", "10,000°F", "100°F"],
            correct: 1
        }
    },
    {
        id: 'ingenuity-helicopter',
        name: 'Ingenuity Mars Helicopter',
        target: 'Mars',
        location: 'Jezero Crater (Valinor Hills)',
        year: '2021 - 2024',
        status: 'Retired Aerial Scout',
        icon: 'fa-helicopter',
        color: 'marsRed',
        shortDesc: 'The historic tiny rotorcraft that proved powered, controlled flight is possible in Mars\' ultra-thin air.',
        story: 'Ingenuity traveled to Mars tucked under Perseverance\'s belly. Built as a simple 5-flight demonstration, it amazed the world by completing 72 incredible flights! In 2024, after damaging a rotor blade during landing, it retired as a permanent monument in the Martian sand.',
        science: 'Proved powered flight in 1% atmospheric density and served as an aerial scout for rover pathfinding.',
        fact: 'It carried a tiny piece of fabric from the Wright Brothers\' 1903 Flyer airplane taped beneath its solar panel!',
        abandoned: 'Ingenuity was only meant to fly 5 times, but it flew 72! During its last landing in January 2024, its rotor blades were damaged. Without good blades it can\'t make enough lift in Mars\' very thin air, and nobody can go there to fix them. So NASA ended its mission, and it now stays on the ground as a monument.',
        lat: 40,
        lng: 61,
        quiz: {
            question: "What historic item from Earth was attached beneath Ingenuity's solar panel?",
            options: [
                "A piece of the Wright Brothers' airplane fabric",
                "A piece of the Moon",
                "A gold coin",
                "A signature from Neil Armstrong"
            ],
            correct: 0
        }
    },
    {
        id: 'insight-lander',
        name: 'InSight Lander',
        target: 'Mars',
        location: 'Elysium Planitia',
        year: '2018 - 2022',
        status: 'Silent Seismic Station',
        icon: 'fa-boxes-stacked',
        color: 'marsRed',
        shortDesc: 'A stationary robotic lander designed to listen to marsquakes and measure the deep red interior.',
        story: 'InSight placed a sensitive seismometer directly onto the dirt with a robotic arm. It listened to over 1,300 marsquakes and space rock impacts before Martian dust completely covered its solar panels in late 2022.',
        science: 'Mapped the internal layers of Mars for the first time, uncovering the thickness of its crust and size of its liquid core.',
        fact: 'It detected a massive meteorite impact on Mars that created ice boulders near the equator!',
        abandoned: 'InSight ran on solar power, and over four years Martian dust slowly covered its panels. By late 2022 it barely made any electricity, even after its robotic arm sprinkled soil nearby to help the wind blow dust away. When it missed two check-ins with Earth in a row, NASA declared the mission over in December 2022.',
        lat: 45,
        lng: 55,
        quiz: {
            question: "What primary instrument did InSight place onto the Martian ground?",
            options: ["A seismometer to detect quakes", "A drill to pump water", "A telescope", "A weather balloon"],
            correct: 0
        }
    },
    {
        id: 'phoenix-lander',
        name: 'Phoenix Mars Lander',
        target: 'Mars',
        location: 'Vastitas Borealis (Martian Arctic)',
        year: '2008',
        status: 'Ice-Crust Explorer',
        icon: 'fa-snowflake',
        color: 'marsRed',
        shortDesc: 'A lander that touched down in the northern polar region of Mars and scraped into underground ice.',
        story: 'Phoenix landed in the far northern plains of Mars. Using its robotic arm, it dug trenches in the dirt and uncovered bright white material that vaporized into gas over a few days: pure water ice buried right beneath the surface!',
        science: 'Confirmed the presence of subterranean water ice in the Martian arctic soil.',
        fact: 'During the Martian winter, a layer of frozen carbon dioxide (dry ice) frost covered Phoenix!',
        abandoned: 'Phoenix was built to last about three months of the Martian arctic summer. As winter came, the Sun sank lower and then disappeared, and the solar panels couldn\'t make enough power. Ice built up and the lander froze. It sent its last message in November 2008 after about five months, and never answered again, even when orbiters listened for it in 2010.',
        lat: 28,
        lng: 50,
        quiz: {
            question: "What crucial resource did Phoenix discover buried just inches below the arctic soil on Mars?",
            options: ["Water ice", "Gold dust", "Liquid lava", "Plant seeds"],
            correct: 0
        }
    },
    {
        id: 'viking1-lander',
        name: 'Viking 1 Lander',
        target: 'Mars',
        location: 'Chryse Planitia',
        year: '1976 - 1982',
        status: 'First US Mars Surface Success',
        icon: 'fa-monument',
        color: 'marsRed',
        shortDesc: 'The historic robotic station that gave humanity its very first color photos from the surface of Mars.',
        story: 'On July 20, 1976 (exactly 7 years after Apollo 11), Viking 1 landed safely on Chryse Planitia. It operated for over 6 years, scooping soil and analyzing the atmosphere until a human command error accidentally cut off communications in 1982.',
        science: 'Conducted the first automated biological soil tests and provided long-term daily Martian weather reports.',
        fact: 'Viking 1 held the record for the longest operating Mars surface mission (2,245 Martian days) for nearly 30 years!',
        abandoned: 'Viking 1 worked for over six years, but in November 1982 engineers sent it a software update that contained a mistake. The update erased information the lander used to point its antenna at Earth, so it could no longer hear us or talk to us. NASA kept trying to reach it for months, then gave up.',
        lat: 42,
        lng: 41,
        quiz: {
            question: "In what year did Viking 1 send back humanity's first color photos from Mars?",
            options: ["1976", "1969", "1997", "2004"],
            correct: 0
        }
    },
    {
        id: 'viking2-lander',
        name: 'Viking 2 Lander',
        target: 'Mars',
        location: 'Utopia Planitia',
        year: '1976 - 1980',
        status: 'Northern Plains Outpost',
        icon: 'fa-monument',
        color: 'marsRed',
        shortDesc: 'Viking 1\'s sister probe that landed further north on boulder-strewn volcanic plains.',
        story: 'Viking 2 touched down in Utopia Planitia in September 1976. Its cameras captured frost coating the red rock landscape during the cold Martian winter before its batteries eventually died in 1980.',
        science: 'Analyzed surface soil chemistry and tracked seasonal atmospheric pressure changes caused by frozen polar caps.',
        fact: 'It photographed water ice frost forming on the rocks around the lander during winter!',
        abandoned: 'Viking 2 lasted more than three years, much longer than the 90 days planned. In April 1980 its batteries failed and it fell silent, and nobody could repair a machine millions of miles away. Its twin, Viking 1, kept working for about two and a half more years.',
        lat: 33,
        lng: 61,
        quiz: {
            question: "What weather phenomenon did Viking 2 capture photos of on Mars rocks?",
            options: ["Water ice frost", "Snowstorms", "Rainfall", "Tornados"],
            correct: 0
        }
    },
    {
        id: 'mars-polar-lander',
        name: 'Mars Polar Lander & Deep Space 2',
        target: 'Mars',
        location: 'Planum Australe (South Pole)',
        year: '1999',
        status: 'Lost Explorer',
        icon: 'fa-satellite-dish',
        color: 'marsRed',
        shortDesc: 'A lander intended to study southern polar ice that went silent during atmospheric descent.',
        story: 'Launched in 1999 to target the southern edge of Mars\' polar cap, communications were lost during touchdown. Engineers suspect premature engine shutdown occurred when vibrations tricked sensors into thinking it had already landed.',
        science: 'Taught NASA crucial lessons in landing sensor design that directly improved Spirit, Opportunity, and Phoenix.',
        fact: 'Engineers redesigned landing software on all future landers specifically because of what was learned from this loss!',
        abandoned: 'This one wasn\'t left behind on purpose: it was lost. On December 3, 1999, no signal came after it began landing. Engineers think the legs opening during descent fooled a sensor into thinking it had already landed, so the engine shut off while it was still high above the ground and it crashed. Its two tiny Deep Space 2 probes stayed silent, too. The exact spot has never been confirmed.',
        lat: 68,
        lng: 50,
        quiz: {
            question: "Where on Mars was the Mars Polar Lander targeting?",
            options: ["The South Pole", "The Equator", "Olympus Mons", "Valles Marineris"],
            correct: 0
        }
    }
];

/* ----------------------------------------------------
   2. STATE & LANGUAGE HANDLING
---------------------------------------------------- */
let currentLang = localStorage.getItem('nasa_relic_lang') || 'en';
let currentFilter = 'all';
let currentMap = 'Moon';
let audioEnabled = true;
let audioCtx = null;

// Add English to Arabic Numeral conversion helper
function toArabicNumerals(str) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(str).replace(/[0-9]/g, w => arabicDigits[+w]);
}

// Helper function to get localized relic item
function getLocalizedRelic(relic) {
    if (currentLang === 'ar' && RELICS_TRANSLATIONS_AR[relic.id]) {
        const ar = RELICS_TRANSLATIONS_AR[relic.id];
        return {
            ...relic,
            name: ar.name || relic.name,
            location: ar.location || relic.location,
            status: ar.status || relic.status,
            year: ar.year || toArabicNumerals(relic.year),
            shortDesc: ar.shortDesc || relic.shortDesc,
            story: ar.story || relic.story,
            science: ar.science || relic.science,
            fact: ar.fact || relic.fact,
            abandoned: ar.abandoned || relic.abandoned,
            quiz: {
                question: ar.quiz ? ar.quiz.question : relic.quiz.question,
                options: ar.quiz ? ar.quiz.options : relic.quiz.options,
                correct: relic.quiz.correct
            }
        };
    }
    return relic;
}

function updateLanguageUI() {
    const langObj = TRANSLATIONS[currentLang];
    
    // Set Direction (LTR / RTL)
    document.documentElement.dir = langObj.dir;
    document.documentElement.lang = currentLang;

    // Toggle Font Family based on language
    if (currentLang === 'ar') {
        document.body.style.fontFamily = "'Cairo', 'Inter', sans-serif";
    } else {
        document.body.style.fontFamily = "'Inter', sans-serif";
    }

    // Update Language Button Label
    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = currentLang === 'en' ? 'العربية' : 'English';

    // Translate standard data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langObj[key]) el.textContent = langObj[key];
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langObj[key]) el.placeholder = langObj[key];
    });

    // Re-render components
    updateBadgeTrackerDisplay();
    renderRelicCards();
    renderMapHotspots();
}

function toggleLanguage() {
    playClickSound();
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('nasa_relic_lang', currentLang);
    updateLanguageUI();
}

// Load earned badges from LocalStorage
let collectedBadges = JSON.parse(localStorage.getItem('nasa_relic_badges')) || [];

function saveBadges() {
    localStorage.setItem('nasa_relic_badges', JSON.stringify(collectedBadges));
    updateBadgeTrackerDisplay();
}

function updateBadgeTrackerDisplay() {
    const total = RELICS_DATA.length;
    const count = collectedBadges.length;

    const headerCounter = document.getElementById('header-badge-count');
    const heroCounter = document.getElementById('hero-badge-count');
    const progressBar = document.getElementById('badge-progress-bar');

    if (headerCounter) {
        headerCounter.textContent = currentLang === 'ar' 
            ? `${toArabicNumerals(count)}/${toArabicNumerals(total)}` 
            : `${count}/${total}`;
    }
    if (heroCounter) {
        const template = TRANSLATIONS[currentLang].badgesUnlocked;
        const formattedCount = currentLang === 'ar' ? toArabicNumerals(count) : count;
        const formattedTotal = currentLang === 'ar' ? toArabicNumerals(total) : total;
        heroCounter.textContent = template.replace('{count}', formattedCount).replace('{total}', formattedTotal);
    }
    if (progressBar) progressBar.style.width = `${(count / total) * 100}%`;
    if (typeof renderTimeline === 'function') renderTimeline();

    renderCertificate();
}

// Web Audio API synth sounds
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playClickSound() {
    if (!audioEnabled) return;
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
}

function playBadgeSound() {
    if (!audioEnabled) return;
    initAudio();
    const now = audioCtx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
    });
}

function toggleAudio() {
    audioEnabled = !audioEnabled;
    const icon = document.getElementById('sound-icon');
    const status = document.getElementById('sound-status');
    const t = TRANSLATIONS[currentLang];

    if (audioEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        status.textContent = t.audioOn;
        playClickSound();
    } else {
        icon.className = 'fa-solid fa-volume-xmark text-slate-500';
        status.textContent = t.audioOff;
    }
}

/* ----------------------------------------------------
   3. UI RENDER ENGINE (Cards, Filters, Map)
---------------------------------------------------- */
function renderRelicCards() {
    const grid = document.getElementById('relics-grid');
    closePreview();
    grid.innerHTML = '';

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const t = TRANSLATIONS[currentLang];

    const filtered = RELICS_DATA.filter(item => {
        const localized = getLocalizedRelic(item);
        const matchesFilter = currentFilter === 'all' || item.target === currentFilter;
        const matchesSearch = localized.name.toLowerCase().includes(searchTerm) || 
                              localized.shortDesc.toLowerCase().includes(searchTerm) ||
                              localized.location.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 glass-card rounded-2xl">
                <i class="fa-solid fa-radar text-4xl text-slate-600 mb-3 block"></i>
                <p class="text-slate-400 text-sm">${t.noResults}</p>
            </div>
        `;
        return;
    }

    filtered.forEach(rawRelic => {
        const relic = getLocalizedRelic(rawRelic);
        const badgeColor = targetChip(relic.target);

        const hasBadge = collectedBadges.includes(relic.id);
        const badgeTag = hasBadge 
            ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-orbitron bg-starGold/20 text-starGold border border-starGold/40"><i class="fa-solid fa-award mr-1 rtl:ml-1"></i>${t.earned}</span>`
            : '';

        const cardHTML = `
            <div onclick="openModal('${relic.id}')" onkeydown="onRelicKey(event, '${relic.id}')" data-relic-id="${relic.id}" tabindex="0" role="button" class="glass-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group relative">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-3 py-1 rounded-full text-[10px] font-orbitron font-bold uppercase tracking-wider border ${badgeColor}">
                            ${targetLabel(relic.target)}
                        </span>
                        <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            ${badgeTag}
                            <span class="text-xs text-slate-400 font-mono"><i class="fa-solid fa-calendar-days mr-1 rtl:ml-1"></i>${relic.year}</span>
                        </div>
                    </div>

                    <div class="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-neonCyan text-xl mb-4 group-hover:scale-110 group-hover:border-neonCyan transition">
                        <i class="fa-solid ${relic.icon}"></i>
                    </div>

                    <h4 class="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-neonCyan transition">
                        ${relic.name}
                    </h4>
                    
                    <p class="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                        ${relic.shortDesc}
                    </p>
                </div>

                <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span class="truncate max-w-[180px]"><i class="fa-solid fa-location-dot text-neonCyan mr-1 rtl:ml-1"></i>${relic.location}</span>
                    <span class="text-neonCyan font-semibold flex items-center group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition">
                        ${t.inspect} <i class="fa-solid ${currentLang === 'ar' ? 'fa-arrow-left mr-1' : 'fa-arrow-right ml-1'} text-[10px]"></i>
                    </span>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function setFilter(filter) {
    playClickSound();
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = 'filter-btn px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition';
    });
    const activeBtn = document.getElementById(`filter-${filter}`);
    if (activeBtn) {
        activeBtn.className = 'filter-btn px-4 py-1.5 rounded-lg text-xs font-semibold bg-neonCyan text-slate-950 transition';
    }
    renderRelicCards();
}

function filterRelics() {
    renderRelicCards();
}

/* ----------------------------------------------------
   4. PLANET MAP SWITCHER
---------------------------------------------------- */
function switchMap(targetPlanet) {
    playClickSound();
    currentMap = targetPlanet;
    
    const moonBtn = document.getElementById('map-btn-moon');
    const marsBtn = document.getElementById('map-btn-mars');
    const mapBg = document.getElementById('map-bg');

    if (targetPlanet === 'Moon') {
        moonBtn.className = 'px-5 py-2 rounded-xl text-xs font-orbitron font-bold bg-moonSilver text-slate-950 shadow-md transition';
        marsBtn.className = 'px-5 py-2 rounded-xl text-xs font-orbitron font-bold bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition';

    } else {
        marsBtn.className = 'px-5 py-2 rounded-xl text-xs font-orbitron font-bold bg-marsRed text-white shadow-md transition';
        moonBtn.className = 'px-5 py-2 rounded-xl text-xs font-orbitron font-bold bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition';

    }

    // NASA map of the chosen world, zoomed so the pins sit on their real coordinates
    const view = MAP_VIEW[targetPlanet];
    mapBg.style.backgroundImage = "url('" + view.image + "')";
    mapBg.style.backgroundSize = (180 / view.lon * 100) + '% ' + (90 / view.lat * 100) + '%';
    mapBg.style.backgroundPosition = 'center';

    renderMapHotspots();
}

function renderMapHotspots() {
    const container = document.getElementById('map-hotspots');
    closePreview();
    container.innerHTML = '';

    const planetRelics = RELICS_DATA.filter(r => r.target === currentMap);
    const pins = mapPinPositions(currentMap);

    planetRelics.forEach(rawRelic => {
        const relic = getLocalizedRelic(rawRelic);
        const hotspot = document.createElement('div');
        hotspot.className = 'absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group';
        const pin = pins[relic.id] || { x: relic.lng, y: relic.lat };
        hotspot.style.top = `${pin.y}%`;
        hotspot.style.left = `${pin.x}%`;
        hotspot.onclick = () => openModal(relic.id);
        hotspot.dataset.relicId = relic.id;
        hotspot.tabIndex = 0;
        hotspot.setAttribute('role', 'button');
        hotspot.setAttribute('aria-label', relic.name);
        hotspot.onkeydown = e => onRelicKey(e, relic.id);

        const isActive = relic.id === 'retroreflector-arrays' || relic.status.includes('Active');
        const dotColor = isActive ? 'bg-neonCyan' : 'bg-starGold';
        const pulseEffect = isActive ? '<span class="absolute w-8 h-8 rounded-full bg-neonCyan radar-pulse opacity-75"></span>' : '';

        hotspot.innerHTML = `
            <div class="relative flex items-center justify-center">
                ${pulseEffect}
                <span class="w-3.5 h-3.5 rounded-full ${dotColor} border-2 border-white shadow-lg"></span>
                
                <!-- Tooltip on hover -->
                <div class="hotspot-tip absolute bottom-6 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center whitespace-nowrap z-30">
                    <div class="glass-card px-3 py-1.5 rounded-xl text-[11px] font-orbitron text-white border border-slate-700 shadow-xl">
                        ${relic.name} ${isActive ? '⚡' : '🏛️'}
                        <span class="block text-[10px] font-sans text-slate-300 text-center" dir="auto">${formatCoords(relic.id)}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(hotspot);
    });
}

/* ----------------------------------------------------
   5. MODAL INTERACTION & TRIVIA QUIZ
---------------------------------------------------- */
function openModal(relicId) {
    closePreview();
    stopStoryReading();
    playClickSound();
    const rawRelic = RELICS_DATA.find(r => r.id === relicId);
    if (!rawRelic) return;

    const relic = getLocalizedRelic(rawRelic);

    document.getElementById('modal-title').textContent = relic.name;
    document.getElementById('modal-badge').textContent = targetLabel(relic.target);
    document.getElementById('modal-badge').className = 'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ' + targetChip(relic.target);

    // "In its own words": the relic introduces itself
    const voice = getRelicVoice(relicId);
    document.getElementById('modal-voice').textContent = voice;
    document.getElementById('modal-voice-box').classList.toggle('hidden', !voice);
    const coords = formatCoords(relicId);
    document.getElementById('modal-coords').textContent = coords;
    document.getElementById('modal-coords').classList.toggle('hidden', !coords);

    document.getElementById('modal-location').textContent = relic.location;
    document.getElementById('modal-year').textContent = relic.year;
    document.getElementById('modal-science').textContent = relic.science;
    document.getElementById('modal-fact').textContent = relic.fact;
    document.getElementById('modal-story').textContent = relic.story;
    document.getElementById('modal-abandoned').textContent = relic.abandoned;
    modalRelicId = relicId;
    setStoryButton('idle');

    // Quiz Setup
    setupQuiz(relic);

    // Open Modal UI
    const modal = document.getElementById('relic-modal');
    modal.classList.remove('hidden');

    // Photo gallery (live NASA photos) inside the modal
    openGallery(relicId);
}

function closeModal() {
    playClickSound();
    stopStoryReading();
    galleryClose();
    document.getElementById('relic-modal').classList.add('hidden');
}

function setupQuiz(relic) {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const statusEl = document.getElementById('quiz-status');
    const t = TRANSLATIONS[currentLang];

    questionEl.textContent = relic.quiz.question;
    
    const isAlreadyUnlocked = collectedBadges.includes(relic.id);
    if (isAlreadyUnlocked) {
        statusEl.textContent = t.badgeEarned;
        statusEl.className = 'text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-starGold/20 text-starGold border border-starGold/40 font-bold';
    } else {
        statusEl.textContent = t.notCompleted;
        statusEl.className = 'text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 font-semibold';
    }

    optionsEl.innerHTML = '';

    const targetCorrectIndex = relic.quiz.correct;

    relic.quiz.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left rtl:text-right p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 hover:border-neonCyan hover:text-white transition';
        btn.textContent = `${idx + 1}. ${option}`;

        if (isAlreadyUnlocked) {
            btn.disabled = true;
            if (idx === targetCorrectIndex) {
                btn.className = 'w-full text-left rtl:text-right p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-xs text-emerald-200 font-semibold';
            }
        } else {
            btn.onclick = () => checkAnswer(relic, idx, targetCorrectIndex, btn, statusEl);
        }

        optionsEl.appendChild(btn);
    });
}

function checkAnswer(relic, selectedIdx, correctIdx, clickedBtn, statusEl) {
    playClickSound();
    const parent = clickedBtn.parentElement;
    const buttons = parent.querySelectorAll('button');
    const t = TRANSLATIONS[currentLang];

    buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) {
            b.className = 'w-full text-left rtl:text-right p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-xs text-emerald-200 font-semibold';
        } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
            b.className = 'w-full text-left rtl:text-right p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-xs text-rose-200';
        }
    });

    if (selectedIdx === correctIdx) {
        playBadgeSound();
        statusEl.textContent = t.badgeEarned;
        statusEl.className = 'text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-starGold/20 text-starGold border border-starGold/40 font-bold';
        
        if (!collectedBadges.includes(relic.id)) {
            collectedBadges.push(relic.id);
            saveBadges();
            renderRelicCards();
        }
    } else {
        statusEl.textContent = t.tryAgain;
        statusEl.className = 'text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-400 font-semibold';
    }
}

/* ----------------------------------------------------
   5b. HOVER PHOTO PREVIEW (live from the NASA Image Library)
   Hover (or keyboard-focus) a relic card or a map hotspot and a small
   floating viewer pulls real photos of that hardware from
   https://images-api.nasa.gov and cross-fades through them.
---------------------------------------------------- */
const NASA_IMAGE_API = 'https://images-api.nasa.gov/search';
const PREVIEW_MAX_PHOTOS = 6;       // photos kept per relic
const PREVIEW_SLIDE_MS = 2400;      // time each photo stays on screen
const PREVIEW_SHOW_DELAY = 140;     // ignore quick fly-overs of the grid
const PREVIEW_HIDE_DELAY = 80;      // survives the gap between two cards
const PREVIEW_FETCH_TIMEOUT = 9000; // give up on a slow API call

// Search phrases per relic: best phrase first, broader fallback second.
// Relics missing here fall back to their own English name.
const PREVIEW_QUERIES = {
    'apollo11-stage': ['Apollo 11 lunar module Eagle on the Moon', 'Apollo 11 lunar module'],
    'apollo12-stage': ['Apollo 12 lunar module Intrepid', 'Apollo 12 Surveyor 3 lunar module'],
    'apollo14-stage': ['Apollo 14 lunar module Antares', 'Apollo 14 Fra Mauro lunar module'],
    'apollo15-stage': ['Apollo 15 lunar module Falcon Hadley', 'Apollo 15 lunar module'],
    'apollo16-stage': ['Apollo 16 lunar module Orion Descartes', 'Apollo 16 lunar module'],
    'apollo17-stage': ['Apollo 17 lunar module Challenger Taurus-Littrow', 'Apollo 17 lunar module'],
    'lunar-rover': ['Apollo lunar roving vehicle', 'Apollo 15 lunar rover'],
    'alsep-package': ['Apollo lunar surface experiments package ALSEP', 'Apollo ALSEP'],
    'retroreflector-arrays': ['Apollo lunar laser ranging retroreflector', 'lunar retroreflector'],
    'surveyor-3': ['Surveyor 3 spacecraft', 'Surveyor 3 Apollo 12'],
    'surveyor-1': ['Surveyor 1 spacecraft Moon', 'Surveyor 1'],
    'lunar-orbiter-crash-sites': ['Lunar Orbiter spacecraft', 'Lunar Orbiter'],
    'saturn-s4b-stages': ['Saturn V S-IVB third stage', 'S-IVB stage'],
    'ranger-probes': ['Ranger 7 spacecraft', 'Ranger spacecraft Moon'],
    'opportunity-oppy': ['Opportunity rover Mars', 'Mars Exploration Rover Opportunity'],
    'spirit-rover': ['Spirit rover Mars', 'Mars Exploration Rover Spirit'],
    'sojourner-rover': ['Sojourner rover Pathfinder', 'Mars Pathfinder'],
    'perseverance-shield': ['Perseverance rover heat shield', 'Perseverance sky crane'],
    'ingenuity-helicopter': ['Ingenuity Mars helicopter', 'Ingenuity helicopter'],
    'insight-lander': ['InSight lander Mars', 'InSight lander'],
    'phoenix-lander': ['Phoenix Mars lander', 'Phoenix lander'],
    'viking1-lander': ['Viking 1 lander', 'Viking lander Mars'],
    'viking2-lander': ['Viking 2 lander', 'Viking lander Utopia Planitia'],
    'mars-polar-lander': ['Mars Polar Lander', 'Deep Space 2 microprobe']
};

const PREVIEW_STOPWORDS = new Set(['the', 'and', 'of', 'on', 'in', 'for']);
const photoCache = new Map(); // relic id -> Promise<photo[]>
const hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const previewState = {
    el: null,
    relicId: null,
    visible: false,
    token: 0,          // bumps on every open/close so late results can be ignored
    showTimer: null,
    hideTimer: null,
    slideTimer: null,
    slides: [],        // [{ photo, node }]
    index: 0,
    x: 0,
    y: 0,
    anchor: null,      // set when opened from the keyboard
    raf: 0
};

const rpEl = id => document.getElementById(id);

/* ---- Data: search the NASA Image Library ---- */
function previewWords(phrase) {
    return phrase.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 1 && !PREVIEW_STOPWORDS.has(w));
}

function nasaItemToPhoto(item) {
    const d = item && item.data && item.data[0];
    const links = (item && item.links) || [];
    const link = links.find(l => l.render === 'image') || links[0];
    if (!d || !link || !link.href) return null;
    if (d.media_type && d.media_type !== 'image') return null;
    if (!/\.(jpe?g|png|webp)$/i.test(link.href.split('?')[0])) return null;

    const keywords = Array.isArray(d.keywords) ? d.keywords.join(' ') : '';
    return {
        id: d.nasa_id || link.href,
        src: link.href.replace(/^http:/, 'https:'),
        title: d.title || '',
        credit: d.photographer || d.secondary_creator || (d.center ? `NASA/${d.center}` : 'NASA'),
        haystack: `${d.title || ''} ${keywords} ${(d.description || '').slice(0, 600)}`.toLowerCase()
    };
}

async function searchNasaPhotos(phrase, signal) {
    const url = `${NASA_IMAGE_API}?q=${encodeURIComponent(phrase)}&media_type=image&page_size=20`;
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`NASA image search failed (${res.status})`);
    const json = await res.json();
    const items = (json.collection && json.collection.items) || [];
    const words = previewWords(phrase);

    // Photos that mention more of the search words go first (sort is stable,
    // so ties keep NASA's own relevance order).
    return items
        .map(nasaItemToPhoto)
        .filter(Boolean)
        .map(photo => ({ photo, score: words.filter(w => photo.haystack.includes(w)).length }))
        .sort((a, b) => b.score - a.score)
        .map(entry => entry.photo);
}

function getRelicPhotos(relicId) {
    if (photoCache.has(relicId)) return photoCache.get(relicId);

    const raw = RELICS_DATA.find(r => r.id === relicId);
    const phrases = PREVIEW_QUERIES[relicId] || (raw ? [raw.name] : []);

    const request = (async () => {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), PREVIEW_FETCH_TIMEOUT);
        try {
            const photos = [];
            const seen = new Set();
            for (const phrase of phrases) {
                const batch = await searchNasaPhotos(phrase, ctrl.signal);
                for (const photo of batch) {
                    if (seen.has(photo.id)) continue;
                    seen.add(photo.id);
                    photos.push(photo);
                    if (photos.length >= PREVIEW_MAX_PHOTOS) break;
                }
                if (photos.length >= 4) break; // good enough, skip the fallback phrase
            }
            return photos;
        } finally {
            clearTimeout(timer);
        }
    })();

    photoCache.set(relicId, request);
    request.catch(() => photoCache.delete(relicId)); // network errors can be retried on the next hover
    return request;
}

function previewLoadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

/* ---- View: the floating viewer ---- */
function previewSetState(mode, messageKey) {
    // mode: 'loading' | 'photos' | 'empty'
    rpEl('rp-loading').classList.toggle('is-off', mode !== 'loading');
    rpEl('rp-empty').classList.toggle('is-off', mode !== 'empty');
    if (mode === 'empty') rpEl('rp-empty-text').textContent = TRANSLATIONS[currentLang][messageKey];
}

function previewReset() {
    clearInterval(previewState.slideTimer);
    previewState.slideTimer = null;
    previewState.slides = [];
    previewState.index = 0;
    rpEl('rp-slides').innerHTML = '';
    rpEl('rp-dots').innerHTML = '';
    rpEl('rp-caption').textContent = '';
    rpEl('rp-credit').textContent = '';
}

function previewRenderDots() {
    const dots = rpEl('rp-dots');
    const count = previewState.slides.length;
    dots.innerHTML = '';
    if (count < 2) return;
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'rp-dot' + (i === previewState.index ? ' is-active' : '');
        dots.appendChild(dot);
    }
}

function previewShowSlide(index) {
    const slides = previewState.slides;
    if (!slides.length) return;
    previewState.index = ((index % slides.length) + slides.length) % slides.length;

    slides.forEach((slide, i) => slide.node.classList.toggle('is-active', i === previewState.index));
    rpEl('rp-dots').querySelectorAll('.rp-dot').forEach((dot, i) => {
        dot.classList.toggle('is-active', i === previewState.index);
    });

    const { photo } = slides[previewState.index];
    rpEl('rp-caption').textContent = photo.title;
    rpEl('rp-credit').textContent = TRANSLATIONS[currentLang].photoCredit.replace('{credit}', photo.credit);
}

function previewStartSlideshow() {
    if (previewState.slideTimer || previewState.slides.length < 2 || prefersReducedMotion.matches) return;
    previewState.slideTimer = setInterval(() => previewShowSlide(previewState.index + 1), PREVIEW_SLIDE_MS);
}

function previewAddSlide(token, photo, img, relicName) {
    if (token !== previewState.token) return; // the viewer moved on to another relic
    img.className = 'rp-slide';
    img.alt = TRANSLATIONS[currentLang].photoOf.replace('{name}', relicName);
    rpEl('rp-slides').appendChild(img);
    previewState.slides.push({ photo, node: img });

    previewRenderDots();
    if (previewState.slides.length === 1) {
        previewSetState('photos');
        previewShowSlide(0);
    }
    previewStartSlideshow();
}

function positionPreview() {
    const el = previewState.el;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const vw = document.documentElement.clientWidth;
    const vh = window.innerHeight;
    const pad = 12;
    const gap = 18;
    let x, y;

    if (previewState.anchor && document.body.contains(previewState.anchor)) {
        const r = previewState.anchor.getBoundingClientRect();
        x = r.left + r.width / 2 - w / 2;
        y = r.top - h - 10;
        if (y < pad) y = r.bottom + 10;
    } else {
        x = previewState.x + gap;
        y = previewState.y + gap;
        if (x + w > vw - pad) x = previewState.x - w - gap; // flip to the cursor's left
        if (y + h > vh - pad) y = previewState.y - h - gap; // flip above the cursor
    }

    x = Math.min(Math.max(x, pad), Math.max(pad, vw - w - pad));
    y = Math.min(Math.max(y, pad), Math.max(pad, vh - h - pad));
    el.style.setProperty('--rp-x', `${Math.round(x)}px`);
    el.style.setProperty('--rp-y', `${Math.round(y)}px`);
}

function previewSchedulePosition() {
    if (previewState.raf) return;
    previewState.raf = requestAnimationFrame(() => {
        previewState.raf = 0;
        positionPreview();
    });
}

function openPreview(relicId) {
    const raw = RELICS_DATA.find(r => r.id === relicId);
    if (!raw || !previewState.el) return;

    const relic = getLocalizedRelic(raw);
    const t = TRANSLATIONS[currentLang];
    const token = ++previewState.token;
    previewState.relicId = relicId;
    previewState.visible = true;

    previewReset();
    previewState.el.dataset.target = raw.target;
    rpEl('rp-name').textContent = relic.name;
    rpEl('rp-loading-text').textContent = t.photoLoading;
    previewSetState('loading');
    positionPreview();
    previewState.el.classList.add('is-visible');

    getRelicPhotos(relicId).then(photos => {
        if (token !== previewState.token) return;
        if (!photos.length) {
            previewSetState('empty', 'photoEmpty');
            return;
        }

        // Show the first photo that finishes loading; the rest join the rotation as they arrive.
        let pending = photos.length;
        let shown = false;
        photos.forEach(photo => {
            previewLoadImage(photo.src).then(img => {
                shown = true;
                previewAddSlide(token, photo, img, relic.name);
            }, () => { /* skip photos that fail to load */ }).then(() => {
                pending -= 1;
                if (pending === 0 && !shown && token === previewState.token) previewSetState('empty', 'photoEmpty');
            });
        });
    }).catch(() => {
        if (token === previewState.token) previewSetState('empty', 'photoOffline');
    });
}

function closePreview() {
    clearTimeout(previewState.showTimer);
    clearTimeout(previewState.hideTimer);
    previewState.showTimer = null;
    previewState.hideTimer = null;
    if (!previewState.el) return;

    previewState.token += 1;
    previewState.relicId = null;
    previewState.visible = false;
    previewState.anchor = null;
    previewState.el.classList.remove('is-visible');
    clearInterval(previewState.slideTimer);
    previewState.slideTimer = null;
}

/* ---- Wiring: hover, focus and housekeeping ---- */
function previewEnter(host, evt, fromKeyboard) {
    if (!fromKeyboard && !hoverCapable.matches) return; // touch screens skip hover previews
    const relicId = host.dataset.relicId;
    if (!relicId) return;

    clearTimeout(previewState.hideTimer);
    previewState.hideTimer = null;

    if (fromKeyboard) {
        previewState.anchor = host;
    } else {
        previewState.anchor = null;
        previewState.x = evt.clientX;
        previewState.y = evt.clientY;
    }

    if (previewState.visible && previewState.relicId === relicId) {
        previewSchedulePosition();
        return;
    }

    clearTimeout(previewState.showTimer);
    // Moving straight from one relic to the next swaps instantly; a fresh hover waits a beat.
    const delay = previewState.visible ? 0 : PREVIEW_SHOW_DELAY;
    previewState.showTimer = setTimeout(() => {
        previewState.showTimer = null;
        openPreview(relicId);
    }, delay);
}

function previewLeave() {
    clearTimeout(previewState.showTimer);
    previewState.showTimer = null;
    clearTimeout(previewState.hideTimer);
    previewState.hideTimer = setTimeout(closePreview, PREVIEW_HIDE_DELAY);
}

function onRelicKey(event, relicId) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(relicId);
    }
}

function initRelicPreview() {
    const el = document.getElementById('relic-preview');
    if (!el) return;
    previewState.el = el;

    const hostOf = node => (node && node.closest ? node.closest('[data-relic-id]') : null);

    document.addEventListener('mouseover', e => {
        const host = hostOf(e.target);
        if (!host || host.contains(e.relatedTarget)) return;
        previewEnter(host, e, false);
    });

    document.addEventListener('mouseout', e => {
        const host = hostOf(e.target);
        if (!host || host.contains(e.relatedTarget)) return;
        previewLeave();
    });

    document.addEventListener('mousemove', e => {
        if (previewState.anchor || (!previewState.visible && !previewState.showTimer)) return;
        previewState.x = e.clientX;
        previewState.y = e.clientY;
        previewSchedulePosition();
    });

    // Keyboard users get the same preview when they tab onto a card or hotspot.
    document.addEventListener('focusin', e => {
        const host = hostOf(e.target);
        if (host && host === e.target && host.matches(':focus-visible')) previewEnter(host, e, true);
    });
    document.addEventListener('focusout', e => {
        if (hostOf(e.target) === e.target) previewLeave();
    });

    window.addEventListener('scroll', () => closePreview(), { passive: true });
    window.addEventListener('resize', () => closePreview());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePreview(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden) closePreview(); });
}

/* ----------------------------------------------------
   5c. RELIC PHOTO GALLERY (inside the relic modal)
   Shows the same live NASA photos as the hover preview. Switch photos with
   the left / right buttons, the keyboard arrow keys, or a swipe.
---------------------------------------------------- */
const galleryState = { token: 0, relicId: null, slides: [], index: 0, touchX: null, touchY: null };
const gEl = id => document.getElementById(id);

function gallerySetState(mode, messageKey) {
    // mode: 'loading' | 'photos' | 'empty'
    gEl('gallery-loading').classList.toggle('is-off', mode !== 'loading');
    gEl('gallery-empty').classList.toggle('is-off', mode !== 'empty');
    if (mode === 'empty') gEl('gallery-empty-text').textContent = TRANSLATIONS[currentLang][messageKey];
}

function galleryReset() {
    galleryState.slides = [];
    galleryState.index = 0;
    gEl('gallery-slides').innerHTML = '';
    gEl('gallery-caption').textContent = '';
    gEl('gallery-credit').textContent = '';
    gEl('gallery-counter').textContent = '';
    gEl('gallery-info').classList.add('hidden');
    gEl('gallery-btn-left').classList.add('hidden');
    gEl('gallery-btn-right').classList.add('hidden');
}

function galleryShow(index) {
    const slides = galleryState.slides;
    if (!slides.length) return;
    galleryState.index = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.node.classList.toggle('is-active', i === galleryState.index));

    const { photo } = slides[galleryState.index];
    gEl('gallery-caption').textContent = photo.title;
    gEl('gallery-credit').textContent = TRANSLATIONS[currentLang].photoCredit.replace('{credit}', photo.credit);
    gEl('gallery-info').classList.remove('hidden');

    const multiple = slides.length > 1;
    gEl('gallery-btn-left').classList.toggle('hidden', !multiple);
    gEl('gallery-btn-right').classList.toggle('hidden', !multiple);
    const counter = `${galleryState.index + 1} / ${slides.length}`;
    gEl('gallery-counter').textContent = multiple ? (currentLang === 'ar' ? toArabicNumerals(counter) : counter) : '';
}

function galleryAddSlide(token, photo, img, relicName) {
    if (token !== galleryState.token) return; // the modal moved on to another relic
    img.className = 'rp-slide';
    img.alt = TRANSLATIONS[currentLang].photoOf.replace('{name}', relicName);
    gEl('gallery-slides').appendChild(img);
    galleryState.slides.push({ photo, node: img });

    if (galleryState.slides.length === 1) {
        gallerySetState('photos');
        galleryShow(0);
    } else {
        galleryShow(galleryState.index); // keep the current photo, refresh the counter and arrows
    }
}

function openGallery(relicId) {
    const raw = RELICS_DATA.find(r => r.id === relicId);
    if (!raw) return;

    const relic = getLocalizedRelic(raw);
    const t = TRANSLATIONS[currentLang];
    const token = ++galleryState.token;
    galleryState.relicId = relicId;

    galleryReset();
    gEl('relic-gallery').dataset.target = raw.target;
    gEl('gallery-loading-text').textContent = t.photoLoading;
    const rtl = document.documentElement.dir === 'rtl';
    gEl('gallery-btn-left').setAttribute('aria-label', rtl ? t.galleryNext : t.galleryPrev);
    gEl('gallery-btn-right').setAttribute('aria-label', rtl ? t.galleryPrev : t.galleryNext);
    gallerySetState('loading');

    getRelicPhotos(relicId).then(photos => {
        if (token !== galleryState.token) return;
        if (!photos.length) {
            gallerySetState('empty', 'photoEmpty');
            return;
        }

        // The first photo that finishes loading is shown; the rest join the gallery as they arrive.
        let pending = photos.length;
        let shown = false;
        photos.forEach(photo => {
            previewLoadImage(photo.src).then(img => {
                shown = true;
                galleryAddSlide(token, photo, img, relic.name);
            }, () => { /* skip photos that fail to load */ }).then(() => {
                pending -= 1;
                if (pending === 0 && !shown && token === galleryState.token) gallerySetState('empty', 'photoEmpty');
            });
        });
    }).catch(() => {
        if (token === galleryState.token) gallerySetState('empty', 'photoOffline');
    });
}

function galleryClose() {
    galleryState.token += 1;
    galleryState.relicId = null;
}

// side is the physical button: 'left' or 'right'. In Arabic (right-to-left) the right button goes back.
function galleryNav(side) {
    if (galleryState.slides.length < 2) return;
    playClickSound();
    const rtl = document.documentElement.dir === 'rtl';
    const forward = (side === 'right') !== rtl;
    galleryShow(galleryState.index + (forward ? 1 : -1));
}

function initGallery() {
    const box = document.getElementById('relic-gallery');
    if (!box) return;

    document.addEventListener('keydown', e => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        const modal = document.getElementById('relic-modal');
        if (!modal || modal.classList.contains('hidden')) return;
        e.preventDefault();
        galleryNav(e.key === 'ArrowLeft' ? 'left' : 'right');
    });

    // Swipe on touch screens
    box.addEventListener('touchstart', e => {
        const touch = e.changedTouches[0];
        galleryState.touchX = touch.clientX;
        galleryState.touchY = touch.clientY;
    }, { passive: true });
    box.addEventListener('touchend', e => {
        if (galleryState.touchX === null) return;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - galleryState.touchX;
        const dy = touch.clientY - galleryState.touchY;
        galleryState.touchX = null;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) galleryNav(dx < 0 ? 'right' : 'left');
    }, { passive: true });
}

/* ----------------------------------------------------
   5d. READ THE KID'S STORY ALOUD (warm storyteller voice)
   Uses the browser's built-in speech voices (no audio files). It looks for the
   best natural-sounding male voice for the current language (Arabic voices such
   as Shakir / Hamed / Maged are preferred for Arabic) and reads like a kids-show
   narrator: unhurried pace, a gentle low pitch (never extreme), short pauses
   between sentences, and a little extra lift on exclamations and questions.
---------------------------------------------------- */
let modalRelicId = null;
const storyState = { speaking: false, token: 0, audio: null, timer: null };

const STORY_VOICE = {
    // robotic / novelty voices are never used
    blocked: /albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|fred|junior|ralph|kathy/i,
    female: /female|zira|samantha|karen|victoria|susan|hazel|moira|fiona|tessa|serena|salma|laila|zariyah|amira|aria|jenny|libby|sonia|emma|michelle|ava|allison|ellen|nicky|kate|zoe|joana|lekha/i,
    en: /guy|davis|andrew|brian|christopher|eric|roger|steffan|ryan|daniel|arthur|oliver|thomas|alex|david|mark|george|male/i,
    ar: /shakir|hamed|maged|majed|tarik|naayf|fahed|male/i
};

function storySupported() {
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

// Picks the most natural-sounding, friendly male voice available on this device.
function storyPickVoice(langCode) {
    const voices = window.speechSynthesis.getVoices() || [];
    const norm = v => (v.lang || '').toLowerCase().replace('_', '-');
    const matches = voices.filter(v => norm(v).startsWith(langCode) && !STORY_VOICE.blocked.test(v.name));
    if (!matches.length) return null;
    const score = v => {
        const lang = norm(v);
        let s = 0;
        if (/natural|neural/i.test(v.name)) s += 50;          // modern high-quality voices
        else if (/online|google/i.test(v.name)) s += 20;
        if (STORY_VOICE.female.test(v.name)) s -= 100;
        if (STORY_VOICE[langCode].test(v.name)) s += 30;
        if (langCode === 'ar' && lang === 'ar-eg') s += 5;
        if (langCode === 'en' && /^en-(us|gb)/.test(lang)) s += 5;
        return s;
    };
    return matches.slice().sort((a, b) => score(b) - score(a))[0];
}

// Makes the text easy for a speech engine to read well (numbers, units, acronyms).
function storyPrepare(text, langCode) {
    let s = String(text)
        .replace(/(\d),(?=\d{3}\b)/g, '$1')   // 11,000 -> 11000
        .replace(/[“”«»]/g, '"')
        .replace(/ـ/g, '');                   // Arabic tatweel confuses some voices
    if (langCode === 'ar') {
        s = s.replace(/ميل\s*\/\s*ساعة/g, 'ميلاً في الساعة')
             .replace(/\bALSEP\b/g, 'ألسيب')
             .replace(/زحل\s*V\b/g, 'زحل فايف');
    } else {
        s = s.replace(/(\d)\s*mph\b/gi, '$1 miles per hour')
             .replace(/(\d)\s*°F/g, '$1 degrees Fahrenheit')
             .replace(/(\d)\s*kg\b/g, '$1 kilograms')
             .replace(/\bALSEP\b/g, 'Al-sep')
             .replace(/\bS-IVB\b/g, 'S four B')
             .replace(/Saturn V\b/g, 'Saturn Five');
    }
    return s;
}

// Split the story into sentences (never at decimals like 3.8), and long ones at commas,
// because some browsers stop reading very long single utterances.
function storySplit(text) {
    return String(text)
        .replace(/([.!?؟…]+["”')»]*)\s+/g, '$1\u0001')
        .split('\u0001')
        .map(s => s.trim())
        .filter(Boolean);
}

function storyChunk(sentence, max = 190) {
    if (sentence.length <= max) return [sentence];
    const parts = sentence.replace(/([,،;:]\s+)/g, '$1\u0001').split('\u0001');
    const out = [];
    let cur = '';
    const push = p => {
        // a piece with no commas that is still too long gets cut at spaces
        while (p.length > max) {
            let cut = p.lastIndexOf(' ', max);
            if (cut < 1) cut = max;
            out.push(p.slice(0, cut).trim());
            p = p.slice(cut);
        }
        return p;
    };
    parts.forEach(p => {
        if (cur && (cur + p).length > max) { out.push(cur.trim()); cur = ''; }
        cur = push(cur + p);
    });
    if (cur.trim()) out.push(cur.trim());
    return out.filter(Boolean);
}

// Storyteller delivery: calm and deep-ish, brighter on "!" and questions
function storyProsody(line, langCode) {
    let pitch = 0.88, rate = 0.9;
    if (line.kind === 'edge') { pitch = 0.86; rate = 0.85; }
    else if (/!["”')»]*\s*$/.test(line.text)) { pitch = 0.96; rate = 0.93; }
    else if (/[?؟]["”')»]*\s*$/.test(line.text)) { pitch = 0.95; }
    if (langCode === 'ar') rate -= 0.03; // Arabic is easier to follow a touch slower
    return { pitch, rate };
}

// Pause after a line: longer after a full sentence, shorter after a comma piece
function storyGap(line) {
    return /[.!?؟…]["”')»]*\s*$/.test(line.text) ? 450 : 180;
}

function setStoryButton(state) {
    const btn = document.getElementById('story-btn');
    if (!btn) return;
    const t = TRANSLATIONS[currentLang];
    const icon = btn.querySelector('i');
    const label = document.getElementById('story-btn-label');
    btn.dataset.state = state;
    btn.setAttribute('aria-pressed', state === 'playing' ? 'true' : 'false');
    if (state === 'playing') {
        icon.className = 'fa-solid fa-stop animate-pulse';
        label.textContent = t.stopStory;
    } else if (state === 'unsupported') {
        icon.className = 'fa-solid fa-volume-xmark';
        label.textContent = t.storyUnsupported;
    } else {
        icon.className = 'fa-solid fa-book-open-reader';
        label.textContent = t.readStory;
    }
}

function startStoryReading() {
    const raw = RELICS_DATA.find(r => r.id === modalRelicId);
    if (!raw) return;

    const relic = getLocalizedRelic(raw);
    const t = TRANSLATIONS[currentLang];
    const langCode = currentLang === 'ar' ? 'ar' : 'en';
    const synth = storySupported() ? window.speechSynthesis : null;
    const token = ++storyState.token;

    storyState.speaking = true;
    setStoryButton('playing');
    clearTimeout(storyState.timer);
    if (synth) synth.cancel();

    const lines = [{ text: t.storyIntro, kind: 'edge' }];
    storySplit(getRelicVoice(raw.id)).forEach(sentence => {
        storyChunk(sentence).forEach(chunk => lines.push({ text: chunk, kind: 'body' }));
    });
    storySplit(relic.story).forEach(sentence => {
        storyChunk(sentence).forEach(chunk => lines.push({ text: chunk, kind: 'body' }));
    });
    lines.push({ text: t.storyOutro, kind: 'edge' });
    lines.forEach(l => { l.text = storyPrepare(l.text, langCode); });

    const finish = failed => {
        if (token !== storyState.token) return;
        storyState.speaking = false;
        storyState.audio = null;
        if (failed) {
            setStoryButton('unsupported');
            setTimeout(() => { if (!storyState.speaking) setStoryButton('idle'); }, 3500);
        } else {
            setStoryButton('idle');
        }
    };

    // Moves to the next line after a short storyteller pause
    const next = (i, speaker) => {
        storyState.timer = setTimeout(() => speaker(i + 1), storyGap(lines[i]));
    };

    // No built-in voice on this device: say so on the button instead of calling an outside service
    const speakOnline = () => finish(true);

    const speakLine = (i, voice) => {
        if (token !== storyState.token) return;
        if (i >= lines.length) { finish(false); return; }
        const line = lines[i];
        const { pitch, rate } = storyProsody(line, langCode);
        const u = new SpeechSynthesisUtterance(line.text);
        u.lang = voice.lang;
        u.voice = voice;
        u.pitch = pitch;
        u.rate = rate;
        u.volume = 1;
        u.onend = () => next(i, n => speakLine(n, voice));
        u.onerror = e => {
            if (token !== storyState.token) return;
            if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
            speakOnline(i); // the built-in voice failed, so continue with plan B from this line
        };
        synth.speak(u);
    };

    // Voices can load a moment late, so wait briefly for them before choosing
    const begin = tries => {
        if (token !== storyState.token) return;
        const voice = synth ? storyPickVoice(langCode) : null;
        if (synth && !voice && !(synth.getVoices() || []).length && tries < 6) {
            storyState.timer = setTimeout(() => begin(tries + 1), 200);
            return;
        }
        if (voice) speakLine(0, voice); else speakOnline(0);
    };
    storyState.timer = setTimeout(() => begin(0), 250);
}

function stopStoryReading() {
    storyState.token += 1;
    storyState.speaking = false;
    clearTimeout(storyState.timer);
    if (storyState.audio) { storyState.audio.pause(); storyState.audio = null; }
    if (storySupported()) window.speechSynthesis.cancel();
    setStoryButton('idle');
}

function toggleStoryReading() {
    if (storyState.speaking) {
        playClickSound();
        stopStoryReading();
    } else {
        startStoryReading();
    }
}

function initStory() {
    // Warm up the voice list (some browsers load it lazily)
    if (storySupported()) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.addEventListener('voiceschanged', () => window.speechSynthesis.getVoices());
    }
}

/* ----------------------------------------------------
   6. THREE.JS 3D BACKGROUND
---------------------------------------------------- */
function initBackground3D() {
    const canvas = document.getElementById('bg-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const starsGeometry = new THREE.BufferGeometry();
    const count = 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x00f2fe,
        transparent: true,
        opacity: 0.8
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        starField.rotation.y += 0.0005;
        starField.rotation.x += 0.0002;
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

/* ----------------------------------------------------
   8. EXPLORER CERTIFICATE & BADGE RESET (English + Arabic)
---------------------------------------------------- */
const CERT_W = 1200;
const CERT_H = 850;
const CERT_NAME_KEY = 'nasa_relic_explorer_name';

function certTr(key) {
    const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    return lang[key] !== undefined ? lang[key] : TRANSLATIONS.en[key];
}

function certNum(n) {
    return currentLang === 'ar' ? toArabicNumerals(n) : String(n);
}

function certFonts() {
    if (currentLang === 'ar') {
        const f = 'Cairo, "Segoe UI", Tahoma, sans-serif';
        return { head: f, body: f };
    }
    return {
        head: 'Orbitron, Cairo, "Segoe UI", Tahoma, sans-serif',
        body: 'Inter, Cairo, "Segoe UI", Tahoma, sans-serif'
    };
}

function getCertStats() {
    const total = RELICS_DATA.length;
    const earnedIds = collectedBadges.filter(id => RELICS_DATA.some(r => r.id === id));
    const count = earnedIds.length;
    const moonTotal = RELICS_DATA.filter(r => r.target === 'Moon').length;
    const marsTotal = RELICS_DATA.filter(r => r.target === 'Mars').length;
    const moonCount = RELICS_DATA.filter(r => r.target === 'Moon' && earnedIds.includes(r.id)).length;
    const marsCount = RELICS_DATA.filter(r => r.target === 'Mars' && earnedIds.includes(r.id)).length;
    return { total, count, earnedIds, moonTotal, marsTotal, moonCount, marsCount };
}

function getExplorerRankKey(count, total) {
    if (count >= total) return 'rankArchaeologist';
    if (count >= total / 2) return 'rankExplorer';
    if (count >= total / 4) return 'rankJunior';
    return 'rankCadet';
}

function getCertName() {
    const input = document.getElementById('cert-name');
    const typed = input ? input.value.trim() : '';
    return typed || certTr('defaultName');
}

function onCertNameInput() {
    const input = document.getElementById('cert-name');
    try { localStorage.setItem(CERT_NAME_KEY, input.value); } catch (e) { /* storage unavailable */ }
    renderCertificate();
}

function initCertificateName() {
    const input = document.getElementById('cert-name');
    if (!input) return;
    try { input.value = localStorage.getItem(CERT_NAME_KEY) || ''; } catch (e) { /* storage unavailable */ }
}

// Shrink text until it fits inside maxWidth
function fitFont(ctx, text, weight, family, startSize, minSize, maxWidth) {
    let size = startSize;
    ctx.font = `${weight} ${size}px ${family}`;
    while (size > minSize && ctx.measureText(text).width > maxWidth) {
        size -= 2;
        ctx.font = `${weight} ${size}px ${family}`;
    }
    return size;
}

// Draw several coloured pieces of text as one centred line
function drawCenteredSegments(ctx, segments, y) {
    const widths = segments.map(seg => ctx.measureText(seg.text).width);
    const total = widths.reduce((a, b) => a + b, 0);
    let x = (CERT_W - total) / 2;
    ctx.textAlign = 'left';
    segments.forEach((seg, i) => {
        ctx.fillStyle = seg.color;
        ctx.fillText(seg.text, x, y);
        x += widths[i];
    });
    ctx.textAlign = 'center';
}

async function loadCertFonts(name) {
    try {
        const sample = `${name} ${certTr('certTitle')} ${certTr('certFooter')} ${certTr('rankArchaeologist')}`;
        if (currentLang === 'ar') {
            await Promise.all([
                document.fonts.load('900 54px Cairo', sample),
                document.fonts.load('700 44px Cairo', sample),
                document.fonts.load('600 26px Cairo', sample),
                document.fonts.load('400 26px Cairo', sample)
            ]);
        } else {
            await Promise.all([
                document.fonts.load('900 54px Orbitron'),
                document.fonts.load('700 44px Orbitron'),
                document.fonts.load('500 20px Orbitron'),
                document.fonts.load('800 84px Inter', name),
                document.fonts.load('400 26px Inter'),
                document.fonts.load('600 26px Inter'),
                document.fonts.load('800 84px Cairo', name)
            ]);
        }
    } catch (e) { /* fall back to system fonts */ }
}

function drawCertificate(canvas, name, stats) {
    const ctx = canvas.getContext('2d');
    const W = CERT_W, H = CERT_H;
    const isAr = currentLang === 'ar';
    const fonts = certFonts();
    const rank = certTr(getExplorerRankKey(stats.count, stats.total));
    const spacing = (px) => { if (!isAr && 'letterSpacing' in ctx) ctx.letterSpacing = px + 'px'; };
    ctx.direction = isAr ? 'rtl' : 'ltr';

    // Background
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#080a15');
    bg.addColorStop(1, '#150f33');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    const glowA = ctx.createRadialGradient(W * 0.85, H * 0.1, 10, W * 0.85, H * 0.1, 420);
    glowA.addColorStop(0, 'rgba(127, 0, 255, 0.28)');
    glowA.addColorStop(1, 'rgba(127, 0, 255, 0)');
    ctx.fillStyle = glowA;
    ctx.fillRect(0, 0, W, H);

    const glowB = ctx.createRadialGradient(W * 0.12, H * 0.9, 10, W * 0.12, H * 0.9, 420);
    glowB.addColorStop(0, 'rgba(0, 242, 254, 0.18)');
    glowB.addColorStop(1, 'rgba(0, 242, 254, 0)');
    ctx.fillStyle = glowB;
    ctx.fillRect(0, 0, W, H);

    // Stars (seeded so the picture is identical on every redraw)
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 170; i++) {
        ctx.globalAlpha = 0.2 + rnd() * 0.7;
        const size = rnd() < 0.08 ? 3 : 2;
        ctx.fillRect(rnd() * W, rnd() * H, size, size);
    }
    ctx.globalAlpha = 1;

    // Planets, clipped to the inside of the border
    ctx.save();
    ctx.beginPath();
    ctx.rect(40, 40, W - 80, H - 80);
    ctx.clip();

    const moon = ctx.createRadialGradient(1040, 740, 20, 1080, 790, 170);
    moon.addColorStop(0, '#e0e6ed');
    moon.addColorStop(1, '#8f99a8');
    ctx.fillStyle = moon;
    ctx.beginPath();
    ctx.arc(1080, 790, 160, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(70, 80, 100, 0.35)';
    [[1020, 735, 28], [1110, 700, 18], [1150, 790, 30], [1040, 820, 16], [1095, 840, 14]].forEach(c => {
        ctx.beginPath();
        ctx.arc(c[0], c[1], c[2], 0, Math.PI * 2);
        ctx.fill();
    });

    const mars = ctx.createRadialGradient(60, 60, 10, 80, 80, 90);
    mars.addColorStop(0, '#ff7a55');
    mars.addColorStop(1, '#8a2412');
    ctx.fillStyle = mars;
    ctx.beginPath();
    ctx.arc(80, 80, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(60, 10, 0, 0.3)';
    [[110, 110, 14], [60, 120, 10], [125, 70, 8]].forEach(c => {
        ctx.beginPath();
        ctx.arc(c[0], c[1], c[2], 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.restore();

    // Double border with corner diamonds
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 5;
    ctx.strokeRect(40, 40, W - 80, H - 80);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.55)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(58, 58, W - 116, H - 116);
    ctx.fillStyle = '#ffd700';
    [[40, 40], [W - 40, 40], [40, H - 40], [W - 40, H - 40]].forEach(c => {
        ctx.save();
        ctx.translate(c[0], c[1]);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-9, -9, 18, 18);
        ctx.restore();
    });

    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';

    // Heading
    ctx.fillStyle = '#00f2fe';
    ctx.font = `${isAr ? 600 : 500} ${isAr ? 24 : 20}px ${fonts.head}`;
    spacing(4);
    ctx.fillText(isAr ? toArabicNumerals(certTr('subtitle')) : certTr('subtitle').toUpperCase(), W / 2, 125);
    spacing(0);

    const title = certTr('certTitle');
    ctx.fillStyle = '#ffd700';
    fitFont(ctx, title, '900', fonts.head, isAr ? 64 : 54, 30, 900);
    ctx.shadowColor = 'rgba(255, 215, 0, 0.45)';
    ctx.shadowBlur = 18;
    ctx.fillText(title, W / 2, 205);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#cbd5e1';
    ctx.font = `400 ${isAr ? 30 : 26}px ${fonts.body}`;
    ctx.fillText(certTr('certThat'), W / 2, 275);

    // Name
    ctx.fillStyle = '#ffffff';
    fitFont(ctx, name, '800', fonts.body, 84, 36, 860);
    ctx.shadowColor = 'rgba(0, 242, 254, 0.5)';
    ctx.shadowBlur = 22;
    ctx.fillText(name, W / 2, 375);
    ctx.shadowBlur = 0;

    const line = ctx.createLinearGradient(320, 0, 880, 0);
    line.addColorStop(0, '#00f2fe');
    line.addColorStop(1, '#7f00ff');
    ctx.fillStyle = line;
    ctx.fillRect(320, 405, 560, 3);

    // Badge summary
    ctx.fillStyle = '#cbd5e1';
    ctx.font = `400 ${isAr ? 32 : 28}px ${fonts.body}`;
    ctx.fillText(certTr('certUnlocked')
        .replace('{count}', certNum(stats.count))
        .replace('{total}', certNum(stats.total)), W / 2, 465);

    ctx.font = `600 ${isAr ? 28 : 24}px ${fonts.body}`;
    const moonSeg = { text: `${certTr('moonShort')} ${certNum(stats.moonCount)}/${certNum(stats.moonTotal)}`, color: '#e0e6ed' };
    const sepSeg = { text: '    |    ', color: '#475569' };
    const marsSeg = { text: `${certTr('mars')} ${certNum(stats.marsCount)}/${certNum(stats.marsTotal)}`, color: '#ff4b2b' };
    drawCenteredSegments(ctx, isAr ? [marsSeg, sepSeg, moonSeg] : [moonSeg, sepSeg, marsSeg], 508);

    // Rank
    ctx.fillStyle = '#94a3b8';
    ctx.font = `${isAr ? 600 : 500} ${isAr ? 22 : 16}px ${fonts.head}`;
    spacing(4);
    ctx.fillText(certTr('certRankLabel'), W / 2, isAr ? 552 : 568);
    spacing(0);

    const rankText = isAr ? rank : rank.toUpperCase();
    ctx.fillStyle = '#ffd700';
    fitFont(ctx, rankText, '700', fonts.head, isAr ? 54 : 44, 26, 820);
    ctx.shadowColor = 'rgba(255, 215, 0, 0.45)';
    ctx.shadowBlur = 16;
    ctx.fillText(rankText, W / 2, isAr ? 626 : 620);
    ctx.shadowBlur = 0;

    // One dot per relic: filled when earned (Moon = silver, Mars = red)
    const gap = Math.min(34, 840 / stats.total);
    const startX = (W - gap * (stats.total - 1)) / 2;
    RELICS_DATA.forEach((relic, i) => {
        const x = startX + (isAr ? stats.total - 1 - i : i) * gap;
        const earned = stats.earnedIds.includes(relic.id);
        ctx.beginPath();
        ctx.arc(x, 678, 10, 0, Math.PI * 2);
        if (earned) {
            ctx.fillStyle = (TARGET_INFO[relic.target] || TARGET_INFO.Moon).dot;
            ctx.fill();
        } else {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    });

    // Footer
    ctx.fillStyle = '#94a3b8';
    ctx.font = `400 ${isAr ? 24 : 20}px ${fonts.body}`;
    const dateText = new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillText(certTr('certAwarded').replace('{date}', dateText), W / 2, 750);

    ctx.fillStyle = 'rgba(0, 242, 254, 0.85)';
    ctx.font = `${isAr ? 600 : 500} ${isAr ? 20 : 15}px ${fonts.head}`;
    ctx.fillText(certTr('certFooter'), W / 2, 790);
}

async function renderCertificate() {
    const locked = document.getElementById('cert-locked');
    const unlocked = document.getElementById('cert-unlocked');
    const canvas = document.getElementById('cert-canvas');
    if (!locked || !unlocked || !canvas) return;

    const stats = getCertStats();
    const hasBadges = stats.count > 0;
    locked.classList.toggle('hidden', hasBadges);
    unlocked.classList.toggle('hidden', !hasBadges);
    if (!hasBadges) return;

    canvas.setAttribute('aria-label', certTr('certAlt'));
    const name = getCertName();
    await loadCertFonts(name);
    // Re-read the name after the async font load in case the user kept typing
    drawCertificate(canvas, getCertName(), getCertStats());
}

function certificateToBlob() {
    const canvas = document.getElementById('cert-canvas');
    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}

function setCertMessage(text) {
    const el = document.getElementById('cert-msg');
    if (el) el.textContent = text;
}

function certFileName() {
    const slug = getCertName().toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/g, '-').replace(/^-+|-+$/g, '');
    return `relic-explorer-certificate${slug ? '-' + slug : ''}.png`;
}

async function downloadCertificate() {
    playClickSound();
    await renderCertificate();
    const blob = await certificateToBlob();
    if (!blob) { setCertMessage(certTr('msgImgFail')); return false; }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = certFileName();
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setCertMessage(certTr('msgSaved'));
    return true;
}

async function shareCertificate() {
    playClickSound();
    await renderCertificate();
    const blob = await certificateToBlob();
    if (!blob) { setCertMessage(certTr('msgImgFail')); return; }

    const stats = getCertStats();
    const file = new File([blob], certFileName(), { type: 'image/png' });
    const shareData = {
        files: [file],
        title: certTr('shareTitle'),
        text: certTr('shareText').replace('{count}', certNum(stats.count)).replace('{total}', certNum(stats.total)),
        url: location.href
    };

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
            await navigator.share(shareData);
            setCertMessage(certTr('msgShared'));
        } catch (err) {
            if (err && err.name !== 'AbortError') setCertMessage(certTr('msgShareFail'));
        }
    } else {
        const saved = await downloadCertificate();
        if (saved) setCertMessage(certTr('msgShareUnsupported'));
    }
}

// Two-step reset: first tap arms the button, second tap within 4 seconds clears the badges
let resetArmTimer = null;
const RESET_BTN_BASE = 'px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-400 border border-slate-700 hover:text-white hover:border-slate-500 transition flex items-center space-x-1.5 rtl:space-x-reverse';
const RESET_BTN_ARMED = 'px-3 py-1.5 rounded-full text-[11px] font-semibold text-rose-200 border border-rose-500 bg-rose-950/60 transition flex items-center space-x-1.5 rtl:space-x-reverse';

function setResetButton(state) {
    const btn = document.getElementById('reset-badges-btn');
    if (!btn) return;
    btn.dataset.state = state;
    if (state === 'armed') {
        btn.className = RESET_BTN_ARMED;
        btn.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i><span data-i18n="resetConfirm">${certTr('resetConfirm')}</span>`;
    } else if (state === 'empty') {
        btn.className = RESET_BTN_BASE;
        btn.innerHTML = `<i class="fa-solid fa-circle-info"></i><span data-i18n="resetEmpty">${certTr('resetEmpty')}</span>`;
    } else {
        btn.className = RESET_BTN_BASE;
        btn.innerHTML = `<i class="fa-solid fa-rotate-left"></i><span data-i18n="resetBadges">${certTr('resetBadges')}</span>`;
    }
}

function resetBadges() {
    const btn = document.getElementById('reset-badges-btn');
    if (!btn) return;
    playClickSound();
    clearTimeout(resetArmTimer);

    if (collectedBadges.length === 0) {
        setResetButton('empty');
        resetArmTimer = setTimeout(() => setResetButton('idle'), 1800);
        return;
    }

    if (btn.dataset.state !== 'armed') {
        setResetButton('armed');
        resetArmTimer = setTimeout(() => setResetButton('idle'), 4000);
        return;
    }

    collectedBadges = [];
    try { localStorage.removeItem('nasa_relic_badges'); } catch (e) { /* storage unavailable */ }
    setResetButton('idle');
    setCertMessage('');
    updateBadgeTrackerDisplay();
    renderRelicCards();
}

/* ----------------------------------------------------
   7. INITIALIZATION ON WINDOW LOAD
---------------------------------------------------- */
window.onload = function () {
    initCertificateName();
    updateLanguageUI();
    switchMap('Moon');
    initBackground3D();
    initRelicPreview();
    initGallery();
    initStory();
};
