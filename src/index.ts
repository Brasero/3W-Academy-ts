"use strict";
//On commence par créer une liste de 16 nombres
//Peu importe les valeurs, le temps qu'il s'agit bien de nombres
// Il est primordial de porter attention à la notation lors de la déclaration de notre constante "Array<number>"
// qui signifie que notre constante est un tableau de nombres
//En effet, si on ne précise pas le type de notre constante,
// le compilateur va automatiquement lui attribuer le type "any" dans le cas ou le fichier de configuration "tsconfig.json" le permet
// cependant dans notre cas le fichier de configuration ne le permet pas, il faut donc préciser le type de notre constante
const list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//Ensuite, on va créer une fonction qui va prendre en paramètre une liste de nombres
//Cette fonction va créer une liste de couple de nombres aléatoires.
//Il est intéressant de remarquer que notre fonction prend en argument un tableau de nombres
// et qu'elle retourne un tableau de chaînes de caractères
const makeCouple = (list: Array<number>): Array<string> => {
    //On commence par créer une liste vide qui va contenir nos couples
    //Cette liste est définie comme étant un tableau de chaînes de caractères
    const coupleList: Array<string> = [];
    //On va ensuite créer une boucle qui va s'exécuter tant que notre liste de nombres reçue en entrée n'est pas vide
    while (list.length > 0) {
        //On va créer deux nombres aléatoires
        // Ici on déclare une variable et une constante toutes les deux de type nombre
        // On remarque que la constante est déclarée avec le mot clé "const"
        // alors que la variable est déclarée avec le mot clé "let"
        // Cela signifie que la constante ne pourra pas être réaffectée
        // On utilise ensuite la fonction "Math.floor" qui permet d'arrondir un nombre à l'entier inférieur
        // et la fonction "Math.random" qui permet de générer un nombre aléatoire entre 0 et 1 on le multiplie par la longueur de notre liste
        const rand: number = Math.floor(Math.random() * list.length);
        let rand2: number = Math.floor(Math.random() * list.length);
        //On va ensuite vérifier que les deux nombres aléatoires ne sont pas les mêmes
        while (rand === rand2) {
            //Si c'est le cas, on va en générer un nouveau
            rand2 = Math.floor(Math.random() * list.length);
        }
        //On va ensuite ajouter notre couple à notre liste de couples
        //On utilise ici la fonction "push" qui permet d'ajouter un élément à la fin d'un tableau
        //La notation `${}` permet d'insérer une variable dans une chaîne de caractères
        //Cette notation est appelée "template string" et est disponible depuis la version 1.4 de TypeScript
        //Cette notation est également disponible dans les versions récentes de JavaScript
        coupleList.push(`${list[rand]} - ${list[rand2]}`);
        //on va ensuite enregistrer les deux valeur dans des constante
        const val1: number = list[rand];
        const val2: number = list[rand2];
        //On va ensuite supprimer les deux nombres de notre liste de nombres
        //On utilise ici la fonction "splice" qui permet de supprimer un élément d'un tableau.
        //Elle prend en paramètre l'index de l'élément à partir dû quelle commencer la suppression et le nombre d'éléments à supprimer
        //On utilise ici la fonction "findIndex" qui permet de trouver l'index d'un élément dans un tableau
        list.splice(list.findIndex((val: number) => val === val1), 1);
        list.splice(list.findIndex((val: number) => val === val2), 1);
    }
    return coupleList;
}


// @ts-ignore
document.getElementById('app').innerHTML = `${makeCouple(list).join('<br>')}<br><br><button onclick="window.location.reload()">Recommencer</button>`;