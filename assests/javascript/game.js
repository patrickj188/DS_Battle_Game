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
// var userChoice;
var fighters = {
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
    manus: {
        name: "Manus, Father of the Abyss",
        hp: 700,
        attack: "Abyss Rain",
    },
    dragon: {
        name: "Gaping Dragon",
        hp: 400,
        attack: "Acid Throw-Up",

    },
    demon: {
        name: "Capra Demon",
        hp: 300,
        attack: "Double Machete Swing",
    },
    artorias: {
        name: "Artorias the Abysswalke",
        hp: 300,
        attack: "Wrath of the Abyss",
    }
};

var audio = document.getElementById("mySound");
audio.autoplay = true;
audio.load();


$(document).ready(function () {


    // playSound("assests/sounds/MainTheme.mp3").autoPlay;


    $(".fighter-img").on("click", startGame)


    function startGame(event) {
        var fighter = getFighter(event.target.id);
        var boss = getBoss()


    }

    function getFighter(name) {
        var fighter = fighters[name];
        $("#fightSection").append(fighter);
        console.log(fighter);

        
        return fighter;
    }

    function getBoss(name) {
        var boss = bosses["manus"]
        $("#defenderArea").append(boss);
        console.log(boss);
        return boss;
    }


    function attackValue(value) {
        var attack = Math.floor(Math.random() * 100);
        var userAttackValue = attack;
        var computerAttackValue = attack;

        $("#attackB").on("click", attackValue(value))

    }
    function scoreCount(score) {
        var userHp = fighters[hp]
        var bossHp = bosses[hp]
        if (userHp < bossHp) {
            lossCount--;
        }
        else if (userHp > bossHp) {
            winCount++;

        }
    }

    function resetGame(event) {
        // $("#rest").on("click", function()





    }


});









// function setup() {
    //     winCount = 0;
    //     lossCounter = 0;
    //     fighter =
    // }



    // function characterChoice(userChoice) {
    //     var output = document.getElementById('#fightSection');
    //     output.innerHTML = "";
    //     var picks = ["https://oscarotero.com/jquery/", "https://github.com/patrickj188/DS_Battle_Game"];
    //     var choices = ["solaire", "ashen", "onion", "knight"];
    //     var sent = ("You picked " + picks[userChoice] + "");
    //     var img = '<img src="' + picks[userChoice] + '">';
    //     output.innerHTML = sent + img;

    // }

    // characterChoice();
