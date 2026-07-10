function calculatesArea(width,height){
  
  return width + height;
};

let width = 10, height = 5;
let area = calculatesArea(width,height);

if (area>100) {
  console.log("this area is large.");

}

else{
  console.log("this area is small.");
}
if (width + height > 100 ){
  console.log("Area is greater than or equal to 100");
}
