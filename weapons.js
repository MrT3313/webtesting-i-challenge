import { declareModuleExports } from "@babel/types";

const weapons = {
    woodenStick: {
        name: 'woodenStick',
        durability: 39,
        enhancement: 20
    },
    wetNoodle: {
        name: 'wetNoodle',
        durability: 50,
        enhancement: 20
    },
    spikedRebar: {
        name: 'spikedRebar',
        durability: 100,
        enhancement: 20
    }
}

module.exports = weapons
