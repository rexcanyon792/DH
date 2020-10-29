export const BattlePokedex: {[speciesid: string]: SpeciesData} = {
	butterfree: {
		inherit: true,
		otherFormes: ["Butterfree-Gmax", "Butterfree-Mega"],
		formeOrder: ["Butterfree", "Butterfree-Gmax", "Butterfree-Mega"],
	},
	butterfreemega: {
		num: 12,
		name: "Butterfree-Mega",
		baseSpecies: "Butterfree",
		forme: "Mega",
		types: ["Bug", "Flying"],
		baseStats: {hp: 60, atk: 15, def: 50, spa: 145, spd: 80, spe: 145},
		abilities: {0: "Dust Scatter"},
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		eggGroups: ["Bug"],
		requiredItem: "Butterfrite",
	},
	raichu: {
		inherit: true,
		otherFormes: ["Raichu-Alola", "Raichu-Mega"],
		formeOrder: ["Raichu", "Raichu-Alola", "Raichu-Mega"],
	},
	raichumega: {
		num: 26,
		name: "Raichu-Mega",
		baseSpecies: "Raichu",
		forme: "Mega",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 60, atk: 125, def: 55, spa: 110, spd: 100, spe: 125},
		abilities: {0: "Reckless"},
		heightm: 0.8,
		weightkg: 30,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
		requiredItem: "Raichunite",
	},
	nidoqueen: {
		num: 31,
		name: "Nidoqueen",
		types: ["Poison", "Ground"],
		gender: "F",
		baseStats: {hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76},
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Sheer Force"},
		heightm: 1.3,
		weightkg: 60,
		color: "Blue",
		prevo: "Nidorina",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Undiscovered"],
	},
	clefable: {
		inherit: true,
		otherFormes: ["Clefable-Mega"],
		formeOrder: ["Clefable", "Clefable-Mega"],
	},
	clefablemega: {
		num: 36,
		name: "Clefable-Mega",
		baseSpecies: "Clefable",
		forme: "Mega",
		types: ["Fairy", "Ghost"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 95, atk: 80, def: 83, spa: 125, spd: 90, spe: 110},
		abilities: {0: "Prankster"},
		heightm: 1.3,
		weightkg: 40,
		color: "Pink",
		eggGroups: ["Fairy"],
		requiredItem: "Clefabite",
	},
	vaporeon: {
		inherit: true,
		otherFormes: ["Vaporeon-Mega"],
		formeOrder: ["Vaporeon", "Vaporeon-Mega"],
	},
	vaporeonmega: {
		num: 134,
		name: "Vaporeon-Mega",
		baseSpecies: "Vaporeon",
		forme: "Mega",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 95, def: 100, spa: 120, spd: 135, spe: 45},
		abilities: {0: "Perish Body"},
		heightm: 1,
		weightkg: 29,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Vaporeonite",
	},
	jolteon: {
		inherit: true,
		otherFormes: ["Jolteon-Mega"],
		formeOrder: ["Jolteon", "Jolteon-Mega"],
	},
	jolteonmega: {
		num: 135,
		name: "Jolteon-Mega",
		baseSpecies: "Jolteon",
		forme: "Mega",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 65, def: 60, spa: 160, spd: 125, spe: 150},
		abilities: {0: "Tempestuous"},
		heightm: 0.8,
		weightkg: 24.5,
		color: "Yellow",
		eggGroups: ["Field"],
		requiredItem: "Jolteonite",
	},
	flareon: {
		inherit: true,
		otherFormes: ["Flareon-Mega"],
		formeOrder: ["Flareon", "Flareon-Mega"],
	},
	flareonmega: {
		num: 136,
		name: "Flareon-Mega",
		baseSpecies: "Flareon",
		forme: "Mega",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 130, def: 80, spa: 115, spd: 150, spe: 85},
		abilities: {0: "Soot Guard"},
		heightm: 0.9,
		weightkg: 25,
		color: "Red",
		eggGroups: ["Field"],
		otherFormes: ["Flareon-Mega"],
		formeOrder: ["Flareon", "Flareon-Mega"],
		requiredItem: "Flareonite",
	},
	articuno: {
		inherit: true,
		otherFormes: ["Articuno-Galar"],
		formeOrder: ["Articuno", "Articuno-Galar"],
	},
	articunogalar: {
		num: 144,
		name: "Articuno-Galar",
		baseSpecies: "Articuno",
		forme: "Galar",
		types: ["Psychic", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 85, def: 85, spa: 125, spd: 100, spe: 95},
		abilities: {0: "Competitive"},
		heightm: 1.7,
		weightkg: 50.9,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	zapdos: {
		inherit: true,
		otherFormes: ["Zapdos-Galar"],
		formeOrder: ["Zapdos", "Zapdos-Galar"],
	},
	zapdosgalar: {
		num: 145,
		name: "Zapdos-Galar",
		baseSpecies: "Zapdos",
		forme: "Galar",
		types: ["Fighting", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 125, def: 90, spa: 85, spd: 90, spe: 100},
		abilities: {0: "Defiant"},
		heightm: 1.6,
		weightkg: 58.2,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	moltres: {
		inherit: true,
		otherFormes: ["Moltres-Galar"],
		formeOrder: ["Moltres", "Moltres-Galar"],
	},
	moltresgalar: {
		num: 146,
		name: "Moltres-Galar",
		baseSpecies: "Moltres",
		forme: "Galar",
		types: ["Dark", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 85, def: 90, spa: 100, spd: 125, spe: 90},
		abilities: {0: "Berserk"},
		heightm: 2,
		weightkg: 66,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	dragonite: {
		inherit: true,
		otherFormes: ["Dragonite-Mega"],
		formeOrder: ["Dragonite", "Dragonite-Mega"],
	},
	dragonitemega: {
		num: 149,
		name: "Dragonite-Mega",
		baseSpecies: "Dragonite",
		forme: "Mega",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 91, atk: 164, def: 110, spa: 122, spd: 122, spe: 91},
		abilities: {0: "Tough Claws"},
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		eggGroups: ["Water 1", "Dragon"],
		requiredItem: "Draconite",
	},
	ariados: {
		inherit: true,
		otherFormes: ["Ariados-Mega"],
		formeOrder: ["Ariados", "Ariados-Mega"],
	},
	ariadosmega: {
		num: 168,
		name: "Ariados-Mega",
		baseSpecies: "Ariados",
		forme: "Mega",
		types: ["Bug", "Poison"],
		baseStats: {hp: 70, atk: 150, def: 90, spa: 60, spd: 90, spe: 40},
		abilities: {0: "Sticky Residues"},
		heightm: 1.1,
		weightkg: 33.5,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Ariadosite",
	},
	slowking: {
		inherit: true,
		otherFormes: ["Slowking-Galar", "Slowking-Mega"],
		formeOrder: ["Slowking", "Slowking-Galar", "Slowking-Mega"],
	},
	slowkinggalar: {
		num: 199,
		name: "Slowking-Galar",
		baseSpecies: "Slowking",
		forme: "Galar",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 95, atk: 65, def: 80, spa: 110, spd: 110, spe: 30},
		abilities: {0: "Curious Medicine", 1: "Own Tempo", H: "Regenerator"},
		heightm: 1.8,
		weightkg: 79.5,
		color: "Pink",
		prevo: "Slowpoke-Galar",
		evoType: "trade",
		evoItem: "King's Rock",
		eggGroups: ["Monster", "Water 1"],
	},
	slowkingmega: {
		num: 199,
		name: "Slowking-Mega",
		baseSpecies: "Slowking",
		forme: "Mega",
		types: ["Water", "Psychic"],
		baseStats: {hp: 95, atk: 75, def: 80, spa: 145, spd: 110, spe: 85},
		abilities: {0: "Counter-Clockwise Spiral"},
		heightm: 2,
		weightkg: 79.5,
		color: "Pink",
		prevo: "Slowpoke",
		evoType: "trade",
		evoItem: "King's Rock",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Slowkinite",
	},
	walrein: {
		num: 365,
		name: "Walrein",
		types: ["Ice", "Water"],
		baseStats: {hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65},
		abilities: {0: "Thick Fat", 1: "Ice Body", H: "Oblivious"},
		heightm: 1.4,
		weightkg: 150.6,
		color: "Blue",
		prevo: "Sealeo",
		evoLevel: 44,
		eggGroups: ["Water 1", "Field"],
	},
	staraptor: {
		inherit: true,
		otherFormes: ["Staraptor-Mega"],
		formeOrder: ["Staraptor", "Staraptor-Mega"],
	},
	staraptormega: {
		num: 398,
		name: "Staraptor-Mega",
		baseSpecies: "Staraptor",
		forme: "Mega",
		types: ["Normal", "Flying"],
		baseStats: {hp: 85, atk: 140, def: 85, spa: 75, spd: 80, spe: 120},
		abilities: {0: "Showdown"},
		heightm: 1.2,
		weightkg: 24.9,
		color: "Brown",
		eggGroups: ["Flying"],
		requiredItem: "Staraptorite",
	},
	bibarel: {
		inherit: true,
		otherFormes: ["Bibarel-Mega"],
		formeOrder: ["Bibarel", "Bibarel-Mega"],
	},
	bibarelmega: {
		num: 400,
		name: "Bibarel-Mega",
		baseSpecies: "Bibarel",
		forme: "Mega",
		types: ["Normal", "Water"],
		baseStats: {hp: 79, atk: 135, def: 60, spa: 55, spd: 60, spe: 121},
		abilities: {0: "Hard Worker"},
		heightm: 1,
		weightkg: 31.5,
		color: "Brown",
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Bibarelite",
	},
	kricketune: {
		inherit: true,
		otherFormes: ["Kricketune-Mega"],
		formeOrder: ["Kricketune", "Kricketune-Mega"],
	},
	kricketunemega: {
		num: 402,
		name: "Kricketune-Mega",
		baseSpecies: "Kricketune",
		forme: "Mega",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 77, atk: 145, def: 51, spa: 15, spd: 51, spe: 145},
		abilities: {0: "Dancer"},
		heightm: 1,
		weightkg: 25.5,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Kricketite",
	},
	luxray: {
		inherit: true,
		otherFormes: ["Luxray-Mega"],
		formeOrder: ["Luxray", "Luxray-Mega"],
	},
	luxraymega: {
		num: 405,
		name: "Luxray-Mega",
		baseSpecies: "Luxray",
		forme: "Mega",
		types: ["Electric"],
		baseStats: {hp: 80, atk: 160, def: 89, spa: 125, spd: 89, spe: 80},
		abilities: {0: "Ambush"},
		heightm: 1.4,
		weightkg: 42,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Luxrite",
	},
	mismagius: {
		inherit: true,
		otherFormes: ["Mismagius-Mega"],
		formeOrder: ["Mismagius", "Mismagius-Mega"],
	},
	mismagiusmega: {
		num: 429,
		name: "Mismagius-Mega",
		baseSpecies: "Mismagius",
		forme: "Mega",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 60, atk: 95, def: 95, spa: 140, spd: 110, spe: 95},
		abilities: {0: "Alchemist"},
		heightm: 0.9,
		weightkg: 4.4,
		color: "Purple",
		eggGroups: ["Amorphous"],
		requiredItem: "Mismaginite",
	},
	honchkrow: {
		inherit: true,
		otherFormes: ["Honchkrow-Mega"],
		formeOrder: ["Honchkrow", "Honchkrow-Mega"],
	},
	honchkrowmega: {
		num: 430,
		name: "Honchkrow-Mega",
		baseSpecies: "Honchkrow",
		forme: "Mega",
		types: ["Dark", "Flying"],
		baseStats: {hp: 100, atk: 145, def: 82, spa: 105, spd: 102, spe: 71},
		abilities: {0: "Blackmail"},
		heightm: 0.9,
		weightkg: 27.3,
		color: "Black",
		eggGroups: ["Flying"],
		requiredItem: "Honchkronite",
	},
	spiritomb: {
		inherit: true,
		otherFormes: ["Spiritomb-Mega"],
		formeOrder: ["Spiritomb", "Spiritomb-Mega"],
	},
	spiritombmega: {
		num: 442,
		name: "Spiritomb-Mega",
		baseSpecies: "Spiritomb",
		forme: "Mega",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 50, atk: 108, def: 142, spa: 108, spd: 142, spe: 35},
		abilities: {0: "Regenerator"},
		heightm: 1,
		weightkg: 108,
		color: "Purple",
		eggGroups: ["Amorphous"],
		requiredItem: "Odd Keystone",
	},
	froslass: {
		inherit: true,
		otherFormes: ["Froslass-Mega"],
		formeOrder: ["Froslass", "Froslass-Mega"],
	},
	froslassmega: {
		num: 478,
		name: "Froslass-Mega",
		baseSpecies: "Froslass",
		forme: "Mega",
		types: ["Ice", "Ghost"],
		gender: "F",
		baseStats: {hp: 70, atk: 130, def: 95, spa: 80, spd: 90, spe: 115},
		abilities: {0: "Magic Bounce"},
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		eggGroups: ["Fairy", "Mineral"],
		requiredItem: "Froslassite",
	},
	gigalith: {
		inherit: true,
		otherFormes: ["Gigalith-Mega"],
		formeOrder: ["Gigalith", "Gigalith-Mega"],
	},
	gigalithmega: {
		num: 526,
		name: "Gigalith-Mega",
		baseSpecies: "Gigalith",
		forme: "Mega",
		types: ["Rock"],
		baseStats: {hp: 85, atk: 135, def: 160, spa: 100, spd: 110, spe: 25},
		abilities: {0: "Solar Core"},
		heightm: 1.7,
		weightkg: 260,
		color: "Blue",
		eggGroups: ["Mineral"],
		requiredItem: "Gigalite",
	},
	conkeldurr: {
		inherit: true,
		otherFormes: ["Conkeldurr-Mega"],
		formeOrder: ["Conkeldurr", "Conkeldurr-Mega"],
	},
	conkeldurrmega: {
		num: 534,
		name: "Conkeldurr-Mega",
		baseSpecies: "Conkeldurr",
		forme: "Mega",
		types: ["Fighting"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 105, atk: 190, def: 125, spa: 65, spd: 85, spe: 35},
		abilities: {0: "Long Reach"},
		heightm: 1.4,
		weightkg: 87,
		color: "Brown",
		eggGroups: ["Human-Like"],
		requiredItem: "Conkeldite",
	},
	archeops: {
		inherit: true,
		otherFormes: ["Archeops-Mega"],
		formeOrder: ["Archeops", "Archeops-Mega"],
	},
	archeopsmega: {
		num: 567,
		name: "Archeops-Mega",
		baseSpecies: "Archeops",
		forme: "Mega",
		types: ["Rock", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 190, def: 65, spa: 127, spd: 65, spe: 145},
		abilities: {0: "Second Wind"},
		heightm: 1.4,
		weightkg: 32,
		color: "Yellow",
		eggGroups: ["Flying", "Water 3"],
		requiredItem: "Archeonite",
	},
	garbodor: {
		inherit: true,
		otherFormes: ["Garbodor-Gmax", "Garbodor-Mega"],
		formeOrder: ["Garbodor", "Garbodor-Gmax", "Garbodor-Mega"],
	},
	garbodorgmax: {
		num: 569,
		name: "Garbodor-Gmax",
		baseSpecies: "Garbodor",
		forme: "Gmax",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75},
		abilities: {0: "Stench", 1: "Weak Armor", H: "Aftermath"},
		heightm: 21,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Mineral"],
		isGigantamax: "G-Max Malodor",
	},
	garbodormega: {
		num: 569,
		name: "Garbodor-Mega",
		baseSpecies: "Garbodor",
		forme: "Mega",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 95, def: 132, spa: 95, spd: 132, spe: 40},
		abilities: {0: "Trash Compactor"},
		heightm: 1.9,
		weightkg: 107.3,
		color: "Green",
		eggGroups: ["Mineral"],
		requiredItem: "Garbodorite",
	},
	gothitelle: {
		inherit: true,
		otherFormes: ["Gothitelle-Mega"],
		formeOrder: ["Gothitelle", "Gothitelle-Mega"],
	},
	gothitellemega: {
		num: 576,
		name: "Gothitelle-Mega",
		baseSpecies: "Gothitelle",
		forme: "Mega",
		types: ["Psychic", "Steel"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 70, atk: 55, def: 120, spa: 130, spd: 150, spe: 65},
		abilities: {0: "Magic Guard"},
		heightm: 1.5,
		weightkg: 44,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Gothitite",
	},
	reuniclus: {
		inherit: true,
		otherFormes: ["Reuniclus-Mega"],
		formeOrder: ["Reuniclus", "Reuniclus-Mega"],
	},
	reuniclusmega: {
		num: 579,
		name: "Reuniclus-Mega",
		baseSpecies: "Reuniclus",
		forme: "Mega",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 110, atk: 110, def: 115, spa: 165, spd: 85, spe: 5},
		abilities: {0: "Two-Minded"},
		heightm: 1,
		weightkg: 20.1,
		color: "Green",
		eggGroups: ["Amorphous"],
		requiredItem: "Reunite",
	},
	vanilluxe: {
		inherit: true,
		otherFormes: ["Vanilluxe-Mega"],
		formeOrder: ["Vanilluxe", "Vanilluxe-Mega"],
	},
	vanilluxemega: {
		num: 584,
		name: "Vanilluxe-Mega",
		baseSpecies: "Vanilluxe",
		forme: "Mega",
		types: ["Ice"],
		baseStats: {hp: 71, atk: 95, def: 85, spa: 160, spd: 115, spe: 109},
		abilities: {0: "Cold Sweat"},
		heightm: 1.3,
		weightkg: 57.5,
		color: "White",
		eggGroups: ["Mineral"],
		requiredItem: "Vanillite",
	},
	klinklang: {
		inherit: true,
		otherFormes: ["Klinklang-Mega"],
		formeOrder: ["Klinklang", "Klinklang-Mega"],
	},
	klinklangmega: {
		num: 601,
		name: "Klinklang-Mega",
		baseSpecies: "Klinklang",
		forme: "Mega",
		types: ["Steel", "Electric"],
		gender: "N",
		baseStats: {hp: 60, atk: 130, def: 115, spa: 100, spd: 85, spe: 130},
		abilities: {0: "Electric Surge"},
		heightm: 0.6,
		weightkg: 81,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Klinklite",
	},
	chandelure: {
		inherit: true,
		otherFormes: ["Chandelure-Mega"],
		formeOrder: ["Chandelure", "Chandelure-Mega"],
	},
	chandeluremega: {
		num: 609,
		name: "Chandelure-Mega",
		baseSpecies: "Chandelure",
		forme: "Mega",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 60, atk: 57, def: 108, spa: 185, spd: 108, spe: 102},
		abilities: {0: "Nightmare Heart"},
		heightm: 1,
		weightkg: 34.3,
		color: "Black",
		eggGroups: ["Amorphous"],
		requiredItem: "Chandelite",
	},
	bisharp: {
		inherit: true,
		otherFormes: ["Bisharp-Mega"],
		formeOrder: ["Bisharp", "Bisharp-Mega"],
	},
	bisharpmega: {
		num: 625,
		name: "Bisharp-Mega",
		baseSpecies: "Bisharp",
		forme: "Mega",
		types: ["Dark", "Steel"],
		baseStats: {hp: 65, atk: 145, def: 110, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Executioner"},
		heightm: 1.6,
		weightkg: 70,
		color: "Red",
		eggGroups: ["Human-Like"],
		requiredItem: "Bisharpite",
	},
	hydreigon: {
		inherit: true,
		otherFormes: ["Hydreigon-Mega"],
		formeOrder: ["Hydreigon", "Hydreigon-Mega"],
	},
	hydreigonmega: {
		num: 635,
		name: "Hydreigon-Mega",
		baseSpecies: "Hydreigon",
		forme: "Mega",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 92, atk: 125, def: 110, spa: 165, spd: 90, spe: 118},
		abilities: {0: "Berserk"},
		heightm: 1.8,
		weightkg: 160,
		color: "Blue",
		eggGroups: ["Dragon"],
		requiredItem: "Hydreigonite",
	},
	talonflame: {
		inherit: true,
		otherFormes: ["Talonflame-Mega"],
		formeOrder: ["Talonflame", "Talonflame-Mega"],
	},
	talonflamemega: {
		num: 663,
		name: "Talonflame-Mega",
		baseSpecies: "Talonflame",
		forme: "Mega",
		types: ["Fire", "Flying"],
		baseStats: {hp: 78, atk: 81, def: 71, spa: 134, spd: 69, spe: 166},
		abilities: {0: "Bird of Prey"},
		heightm: 1.2,
		weightkg: 24.5,
		color: "Red",
		eggGroups: ["Flying"],
		requiredItem: "Talonflite",
	},
	aurorus: {
		num: 699,
		name: "Aurorus",
		types: ["Rock", "Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 123, atk: 77, def: 72, spa: 99, spd: 92, spe: 58},
		abilities: {0: "Refrigerate", H: "Snow Warning"},
		heightm: 2.7,
		weightkg: 225,
		color: "Blue",
		prevo: "Amaura",
		evoLevel: 39,
		eggGroups: ["Monster"],
	},
	gourgeist: {
		inherit: true,
		otherFormes: ["Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super", "Gourgeist-Mega", "Gourgeist-Small-Mega", "Gourgeist-Large-Mega", "Gourgeist-Super-Mega"],
		formeOrder: ["Gourgeist", "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"],
	},
	gourgeistmega: {
		num: 711,
		name: "Gourgeist-Mega",
		baseSpecies: "Gourgeist",
		forme: "Mega",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 65, atk: 58, def: 147, spa: 145, spd: 95, spe: 84},
		abilities: {0: "Weak Armor"},
		heightm: 0.9,
		weightkg: 12.5,
		color: "Brown",
		eggGroups: ["Amorphous"],
		requiredItem: "Gourgeite",
	},
	gourgeistsmallmega: {
		num: 711,
		name: "Gourgeist-Small-Mega",
		baseSpecies: "Gourgeist",
		forme: "Mega-Small",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 55, atk: 85, def: 122, spa: 85, spd: 140, spe: 107},
		abilities: {0: "Prankster"},
		heightm: 0.7,
		weightkg: 9.5,
		color: "Brown",
		eggGroups: ["Amorphous"],
		requiredItem: "Gourgeite",
	},
	gourgeistlargemega: {
		num: 711,
		name: "Gourgeist-Large-Mega",
		baseSpecies: "Gourgeist",
		forme: "Mega-Large",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 75, atk: 100, def: 125, spa: 100, spd: 125, spe: 69},
		abilities: {0: "Flash Fire"},
		heightm: 1.1,
		weightkg: 14,
		color: "Brown",
		eggGroups: ["Amorphous"],
		requiredItem: "Gourgeite",
	},
	gourgeistsupermega: {
		num: 711,
		name: "Gourgeist-Super-Mega",
		baseSpecies: "Gourgeist",
		forme: "Mega-Super",
		types: ["Fire", "Grass"],
		baseStats: {hp: 85, atk: 145, def: 147, spa: 68, spd: 95, spe: 54},
		abilities: {0: "Stamina"},
		heightm: 1.7,
		weightkg: 39,
		color: "Brown",
		eggGroups: ["Amorphous"],
		requiredItem: "Gourgeite",
	},
	goodra: {
		inherit: true,
		otherFormes: ["Goodra-Mega"],
		formeOrder: ["Goodra", "Goodra-Mega"],
	},
	goodramega: {
		num: 706,
		name: "Goodra-Mega",
		baseSpecies: "Goodra",
		forme: "Mega",
		types: ["Dragon", "Water"],
		baseStats: {hp: 90, atk: 120, def: 120, spa: 130, spd: 150, spe: 90},
		abilities: {0: "Gooey"},
		heightm: 2,
		weightkg: 150.5,
		color: "Purple",
		eggGroups: ["Dragon"],
		requiredItem: "Goodranite",
	},
	toucannon: {
		inherit: true,
		otherFormes: ["Toucannon-Mega"],
		formeOrder: ["Toucannon", "Toucannon-Mega"],
	},
	toucannonmega: {
		num: 733,
		name: "Toucannon-Mega",
		baseSpecies: "Toucannon",
		forme: "Mega",
		types: ["Fire", "Flying"],
		baseStats: {hp: 80, atk: 140, def: 85, spa: 95, spd: 85, spe: 100},
		abilities: {0: "Ignite"},
		heightm: 1.1,
		weightkg: 26,
		color: "Black",
		eggGroups: ["Flying"],
		requiredItem: "Toucannonite",
	},
	gumshoos: {
		inherit: true,
		otherFormes: ["Gumshoos-Totem", "Gumshoos-Mega"],
		formeOrder: ["Gumshoos", "Gumshoos-Totem", "Gumshoos-Mega"],
	},
	gumshoosmega: {
		num: 735,
		name: "Gumshoos-Mega",
		baseSpecies: "Gumshoos",
		forme: "Mega",
		types: ["Normal"],
		baseStats: {hp: 88, atk: 130, def: 70, spa: 55, spd: 70, spe: 105},
		abilities: {0: "Hustle"},
		heightm: 0.7,
		weightkg: 14.2,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Gumshoosite",
	},
	vikavolt: {
		inherit: true,
		otherFormes: ["Vikavolt-Totem", "Vikavolt-Mega"],
		formeOrder: ["Vikavolt", "Vikavolt-Totem", "Vikavolt-Mega"],
	},
	vikavoltmega: {
		num: 738,
		name: "Vikavolt-Mega",
		baseSpecies: "Vikavolt",
		forme: "Mega",
		types: ["Bug", "Electric"],
		baseStats: {hp: 77, atk: 145, def: 90, spa: 145, spd: 75, spe: 68},
		abilities: {0: "Download"},
		heightm: 1.5,
		weightkg: 45,
		color: "Blue",
		eggGroups: ["Bug"],
		requiredItem: "Vikavoltite",
	},
	lycanroc: {
		inherit: true,
		otherFormes: ["Lycanroc-Midnight", "Lycanroc-Dusk", "Lycanroc-Mega", "Lycanroc-Midnight-Mega", "Lycanroc-Dusk-Mega"],
		formeOrder: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk", "Lycanroc-Mega", "Lycanroc-Midnight-Mega", "Lycanroc-Dusk-Mega"],
	},
	lycanrocmega: {
		num: 745,
		name: "Lycanroc-Mega",
		baseSpecies: "Lycanroc",
		forme: "Mega",
		types: ["Rock", "Normal"],
		baseStats: {hp: 75, atk: 130, def: 115, spa: 55, spd: 75, spe: 137},
		abilities: {0: "Down-to-Earth"},
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Lycanite",
	},
	lycanrocmidnightmega: {
		num: 745,
		name: "Lycanroc-Midnight-Mega",
		baseSpecies: "Lycanroc",
		forme: "Mega-Midnight",
		types: ["Rock", "Dark"],
		baseStats: {hp: 85, atk: 155, def: 115, spa: 65, spd: 75, spe: 92},
		abilities: {0: "Reckless"},
		heightm: 1.1,
		weightkg: 25,
		color: "Red",
		eggGroups: ["Field"],
		requiredItem: "Lycanite",
		battleOnly: "Lycanroc-Midnight",
	},
	lycanrocduskmega: {
		num: 745,
		name: "Lycanroc-Dusk-Mega",
		baseSpecies: "Lycanroc",
		forme: "Mega-Dusk",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 75, atk: 150, def: 80, spa: 65, spd: 75, spe: 142},
		abilities: {0: "Mold Breaker"},
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Lycanite",
		battleOnly: "Lycanroc-Dusk",
	},
	mimikyu: {
		inherit: true,
		otherFormes: ["Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem", "Mimikyu-Mega", "Mimikyu-Busted-Mega"],
		formeOrder: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem", "Mimikyu-Mega", "Mimikyu-Busted-Mega"],
	},
	mimikyumega: {
		num: 778,
		name: "Mimikyu-Mega",
		baseSpecies: "Mimikyu",
		forme: "Mega",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 55, atk: 90, def: 145, spa: 70, spd: 150, spe: 66},
		abilities: {0: "Magic Guard"},
		heightm: 0.2,
		weightkg: 0.7,
		color: "Yellow",
		eggGroups: ["Amorphous"],
		requiredItem: "Mimikyunite",
		battleOnly: "Mimikyu",
	},
	mimikyubustedmega: {
		num: 778,
		name: "Mimikyu-Busted-Mega",
		baseSpecies: "Mimikyu",
		forme: "Mega-Busted",
		types: ["Ghost", "Bug"],
		baseStats: {hp: 55, atk: 130, def: 80, spa: 80, spd: 105, spe: 126},
		abilities: {0: "Spectral Anger"},
		heightm: 0.2,
		weightkg: 0.7,
		color: "Yellow",
		eggGroups: ["Amorphous"],
		requiredItem: "Mimikyunite",
		battleOnly: "Mimikyu",
	},
	kommoo: {
		inherit: true,
		otherFormes: ["Kommo-o-Totem", "Kommo-o-Mega"],
		formeOrder: ["Kommo-o", "Kommo-o-Totem", "Kommo-o-Mega"],
	},
	kommoomega: {
		num: 784,
		name: "Kommo-o-Mega",
		baseSpecies: "Kommo-o",
		forme: "Mega",
		types: ["Dragon", "Fighting"],
		baseStats: {hp: 75, atk: 130, def: 145, spa: 150, spd: 115, spe: 85},
		abilities: {0: "Weak Armor"},
		heightm: 1.6,
		weightkg: 78.2,
		color: "Gray",
		eggGroups: ["Dragon"],
		requiredItem: "Kommonite",
	},
	rillaboom: {
		inherit: true,
		otherFormes: ["Rillaboom-Gmax", "Rillaboom-Mega"],
		formeOrder: ["Rillaboom", "Rillaboom-Gmax", "Rillaboom-Mega"],
	},
	rillaboommega: {
		num: 812,
		name: "Rillaboom-Mega",
		baseSpecies: "Rillaboom",
		forme: "Mega",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 165, def: 110, spa: 60, spd: 110, spe: 85},
		abilities: {0: "Arena Rock"},
		heightm: 2.1,
		weightkg: 90,
		color: "Green",
		eggGroups: ["Field", "Grass"],
		requiredItem: "Rillaboomite",
	},
	cinderace: {
		inherit: true,
		otherFormes: ["Cinderace-Gmax", "Cinderace-Mega"],
		formeOrder: ["Cinderace", "Cinderace-Gmax", "Cinderace-Mega"],
	},
	cinderacemega: {
		num: 815,
		name: "Cinderace-Mega",
		baseSpecies: "Cinderace",
		forme: "Mega",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 126, def: 95, spa: 135, spd: 95, spe: 99},
		abilities: {0: "Sharp Striker"},
		heightm: 1.4,
		weightkg: 33,
		color: "White",
		eggGroups: ["Field", "Human-Like"],
		requiredItem: "Cinderite",
	},
	inteleon: {
		inherit: true,
		otherFormes: ["Inteleon-Gmax", "Inteleon-Mega"],
		formeOrder: ["Inteleon", "Inteleon-Gmax", "Inteleon-Mega"],
	},
	inteleonmega: {
		num: 818,
		name: "Inteleon-Mega",
		baseSpecies: "Inteleon",
		forme: "Mega",
		types: ["Water", "Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 145, def: 102, spa: 85, spd: 102, spe: 126},
		abilities: {0: "Illusion"},
		heightm: 1.9,
		weightkg: 45.2,
		color: "Blue",
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Inteleonite",
	},
	corviknight: {
		inherit: true,
		otherFormes: ["Corviknight-Gmax", "Corviknight-Mega"],
		formeOrder: ["Corviknight", "Corviknight-Gmax", "Corviknight-Mega"],
	},
	corviknightmega: {
		num: 823,
		name: "Corviknight-Mega",
		baseSpecies: "Corviknight",
		forme: "Mega",
		types: ["Flying", "Steel"],
		baseStats: {hp: 98, atk: 117, def: 120, spa: 78, spd: 105, spe: 77},
		abilities: {0: "Intimidate"},
		heightm: 2.2,
		weightkg: 75,
		color: "Purple",
		eggGroups: ["Flying"],
		requiredItem: "Corviknite",
	},
	orbeetle: {
		inherit: true,
		otherFormes: ["Orbeetle-Gmax", "Orbeetle-Mega"],
		formeOrder: ["Orbeetle", "Orbeetle-Gmax", "Orbeetle-Mega"],
	},
	orbeetlemega: {
		num: 826,
		name: "Orbeetle-Mega",
		baseSpecies: "Orbeetle",
		forme: "Mega",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 45, def: 130, spa: 130, spd: 140, spe: 100},
		abilities: {0: "Gravitas"},
		heightm: 0.4,
		weightkg: 40.8,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Orbeetlite",
	},
	thievul: {
		inherit: true,
		otherFormes: ["Thievul-Mega"],
		formeOrder: ["Thievul", "Thievul-Mega"],
	},
	thievulmega: {
		num: 828,
		name: "Thievul-Mega",
		baseSpecies: "Thievul",
		forme: "Mega",
		types: ["Dark"],
		baseStats: {hp: 70, atk: 58, def: 78, spa: 137, spd: 102, spe: 110},
		abilities: {0: "Dark Aura"},
		heightm: 1.2,
		weightkg: 19.9,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Thievulite",
	},
	boltund: {
		inherit: true,
		otherFormes: ["Boltund-Mega"],
		formeOrder: ["Boltund", "Boltund-Mega"],
	},
	boltundmega: {
		num: 836,
		name: "Boltund-Mega",
		baseSpecies: "Boltund-Mega",
		forme: "Boltund-Mega",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 69, atk: 140, def: 60, spa: 115, spd: 60, spe: 146},
		abilities: {0: "Adrenaline"},
		heightm: 1,
		weightkg: 34,
		color: "Yellow",
		eggGroups: ["Field"],
		requiredItem: "Boltundite",
	},
	dracozolt: {
		inherit: true,
		unreleasedHidden: false,
	},
	arctozolt: {
		inherit: true,
		unreleasedHidden: false,
	},
	dracovish: {
		inherit: true,
		unreleasedHidden: false,
	},
	arctovish: {
		inherit: true,
		unreleasedHidden: false,
	},
	dragapult: {
		inherit: true,
		otherFormes: ["Dragapult-Mega"],
		formeOrder: ["Dragapult", "Dragapult-Mega"],
	},
	dragapultmega: {
		num: 887,
		name: "Dragapult-Mega",
		baseSpecies: "Dragapult",
		forme: "Mega",
		types: ["Dragon", "Ghost"],
		baseStats: {hp: 88, atk: 144, def: 93, spa: 130, spd: 93, spe: 152},
		abilities: {0: "Trace"},
		heightm: 3,
		weightkg: 50,
		color: "Green",
		eggGroups: ["Amorphous", "Dragon"],
		requiredItem: "Dragapultite",
	},
	regieleki: {
		num: 894,
		name: "Regieleki",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 80, atk: 100, def: 50, spa: 100, spd: 50, spe: 200},
		abilities: {0: "Transistor"},
		heightm: 1.2,
		weightkg: 145,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	regidrago: {
		num: 895,
		name: "Regidrago",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 200, atk: 100, def: 50, spa: 100, spd: 50, spe: 80},
		abilities: {0: "Dragon's Maw"},
		heightm: 2.1,
		weightkg: 200,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	glastrier: {
		num: 896,
		name: "Glastrier",
		types: ["Ice"],
		gender: "N",
		baseStats: {hp: 100, atk: 145, def: 130, spa: 65, spd: 110, spe: 30},
		abilities: {0: "Chilling Neigh"},
		heightm: 2.2,
		weightkg: 800,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	spectrier: {
		num: 897,
		name: "Spectrier",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 100, atk: 65, def: 60, spa: 145, spd: 80, spe: 130},
		abilities: {0: "Grim Neigh"},
		heightm: 2,
		weightkg: 44.5,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	calyrex: {
		num: 898,
		name: "Calyrex",
		types: ["Psychic", "Grass"],
		gender: "N",
		baseStats: {hp: 100, atk: 80, def: 80, spa: 80, spd: 80, spe: 80},
		abilities: {0: "Unnerve"},
		heightm: 1.1,
		weightkg: 7.7,
		color: "White",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Calyrex-Ice", "Calyrex-Shadow"],
		formeOrder: ["Calyrex", "Calyrex-Ice", "Calyrex-Shadow"],
	},
	calyrexice: {
		num: 898,
		name: "Calyrex-Ice",
		baseSpecies: "Calyrex",
		forme: "Ice",
		types: ["Psychic", "Ice"],
		gender: "N",
		baseStats: {hp: 100, atk: 165, def: 150, spa: 85, spd: 130, spe: 50},
		abilities: {0: "As One"},
		heightm: 2.4,
		weightkg: 809.1,
		color: "White",
		eggGroups: ["Undiscovered"],
		changesFrom: "Calyrex",
	},
	calyrexshadow: {
		num: 898,
		name: "Calyrex-Shadow",
		baseSpecies: "Calyrex",
		forme: "Shadow",
		types: ["Psychic", "Ghost"],
		gender: "N",
		baseStats: {hp: 100, atk: 85, def: 80, spa: 165, spd: 100, spe: 150},
		abilities: {0: "As One"},
		heightm: 2.4,
		weightkg: 53.6,
		color: "Black",
		eggGroups: ["Undiscovered"],
		changesFrom: "Calyrex",
	},
};
