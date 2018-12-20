//what needs to happen--
// 4 fighters & 4 bosses
// user will pick one fighter 
//computer will randomly pick one boss
//fight and boss will move to fighting section 
//user will click attack button 
//random number will be picked for user attack 
//computer will pick random number to attack user
//if user defeats computer user wins - audio plays
//computer defeats user computer winns - audio plays 
//click button to reset characters but keep win count 

var winCount = 0;
var lossCount = 0;
var fighterPicked;
var computerChoice;
var userChoice;
var userAttackValue;
var computerAttackValue;
var fighter = {
    solaire: {
        name: "Solaire of Astora",
        hp: 200,
        weapon: "Sunlight Straight Sword",
        covenant: "Warrior of Sunlight",
    },
    ashen: {
        name: "Ashen One",
        hp: 180,
        weapon: "Straight Sword",
        covenant: "Blue Sentinels",
    },
    onion: {
        name: "Siegmeyer of Catarina",
        hp: 218,
        weapon: "Catarina Set",
        covenant: "Onion Knights",
    },
    knight: {
        name: "Silver Knight",
        hp: 225,
        weapon: "Black night Sword",
        covenant: "Silver Knights",
    }
};

var bosses = {
    manus:{
        name: "Manus, Father of the Abyss",
        hp: 700,
        attack: "Abyss Rain",
    },
    dragon:{
        name:"Gaping Dragon",
        hp: 400,
        attack: "Acid Throw-Up",

    },
    demon: {
        name: "Capra Demon",
        hp: 300,
        attack: "Double Machete Swing",
    },
    Artorias: {
        name: "Artorias the Abysswalke",
        hp: 300,
        attack: "Wrath of the Abyss",
    }
};

$( document ).ready(function(){

    initialize()
    function setup(){
        winCount=0;
        lossCounter=0;
    }

$(".fighter-img").on("click", function (){

})



$(".boss-img").on("click", function(){

})









};
