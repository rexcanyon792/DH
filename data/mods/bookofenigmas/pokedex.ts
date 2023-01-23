export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	//Paradoxes here

	//https://www.smogon.com/forums/threads/book-of-enigmas-slate-3-same-but-different-maybe.3711490/post-9433439
	flyingspecter: { 
		num: -1,
		name: "Flying Specter",
		types: ["Ghost", "Flying"],
		gender: "N",
		baseStats: {hp: 85, atk: 101, def: 123, spa: 101, spd: 83, spe: 97},
		abilities: {0: "Cleansing Fire"},
		heightm: 0.5,
		weightkg: 161,
		color: "Purple",
		eggGroups: ["Human-Like"],
	},
	gildedfleece: {
		num: -2,
		name: "Gilded Fleece",
		types: ["Electric", "Fairy"],
		gender: "N",
		baseStats: {hp: 109, atk: 135, def: 117, spa: 107, spd: 79, spe: 43},
		abilities: {0: "Cleansing Fire"},
		heightm: 1.4,
		weightkg: 61.5,
		color: "Yellow",
		eggGroups: ["Monster", "Field"],
	},
	weepingvine: {
		num: -3,
		name: "Weeping Vine",
		types: ["Dark", "Poison"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 80, spd: 110, spe: 80},
		abilities: {0: "Corrupting Storm"},
		heightm: 1.7,
		weightkg: 15.5,
		color: "Green",
		eggGroups: ["Grass"],
	},
	ragingtempest: {
		num: -4,
		name: "Raging Tempest",
		types: ["Electric", "Dark"],
		gender: "N",
		baseStats: {hp: 92, atk: 84, def: 80, spa: 120, spd: 118, spe: 96},
		abilities: {0: "Corrupting Storm"},
		heightm: 6.5,
		weightkg: 305,
		color: "Blue",
		eggGroups: ["Water 2", "Dragon"],
	},

	//https://www.smogon.com/forums/threads/book-of-enigmas-slate-3-same-but-different-maybe.3711490/post-9446927

	pistilwhip: {
		num: -5,
		name: "Pistil Whip",
		types: ["Grass", "Fighting"],
		gender: "N",
		baseStats: {hp: 73, atk: 123, def: 111, spa: 81, spd: 55, spe: 127},
		abilities: {0: "Cleansing Fire"},
		heightm: 1,
		weightkg: 13,
		color: "Green",
		eggGroups: ["Monster", "Grass"],
	},
	terracottaidol: {
		num: -6,
		name: "Terracotta Idol",
		types: ["Ground", "Fighting"],
		gender: "N",
		baseStats: {hp: 74, atk: 90, def: 126, spa: 108, spd: 72, spe: 100},
		abilities: {0: "Corrupting Storm"},
		heightm: 1.5,
		weightkg: 108,
		color: "Black",
		eggGroups: ["Mineral"],
	},
	aureatefin: {
		num: -7,
		name: "Aureate Fin",
		types: ["Fighting", "Water"],
		gender: "N",
		baseStats: {hp: 61, atk: 111, def: 141, spa: 63, spd: 53, spe: 141},
		abilities: {0: "Cleansing Fire"},
		heightm: 0.9,
		weightkg: 10,
		color: "Red",
		eggGroups: ["Water 2", "Dragon"],
	},
	spindleclaw: {
		num: -8,
		name: "Spindle Claw",
		types: ["Water", "Bug"],
		gender: "N",
		baseStats: {hp: 66, atk: 76, def: 138, spa: 124, spd: 96, spe: 70},
		abilities: {0: "Corrupting Storm"},
		heightm: 1.3,
		weightkg: 60,
		color: "Red",
		eggGroups: ["Water 3"],
	},
	

	// canon pokemon start here

	gallade: {
		inherit: true,
		abilities: {0: "Steadfast", 1: "Sharpness", H: "Justified"},
	},

	primeape: {
		num: 57,
		name: "Primeape",
		types: ["Fighting"],
		baseStats: {hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95},
		abilities: {0: "Vital Spirit", 1: "Anger Point", H: "Defiant"},
		heightm: 1,
		weightkg: 32,
		color: "Brown",
		prevo: "Mankey",
		evoLevel: 28,
		evos: ["Annihilape"],
		eggGroups: ["Field"],
	},
	growlithe: {
		num: 58,
		name: "Growlithe",
		types: ["Fire"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60},
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
		heightm: 0.7,
		weightkg: 19,
		color: "Brown",
		evos: ["Arcanine"],
		eggGroups: ["Field"],
		otherFormes: ["Growlithe-Hisui"],
		formeOrder: ["Growlithe", "Growlithe-Hisui"],
	},
	growlithehisui: {
		num: 58,
		name: "Growlithe-Hisui",
		baseSpecies: "Growlithe",
		forme: "Hisui",
		types: ["Fire", "Rock"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 60, atk: 75, def: 45, spa: 65, spd: 50, spe: 55},
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Rock Head"},
		heightm: 0.8,
		weightkg: 22.7,
		color: "Brown",
		evos: ["Arcanine-Hisui"],
		eggGroups: ["Field"],
	},
	arcanine: {
		num: 59,
		name: "Arcanine",
		types: ["Fire"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95},
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
		heightm: 1.9,
		weightkg: 155,
		color: "Brown",
		prevo: "Growlithe",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
		otherFormes: ["Arcanine-Hisui"],
		formeOrder: ["Arcanine", "Arcanine-Hisui"],
	},
	arcaninehisui: {
		num: 59,
		name: "Arcanine-Hisui",
		baseSpecies: "Arcanine",
		forme: "Hisui",
		types: ["Fire", "Rock"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 95, atk: 115, def: 80, spa: 95, spd: 80, spe: 90},
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Rock Head"},
		heightm: 2,
		weightkg: 168,
		color: "Brown",
		prevo: "Growlithe-Hisui",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	voltorb: {
		num: 100,
		name: "Voltorb",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100},
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
		heightm: 0.5,
		weightkg: 10.4,
		color: "Red",
		evos: ["Electrode"],
		eggGroups: ["Mineral"],
		otherFormes: ["Voltorb-Hisui"],
		formeOrder: ["Voltorb", "Voltorb-Hisui"],
	},
	voltorbhisui: {
		num: 100,
		name: "Voltorb-Hisui",
		baseSpecies: "Voltorb",
		forme: "Hisui",
		types: ["Electric", "Grass"],
		gender: "N",
		baseStats: {hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100},
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
		heightm: 0.5,
		weightkg: 13,
		color: "Red",
		evos: ["Electrode-Hisui"],
		eggGroups: ["Mineral"],
	},
	electrode: {
		num: 101,
		name: "Electrode",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150},
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
		heightm: 1.2,
		weightkg: 66.6,
		color: "Red",
		prevo: "Voltorb",
		evoLevel: 30,
		eggGroups: ["Mineral"],
		otherFormes: ["Electrode-Hisui"],
		formeOrder: ["Electrode", "Electrode-Hisui"],
	},
	electrodehisui: {
		num: 101,
		name: "Electrode-Hisui",
		baseSpecies: "Electrode",
		forme: "Hisui",
		types: ["Electric", "Grass"],
		gender: "N",
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150},
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
		heightm: 1.2,
		weightkg: 71,
		color: "Red",
		prevo: "Voltorb-Hisui",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Mineral"],
	},
	tauros: {
		num: 128,
		name: "Tauros",
		types: ["Normal"],
		gender: "M",
		baseStats: {hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110},
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Sheer Force"},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Brown",
		otherFormes: ["Tauros-Paldea", "Tauros-Paldea-Fire", "Tauros-Paldea-Water"],
		formeOrder: ["Tauros", "Tauros-Paldea", "Tauros-Paldea-Fire", "Tauros-Paldea-Water"],
		eggGroups: ["Field"],
	},
	taurospaldea: {
		num: 128,
		name: "Tauros-Paldea",
		baseSpecies: "Tauros",
		forme: "Paldea",
		types: ["Fighting"],
		gender: "M",
		baseStats: {hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100},
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Cud Chew"},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Black",
		eggGroups: ["Field"],
	},
	taurospaldeafire: {
		num: 128,
		name: "Tauros-Paldea-Fire",
		baseSpecies: "Tauros",
		forme: "Paldea-Fire",
		types: ["Fighting", "Fire"],
		gender: "M",
		baseStats: {hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100},
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Cud Chew"},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Black",
		eggGroups: ["Field"],
	},
	taurospaldeawater: {
		num: 128,
		name: "Tauros-Paldea-Water",
		baseSpecies: "Tauros",
		forme: "Paldea-Water",
		types: ["Fighting", "Water"],
		gender: "M",
		baseStats: {hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100},
		abilities: {0: "Intimidate", 1: "Anger Point", H: "Cud Chew"},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Black",
		eggGroups: ["Field"],
	},
	wooper: {
		num: 194,
		name: "Wooper",
		types: ["Water", "Ground"],
		baseStats: {hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15},
		abilities: {0: "Damp", 1: "Water Absorb", H: "Unaware"},
		heightm: 0.4,
		weightkg: 8.5,
		color: "Blue",
		evos: ["Quagsire"],
		eggGroups: ["Water 1", "Field"],
		otherFormes: ["Wooper-Paldea"],
		formeOrder: ["Wooper", "Wooper-Paldea"],
	},
	wooperpaldea: {
		num: 194,
		name: "Wooper-Paldea",
		baseSpecies: "Wooper",
		forme: "Paldea",
		types: ["Poison", "Ground"],
		baseStats: {hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15},
		abilities: {0: "Poison Point", 1: "Water Absorb", H: "Unaware"},
		heightm: 0.4,
		weightkg: 8.5,
		color: "Brown",
		evos: ["Clodsire"],
		eggGroups: ["Water 1", "Field"],
	},
	quagsire: {
		num: 195,
		name: "Quagsire",
		types: ["Water", "Ground"],
		baseStats: {hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35},
		abilities: {0: "Damp", 1: "Water Absorb", H: "Unaware"},
		heightm: 1.4,
		weightkg: 75,
		color: "Blue",
		prevo: "Wooper",
		evoLevel: 20,
		eggGroups: ["Water 1", "Field"],
	},
	clodsire: {
		num: 1009,
		name: "Clodsire",
		types: ["Poison", "Ground"],
		baseStats: {hp: 130, atk: 75, def: 60, spa: 45, spd: 100, spe: 20},
		abilities: {0: "Poison Point", 1: "Water Absorb", H: "Unaware"},
		heightm: 1.8,
		weightkg: 223,
		color: "Brown",
		prevo: "Wooper-Paldea",
		evoLevel: 20,
		eggGroups: ["Water 1", "Field"],
	},
	quilava: {
		num: 156,
		name: "Quilava",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80},
		abilities: {0: "Blaze", H: "Flash Fire"},
		heightm: 0.9,
		weightkg: 19,
		color: "Yellow",
		prevo: "Cyndaquil",
		evoLevel: 14,
		evos: ["Typhlosion", "Typhlosion-Hisui"],
		eggGroups: ["Field"],
	},
	typhlosion: {
		num: 157,
		name: "Typhlosion",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100},
		abilities: {0: "Blaze", H: "Flash Fire"},
		heightm: 1.7,
		weightkg: 79.5,
		color: "Yellow",
		prevo: "Quilava",
		evoLevel: 36,
		eggGroups: ["Field"],
		otherFormes: ["Typhlosion-Hisui"],
		formeOrder: ["Typhlosion", "Typhlosion-Hisui"],
	},
	typhlosionhisui: {
		num: 157,
		name: "Typhlosion-Hisui",
		baseSpecies: "Typhlosion",
		forme: "Hisui",
		types: ["Fire", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 73, atk: 84, def: 78, spa: 119, spd: 85, spe: 95},
		abilities: {0: "Blaze", H: "Frisk"},
		heightm: 1.6,
		weightkg: 69.8,
		color: "Yellow",
		prevo: "Quilava",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	qwilfish: {
		num: 211,
		name: "Qwilfish",
		types: ["Water", "Poison"],
		baseStats: {hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85},
		abilities: {0: "Poison Point", 1: "Swift Swim", H: "Intimidate"},
		heightm: 0.5,
		weightkg: 3.9,
		color: "Gray",
		eggGroups: ["Water 2"],
		otherFormes: ["Qwilfish-Hisui"],
		formeOrder: ["Qwilfish", "Qwilfish-Hisui"],
	},
	qwilfishhisui: {
		num: 211,
		name: "Qwilfish-Hisui",
		baseSpecies: "Qwilfish",
		forme: "Hisui",
		types: ["Dark", "Poison"],
		baseStats: {hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85},
		abilities: {0: "Poison Point", 1: "Swift Swim", H: "Intimidate"},
		heightm: 0.5,
		weightkg: 3.9,
		color: "Black",
		evos: ["Overqwil"],
		eggGroups: ["Water 2"],
	},
	sneasel: {
		num: 215,
		name: "Sneasel",
		types: ["Dark", "Ice"],
		baseStats: {hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115},
		abilities: {0: "Inner Focus", 1: "Keen Eye", H: "Pickpocket"},
		heightm: 0.9,
		weightkg: 28,
		color: "Black",
		evos: ["Weavile"],
		eggGroups: ["Field"],
		otherFormes: ["Sneasel-Hisui"],
		formeOrder: ["Sneasel", "Sneasel-Hisui"],
	},
	sneaselhisui: {
		num: 215,
		name: "Sneasel-Hisui",
		baseSpecies: "Sneasel",
		forme: "Hisui",
		types: ["Fighting", "Poison"],
		baseStats: {hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115},
		abilities: {0: "Inner Focus", 1: "Keen Eye", H: "Pickpocket"},
		heightm: 0.9,
		weightkg: 27,
		color: "Gray",
		evos: ["Sneasler"],
		eggGroups: ["Field"],
	},
	sneasler: {
		num: 903,
		name: "Sneasler",
		types: ["Fighting", "Poison"],
		baseStats: {hp: 80, atk: 130, def: 60, spa: 40, spd: 80, spe: 120},
		abilities: {0: "Pressure", 1: "Unburden", H: "Poison Touch"},
		heightm: 1.3,
		weightkg: 43,
		color: "Purple",
		prevo: "Sneasel-Hisui",
		evoType: "useItem",
		evoItem: "Razor Claw",
		evoCondition: "during the day",
		eggGroups: ["Field"],
	},
	overqwil: {
		num: 904,
		name: "Overqwil",
		types: ["Dark", "Poison"],
		baseStats: {hp: 85, atk: 115, def: 95, spa: 65, spd: 65, spe: 85},
		abilities: {0: "Poison Point", 1: "Swift Swim", H: "Intimidate"},
		heightm: 0.5,
		weightkg: 3.9,
		color: "Gray",
		prevo: "Qwilfish-Hisui",
		evoType: "other",
		evoCondition: "Use Strong style Barb Barrage 20 times",
		eggGroups: ["Water 2"],
	},
	annihilape: {
		num: 1010,
		name: "Annihilape",
		types: ["Fighting", "Ghost"],
		baseStats: {hp: 110, atk: 115, def: 80, spa: 50, spd: 90, spe: 90},
		abilities: {0: "Vital Spirit", 1: "Inner Focus", H: "Defiant"},
		heightm: 1.2,
		weightkg: 56,
		color: "Gray",
		prevo: "Primeape",
		evoType: "other",
		evoCondition: "Use Rage Fist 20 times and level-up",
		eggGroups: ["Field"],
	},
	dudunsparce: {
		num: 917,
		name: "Dudunsparce",
		baseForme: "Two-Segment",
		types: ["Normal"],
		baseStats: {hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55},
		abilities: {0: "Serene Grace", 1: "Run Away", H: "Rattled"},
		heightm: 3.6,
		weightkg: 39.2,
		color: "Yellow",
		prevo: "Dunsparce",
		evoType: "levelMove",
		evoMove: "Hyper Drill",
		otherFormes: ["Dudunsparce-Three-Segment"],
		formeOrder: ["Dudunsparce", "Dudunsparce-Three-Segment"],
		eggGroups: ["Field"],
	},
	dudunsparcethreesegment: {
		num: 917,
		name: "Dudunsparce-Three-Segment",
		baseSpecies: "Dudunsparce",
		forme: "Three-Segment",
		types: ["Normal"],
		baseStats: {hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55},
		abilities: {0: "Serene Grace", 1: "Run Away", H: "Rattled"},
		heightm: 4.5,
		weightkg: 47.4,
		color: "Yellow",
		prevo: "Dunsparce",
		evoType: "levelMove",
		evoMove: "Hyper Drill",
		eggGroups: ["Field"],
	},
	girafarig: {
		num: 203,
		name: "Girafarig",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85},
		abilities: {0: "Inner Focus", 1: "Early Bird", H: "Sap Sipper"},
		heightm: 1.5,
		weightkg: 41.5,
		color: "Yellow",
		evos: ["Farigiraf"],
		eggGroups: ["Field"],
	},
	farigiraf: {
		num: 928,
		name: "Farigiraf",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 120, atk: 90, def: 70, spa: 110, spd: 70, spe: 60},
		abilities: {0: "Cud Chew", 1: "Armor Tail", H: "Sap Sipper"},
		heightm: 3.2,
		weightkg: 160,
		color: "Brown",
		prevo: "Girafarig",
		evoType: "levelMove",
		evoMove: "Twin Beam",
	},
	stantler: {
		num: 234,
		name: "Stantler",
		types: ["Normal"],
		baseStats: {hp: 73, atk: 95, def: 62, spa: 85, spd: 65, spe: 85},
		abilities: {0: "Intimidate", 1: "Frisk", H: "Sap Sipper"},
		heightm: 1.4,
		weightkg: 71.2,
		color: "Brown",
		evos: ["Wyrdeer"],
		eggGroups: ["Field"],
	},
	wyrdeer: {
		num: 899,
		name: "Wyrdeer",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 103, atk: 105, def: 72, spa: 105, spd: 75, spe: 65},
		abilities: {0: "Intimidate", 1: "Frisk", H: "Sap Sipper"},
		heightm: 1.8,
		weightkg: 95.1,
		color: "White",
		prevo: "Stantler",
		evoType: "other",
		evoCondition: "Use Agile style Psyshield Bash 20 times",
		eggGroups: ["Field"],
	},
	scyther: {
		num: 123,
		name: "Scyther",
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105},
		abilities: {0: "Swarm", 1: "Technician", H: "Steadfast"},
		heightm: 1.5,
		weightkg: 56,
		color: "Green",
		evos: ["Scizor", "Kleavor"],
		eggGroups: ["Bug"],
	},
	scizor: {
		num: 212,
		name: "Scizor",
		types: ["Bug", "Steel"],
		baseStats: {hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65},
		abilities: {0: "Swarm", 1: "Technician", H: "Light Metal"},
		heightm: 1.8,
		weightkg: 118,
		color: "Red",
		prevo: "Scyther",
		evoType: "trade",
		evoItem: "Metal Coat",
		eggGroups: ["Bug"],
		formeOrder: ["Scizor"],
	},
	kleavor: {
		num: 900,
		name: "Kleavor",
		types: ["Bug", "Rock"],
		baseStats: {hp: 70, atk: 130, def: 95, spa: 45, spd: 75, spe: 85},
		abilities: {0: "Swarm", 1: "Sheer Force", H: "Sharpness"},
		heightm: 1.8,
		weightkg: 89,
		color: "Brown",
		prevo: "Scyther",
		evoType: "other",
		evoCondition: "Black Augurite",
		eggGroups: ["Bug"],
	},
	ursaring: {
		num: 217,
		name: "Ursaring",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55},
		abilities: {0: "Guts", 1: "Quick Feet", H: "Unnerve"},
		heightm: 1.8,
		weightkg: 125.8,
		color: "Brown",
		prevo: "Teddiursa",
		evoLevel: 30,
		evos: ["Ursaluna"],
		eggGroups: ["Field"],
	},
	ursaluna: {
		num: 901,
		name: "Ursaluna",
		types: ["Ground", "Normal"],
		baseStats: {hp: 130, atk: 140, def: 105, spa: 45, spd: 80, spe: 50},
		abilities: {0: "Guts", 1: "Bulletproof", H: "Unnerve"},
		heightm: 2.4,
		weightkg: 290,
		color: "Brown",
		prevo: "Ursaring",
		evoType: "other",
		evoCondition: "Peat Block when there's a full moon",
		eggGroups: ["Field"],
	},
	toedscool: {
		num: 1006,
		name: "Toedscool",
		types: ["Ground", "Grass"],
		baseStats: {hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70},
		abilities: {0: "Mycelium Might"},
		heightm: 0.9,
		weightkg: 33,
		color: "Yellow",
		evos: ["Toedscruel"],
		eggGroups: ["Field"],
	},
	toedscruel: {
		num: 1007,
		name: "Toedscruel",
		types: ["Ground", "Grass"],
		baseStats: {hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100},
		abilities: {0: "Mycelium Might"},
		heightm: 1.9,
		weightkg: 58,
		color: "Black",
		prevo: "Toedscool",
		evoLevel: 30,
		eggGroups: ["Field"],
	},
	wiglett: {
		num: 929,
		name: "Wiglett",
		types: ["Water"],
		baseStats: {hp: 10, atk: 55, def: 25, spa: 35, spd: 25, spe: 95},
		abilities: {0: "Gooey", 1: "Rattled", H: "Sand Veil"},
		heightm: 1.2,
		weightkg: 1.8,
		color: "White",
		evos: ["Wugtrio"],
		eggGroups: ["Water 3"],
	},
	wugtrio: {
		num: 930,
		name: "Wugtrio",
		types: ["Water"],
		baseStats: {hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120},
		abilities: {0: "Gooey", 1: "Rattled", H: "Sand Veil"},
		heightm: 1.2,
		weightkg: 5.4,
		color: "Red",
		prevo: "Wiglett",
		evoLevel: 26,
		eggGroups: ["Water 3"],
	},
};