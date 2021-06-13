"use strict";

// alert("Veikia");

var vardas = document.getElementById("vardas");
var pavarde = document.getElementById("pavarde");
var amzius = document.getElementById("amzius");

var prideti = document.getElementById("prideti");
var istrintiPirma = document.getElementById("istrintiPirma");
var istrintiPaskutini = document.getElementById("istrintiPaskutini");

var tbody = document.getElementById("tbody");
var tableRow = document.getElementsByTagName("tr");


prideti.addEventListener("click", add);
function add(){
  if(vardas.value && pavarde.value && amzius.value){
    var newTableRow = document.createElement("tr");
    newTableRow.innerHTML = "<td>" + vardas.value + "</td>" + "<td>" + pavarde.value + "</td>" + "<td>" + amzius.value + "</td>"
    tbody.append(newTableRow);
    vardas.value = "";
    pavarde.value = "";
    amzius.value = "";
    console.log(newTableRow);
    alert("Ačiū! Informacija gauta!");
  } else {
    alert("Trūksta duomenų!");
  }
}

istrintiPirma.addEventListener("click", trinti);
function trinti(){
  if(tableRow.length > 1){
    tableRow[1].remove();
  } else {
    alert("Viskas jau ištrinta");
  }
}

istrintiPaskutini.addEventListener("click", remove);
function remove(){
  if(tableRow.length > 1){
    tableRow[tableRow.length - 1].remove();
  } else {
    alert("Viskas jau ištrinta");
  }
}
