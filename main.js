

$(document).ready(function() {
    var imageLoader = document.getElementById('filePhoto');
        imageLoader.addEventListener('change', handleImage, false);
    
    function handleImage(e) {
        var reader = new FileReader();
    
    
       
            $("#btnSubmit").click(function(){
             
                
            var image=document.getElementById('myImage');
            image.crossOrigin = 'anonymous';
            GetBinary(image, "#550000");
        
            })
            //FOR artstyle 2
            $("#btnSubmit2").click(function(){
             
                
                var image=document.getElementById('myImage');
                image.crossOrigin = 'anonymous';
                GetBinary2(image, "#550000");
            
                })
                //FOR artstyle 3
            $("#btnSubmit3").click(function(){
             
                
                var image=document.getElementById('myImage');
                image.crossOrigin = 'anonymous';
                GetBinary3(image, "#550000");
            
                })
                 //FOR artstyle 4
            $("#btnSubmit4").click(function(){
             
                
                var image=document.getElementById('myImage');
                image.crossOrigin = 'anonymous';
                GetBinary4(image, "#550000");
            
                })
                
        reader.onload = function (event) {
            $('#uploader img').attr('src',event.target.result);
            
        }
    
        reader.readAsDataURL(e.target.files[0]);
     
    
    }
    
    var dropbox;
    dropbox = document.getElementById("uploader");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);
    
    function dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    function dragover(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    function drop(e) {
      e.stopPropagation();
      e.preventDefault();
      //you can check e's properties
      //console.log(e);
      var dt = e.dataTransfer;
      var files = dt.files;
      
      //this code line fires your 'handleImage' function (imageLoader change event)
      imageLoader.files = files;
    }
    });
    //take value a and b onchange function
     function GetBinary(imgElement,tintColor) {
    
        var canvas = document.createElement("canvas");
        canvas.width = imgElement.offsetWidth;
        canvas.height = imgElement.offsetHeight;
        var ctx = canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.drawImage(imgElement,0,0);
        var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
        var pixels = imgPixels.data;
        var w = canvas.width;
        var h = canvas.height;
      
      createSVG(w,h);

        var centerx = canvas.width / 2;
        var centery = canvas.height / 2;
        var l = w * h;
        // ctx.moveTo(0,0)
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < l; i++) {
            // get color of pixel
            var r =  imgPixels.data[i*4]; // Red
            var g =  imgPixels.data[i*4+1]; // Green
            var b =  imgPixels.data[i*4+2]; // Blue
            var a =  imgPixels.data[i*4+3]; // Alpha
            var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);//grayScale
    
             let y = parseInt(i / w, 10);
            let x = i - y * w;
    // arr[x]=arr[x]||[]
    // arr[x][y]=avg;
            if(x%5==0&&y%6==0) //need to use variable from user for density of the pixels
            Draw(x,y,avg,ctx)
        }
//    canvas.parentNode.removeChild(canvas);
  
getSVG(w,h);


    function Draw(x,y,a,ctx)
    {
        
    
        ctx.beginPath();
        // ctx.moveTo(x,y)
    
        
    
        // ctx.lineTo(x+5,y+5);
        
        // var d= Math.random()*10;
        var t=((a/255)*10);
    
        var arc_s=.5*Math.PI;
        var arc_end = .75*Math.PI;
        var circle_start= 0;
        var circle_end= 2*Math.PI;
    
    
       var start =circle_start;
        var end =circle_end;
   if(a/255<.3 )
    
// top left section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    // ctx.rect(x+Math.random()*10,y+Math.random()*10,10,5*Math.PI,Math.PI);
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE ELLIPSE ARTSTYLE> *******
    var ellipse = document.createElementNS(svgNS,"ellipse"); //to create a circle. for ellipseangle use "ellipseangle"

    ellipse.setAttributeNS(null,"cx",x+Math.random()*10);
    ellipse.setAttributeNS(null,"cy",y+Math.random()*10);
    ellipse.setAttributeNS(null,"rx",20);
    ellipse.setAttributeNS(null,"ry",10);
    // ellipse.setAttributeNS(null,"x2",7);
    // ellipse.setAttributeNS(null,"y2",5);
    // ellipse.setAttributeNS(null, 'height', '20');
    // ellipse.setAttributeNS(null, 'width', '10');
    ellipse.setAttributeNS(null,'id','gg');
    ellipse.setAttributeNS(null,'stroke','black');
    ellipse.setAttributeNS(null,'fill','none');
    ellipse.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG").appendChild(ellipse);


// r = 5;
// for(var m=0; m<=a; m++)
// {
// for(var n=0; n<=a; n++)
// {paper = lineart(document.getElementById("mySVG"), 600, 600),
// c1 = paper.circle(x[m], y[m], r),
// c2 = paper.circle(x[n], y[n], r),
// //  c3 = paper.circle(x3, y3, r3),

// // Compute the path strings
// c1path = paper.circlePath(x[m], y[m], r),
// c2path = paper.circlePath(x[n], y[n], r),
// // c3path = paper.circlePath(x3, y3, r3),
// linePath = paper.linePath(x[m], y[m], x[n], y[n]),
// // linePath2 = paper.linePath(x2, y2, x3, y3),
//  q = null;
//  w = null;
// // Get the path intersections
// // In this case we are guaranteed 1 intersection, but you could find any intersection of interest
// c[m]q = lineart.pathIntersection(linePath, c1path)[0],
// c[n]w = lineart.pathIntersection(linePath, c2path)[0],
// // c3i = lineart.pathIntersection(linePath2, c3path)[0],


// line = paper.path(paper.linePath(c[m]q.x, c[m]w.y, c[n]q.x, c[n]w.y));
// // line = paper.path(paper.linePath(c2i.x, c2i.y, c3i.x, c3i.y));

// }
// }
}
}
else
if(a/255>.3 && a/255<.5 )
    
