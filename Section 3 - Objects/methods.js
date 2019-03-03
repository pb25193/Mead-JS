let restaurant = {
    name: 'kimling',
    capacity: 50,
    guestCount: 0,
    checkAvailability: function(partySize){
        return (this.capacity > this.guestCount + partySize);
    },
    seatParty: function(partySize){
        if(this.checkAvailability(partySize)){
            this.guestCount += partySize; 
        } else {
            console.log('guest overflow');
        }
    },
    removeParty: function(partySize){
        if(partySize<this.guestCount){
            this.guestCount -= partySize;
        } else {
            console.log('guest underflow');
        }
    }
};

// let checkAvailability = function(restaurant){
//     return (restaurant.capacity > restaurant.guestCount + partySize);
// };
restaurant.seatParty(49);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(12);
console.log(restaurant.checkAvailability(4));
