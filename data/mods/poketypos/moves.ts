export const Moves: {[moveid: string]: MoveData} = {
	chillingwater: {
		num: 1,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Chilling Water",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	smokeshuriken: {
		num: 594,
		accuracy: 100,
		basePower: 15,
		category: "Special",
		name: "Smoke Shuriken",
		pp: 20,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
