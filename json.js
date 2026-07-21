let tv={
    brandname:"Sony",
    size:"72 inch"
};

let convertedstring=JSON.stringify(tv);

console.log(convertedstring);


let tv1=`{
   "brandname":"Sony",
    "size" :"72 inch"   
}`;

let convertedstring1=JSON.parse(tv1);

console.log(convertedstring1);

