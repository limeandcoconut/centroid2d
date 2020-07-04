/* eslint-env mocha, es6 */
/* eslint-disable no-unused-expressions */
const findCentroid = require('./index.js')
const expect = require('chai').expect

let polygon = [
  [0, 0],
  [5, 0],
  [5, 5],
  [0, 5],
]

let badPolygon = [
  ['a', {}],
  [1, []],
  [null, 0],
]

describe('Centroid 2D', function() {

  describe('On the subject of finding a centroid, it ', function() {

    it('should result in an Array.', function() {
      let centroid = findCentroid(polygon)
      expect(centroid).to.be.an.instanceof(Array)
    })

    it('should result in the proper coordinates', function() {
      let centroid = findCentroid(polygon)
      expect(centroid[0]).to.equal(2.5)
      expect(centroid[1]).to.equal(2.5)
    })

    it('should not throw when passed bad arguments', function() {
      expect(() => {
        findCentroid(badPolygon)
      }).not.to.throw(Error)
    })

  })

})
