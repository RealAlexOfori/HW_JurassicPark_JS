const Park = function(name, ticketPrice){
this.name = name
this.ticketPrice = ticketPrice
this.collectionOfDinosaurs = []
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);

}

Park.prototype.removeDinosaur = function(dinosaur) {
    this.collectionOfDinosaurs.pop(dinosaur);

}


module.exports = Park;