// top left section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    // ctx.rect(x+Math.random()*10,y+Math.random()*10,10,5*Math.PI,Math.PI);
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE ELLIPSE ARTSTYLE> *******
    var ellipse = document.createElementNS(svgNS,"ellipse"); //to create a circle. for ellipseangle use "ellipseangle"

    ellipse.setAttributeNS(null,"cx",x+Math.random()*10);
    ellipse.setAttributeNS(null,"cy",y+Math.random()*10);
    ellipse.setAttributeNS(null,"rx",15);
    ellipse.setAttributeNS(null,"ry",8);
    // ellipse.setAttributeNS(null,"x2",7);
    // ellipse.setAttributeNS(null,"y2",5);
    // ellipse.setAttributeNS(null, 'height', '20');
    // ellipse.setAttributeNS(null, 'width', '10');
    ellipse.setAttributeNS(null,'id','gg');
    ellipse.setAttributeNS(null,'stroke','black');
    ellipse.setAttributeNS(null,'fill','none');
    ellipse.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG").appendChild(ellipse);
  
}}
else
if(a/255>.5 && a/255<.8 )
    
// top left section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    // ctx.rect(x+Math.random()*10,y+Math.random()*10,10,5*Math.PI,Math.PI);
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE ELLIPSE ARTSTYLE> *******
    var ellipse = document.createElementNS(svgNS,"ellipse"); //to create a circle. for ellipseangle use "ellipseangle"

    ellipse.setAttributeNS(null,"cx",x+Math.random()*10);
    ellipse.setAttributeNS(null,"cy",y+Math.random()*10);
    ellipse.setAttributeNS(null,"rx",9);
    ellipse.setAttributeNS(null,"ry",4);
    // ellipse.setAttributeNS(null,"x2",7);
    // ellipse.setAttributeNS(null,"y2",5);
    // ellipse.setAttributeNS(null, 'height', '20');
    // ellipse.setAttributeNS(null, 'width', '10');
    ellipse.setAttributeNS(null,'id','gg');
    ellipse.setAttributeNS(null,'stroke','black');
    ellipse.setAttributeNS(null,'fill','none');
    ellipse.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG").appendChild(ellipse);
  
}}

// top right section
//         else{
//             if(x>(w/2) && y<(h/2))
//             {
//                 ctx.strokeStyle='black'
//             ctx.lineWidth= .5;
            
//             // ctx.rect(x+Math.random()*10,y+Math.random()*10,10,5*Math.PI,Math.PI);
//             var svgNS = "http://www.w3.org/2000/svg";  
        
//             var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"

            // var rect = document.createElementNS(svgns, 'rect');
            // rect.setAttributeNS(null, 'x', x);
            // rect.setAttributeNS(null, 'y', y);
            // rect.setAttributeNS(null, 'height', '50');
            // rect.setAttributeNS(null, 'width', '50');
            // rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
            // document.getElementById('svgOne').appendChild(rect);

