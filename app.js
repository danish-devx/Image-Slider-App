let sliderImg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]

let index = 0 ;

document.getElementById("next").addEventListener("click", function () {
    
    index ++ ;

    
    if(index >= sliderImg.length){
        index = 0;
    }


    document.getElementById("slider").src = sliderImg[index]
})


document.getElementById("prev").addEventListener("click", function () {

    index -- ; 

    if(index < 0){

        index = sliderImg.length -1;
    }

     document.getElementById("slider").src = sliderImg[index]
    
})