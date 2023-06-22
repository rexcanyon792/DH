export const Conditions: {[k: string]: ConditionData} = {
	brn: {
		name: 'brn',
		effectType: 'Status',
		statusSlots: 1,
		stackCondition: 'brnheavy',
		onStart(target, source, sourceEffect) {
			if (target.hasType('Fire')) {
				this.add('-immune', target);
				target.clearStatus('brn');
				return false;
			}
			if (sourceEffect && sourceEffect.id === 'flameorb') {
				this.add('-status', target, 'brn', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'brn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'brn');
			}
		},
		// Damage reduction is handled directly in the sim/battle.js damage function
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
	},
	brnheavy: {
		name: 'brnheavy',
		effectType: 'Status',
		start: "[POKEMON] has been heavily burned!",
		alreadyStarted: "[POKEMON] is already heavily burned!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		statusSlots: 2,
		onStart(target, source, sourceEffect) {
			if (target.hasType('Fire')) {
				this.add('-immune', target);
				target.clearStatus('brn');
				return false;
			}
			this.effectData.stage = 0;
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'brnheavy', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'brnheavy');
			}
		},
		onSwitchIn() {
			this.effectData.stage = 0;
		},
		onResidualOrder: 10,
		onResidual(pokemon) {
			if (this.effectData.stage < 15) {
				this.effectData.stage++;
			}
			this.damage(this.clampIntRange(pokemon.baseMaxhp / 8, 1) * this.effectData.stage);
		},
	},
	par: {
		name: 'par',
		effectType: 'Status',
		statusSlots: 1,
		stackCondition: 'shk',
		onStart(target, source, sourceEffect) {
			if (target.hasType('Electric')) {
				this.add('-immune', target);
				target.clearStatus('par');
				return false;
			}
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'par', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'par');
			}
		},
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility(['quickfeet', 'gale'])) {
				spe = Math.floor(spe * (1/4));
			}
			return spe;
		},
	},
	shk: {
		name: 'shk',
		effectType: 'Status',
		statusSlots: 2,
		start: "[POKEMON] has been shocked!",
		alreadyStarted: "[POKEMON] is already shocked!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		onStart(target, source, sourceEffect) {
			if (target.hasType('Electric')) {
				this.add('-immune', target);
				target.clearStatus('shk');
				return false;
			}
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'shk', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'shk');
			}
		},
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility(['quickfeet', 'gale'])) {
				spe = Math.floor(spe * (1/4));
			}
			return spe;
		},
		onAccuracy(accuracy, target, source, move) {
			return true;
		},
	},
	dark: {
		name: 'dark',
		effectType: 'Status',
		statusSlots: 1,
		start: "[POKEMON] has been blinded!",
		alreadyStarted: "[POKEMON] is already blinded!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'dark', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'dark');
			}
		},
		onModifyAtk(atk, pokemon) {
			if (!pokemon.hasAbility('mindseye') && pokemon.moveThisTurn !== 'blowfromcalamity')
				return Math.floor(this.finalModify(atk) * (1/2));;
		},
	},
	fear: {
		name: 'fear',
		effectType: 'Status',
		statusSlots: 1,
		start: "[POKEMON] has become scared!",
		alreadyStarted: "[POKEMON] is already scared!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'fear', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'fear');
			}
		},
		onModifySpA(atk, pokemon) {
			if (!pokemon.hasAbility('pride'))
				return Math.floor(this.finalModify(atk) * (1/2));;
		},
	},
	stp: {
		name: 'stp',
		effectType: 'Status',
		statusSlots: 2,
		start: "[POKEMON] has been stopped!",
		alreadyStarted: "[POKEMON] is already stopped!",
		end: "[POKEMON] can move again!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		cant: "[POKEMON] is stopped!",
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'stp', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else if (sourceEffect && sourceEffect.effectType === 'Move') {
				this.add('-status', target, 'stp', '[from] move: ' + sourceEffect.name);
			} else {
				this.add('-status', target, 'stp');
			}
			// 1-3 turns
			this.effectData.startTime = this.random(2, 5);
			this.effectData.time = this.effectData.startTime;
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (pokemon.hasAbility(['earlybird', 'vigorous'])) {
				this.statusData.time--;
			}
			this.statusData.time--;
			if (this.statusData.time <= 0) {
				pokemon.cureStatus('stp');
				return;
			}
			this.add('cant', pokemon, 'stp');
			if (move.sleepUsable) {
				return;
			}
			return false;
		},
	},
	frz: {
		name: 'frz',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (move.flags['defrost']) return;
			if (this.randomChance(1, 5)) {
				pokemon.cureStatus('frz');
				return;
			}
			this.add('cant', pokemon, 'frz');
			return false;
		},
		onModifyMove(move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'frz', '[from] move: ' + move);
				pokemon.clearStatus();
			}
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.thawsTarget) {
				target.cureStatus('frz');
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire' && move.category !== 'Status') {
				target.cureStatus('frz');
			}
		},
	},
	psn: {
		name: 'psn',
		effectType: 'Status',
		statusSlots: 1,
		stackCondition: 'tox',
		onStart(target, source, sourceEffect) {
			if (target.hasType(['Poison', 'Steel'])) {
				this.add('-immune', target);
				target.clearStatus('psn');
				return false;
			}
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'psn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'psn');
			}
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
	},
	tox: {
		name: 'tox',
		effectType: 'Status',
		statusSlots: 2,
		start: "[POKEMON] has been heavily poisoned!",
		alreadyStarted: "[POKEMON] is already heavily poisoned!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		onStart(target, source, sourceEffect) {
			if (target.hasType(['Poison', 'Steel'])) {
				this.add('-immune', target);
				target.clearStatus('tox');
				return false;
			}
			this.effectData.stage = 0;
			if (sourceEffect && sourceEffect.id === 'toxicorb') {
				this.add('-status', target, 'tox', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'tox', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'tox');
			}
		},
		onSwitchIn() {
			this.effectData.stage = 0;
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			if (this.effectData.stage < 15) {
				this.effectData.stage++;
			}
			this.damage(this.clampIntRange(pokemon.baseMaxhp / 8, 1) * this.effectData.stage);
		},
	},
	weak: {
		name: 'weak',
		effectType: 'Status',
		statusSlots: 1,
		start: "[POKEMON] has been weakened!",
		alreadyStarted: "[POKEMON] is already weakened!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		stackCondition: 'weakheavy',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'weak', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'weak');
			}
		},
		onTryHealPriority: 10,
		onSourceTryHeal(relayVar: number, target: Pokemon, source: Pokemon, effect: Effect) {
			if (effect.id !== "breather")
				return false;
		}
	},
	weakheavy: {
		name: 'weakheavy',
		effectType: 'Status',
		statusSlots: 2,
		start: "[POKEMON] has been heavily weakened!",
		alreadyStarted: "[POKEMON] is already heavily weakened!",
		endFromItem: "[POKEMON]'s [ITEM] healed its status!",
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'weakheavy', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'weakheavy');
			}
		},
		onTryHealPriority: 10,
		onSourceTryHeal(relayVar: number, target: Pokemon, source: Pokemon, effect: Effect) {
			if (effect.id !== "breather")
				return false;
		},
		onDeductPP(target, source) {
			if (!target.status['weakheavy']) return;
			return 1;
		},
	},
	
	//volatiles
	stancebreak: {
		name: 'stancebreak',
		start: "[POKEMON]'s stance broke!",
		end: "[POKEMON] regained its stance!",
		duration: 2,
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'stancebreak');
		},
		onAccuracy(accuracy, target, source, move) {
			return true;
		},
		onEnd(target) {
			this.add('-end', target, 'stancebreak');
		},
	},
	confusion: {
		inherit: true,
		cant: "[POKEMON] is too confused to move!",
		onBeforeMovePriority: 3,
		onBeforeMove(pokemon) {
			pokemon.volatiles['confusion'].time--;
			if (!pokemon.volatiles['confusion'].time) {
				pokemon.removeVolatile('confusion');
				return;
			}
			if (this.randomChance(1, 2)) {
				this.add('-activate', pokemon, 'confusion');
				return false;
			}
			/*
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 40);
			if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
			const activeMove = {id: this.toID('confused'), effectType: 'Move', type: '???'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			return false;*/
		},
	},

	// weather is implemented here since it's so important to the game

	//TOUHOU WEATHER
	calm: {
		name: "Calm",
		effectType: "Weather",
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem(['almightygodstone', 'silentgodstone'])) {
				return 8;
			}
			return 5;
		},
		onModifySecondaries(secondaries) {
			return secondaries.filter(effect => !!effect.self);
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Calm', '[from] ability: ' + effect.name, '[of] ' + source);
				this.add('-message', `The weather became Calm!`);
			} else {
				this.add('-weather', 'Calm');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Calm', '[upkeep]');
			this.add('-message', `The calmness continues.`);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
			this.add('-message', `The weather became clear.`);
		},
	},
	aurora: {
		name: "Aurora",
		effectType: "Weather",
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem(['almightygodstone', 'halogodstone'])) {
				return 8;
			}
			return 5;
		},
		onModifyDamage(relayVar, source, target, move) {
			if (move.type === "Light") {
				this.chainModify(2);
			} else if (move.type === "Dark") {
				this.chainModify(0.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Aurora', '[from] ability: ' + effect.name, '[of] ' + source);
				this.add('-message', `An aurora filled the sky!`);
			} else {
				this.add('-weather', 'Aurora');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Aurora', '[upkeep]');
			this.eachEvent('Weather');
			this.add('-message', `The aurora continues.`);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
			this.add('-message', `The weather became clear.`);
		},
	},
	heavyfog: {
		name: "Heavy Fog",
		effectType: "Weather",
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem(['almightygodstone', 'twilightgodstone'])) {
				return 8;
			}
			return 5;
		},
		onModifyDamage(relayVar, source, target, move) {
			if (move.type === "Dark") {
				this.chainModify(2);
			} else if (move.type === "Light") {
				this.chainModify(0.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Heavy Fog', '[from] ability: ' + effect.name, '[of] ' + source);
				this.add('-message', `A heavy fog descended!`);
			} else {
				this.add('-weather', 'Heavy Fog');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Heavy Fog', '[upkeep]');
			this.eachEvent('Weather');
			this.add('-message', `The heavy fog continues.`);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
			this.add('-message', `The weather became clear.`);
		},
	},
	duststorm: {
		name: 'Dust Storm',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem(['almightygodstone', 'sandgodstone'])) {
				return 8;
			}
			return 5;
		},
		// This should be applied directly to the stat before any of the other modifiers are chained
		// So we give it increased priority.
		
		//HELP -- TPDP wiki does not list this as being a feature of dust storm, however it does say it's identical to sandstorm
		/*onModifySpDPriority: 10,
		onModifySpD(spd, pokemon) {
			if (pokemon.hasType('Rock') && this.field.isWeather('sandstorm')) {
				return this.modify(spd, 1.5);
			}
		},*/
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'Dust Storm', '[from] ability: ' + effect.name, '[of] ' + source);
				this.add('-message', `A dust storm kicked up!`);
			} else {
				this.add('-weather', 'Dust Storm');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Dust Storm', '[upkeep]');
			this.add('-message', `The dust storm continues.`);
			if (this.field.isWeather('Dust Storm')) this.eachEvent('Weather');
		},
		onWeather(target) {
			if (!target.hasType(['Steel', 'Earth']))
				this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
			this.add('-message', `The weather became clear.`);
		},
	},
	sunshower: {
		name: 'Sunshower',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem(['almightygodstone', 'sereingodstone'])) {
				return 8;
			}
			return 5;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'Sunshower', '[from] ability: ' + effect.name, '[of] ' + source);
				this.add('-message', `A sunshower began to fall!`);
			} else {
				this.add('-weather', 'Sunshower');
			}
		},
		/*onModifySpDPriority: 100,
		onModifySpD(relayVar, target, source, move) {
			return source.getStat('def', true);
		},
		onModifyDefPriority: 100,
		onModifyDef(relayVar, target, source, move) {
			return source.getStat('spd', true);
		},*/
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Sunshower', '[upkeep]');
			this.add('-message', `The sunshower continues.`);
			if (this.field.isWeather('Sunshower')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
			this.add('-message', `The weather became clear.`);
		},
	},

	//TOUHOU TERRAIN
	seiryu: {
		duration: 5,
		durationCallback(source, effect) {
			if (source.hasAbility('timegazer')) return 8;
			return 5;
		},
		onEffectiveness(typeMod, target, type, move) {
			return 0;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-fieldstart', 'terrain: Seiryu', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-fieldstart', 'terrain: Seiryu');
			}
		},
		onFieldResidualOrder: 27,
		onFieldResidualSubOrder: 7,
		onFieldEnd() {
			this.add('-fieldend', 'terrain: Seiryu');
		},
	},
	suzaku: {
		duration: 5,
		durationCallback(source, effect) {
			if (source.hasAbility('timegazer')) return 8;
			return 5;
		},
		onTryHealPriority: 15,
		onTryHeal(this:Battle, relayVar:number, target:Pokemon, source:Pokemon, effect:Effect) {
			if (target.hasAbility('southernexpanse')) return;
			target.damage(relayVar);
			return false;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-fieldstart', 'terrain: Suzaku', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-fieldstart', 'terrain: Suzaku');
			}
		},
		onFieldResidualOrder: 27,
		onFieldResidualSubOrder: 7,
		onFieldEnd() {
			this.add('-fieldend', 'terrain: Suzaku');
		},
	},
	byakko: {
		duration: 5,
		durationCallback(source, effect) {
			if (source.hasAbility('timegazer')) return 8;
			return 5;
		},
		onModifyMove(move, pokemon, target) {
			if (!move.ohko)
				move.accuracy = true;
			move.critRatio = 0;
			move.breaksProtect = true;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-fieldstart', 'terrain: Byakko', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-fieldstart', 'terrain: Byakko');
			}
		},
		onFieldResidualOrder: 27,
		onFieldResidualSubOrder: 7,
		onFieldEnd() {
			this.add('-fieldend', 'terrain: Byakko');
		},
	},
	genbu: {
		duration: 5,
		durationCallback(source, effect) {
			if (source.hasAbility('timegazer')) return 8;
			return 5;
		},
		//Trick Room is implemented in pokemon.ts:Pokemon.getActionSpeed()
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-fieldstart', 'terrain: Genbu', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-fieldstart', 'terrain: Genbu');
			}
		},
		onFieldResidualOrder: 27,
		onFieldResidualSubOrder: 7,
		onFieldEnd() {
			this.add('-fieldend', 'terrain: Genbu');
		},
	},
	kohryu: {
		duration: 5,
		durationCallback(source, effect) {
			if (source.hasAbility('timegazer')) return 8;
			return 5;
		},
		onModifyMove(move, pokemon, target) {
			move.ignoreAbility = true;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-fieldstart', 'terrain: Kohryu', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-fieldstart', 'terrain: Kohryu');
			}
		},
		onFieldResidualOrder: 27,
		onFieldResidualSubOrder: 7,
		onFieldEnd() {
			this.add('-fieldend', 'terrain: Kohryu');
		},
	},
};