//             myCircle.setAttributeNS(null,"cx",x+2);
//             myCircle.setAttributeNS(null,"cy",y+2);
//             myCircle.setAttributeNS(null,"r",2);
//             myCircle.setAttributeNS(null,'id','gg');
//             myCircle.setAttributeNS(null,'stroke','black');
//             myCircle.setAttributeNS(null,'fill','none');
//             myCircle.setAttributeNS(null,'stroke-width','.2');
        
//             document.getElementById("mySVG").appendChild(myCircle);
//         }
//         // ctx.strokeStyle='black';
//         // ctx.lineWidth= 1;
//         // ctx.arc(x,y,10,arc_s,arc_end);
    
       
//         }
// //bottom left section
//         else{
//             if( y>(h/2))
//             {
//                 ctx.strokeStyle='black'
//             ctx.lineWidth= .5;
            
//             // ctx.rect(x+Math.random()*10,y+Math.random()*10,10,5*Math.PI,Math.PI);
//             var svgNS = "http://www.w3.org/2000/svg";  
        
//             var myCircle = document.createElementNS(svgNS,"rectangle"); //to create a circle. for rectangle use "rectangle"

//             myCircle.setAttributeNS(null,"cx",x+5);
//             myCircle.setAttributeNS(null,"cy",y+5);
//             myCircle.setAttributeNS(null,"x",5+8);
//             myCircle.setAttributeNS(null,"y",5+8);
//             myCircle.setAttributeNS(null,'id','gg');
//             myCircle.setAttributeNS(null,'stroke','black');
//             myCircle.setAttributeNS(null,'fill','none');
//             myCircle.setAttributeNS(null,'stroke-width','.2');
        
//             document.getElementById("mySVG").appendChild(myCircle);
//         }
//         // ctx.strokeStyle='black';
//         // ctx.lineWidth= 1;
//         // ctx.arc(x,y,10,arc_s,arc_end);
    
       
//         }
        //bottom right section
       
    //         if(x>(w/2) && y>(h/2))
    //         {
    //             ctx.strokeStyle='black'
    //         ctx.lineWidth= .5;
            
    //         // ctx.rect(x+Math.random()*10,y+Math.random()*10,10,5*Math.PI,Math.PI);
    //         var svgNS = "http://www.w3.org/2000/svg";  
        
    //         var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"

    //         myCircle.setAttributeNS(null,"cx",x+Math.random()*10);
    // myCircle.setAttributeNS(null,"cy",y+Math.random()*10);
    // myCircle.setAttributeNS(null,"r",5+Math.random()*10);
    // myCircle.setAttributeNS(null,'id','gg');
    // myCircle.setAttributeNS(null,'stroke','black');
    // myCircle.setAttributeNS(null,'fill','none');
    // myCircle.setAttributeNS(null,'stroke-width','.2');
        
    //         document.getElementById("mySVG").appendChild(myCircle);
    //     }
        // ctx.strokeStyle='black';
        // ctx.lineWidth= 1;
        // ctx.arc(x,y,10,arc_s,arc_end);
    
       
        
        // ctx.lineTo(x+10,y+10);
         ctx.stroke();
        }
       
        // var image = new Image();
        // image.id = "pic"
        // image.src = canvas.toDataURL();
        // // document.getElementById('myCanvas').appendChild(image);
       document.getElementById('gcodeButton').disabled = false;
           } 
           
        //    FOR ARTSTYLE NUMBER 2
        
    //take value a and b onchange function
     function GetBinary2(imgElement,tintColor) {
    
        var canvas = document.createElement("canvas");
        canvas.width = imgElement.offsetWidth;
        canvas.height = imgElement.offsetHeight;
        var ctx = canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.drawImage(imgElement,0,0);
        var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
        var pixels = imgPixels.data;
        var w = canvas.width;
        var h = canvas.height;
      
      createSVG2(w,h);

        var centerx = canvas.width / 2;
        var centery = canvas.height / 2;
        var l = w * h;
        // ctx.moveTo(0,0)
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < l; i++) {
            // get color of pixel
            var r =  imgPixels.data[i*4]; // Red
            var g =  imgPixels.data[i*4+1]; // Green
            var b =  imgPixels.data[i*4+2]; // Blue
            var a =  imgPixels.data[i*4+3]; // Alpha
            var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);//grayScale
    
             let y = parseInt(i / w, 10);
            let x = i - y * w;
    // arr[x]=arr[x]||[]
    // arr[x][y]=avg;
            if(x%5==0&&y%6==0) //need to use variable from user for density of the pixels
            Draw(x,y,avg,ctx)
        }
