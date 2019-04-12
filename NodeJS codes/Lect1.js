module.exports = {

    getCust: function() {


        placeAnOrder(1);
        placeAnOrder(2);
        placeAnOrder(3);
        placeAnOrder(4);
        placeAnOrder(5);
        placeAnOrder(6);
    }
};

function placeAnOrder(OrN){

    console.log("Order No: ", OrN);

    cookNdeliver(function(){
        console.log("Delivery No: ", OrN);
    });
}

function cookNdeliver(callfunc) {
    setTimeout(callfunc, 5000);
}