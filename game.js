// let a=10;
// let b=20.5;
// console.log(a+b);

//import { Phaser } from "./phaser";



// //how to creaete obj in java script
// let bird ={
//     x: 100,
//     y: 100,
//     fly : function(){
//         console.log ("Bird is flying ",this.x,this.y)
//     }
// };

let config = {
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,

    }


};


let game = new Phaser.Game(config);

function preload(){
    //load an image
    this.load.image('back',"Assets/back.jpg");
    this.load.image('wheel',"Assets/wheel.png");
    this.load.image('pin',"Assets/pin.png");
    this.load.image('stand',"Assets/stand.png");


}

function create(){
    let W= game.config.width;
    let H=game.config.height;

    //background
    let background=this.add.sprite(0,0,'back');

    //stand
    this.add.sprite(W/2,H/2+250,'stand').setScale(0.25);

    //wheel
    this.wheel=this.add.sprite(W/2,H/2,'wheel');
    this.wheel.setScale(0.25);

    //pin
    this.pin= this.add.sprite(W/2,H/2-250,'pin');
    this.pin.setScale(0.25);


    this.input.on("pointerdown",spinwheel,this);


   
}

function update(){
    console.log("update");
    //this.wheel.angle +=1;
}


function spinwheel(){
    console.log("spin a wheel");
    //this.wheel.angle += 50;

    let extra_spin= Phaser.Math.Between(0,11)*30;
    

    let rounds= Phaser.Math.Between(2,4);
    console.log(rounds);

    let total_angle= rounds*360 + extra_spin;


    tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle,
        ease:"Cubic.easeOut",
        duration: 2000
    });

}