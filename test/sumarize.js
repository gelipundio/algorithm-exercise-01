const { expect } = require('chai')

describe('Sumarize', function() {
    let solutionFile = {}
    let sumarize = null
    
    it('File should exports a sumarize function', function() {
        solutionFile = require('../solution')
        expect(solutionFile).to.not.be.undefined
        sumarize = solutionFile.sumarize
        expect(sumarize).to.be.a('function')
    })

    const scenarios = [
        { test: [1, 2, 2], result: 5 },
        { test: [2, 2, 2], result: 6 },
        { test: [40, 10, 1], result: 51 },
        { test: [-1, 5, 2], result: 6 },
        { test: [400, 500, 100], result: 1000 },
        { test: [-1345, 1245, 100], result: 0 },
        { test: [], result: 0 },
        { test: null, result: 0 }
    ]
    scenarios.forEach(scenario => it(`Should return ${scenario.result} when the array is ${scenario.test}`, function() {
        const result = sumarize(scenario.test)
        expect(result).to.be.a('number')
        expect(result).to.equal(scenario.result)
    }))
})