//    canvas.parentNode.removeChild(canvas);
  
getSVG2(w,h);


    function Draw(x,y,a,ctx)
    {
        
    
        ctx.beginPath();
      
        var t=((a/255)*10);
    
        var arc_s=.5*Math.PI;
        var arc_end = .75*Math.PI;
        var circle_start= 0;
        var circle_end= 2*Math.PI;
    
    
       var start =circle_start;
        var end =circle_end;
    if(a/255<.3 )
    
// top left section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE circle ARTSTYLE> *******
    var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"

    myCircle.setAttributeNS(null,"cx",x+Math.random()*10);
    myCircle.setAttributeNS(null,"cy",y+Math.random()*10);
    myCircle.setAttributeNS(null,"r",10);
    myCircle.setAttributeNS(null,'id','gg');
    myCircle.setAttributeNS(null,'stroke','black');
    myCircle.setAttributeNS(null,'fill','none');
    myCircle.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG2").appendChild(myCircle);
}
}

else
if(a/255>.3 && a/255<.5 )
{


{if(x<(w) && y<(h))
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE circle boundary condition ARTSTYLE> *******
    
          var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"

          myCircle.setAttributeNS(null,"cx",x+Math.random()*10);
          myCircle.setAttributeNS(null,"cy",y+Math.random()*10);
          myCircle.setAttributeNS(null,"r",7);
          myCircle.setAttributeNS(null,'id','gg');
          myCircle.setAttributeNS(null,'stroke','black');
          myCircle.setAttributeNS(null,'fill','none');
          myCircle.setAttributeNS(null,'stroke-width','.2');
      
          document.getElementById("mySVG2").appendChild(myCircle);

}

}
}

// r = 5;
// for(var m=0; m<=a; m++)
// {
// for(var n=0; n<=a; n++)
// {paper = lineart(document.getElementById("mySVG"), 600, 600),
// c1 = paper.circle(x[m], y[m], r),
// c2 = paper.circle(x[n], y[n], r),
// //  c3 = paper.circle(x3, y3, r3),

// // Compute the path strings
// c1path = paper.circlePath(x[m], y[m], r),
// c2path = paper.circlePath(x[n], y[n], r),
// // c3path = paper.circlePath(x3, y3, r3),
// linePath = paper.linePath(x[m], y[m], x[n], y[n]),
// // linePath2 = paper.linePath(x2, y2, x3, y3),
//  q = null;
//  w = null;
// // Get the path intersections
// // In this case we are guaranteed 1 intersection, but you could find any intersection of interest
// c[m]q = lineart.pathIntersection(linePath, c1path)[0],
// c[n]w = lineart.pathIntersection(linePath, c2path)[0],
// // c3i = lineart.pathIntersection(linePath2, c3path)[0],


// line = paper.path(paper.linePath(c[m]q.x, c[m]w.y, c[n]q.x, c[n]w.y));
// // line = paper.path(paper.linePath(c2i.x, c2i.y, c3i.x, c3i.y));

// }
// }

else
if(a/255>.5 && a/255<.8 )
{


{if(x<(w) && y<(h))
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE circle boundary condition ARTSTYLE> *******
    
          var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"

          myCircle.setAttributeNS(null,"cx",x+Math.random()*10);
          myCircle.setAttributeNS(null,"cy",y+Math.random()*10);
          myCircle.setAttributeNS(null,"r",3);
          myCircle.setAttributeNS(null,'id','gg');
          myCircle.setAttributeNS(null,'stroke','black');
          myCircle.setAttributeNS(null,'fill','none');
          myCircle.setAttributeNS(null,'stroke-width','.2');
      
          document.getElementById("mySVG2").appendChild(myCircle);

}

}
}

         ctx.stroke();
        }
       
       document.getElementById('gcodeButton2').disabled = false;
           } 
    
 //    FOR ARTSTYLE NUMBER 3
        
    //take value a and b onchange function
     function GetBinary3(imgElement,tintColor) {
    
        var canvas = document.createElement("canvas");
        canvas.width = imgElement.offsetWidth;
        canvas.height = imgElement.offsetHeight;
        var ctx = canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.drawImage(imgElement,0,0);
        var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
        var pixels = imgPixels.data;
        var w = canvas.width;
        var h = canvas.height;
      
      createSVG3(w,h);

        var centerx = canvas.width / 2;
        var centery = canvas.height / 2;
        var l = w * h;
        // ctx.moveTo(0,0)
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < l; i++) {
            // get color of pixel
            var r =  imgPixels.data[i*4]; // Red
            var g =  imgPixels.data[i*4+1]; // Green
            var b =  imgPixels.data[i*4+2]; // Blue
            var a =  imgPixels.data[i*4+3]; // Alpha
            var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);//grayScale
    
             let y = parseInt(i / w, 10);
            let x = i - y * w;
    // arr[x]=arr[x]||[]
    // arr[x][y]=avg;
            if(x%5==0&&y%6==0) //need to use variable from user for density of the pixels
            Draw(x,y,avg,ctx)
        }
