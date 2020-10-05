let pokeNumber = ["001", "002", "003", "004", "005", "006", "007", "008", "009",
    "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020"];
let pokeNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle",
    "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
    "Rattata", "Raticate"];
let pokeType1 = ["Grass", "Grass", "Grass", "Fire", "Fire", "Fire", "Water", "Water", "Water", "Bug", "Bug", "Bug",
    "Bug", "Bug", "Bug", "Normal", "Normal", "Normal", "Normal", "Normal"];
let pokeType2 = ["Poison", "Poison", "Poison", null, null, "Flying", null, null, null, null, null, "Flying", "Poison",
    "Poison", "Poison", "Flying", "Flying", "Flying", null, null];
let baseHP = [45, 60, 80, 39, 58, 78, 44, 59, 79, 45, 50, 60, 40, 45, 65, 40, 63, 83, 30, 55
]
let baseATK = [49, 62, 82, 52, 64, 84, 48, 63, 83, 30, 20, 45, 35, 25, 90, 45, 60, 80, 56, 81
];
let baseDEF = [49, 63, 83, 43, 58, 78, 65, 80, 100, 35, 55, 50, 30, 50, 40, 40, 55, 75, 35, 60
];
let baseSpATK = [65, 80, 100, 60, 80, 109, 50, 65, 85, 20, 25, 90, 20, 25, 45, 35, 50, 70, 25, 50
];
let baseSpDEF = [65, 80, 100, 50, 65, 85, 64, 80, 105, 20, 25, 80, 20, 25, 80, 35, 50, 70, 35, 70
];
let baseSPD = [45, 60, 80, 65, 80, 100, 43, 58, 78, 45, 30, 70, 50, 35, 75, 56, 71, 101, 72, 77
];

const resultsBanner = document.createElement("div");
resultsBanner.id = "resultsBanner";
const resultsBannerText = document.createElement("h1");

resultsBanner.appendChild(resultsBannerText);


let searchDiv = document.createElement("div")
let searchUL = document.createElement("ul");
searchUL.classList.add("searchContainer");
const allDiv = document.createElement("div");
const allUL = document.createElement("ul");
allUL.classList.add("allContainer");

//Printing 20 pokemon
for (let i = 0; i < pokeNumber.length; i++) {

    const pokemon = document.createElement("li");
    pokemon.classList.add("allContent");

    const pokeImg = document.createElement("img");
    pokeImg.classList.add("pokemonIMG");
    pokeImg.src = "./images/" + (i + 1).toString() + ".png";

    const pokemonHeader = document.createElement("h2");
    pokemonHeader.textContent = "#" + pokeNumber[i] + " " + pokeNames[i];

    const pokemonType = document.createElement("h3");
    if (pokeType2[i] == null) {
        pokemonType.textContent = pokeType1[i];
    } else {
        pokemonType.textContent = pokeType1[i] + " and " + pokeType2[i]
    }

    const statsHeader = document.createElement("h3");
    statsHeader.textContent = "STATS";

    const stats = document.createElement("p");
    stats.textContent =
        "Base HP: " + baseHP[i] + "\n" +
        "Base ATK: " + baseATK[i] + "\n" +
        "Base DEF: " + baseDEF[i] + "\n" +
        "Base Sp. ATK: " + baseSpATK[i] + "\n" +
        "Base Sp, DEF: " + baseSpDEF[i] + "\n" +
        "Base SPD: " + baseSPD[i] + "\n";
    stats.innerHTML = stats.innerHTML.replace(/\n\r?/g, '<br />');

    pokemon.appendChild(pokemonHeader);
    pokemon.appendChild(pokemonType);
    pokemon.appendChild(statsHeader);
    pokemon.appendChild(stats);
    pokemon.appendChild(pokeImg);

    allUL.appendChild(pokemon);
}
allDiv.appendChild(allUL);
document.body.appendChild(allDiv);

