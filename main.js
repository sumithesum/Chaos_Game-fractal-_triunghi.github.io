const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 5024
canvas.height = 2760

c.fillRect(0,0,canvas.width,canvas.height)



c.moveTo(canvas.width/2,10)
c.lineTo(10,canvas.height-10)
c.strokeStyle = 'white';
c.stroke();


c.moveTo(canvas.width/2,10)
c.lineTo(canvas.width-10,canvas.height-10)
c.strokeStyle = 'white';
c.stroke();

c.moveTo(canvas.width-10,canvas.height-10)
c.lineTo(10,canvas.height-10)
c.strokeStyle = 'white';
c.stroke();



function Point(x,y){
    c.fillStyle = 'white'
    c.fillRect(x,y,1,1);
}

var working = true

document.addEventListener('keypress', function(e){
    if(e.key == 'e')
        if(working)
            working = false;
        else
            working = true;
})


function Inside( p0,p1) {
    a1 = canvas.width/2
    a0 = 10
    b1 = 10
    b0 = canvas.height-10
    c1 = canvas.width-10
    c0 = canvas.height-10
    let d = ((b1 -c1) * (a0 - c0) +
                   (c0 - b0) * (a1 - c1));
    let a = ((b1 - c1) * (p0 - c0) +
         (c0 - b0) * (p1 - c1)) / d;
    let b = ((c1 - a1) * (p0 - c0) +
         (a0 - c0) * (p1 - c1)) / d;
    let c = 1 - a - b;
     
    if (a >= 0 && b >= 0 && c >= 0) {
        return true;
    } else {
        return false;
    }
    }





function start(){
    
    gasit = false
    var x = 1
    var y = 1
    var unghix = 1
    var unghiy = 1
    while( !gasit ){
         x = Math.floor(Math.random() * canvas.width- 2)
         y = Math.floor(Math.random() * canvas.height -2)
        if(Inside(x,y))    gasit = true;  
            
    }

    setInterval(function(){
        if(working){ 
        var random =  Math.floor(Math.random() * 3)
        if(random == 0 ) {     //A
        unghix = canvas.width/2
        unghiy = 10
        }
        else if(random ==1){ //C
            unghiy = canvas.height-10
            unghix = canvas.width-10
            }
        else {  //B
            unghix =  10
            unghiy = canvas.height-10
            }


        x = (x + unghix)/2
        y = (y + unghiy)/2
        console.log(x,y)
        Point(x,y)
        }

        }, 1);
      


    
    
}
start()



  