//    canvas.parentNode.removeChild(canvas);
  
getSVG3(w,h);


    function Draw(x,y,a,ctx)
    {
        
    
        ctx.beginPath();
      
        var t=((a/255)*10);
    
        var arc_s=.5*Math.PI;
        var arc_end = .75*Math.PI;
        var circle_start= 0;
        var circle_end= 2*Math.PI;
    
    
       var start =circle_start;
        var end =circle_end;
    if(a/255<.3 )
    
// top left section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE rectangle ARTSTYLE> *******
    
    var recta = document.createElementNS(svgNS, 'rect');
    recta.setAttributeNS(null, 'x', x+Math.random()*10);
    recta.setAttributeNS(null, 'y', y+Math.random()*10);
    recta.setAttributeNS(null, 'height', '14');
    recta.setAttributeNS(null, 'width', '14');
    recta.setAttributeNS(null,'id','gg');
    recta.setAttributeNS(null,'stroke','black');
    recta.setAttributeNS(null,'fill','none');
    recta.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG3").appendChild(recta);

}
}
else
if(a/255>.3 && a/255<.5 )
{
{if(x<(w) && y<(h))
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE rectangle ARTSTYLE> *******
    
    var recta = document.createElementNS(svgNS, 'rect');
    recta.setAttributeNS(null, 'x', x+Math.random()*10);
    recta.setAttributeNS(null, 'y', y+Math.random()*10);
    recta.setAttributeNS(null, 'height', '4');
    recta.setAttributeNS(null, 'width', '4');
    recta.setAttributeNS(null,'id','gg');
    recta.setAttributeNS(null,'stroke','black');
    recta.setAttributeNS(null,'fill','none');
    recta.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG3").appendChild(recta);

}

}
}
else

if(a/255>.5 && a/255<.8 )
{


{if(x<(w) && y<(h))
    {
        ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE rectangle ARTSTYLE> *******
    
    var recta = document.createElementNS(svgNS, 'rect');
    recta.setAttributeNS(null, 'x', x+Math.random()*10);
    recta.setAttributeNS(null, 'y', y+Math.random()*10);
    recta.setAttributeNS(null, 'height', '8');
    recta.setAttributeNS(null, 'width', '8');
    recta.setAttributeNS(null,'id','gg');
    recta.setAttributeNS(null,'stroke','black');
    recta.setAttributeNS(null,'fill','none');
    recta.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG3").appendChild(recta);

}

}
}



         ctx.stroke();
        }
       
       document.getElementById('gcodeButton3').disabled = false;
           }

             
 //    FOR ARTSTYLE NUMBER 4
        
    //take value a and b onchange function
     function GetBinary4(imgElement,tintColor) {
    
        var canvas = document.createElement("canvas");
        canvas.width = imgElement.offsetWidth;
        canvas.height = imgElement.offsetHeight;
        var ctx = canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.drawImage(imgElement,0,0);
        var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
        var pixels = imgPixels.data;
        var w = canvas.width;
        var h = canvas.height;
      
      createSVG4(w,h);

        var centerx = canvas.width / 2;
        var centery = canvas.height / 2;
        var l = w * h;
        // ctx.moveTo(0,0)
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < l; i++) {
            // get color of pixel
            var r =  imgPixels.data[i*4]; // Red
            var g =  imgPixels.data[i*4+1]; // Green
            var b =  imgPixels.data[i*4+2]; // Blue
            var a =  imgPixels.data[i*4+3]; // Alpha
            var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);//grayScale
    
             let y = parseInt(i / w, 10);
            let x = i - y * w;
    // arr[x]=arr[x]||[]
    // arr[x][y]=avg;
            if(x%5==0&&y%6==0) //need to use variable from user for density of the pixels
            Draw(x,y,avg,ctx)
        }
//    canvas.parentNode.removeChild(canvas);
  
