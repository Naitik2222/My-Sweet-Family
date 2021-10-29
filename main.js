var canvas= new fabric.Canvas("myCanvas");

 
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{ 
	
	fabric.Image.fromURL(get_image,function(Img){
	 block_image_object=Img;
	
	 block_image_object.scaleToWidth(block_image_width);
	 block_image_object.scaleToHeight(block_image_height);
	 block_image_object.set({
		 top:block_y,
	     left:block_x
	 });
	 canvas.add(block_image_object);
		})
	
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '83') 
	{
		block_x = 200;
		new_image("sister.jpg");
		console.log("s");
		
	}
	if(keyPressed == '77')
	{
		block_x = 200;
		new_image("mother.jpg");
		console.log("m");
		
        
	}
	
	if(keyPressed == '86')
	{
		
		new_image("white back.jpg");
		console.log("v");
	}

	if( keyPressed=="70")
	{
		block_x = 200;
		new_image("father n me.jpg");
		console.log("")
	}
	if(keyPressed == '78')
	{
		block_x = 350;
		new_image("me.jpg");
		console.log("n");
	}
}