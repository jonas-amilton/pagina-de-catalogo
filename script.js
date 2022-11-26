let filterarray =[];


let galleryarray = [
    {
        id:1,
        name : "processador intel core i5",
        src: "./images/processador-intel-core-i5400.jpg",
        desc : "R$ 859,99"
    },
    {
        id:2,
        name : "pc gamer",
        src: "./images/PC Gamer.png",
        desc : "R$ 4.586,98"
        
    },
    {
        id:3,
        name : "iphone 11",
        src: "./images/iphone-11.png",
        desc : "R$ 3.134,05"
    },
    {
        id:4,
        name : "samsung galaxy note 20",
        src: "./images/Smartphone-Samsung-Galaxy-Note-20.png",
        desc : "R$ 2.586,98"
    },
    {
        id:5,
        name : "monitor lg",
        src: "./images/monitor-lg.png",
        desc : "R$ 699,99"
    },
    {
        id:6,
        name : "iphone 13 pro",
        src: "./images/Apple-iPhone-13-Pro.png",
        desc : "R$ 8.628,28"
    },
    {
        id:7,
        name : "processador amd ryzen 7",
        src: "./images/processador-amd-ryzen-7.jpg",
        desc : "1.890,21"
    },
    {
        id:8,
        name : "placa de vídeo rtx 2060",
        src: "./images/placa-de-video.png",
        desc : "R$ 1.699,99"
    },
    {
        id:9,
        name : "cadeira gamer",
        src: "./images/cadeira-gamer.png",
        desc : "R$ 628,28"
    }
   ];



showgallery(galleryarray);




function showgallery(curarra){
   document.getElementById("card").innerText = "";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center">${curarra[i].name}</h4>

          <img src="${curarra[i].src}" width="100%" height="320px"/>
          <p class="mt-2">${curarra[i].desc}</p>
          <button class="btn btn-primary w-100 mx-auto">Comprar</button>
       
          </div>
          </div>
       `
   }

}


document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});