//////// Your Code ///////////////////////////////////////////////

function OrangeTree() {
  var basket = [];
  this.age = 0;
  this.height = 0;

  this.hasOranges = function(){
    this.oranges > 0;  
  };
  this.incrementAge = function(){
    this.age < 100? this.age++ : this.age;
    this.height < 8? this.height++ : this.height;
    this.oranges++;

  };
  this.isAlive = function() {

  }


}



/////// Driver Code /////////////////////////////////////////////

var tree = new OrangeTree();

// while (!tree.hasOranges()) {
//   tree.incrementAge();
// }

console.log("Tree is " + tree.age + " years old and " + tree.height + " feet tall");

while(tree.isAlive()) {
  var basket = [];

  while(tree.hasOranges()) {
    basket.push(tree.pickOrange());
  }

  var avgDiameter = function() {
    // create this method
  };

  console.log("Year " + tree.age + " Report");
  console.log("Tree height: " + tree.height + " feet");
  console.log("Harvest: " + basket.length + " oranges with an average diameter of " + avgDiameter() + " inces");
  console.log("");

  tree.incrementAge();

}

console.log("Alas, the tree, she is dead!");
