const enhancer = require('./enhancer.js');

describe('TESTING THE TESTER', function() {
    // THIS IS A TESTING TEST TO TEST MY TESTING ABILITIES
    it('should add two numbers', () => {
        const expected = 5
        const actual = enhancer.add(3,2)

        expect(actual).toBe(expected)
    })
    
})

describe('REPAIR -- restore durability to 100', function() {
    it('passed empty object', () => {
        // ARRANGE
            const emptyObject = {}
        // ACT
            const result = enhancer.repair(emptyObject)
        // ASSERT
            expect(result).toEqual({})
    })

    it('passed weapon', () => {
        // ARRANGE
            const woodenStick = {
                name: 'woodenStick',
                durability: 39,
                enhancement: 20
            }
            const wetNoodle = {
                name: 'wetNoodle',
                durability: 50,
                enhancement: 20
            }
            const spikedRebar = {
                name: 'spikedRebar',
                durability: 100,
                enhancement: 20
            }
        // ACT
            const result = enhancer.repair(woodenStick)
            const result2 = enhancer.repair(wetNoodle)
            const result3 = enhancer.repair(spikedRebar)
        // ASSERT
            expect(result).toEqual(woodenStick)
            expect(result2).toEqual(wetNoodle)
            expect(result3).toEqual(spikedRebar)
    })
})

describe('SUCCESS', function(){
    it('increment ENHANCEMENT by 1 if < 20', () => {
        // ARRANGE
            const rubberDuck = {
                name: 'spikedRebar',
                durability: 100,
                enhancement: 20
            }
        // ACT
            const result = enhancer.succeed(rubberDuck)
        // ASSERT
            expect(result).toEqual(rubberDuck)
    })
})

describe('FAIL', function() {
    it('enhancement <15', () => {
    // ARRANGE
        const rubberDuck = {
            name: 'spikedRebar',
            durability: 100,
            enhancement: 13
        }
        const rubberDuck_2 = {
            name: 'spikedRebar',
            durability: 100,
            enhancement: 18
        }
        const rubberDuck_3 = {
            name: 'spikedRebar',
            durability: 100,
            enhancement: 12
        }
        const rubberDuck_4 = {
            name: 'spikedRebar',
            durability: 100,
            enhancement: 17
        }
    // ACT
        const result = enhancer.fail(rubberDuck)
        const result2 = enhancer.fail(rubberDuck_2)
        const result3 = enhancer.fail(rubberDuck_3)
        const result4 = enhancer.fail(rubberDuck_4)
    // ASSERT
        expect(result).toEqual(rubberDuck)
        expect(result2).toEqual(rubberDuck_2)
        expect(result3).toEqual(rubberDuck_3)
        expect(result4).toEqual(rubberDuck_4)
    })

})