getSVG4(w,h);


    function Draw(x,y,a,ctx)
    {
        
    
        ctx.beginPath();
      
        var t=((a/255)*10);
    
        var arc_s=.5*Math.PI;
        var arc_end = .75*Math.PI;
        var circle_start= 0;
        var circle_end= 2*Math.PI;
    
    
       var start =circle_start;
        var end =circle_end;
    if(a/255<.3 )
    
// top left section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
    //     ctx.strokeStyle='black'
    // ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE rectangle ARTSTYLE> *******
    
    var recta = document.createElementNS(svgNS, 'rect');
    recta.setAttributeNS(null, 'x', x+Math.random()*10);
    recta.setAttributeNS(null, 'y', y+Math.random()*10);
    recta.setAttributeNS(null, 'height', '14');
    recta.setAttributeNS(null, 'width', '14');
    recta.setAttributeNS(null,'id','gg');
    recta.setAttributeNS(null,'stroke','black');
    recta.setAttributeNS(null,'fill','none');
    recta.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG4").appendChild(recta);

}
}
else
if(a/255>.2 && a/255<.6 )
{
{if(x<(w) && y<(h))
    {
    //     ctx.strokeStyle='black'
    // ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE rectangle ARTSTYLE> *******
    
    var recta = document.createElementNS(svgNS, 'rect');
    recta.setAttributeNS(null, 'x', x+Math.random()*10);
    recta.setAttributeNS(null, 'y', y+Math.random()*10);
    recta.setAttributeNS(null, 'height', '4');
    recta.setAttributeNS(null, 'width', '4');
    recta.setAttributeNS(null,'id','gg');
    recta.setAttributeNS(null,'stroke','black');
    recta.setAttributeNS(null,'fill','none');
    recta.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG4").appendChild(recta);

}

}
}
else

if(a/255>.5 && a/255<.7 )
{


{if(x<(w) && y<(h))
    {
    //     ctx.strokeStyle='black'
    // ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE rectangle ARTSTYLE> *******
    
    var recta = document.createElementNS(svgNS, 'rect');
    recta.setAttributeNS(null, 'x', x+Math.random()*10);
    recta.setAttributeNS(null, 'y', y+Math.random()*10);
    recta.setAttributeNS(null, 'height', '8');
    recta.setAttributeNS(null, 'width', '8');
    recta.setAttributeNS(null,'id','gg');
    recta.setAttributeNS(null,'stroke','black');
    recta.setAttributeNS(null,'fill','none');
    recta.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG4").appendChild(recta);

}

}
}
else

if(((a/255)==.9) || ((a/255)==.8) )
{


{if(x<(w) && y<(h))
    {
      
    var svgNS = "http://www.w3.org/2000/svg";  

          //**** <FOR THE rectangle ARTSTYLE> *******
          var recta = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"

          recta.setAttributeNS(null,"cx",x+Math.random()*10);
          recta.setAttributeNS(null,"cy",y+Math.random()*10);
          recta.setAttributeNS(null,"r",5+Math.random()*10);
          recta.setAttributeNS(null,'id','gg');
          recta.setAttributeNS(null,'stroke','black');
          recta.setAttributeNS(null,'fill','none');
          recta.setAttributeNS(null,'stroke-width','.2');
      
          document.getElementById("mySVG4").appendChild(recta);

}

}
}

         ctx.stroke();
        }
       
       document.getElementById('gcodeButton4').disabled = false;
           }

    //FOR ARTSTYLE NUM 1
 function createSVG(width,height)
 {
    var svgNS = "http://www.w3.org/2000/svg";
    var check=document.getElementById("mySVG");
    if(check!=null){
        var svg=  document.getElementById("mySVG")
   svg.parentNode.removeChild(svg);
    }
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null,'width',width);
   svg.setAttributeNS(
        'http://www.w3.org/2000/xmlns/',
        'xmlns:xlink',
        'http://www.w3.org/1999/xlink'
    );
    svg.setAttributeNS(null,'height',height);
    svg.setAttributeNS(null,'id','mySVG');
    document.getElementById("container").appendChild(svg)
    var g=document.createElementNS(svgNS,'g');
    // g.setAttributeNS(null,'id','gg');
    // g.setAttributeNS(null,'stroke','black');
    // g.setAttributeNS(null,'fill','none');
    // g.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG").appendChild(g);   
 }


 function getSVG( w, h)
 {


    var svgc =document.getElementById('mySVG').innerHTML;
    var text = '<svg xmlns="http://www.w3.org/2000/svg" width= "' + w +'" height="'+h+ '" viewBox="0 0 ' + w + ' ' +h + '">' +  svgc + '</svg>'
    var url = null

    
var downFilename = "Plotter";
var downLink=document.getElementById('downSVG');
var blob = new Blob([text], {type: "image/svg+xml"})
if (url != null) {
    URL.revokeObjectURL(url)
}
url = URL.createObjectURL(blob)
downLink.href = url
var name = downFilename + Math.floor((Math.random() * 1000) + 1) + ".svg"
downLink.innerHTML = name
downLink.download = name
downLink.style.visibility = "visible"
 
}

