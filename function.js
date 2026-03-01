function my_name(){
    console.log("Pavithra")

}
my_name() //prints Pavithra


//Exercise-Add two numbers using function
var a=10
var b=20
function add(){
    console.log(a+b)
}
add() //prints 30   

// Exercise-2
var fav_actor="Vijay"
var fav_player="Ronaldo"
var fav_movie="Interstellar"
function favourite(){
    console.log("Favourite Actor:" +fav_actor)
    console.log("Favourite Player:" +fav_player)
    console.log("Favourite Movie:" +fav_movie)

    
}
favourite()

// Exercise-3 Using Parameter 
var length
var breadth
function area(length,breadth){
    console.log(length*breadth)
}
area(10,20) //prints 200

// return statement
function add(a,b){
    return a+b
}
var result=add(10,20)
console.log(result) //prints 30




