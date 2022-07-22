const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
     
    test('shufflearr should equal same length', () => {
        let arr = [1,2,3]
        expect(shuffleArray(arr).length).toEqual(arr.length)
    })

    test('Should have an array', () => {
        let arr = [1,2,3]
        expect(shuffleArray(arr)).toEqual(expect.arrayContaining(arr))
    })
})
