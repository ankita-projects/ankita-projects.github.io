const createPage = (list) => {
  //list of pokemon objects
  let root = document.getElementById("root");
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    let item = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.setAttribute("pokeDetailUrl", element.url); //setting poke detail
    anchor.addEventListener("click", getPokemonDetails);
    // Create the text node for anchor element.
    var link = document.createTextNode(element.name);

    // Append the text node to anchor element.
    anchor.appendChild(link);

    // Set the title.
    anchor.title = "This is Link";

    // Set the href property.

    anchor.href = "#";
    item.appendChild(anchor);
    root.appendChild(item);
  }
};
/*********Function for API call**********/

const listPokemon = () => {
  //API call for pokemon list
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
    .then((response) => response.json())
    .then((data) => {
      createPage(data.results);
    });
};
window.addEventListener("DOMContentLoaded", listPokemon);
const getPokemonDetails = (event) => {
  let source = event.target || event.srcElement; // source element from where clickhandler was triggered
  let pokeDetailUrl = source.getAttribute("pokedetailurl");
  fetch(pokeDetailUrl) //second api call
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showPokeDetails(data);
    });
};
const showPokeDetails = (data) => {
  let card = document.getElementById("pokemonDetails");
  card.innerHTML = "";
  let image = document.createElement("img");
  image.setAttribute("src", data.sprites.front_default);
  card.appendChild(image);

  let image1 = document.createElement("img");
  image1.setAttribute("src", data.sprites.back_default);
  card.appendChild(image1);
  createTable(data);                                             //calling create table function for showing pokedetails
};
const createTable = (data) => {                  //creating table 
  var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);

  var firstRow = document.createElement("TR");
  firstRow.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(firstRow);

  let name = document.createElement("Td");
  name.innerHTML = "Name";

  let pokeName = document.createElement("Td");
  pokeName.innerHTML = data.species.name;

  var thirdRow = document.createElement("TR");
  thirdRow.setAttribute("id", "myTr1");
  document.getElementById("myTable").appendChild(thirdRow);
  let weight = document.createElement("Td");
  weight.innerHTML = "Weight";
  let pokeWeight = document.createElement("Td");
  pokeWeight.innerHTML = data.weight + "lbs";

  var thirdRow = document.createElement("TR");
  thirdRow.setAttribute("id", "myTr2");
  document.getElementById("myTable").appendChild(thirdRow);
  let height = document.createElement("Td");
  height.innerHTML = "Height";
  let pokeHeight = document.createElement("Td");
  pokeHeight.innerHTML = data.height + "inches";

  var fourthRow = document.createElement("TR");
  fourthRow.setAttribute("id", "myTr3");
  document.getElementById("myTable").appendChild(fourthRow);
  let Id= document.createElement("Td");
  Id.innerHTML = "ID";
  let pokeID = document.createElement("Td");
  pokeID.innerHTML = data.id;

  document.getElementById("myTr").appendChild(name);
  document.getElementById("myTr").appendChild(pokeName);
  document.getElementById("myTr1").appendChild(weight);
  document.getElementById("myTr1").appendChild(pokeWeight);
  document.getElementById("myTr2").appendChild(height);
  document.getElementById("myTr2").appendChild(pokeHeight);
  document.getElementById("myTr3").appendChild(Id);
  document.getElementById("myTr3").appendChild(pokeID);
  document.getElementById("pokemonDetails").appendChild(x);
};
base_experience