//printing searched pokemon by number
function searchNumber() {

    document.body.appendChild(resultsBanner)
    resultsBannerText.textContent = "Search Results";

    while (searchUL.firstChild) {
        searchUL.removeChild(searchUL.firstChild);
    }

    const str = document.getElementById("nameSearch");

    if (str.value !== "") {
        document.body.removeChild(allDiv)
        if (!(isNaN(str.value)) && str.value !== "" && parseInt(str.value) <= 20 && parseInt(str.value) >= 0) {

            let numberNotFound = true;
            for (let i = 0; i < pokeNumber.length; i++) {
                if (pokeNumber[i].toLowerCase().includes(str.value.toLowerCase())) {
                    numberNotFound = false;
                    const pokemon = document.createElement("li");
                    pokemon.classList.add("searchContent");

                    const pokeImg = document.createElement("img");
                    pokeImg.classList.add("pokemonIMG");
                    pokeImg.src = "./images/" + (i + 1).toString() + ".png";

                    const pokemonHeader = document.createElement("h2");
                    pokemonHeader.textContent = "#" + pokeNumber[i] + " " + pokeNames[i];

                    const pokemonType = document.createElement("h3");
                    if (pokeType2[i] == null) {
                        pokemonType.textContent = pokeType1[i];
                    } else {
                        pokemonType.textContent = pokeType1[i] + " and " + pokeType2[i]
                    }

                    const statsHeader = document.createElement("h3");
                    statsHeader.textContent = "STATS";

                    const stats = document.createElement("p");
                    stats.textContent =
                        "Base HP: " + baseHP[i] + "\n" +
                        "Base ATK: " + baseATK[i] + "\n" +
                        "Base DEF: " + baseDEF[i] + "\n" +
                        "Base Sp. ATK: " + baseSpATK[i] + "\n" +
                        "Base Sp, DEF: " + baseSpDEF[i] + "\n" +
                        "Base SPD: " + baseSPD[i] + "\n";
                    stats.innerHTML = stats.innerHTML.replace(/\n\r?/g, '<br />');

                    pokemon.appendChild(pokemonHeader);
                    pokemon.appendChild(pokemonType);
                    pokemon.appendChild(statsHeader);
                    pokemon.appendChild(stats);
                    pokemon.appendChild(pokeImg);

                    searchUL.appendChild(pokemon);
                    searchDiv.appendChild(searchUL)
                    document.body.appendChild(searchDiv);
                }
            }
            if (numberNotFound) {
                resultsBannerText.textContent = "No Results Found";
            }
        } else {
            resultsBannerText.textContent = "No Results";
            alert("Please Enter a NUMBER between 1-20!")
        }
    } else {
        searchDiv.removeChild(searchUL);
        document.body.removeChild(resultsBanner);
    }

    document.body.appendChild(allDiv)


}


//printing searched pokemon by name
function searchName() {
    document.body.appendChild(resultsBanner)
    resultsBannerText.textContent = "Search Results";


    while (searchUL.firstChild) {
        searchUL.removeChild(searchUL.firstChild);
    }
    const str = document.getElementById('numberSearch');

    if (str.value !== "") {
        document.body.removeChild(allDiv)
        if (isNaN(str.value) && str.value.length <= 20 && str.value.match(/^[A-Za-z]+$/)) {
            let nameNotFound = true;
            for (let i = 0; i < pokeNumber.length; i++) {
                if (pokeNames[i].toLowerCase().includes(str.value.toLowerCase())) {
                    nameNotFound = false;
                    const pokemon = document.createElement("li");
                    pokemon.classList.add("searchContent");

                    const pokeImg = document.createElement("img");
                    pokeImg.classList.add("pokemonIMG");
                    pokeImg.src = "./images/" + (i + 1).toString() + ".png";

                    const pokemonHeader = document.createElement("h2");
                    pokemonHeader.textContent = "#" + pokeNumber[i] + " " + pokeNames[i];

                    const pokemonType = document.createElement("h3");
                    if (pokeType2[i] == null) {
                        pokemonType.textContent = pokeType1[i];
                    } else {
                        pokemonType.textContent = pokeType1[i] + " and " + pokeType2[i]
                    }

                    const statsHeader = document.createElement("h3");
                    statsHeader.textContent = "STATS";

                    const stats = document.createElement("p");
                    stats.textContent =
                        "Base HP: " + baseHP[i] + "\n" +
                        "Base ATK: " + baseATK[i] + "\n" +
                        "Base DEF: " + baseDEF[i] + "\n" +
                        "Base Sp. ATK: " + baseSpATK[i] + "\n" +
                        "Base Sp, DEF: " + baseSpDEF[i] + "\n" +
                        "Base SPD: " + baseSPD[i] + "\n";
                    stats.innerHTML = stats.innerHTML.replace(/\n\r?/g, '<br />');

                    pokemon.appendChild(pokemonHeader);
                    pokemon.appendChild(pokemonType);
                    pokemon.appendChild(statsHeader);
                    pokemon.appendChild(stats);
                    pokemon.appendChild(pokeImg);

                    searchUL.appendChild(pokemon);
                    searchDiv.appendChild(searchUL)
                    document.body.appendChild(searchDiv);
                }
            }
            if (nameNotFound) {
                resultsBannerText.textContent = "No Results Found";
            }
        } else {
            resultsBannerText.textContent = "No Results";
            alert("Please enter a name containing only alphabets and less than 20 characters")
        }
    } else {
        searchDiv.removeChild(searchUL);
        document.body.removeChild(resultsBanner);
    }

    document.body.appendChild(allDiv)
}