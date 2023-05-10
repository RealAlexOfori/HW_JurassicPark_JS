const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5
  let park;

  beforeEach(function () {
    park = new Park('J-Park', 5);
    dinosaur1 = new Dinosaur('Alfie', 'herbivore', 10);
    dinosaur2 = new Dinosaur('Alfie', 'herbivore', 15);
    dinosaur3 = new Dinosaur('Alfie', 'herbivore', 8);

    dinosaur4 = new Dinosaur('Alex', 'omnivore', 20);
    dinosaur5 = new Dinosaur('Alex', 'omnivore', 25)

  })

  it('should have a name',function ()
  {
    const actual = park.name;
    assert.strictEqual(actual, 'J-Park');
  });

  it('should have a ticket price',function ()
  {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs',function ()
  {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection',function ()
  {
    park.addDinosaur(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });
  it('should be able to remove a dinosaur from its collection',function ()
  {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  xit('should be able to find the dinosaur that attracts the most visitors',function ()
  {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    
    const actual = park.findDinosaurWithMostVisitors();
    assert.deepStrictEqual(actual, [dinosaur5]);
  });


  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
