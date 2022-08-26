

let image = ['pic (1).jpg','pic (2).jpg','pic (3).jpg','pic (4).jpg',]
let index = 0;
let imgLen = image.length;
let img = document.getElementById("img");

// function next(){
//     index++;
    
//     if(index >= imgLen){
//         index = 0;
//         img.src = image[index];
//     }
//     else{
//         img.src = image[index];
//     }
    
// }

const next = () => {
        index++;
        
        if(index >= imgLen){
            index = 0;
            img.src = image[index];
        }
        else{
            img.src = image[index];
        }
        
}


const prev = () => {
    index--;
    
    if(index < 0){
        index = imgLen-1;
        img.src = image[index];
        // console.log(image[index]);
    }
    else{
        img.src = image[index];
        // console.log(image[index]);
    }
    
}