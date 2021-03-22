
const Battle = async(poke1, poke2) => {
    let pokemon1 = {
        name: poke1.name,
        hp: poke1.stats[0].base_stat,
        attacks: await getAttacks(poke1.stats[1].stat.url)
    }
    let pokemon2 = {
        name: poke2.name,
        hp: poke2.stats[0].base_stat,
        attacks: await getAttacks(poke2.stats[1].stat.url)
    }

    while (true) {
        //pokemon 1 attacks pokemon 2
        let rndattack = getRandomInt(pokemon1.attacks.length)
        pokemon2.hp = attack(pokemon1.attacks[rndattack], pokemon2)
        if (pokemon2.hp < 1) {
            //return winner
            console.log(pokemon1.name)
            return poke1
        }
        //pokemon 1 attacks pokemon 2
        rndattack = getRandomInt(pokemon2.attacks.length)
        pokemon1.hp = attack(pokemon2.attacks[rndattack], pokemon1)
        if (pokemon1.hp < 1) {
            //return winner
            console.log(pokemon2)
            return poke2
        }
        
    }
};

const getAttacks = async(url) => {
    const response = await fetch(url);
    let json = await response.json()
    //get moves that decrease healt aka attacks

    let attacks = json.affecting_moves.decrease

    return attacks
}
const attack = (attack, recievingpokemon) => {
    //attacks always have a value of -1 or -2 so you wannt to add up a negative number 
    return recievingpokemon.hp + attack.change
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
export default Battle;
