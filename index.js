// Write your solution here!
 const cats = ["Milo","Otis","Garfield"];

 function destructivelyAppendCat(cat){
    cats.push(cat);
}

function destructivelyPrependCat(cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(cat){
    cats.pop(cat);
}

function destructivelyRemoveFirstCat(cat){
    cats.shift(cat);
}

const copyOfCats = [...cats];

function appendCat(cat){
    const copyOfCats = [...cats];
        copyOfCats.push(cat);
         return copyOfCats;
}

function prependCat(cat){
    const copyOfCats = [...cats];
        copyOfCats.unshift(cat);
            return copyOfCats;
}

function removeLastCat(cat){
    const copyOfCats = [...cats];
        copyOfCats.pop(cat);
         return copyOfCats;
}

function removeFirstCat(cat){
    const copyOfCats = [...cats];
        copyOfCats.shift(cat);
            return copyOfCats;
}
