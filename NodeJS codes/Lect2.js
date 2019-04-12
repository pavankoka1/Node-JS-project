function User()
{
    this.name = "";
    this.life = 100;
    this.giveLife = function (player) {
        player.life++;
        console.log(this.name + " gave life to " + player.name)
    }
}

var pavan = new User();
var koka = new User();
pavan.name = "pavan";
koka.name = "koka";

pavan.giveLife(koka);
console.log(pavan.life);
console.log(koka.life);

User.prototype.uppercut = function uppercut(player) {
    player.life -= 3;
    console.log(this.name + " takes life from " + player.name)
};

koka.uppercut(pavan);
console.log(pavan.life);
console.log(koka.life);