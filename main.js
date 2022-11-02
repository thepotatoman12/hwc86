var canvas = new fabric.Canvas('burger3');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(700);
        player_object.scaleToHeight(600);
        player_object.set({
            top: 0,
            left: 0
        });
        canvas.add(player_object);
    });	
	
}

function playSound(){
	x.play();
}
