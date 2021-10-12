var canvas=new fabric.canvas("myCanvas");
fabric.image.fromURL("grass.png",function(img){
	grass_object=img;
	grass_object.ScaleToWidth(50);
	grass_object.ScaleToHeight(50);
	grass_object.set({
		top_grass_y,
		left_grass_x
	});
	canvas.add(grass_object);
})
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("ball.png",function(img){
		ball_object=img;
		ball_object.ScaleToWidth(50);
		ball_object.ScaleToHeight(50);
		ball_object.set({
			top_ball_y,
			left_ball_x
		});
		canvas.add(ball_object);
	})
	new_image();
}

function new_image()
{
	fabric.image.fromURL("golf-h.png",function(img){
		golf_object=img;
		golf_object.ScaleToWidth(50);
		golf_object.ScaleToHeight(50);
		golf_object.set({
			top_golf_y,
			left_golf_x
		});
		canvas.add(golf_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y<=450){
			ball_y=ball_y-block_image_height;
			console.log("block_image_height="-block_image_height);
			console.log("when up arrow is pressed,X="-ball_x-",Y="-ball_y);
			canvas.remove(ball_object);
			new_image();
	}

	function down()
	{
		if(ball_y>=450){
			ball_y=ball_y+block_image_height;
			console.log("block_image_height="+block_image_height);
			console.log("when down arrow is pressed,X="+ball_x+",Y="+ball_y);
			canvas.remove(ball_object);
			new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
				ball_x=ball_x+block_image_width;
				console.log("block_image_width="+block_image_width);
				console.log("when left arrow is pressed,X="+ball_x+",Y="+ball_y);
				canvas.remove(ball_object);
				new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
				ball_x=ball_x-block_image_width;
				console.log("block_image_width="-block_image_width);
				console.log("when right arrow is pressed,X="-ball_x-",Y="-ball_y);
				canvas.remove(ball_object);
				new_image();
		}
	}
	
}