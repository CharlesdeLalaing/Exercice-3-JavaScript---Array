// - # Exercice 3 JavaScript -> Array

//     - ## Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13

let arrayUn = ["coding 11", "coding 12", "coding 13"];

//     - ## Afficher les éléments de l'array

console.log(arrayUn);

//     - ## Ajouter et afficher votre prenom a l'array

arrayUn.push("Charles");
console.log(arrayUn[3]);

//     - ## Remplacer et afficher un élément de l'array par autre chose

arrayUn.splice(1,1,"Antoine");
console.log(arrayUn);