//   *** <FOR THE ARTSTYLE 2 ****
 function createSVG2(width,height)
 {
    var svgNS = "http://www.w3.org/2000/svg";
    var check=document.getElementById("mySVG2");
    if(check!=null){
        var svg=  document.getElementById("mySVG2")
   svg.parentNode.removeChild(svg);
    }
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null,'width',width);
   svg.setAttributeNS(
        'http://www.w3.org/2000/xmlns/',
        'xmlns:xlink',
        'http://www.w3.org/1999/xlink'
    );
    svg.setAttributeNS(null,'height',height);
    svg.setAttributeNS(null,'id','mySVG2');
    document.getElementById("container").appendChild(svg)
    var g=document.createElementNS(svgNS,'g');
    // g.setAttributeNS(null,'id','gg');
    // g.setAttributeNS(null,'stroke','black');
    // g.setAttributeNS(null,'fill','none');
    // g.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG2").appendChild(g);
 }
 
 //   *** <FOR THE ARTSTYLE 2 ****
 function getSVG2( w, h)
 {


    var svgc =document.getElementById('mySVG2').innerHTML;
    var text = '<svg xmlns="http://www.w3.org/2000/svg" width= "' + w +'" height="'+h+ '" viewBox="0 0 ' + w + ' ' +h + '">' +  svgc + '</svg>'
    var url = null

    
var downFilename = "Plotter_circles";
var downLink=document.getElementById('downSVG2');
var blob = new Blob([text], {type: "image/svg+xml"})
if (url != null) {
    URL.revokeObjectURL(url)
}
url = URL.createObjectURL(blob)
downLink.href = url
var name = downFilename + Math.floor((Math.random() * 1000) + 1) + ".svg"
downLink.innerHTML = name
downLink.download = name
downLink.style.visibility = "visible"
 
}

    //FOR ARTSTYLE NUM 3
    function createSVG3(width,height)
    {
       var svgNS = "http://www.w3.org/2000/svg";
       var check=document.getElementById("mySVG3");
       if(check!=null){
           var svg=  document.getElementById("mySVG3")
      svg.parentNode.removeChild(svg);
       }
       var svg = document.createElementNS(svgNS, "svg");
       svg.setAttributeNS(null,'width',width);
      svg.setAttributeNS(
           'http://www.w3.org/2000/xmlns/',
           'xmlns:xlink',
           'http://www.w3.org/1999/xlink'
       );
       svg.setAttributeNS(null,'height',height);
       svg.setAttributeNS(null,'id','mySVG3');
       document.getElementById("container").appendChild(svg)
       var g=document.createElementNS(svgNS,'g');
       // g.setAttributeNS(null,'id','gg');
       // g.setAttributeNS(null,'stroke','black');
       // g.setAttributeNS(null,'fill','none');
       // g.setAttributeNS(null,'stroke-width','.2');
   
       document.getElementById("mySVG3").appendChild(g);   
    }
   
   
    function getSVG3( w, h)
    {
   
   
       var svgc =document.getElementById('mySVG3').innerHTML;
       var text = '<svg xmlns="http://www.w3.org/2000/svg" width= "' + w +'" height="'+h+ '" viewBox="0 0 ' + w + ' ' +h + '">' +  svgc + '</svg>'
       var url = null
   
       
   var downFilename = "Plotter_rect";
   var downLink=document.getElementById('downSVG3');
   var blob = new Blob([text], {type: "image/svg+xml"})
   if (url != null) {
       URL.revokeObjectURL(url)
   }
   url = URL.createObjectURL(blob)
   downLink.href = url
   var name = downFilename + Math.floor((Math.random() * 1000) + 1) + ".svg"
   downLink.innerHTML = name
   downLink.download = name
   downLink.style.visibility = "visible"
    
   }
   
    //FOR ARTSTYLE NUM 4
    function createSVG4(width,height)
    {
       var svgNS = "http://www.w3.org/2000/svg";
       var check=document.getElementById("mySVG4");
       if(check!=null){
           var svg=  document.getElementById("mySVG4")
      svg.parentNode.removeChild(svg);
       }
       var svg = document.createElementNS(svgNS, "svg");
       svg.setAttributeNS(null,'width',width);
      svg.setAttributeNS(
           'http://www.w3.org/2000/xmlns/',
           'xmlns:xlink',
           'http://www.w3.org/1999/xlink'
       );
       svg.setAttributeNS(null,'height',height);
       svg.setAttributeNS(null,'id','mySVG4');
       document.getElementById("container").appendChild(svg)
       var g=document.createElementNS(svgNS,'g');
       // g.setAttributeNS(null,'id','gg');
       // g.setAttributeNS(null,'stroke','black');
       // g.setAttributeNS(null,'fill','none');
       // g.setAttributeNS(null,'stroke-width','.2');
   
       document.getElementById("mySVG4").appendChild(g);   
    }
   
   
    function getSVG4( w, h)
    {
   
    var svgc =document.getElementById('mySVG4').innerHTML;
    var text = '<svg xmlns="http://www.w3.org/2000/svg" width= "' + w +'" height="'+h+ '" viewBox="0 0 ' + w + ' ' +h + '">' +  svgc + '</svg>'
    var url = null
   
   var downFilename = "Plotter_mix";
   var downLink=document.getElementById('downSVG4');
   var blob = new Blob([text], {type: "image/svg+xml"})
   if (url != null) {
       URL.revokeObjectURL(url)
   }
   url = URL.createObjectURL(blob)
   downLink.href = url
   var name = downFilename + Math.floor((Math.random() * 1000) + 1) + ".svg"
   downLink.innerHTML = name
   downLink.download = name
   downLink.style.visibility = "visible"
    
   }


 
  function downloadGCode() {
    var gcode;
    var tmp=document.getElementById('mySVG').innerHTML;
    gcode=svg2gcode(tmp, {
        scale : 1,
        cutZ : 108,
        safeZ: 80
      });
    //   console.log(gcode);
    var gCodeFile = new Blob([gcode], { type: 'text/plain;charset=utf-8' });
    url=URL.createObjectURL(gCodeFile);
    downlink.href=url;
    var name="Plotter"+Math.floor((Math.random()*1000)+1) +  '.gcode'
    downlink.innerHTML= name;
    downlink.download= name;
    downlink.style.visibility="visible";
}

