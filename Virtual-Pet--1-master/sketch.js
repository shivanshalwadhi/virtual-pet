//Create variables here
var dog , happydog , database, foods ,foodstock 
function preload()
{ dogimg=loadImage("images/dogimg.png")
  happydogimg=loadImage("images/dogimg1.png")
 
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.scale=0.15
  database=firebase.database()
  foodstock=database.ref("food")
  foodstock.on("value",(data)=>{foods=data.val()})
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writestocks(foods)
  dog.addImage(happydogimg)

}
  drawSprites();
  //add styles here
  text("foodremaing"+foods,170,200)

}


function writestocks(x){
  if(x<=0){
    x=0
  }
  else{
    x-=1
  }
  database.ref("/").update({food:x})


}

