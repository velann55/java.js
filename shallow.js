let food={
    name:"Mandi",
    price:180,
    quantity:"quarter",
    flavour:{
        one:"peri-peri",
        two:"Honey Garlic"
    }
}

let copy=Object.assign({},food);

console.log(copy);