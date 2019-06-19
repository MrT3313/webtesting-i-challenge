const enhancer = require('./enhancer.js');

// THIS IS A TESTING TEST TO TEST MY TESTING ABILITIES
describe('enhancer.js', function() {
    it('should add two numbers', () => {
        const expected = 5
        const actual = enhancer.add(3,2)

        expect(actual).toBe(expected)
    })
})