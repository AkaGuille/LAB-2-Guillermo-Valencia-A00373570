let canvas;
let URL = 'https://pokeapi.co/api/v2/pokemon';
let SPRITE_PATH;
let pokemon;
let pokemonImage = [];
let pokeImage = null;
let pokeAbility = null;
let pokeName = null;
let screen;



function setup() {
    frameRate(70);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    for (let i = 0; i < 9; i++) {
        let z = i + 1;
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                SPRITE_PATH = 'https://pokeapi.co/api/v2/pokemon/' + z + '/';
                console.log(SPRITE_PATH);
                fetch(SPRITE_PATH)
                    .then(response => response.json())
                    .then(data => {
                        pokemonImage.push(loadImage(data.sprites.front_default))
                    })
            });
    }


}

function draw() {
    background(0);
    //newCursor();
    displayImage();


    switchPokemon();

}

async function switchPokemon() {
    switch (screen) {
        case 0:
            fetch('https://pokeapi.co/api/v2/pokemon/1/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[0]
                });
            break;

        case 1:
            fetch('https://pokeapi.co/api/v2/pokemon/2/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[1]
                });
            break;

        case 2:
            fetch('https://pokeapi.co/api/v2/pokemon/3/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[2]
                });
            break;

        case 3:
            fetch('https://pokeapi.co/api/v2/pokemon/4/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[3]
                });
            break;

        case 4:
            fetch('https://pokeapi.co/api/v2/pokemon/5/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[4]
                });
            break;

        case 5:
            fetch('https://pokeapi.co/api/v2/pokemon/6/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[5]
                });
            break;

        case 6:
            fetch('https://pokeapi.co/api/v2/pokemon/7/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[6]
                });
            break;

        case 7:
            fetch('https://pokeapi.co/api/v2/pokemon/8/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[7]
                });
            break;

        case 8:
            fetch('https://pokeapi.co/api/v2/pokemon/9/')
                .then(response => response.json())
                .then(data => {
                    pokeName = data.forms[0].name
                    pokeAbility = data.abilities[0].ability.name
                    pokeImage = pokemonImage[8]
                });
            break;
    }
}

async function displayImage() {

    for (let i = 0; i < 3; i++) {
        image(pokemonImage[i], 10, 10 + (i * 200), 120, 120);
    }
    for (let i = 0; i < 3; i++) {
        image(pokemonImage[i + 3], 150, 10 + (i * 200), 120, 120);
    }

    for (let i = 0; i < 3; i++) {
        image(pokemonImage[i + 6], 290, 10 + (i * 200), 120, 120);
    }

    if (pokeAbility != null && pokeName != null) {
        textSize(50);
        text(pokeName, 900, 400, 900);
        text(pokeAbility, 900, 500, 800);
    }

    if (pokeImage != null) {
        image(pokeImage, 700, 50, 400, 400)
    }

    console.log(pokeName)
}

function mousePressed() {
    // Bulbasaur
    if (mouseX > 30 && mouseX < 130 && mouseY > 30 && mouseY < 130) {
        screen = 0;
        console.log(":(");
    }

    // Ivysaur 
    if (mouseX > 20 && mouseX < 120 && mouseY > 220 && mouseY < 320) {
        screen = 1;
    }

    // Venasaur
    if (mouseX > 10 && mouseX < 125 && mouseY > 420 && mouseY < 550) {
        screen = 2;
    }

    // Charmander
    if (mouseX > 180 && mouseX < 270 && mouseY > 30 && mouseY < 130) {
        screen = 3;
    }

    // Charmeleon 
    if (mouseX > 180 && mouseX < 270 && mouseY > 220 && mouseY < 320) {
        screen = 4;
    }

    // Charizard
    if (mouseX > 180 && mouseX < 275 && mouseY > 420 && mouseY < 550) {
        screen = 5;
    }

    // Squirtle
    if (mouseX > 330 && mouseX < 430 && mouseY > 30 && mouseY < 130) {
        screen = 6;
    }

    // Wartotle
    if (mouseX > 330 && mouseX < 430 && mouseY > 220 && mouseY < 320) {
        screen = 7;
    }

    // Blastoide
    if (mouseX > 330 && mouseX < 430 && mouseY > 420 && mouseY < 550) {
        screen = 8;
    }

    for (let i = 0; i < 3; i++) {
        image(pokemonImage[i], 10, 10 + (i * 200), 120, 120);
    }
    for (let i = 0; i < 3; i++) {
        image(pokemonImage[i + 3], 150, 10 + (i * 200), 120, 120);
    }

    for (let i = 0; i < 3; i++) {
        image(pokemonImage[i + 6], 290, 10 + (i * 200), 120, 120);
    }

    if (pokeAbility != null && pokeName != null) {
        fill(255);
        textSize(50);
        text(pokeName, 900, 400, 900);
        text(pokeAbility, 900, 500, 800);
    }

    if (pokeImage != null) {
        image(pokeImage, 700, 50, 400, 400)
    }

    console.log(pokeName)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}