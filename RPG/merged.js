
(async function getData() {
    const TARGET_JSON = "https://public.bc.fi/s2100145/mergeJSONfile/merged.json"; // our own .json file.
    let json = {"enemies":[{"id":"Ogre","health":"7","damage":"3","defense":"0","whichFunc":"0","imageurl":"https://public.bc.fi/s2100145/simpleRPGsprites/ogre.png"},{"id":"Skeleton","health":"5","damage":"2","defense":"0","whichFunc":"1","imageurl":"https://public.bc.fi/s2100145/simpleRPGsprites/skeleton.png"},{"id":"Werewolf","health":"9","damage":"4","defense":"1","whichFunc":"2","imageurl":"https://public.bc.fi/s2100145/simpleRPGsprites/werewolf.png"},{"id":"Demon","health":"8","damage":"4","defense":"0","whichFunc":"3","imageurl":"https://public.bc.fi/s2100145/simpleRPGsprites/demon.png"},{"id":"Knight Artorias","health":"11","damage":"5","defense":"2","whichFunc":"4","imageurl":"https://public.bc.fi/s2100145/simpleRPGsprites/artorias.png"}]};

    console.log(json);
    //JSON.parse(merg)//await fetch(`${TARGET_JSON}`);
   // let json = await response.json();
    console.log("Object Test v1.5");

    let randomNum = Math.round(Math.random() * 4); // random number to specify enemy type.

    let winCount = 0;

    class Character {
        constructor(id, health, damage, defense, imageurl, whichFunc) {
            this.id = id;
            this.health = health;
            this.damage = damage;
            this.defense = defense;
            this.imageurl = imageurl;
            this.whichFunc = whichFunc; // variable that is passed into getMethod to acquire correct function from methodArray.
        }
        getMethod(x) {
            methodArray[x](); // when a Character class object calls getMethod, it will execute a function from methodArray based on the parameter that is passed.
        }
    }

    let player = new Character("Hero", 10, 6, 1, "https://public.bc.fi/s2100145/simpleRPGsprites/hero.png.png", 5); // note: whichFunc, the last value, will need to be changed depending on which index in methodArray the player's attack function is.

    let enemy = new Character(json.enemies[randomNum].id, json.enemies[randomNum].health, json.enemies[randomNum].damage, json.enemies[randomNum].defense, json.enemies[randomNum].imageurl, json.enemies[randomNum].whichFunc); // first enemy created.

// ************************************* Images *************************************

    let sprite = document.querySelector("#sprite");
    sprite.innerHTML = `<img src="${player.imageurl}" alt="char-image">`; // player image.
    let playerName = document.getElementById("selectedPlayerName");
    playerName
    let picture = document.querySelector("#picture");
    picture.innerHTML = `<img src="${enemy.imageurl}" alt="char-image">`; // enemy image.

    console.log(`You are playing as a ${player.id}, HP: ${player.health} DMG: ${player.damage} DEF: ${player.defense}`);

    console.log(`New enemy ${enemy.id} appeared! HP: ${enemy.health} DMG: ${enemy.damage} DEF: ${enemy.defense}`);

// ************************************* Functions *************************************
    
    function newEnemy() { // function used to get a new enemy after defeating one.
        randomNum = Math.round(Math.random() * 4);
        enemy = new Character(json.enemies[randomNum].id, json.enemies[randomNum].health, json.enemies[randomNum].damage, json.enemies[randomNum].defense, json.enemies[randomNum].imageurl, json.enemies[randomNum].whichFunc);

        picture = document.querySelector("#picture");
        picture.innerHTML = `<img src="${enemy.imageurl}" alt="char-image">`;
    }

    function ogreAttack() {
        console.log(`${enemy.id} attacks you...`);
        player.health = player.health - (enemy.damage - player.defense);
        if (player.health >= 1) {
            console.log(`${enemy.id} hits you with his club, dealing ${enemy.damage - player.defense} damage! Your HP: ${player.health}`);
        } else {
            console.log(`${enemy.id}'s final club swing dealt ${enemy.damage - player.defense} damage and defeated you!`);

            gameover.textContent = "GAME OVER!";

            document.querySelector("#turn").classList.add("invisible"); // replace Attack button with Reset.
            document.querySelector("#reset").classList.remove("invisible");
        };
    }

    function skeleAttack() {
        console.log(`${enemy.id} attacks you...`);
        player.health = player.health - (enemy.damage - player.defense);
        if (player.health >= 1) {
            console.log(`${enemy.id} strikes bone against bone, dealing ${enemy.damage - player.defense} damage! Your HP: ${player.health}`);
        } else {
            console.log(`${enemy.id}'s final attack dealt ${enemy.damage - player.defense} damage and defeated you!`);

            gameover.textContent = "GAME OVER!";

            document.querySelector("#turn").classList.add("invisible"); // replace Attack button with Reset.
            document.querySelector("#reset").classList.remove("invisible");
        };
    }

    function wereAttack() {
        console.log(`${enemy.id} attacks you...`);
        player.health = player.health - (enemy.damage - player.defense);
        if (player.health >= 1) {
            console.log(`${enemy.id} slashes you, dealing ${enemy.damage - player.defense} damage! Your HP: ${player.health}`);
        } else {
            console.log(`${enemy.id}'s final slash dealt ${enemy.damage - player.defense} damage and defeated you!`);

            gameover.textContent = "GAME OVER!";

            document.querySelector("#turn").classList.add("invisible"); // replace Attack button with Reset.
            document.querySelector("#reset").classList.remove("invisible");
        };
    }

    function demonAttack() {
        console.log(`${enemy.id} attacks you...`);
        player.health = player.health - (enemy.damage - player.defense);
        if (player.health >= 1) {
            console.log(`${enemy.id} uses black magic, dealing ${enemy.damage - player.defense} damage! Your HP: ${player.health}`);
        } else {
            console.log(`${enemy.id}'s final dark spell dealt ${enemy.damage - player.defense} damage and defeated you!`);

            gameover.textContent = "GAME OVER!";

            document.querySelector("#turn").classList.add("invisible"); // replace Attack button with Reset.
            document.querySelector("#reset").classList.remove("invisible");
        };
    }

    function artoriasAttack() {
        console.log(`${enemy.id} attacks you...`);
        player.health = player.health - (enemy.damage - player.defense);
        if (player.health >= 1) {
            console.log(`${enemy.id} strikes you with his Abyss Greatsword, dealing ${enemy.damage - player.defense} damage! Your HP: ${player.health}`);
        } else {
            console.log(`${enemy.id} swings his Greatsword for the final time dealing ${enemy.damage - player.defense} damage and defeats you!`);

            gameover.textContent = "GAME OVER!";

            document.querySelector("#turn").classList.add("invisible"); // replace Attack button with Reset.
            document.querySelector("#reset").classList.remove("invisible");
        };
    }
    
    function heroAttack() {
        console.log(`You attack the ${enemy.id}...`)
        enemy.health = enemy.health - (player.damage - enemy.defense);
        if (enemy.health >= 1) {
            console.log(`You dealt ${player.damage - enemy.defense} damage! ${enemy.id} HP: ${enemy.health}`);
        } else {
            winCount++;
            console.log(`You dealt ${player.damage - enemy.defense} damage and ${enemy.id} was defeated! Total victories: ${winCount}`);
            player.health = player.health + (Math.round(enemy.damage / 3));
            console.log(`You recovered ${(Math.round(enemy.damage / 3))} health! Your HP: ${player.health}`); // Every enemy defeated gives you some health back.
            if (winCount % 2 == 0) {
                player.health = player.health + 3; // Every two enemies you defeat gives you bonus health.
                console.log(`Your battle experience defeating multiple foes has made you stronger; you gained 3 HP! Your HP: ${player.health}`);
            }
            newEnemy(); // create a new enemy after defeating the previous one.
            console.log(`New enemy ${enemy.id} appeared! HP: ${enemy.health} DMG: ${enemy.damage} DEF: ${enemy.defense}`);
        }
    }

    let methodArray = [ogreAttack, skeleAttack, wereAttack, demonAttack, artoriasAttack, heroAttack]; // functions to be used by the objects as methods.

// ************************************* Button functions *************************************

    document.getElementById("turn").addEventListener("click", function takeTurn(){
        player.getMethod(player.whichFunc);
        enemy.getMethod(enemy.whichFunc);
    });

})();