//FOR GCODE OF THE CIRCLES ARTSTYLE
function downloadGCode2() {
    var gcode;
    var tmp=document.getElementById('mySVG2').innerHTML;
    gcode=svg2gcode(tmp, {
        scale : 1,
        cutZ : 108,
        safeZ: 80
      });
    //   console.log(gcode);
    var gCodeFile = new Blob([gcode], { type: 'text/plain;charset=utf-8' });
    url=URL.createObjectURL(gCodeFile);
    downlink2.href=url;
    var name="Plotter_circles"+Math.floor((Math.random()*1000)+1) +  '.gcode'
    downlink2.innerHTML= name;
    downlink2.download= name;
    downlink2.style.visibility="visible";
}

function downloadGCode3() {
    var gcode;
    var tmp=document.getElementById('mySVG3').innerHTML;
    gcode=svg2gcode(tmp, {
        scale : 1,
        cutZ : 108,
        safeZ: 80
      });
    //   console.log(gcode);
    var gCodeFile = new Blob([gcode], { type: 'text/plain;charset=utf-8' });
    url=URL.createObjectURL(gCodeFile);
    downlink3.href=url;
    var name="Plotter_rect"+Math.floor((Math.random()*1000)+1) +  '.gcode'
    downlink3.innerHTML= name;
    downlink3.download= name;
    downlink3.style.visibility="visible";
}

function downloadGCode4() {
    var gcode;
    var tmp=document.getElementById('mySVG4').innerHTML;
    gcode=svg2gcode(tmp, {
        scale : 1,
        cutZ : 108,
        safeZ: 80
      });
    //   console.log(gcode);
    var gCodeFile = new Blob([gcode], { type: 'text/plain;charset=utf-8' });
    url=URL.createObjectURL(gCodeFile);
    downlink4.href=url;
    var name="Plotter_mix"+Math.floor((Math.random()*1000)+1) +  '.gcode'
    downlink4.innerHTML= name;
    downlink4.download= name;
    downlink4.style.visibility="visible";
}