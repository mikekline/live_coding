
const topography = [0,1,0,2,1,0,1,3,2,1,2,1];

let forwardBarHeight = 0;
let backwardBarHeight = 0;
let water = 0;


for (let i = 0; i < topography.length; i++){
    console.log('array element: '+ topography[i])
   
   
   
    for (let k = i+1; k < topography.length; k++){
        forwardBarHeight = topography[k];
    //    console.log(`forward comparison: `+ k)
   }


    for(let k = i-1; k >= 0; k--){
        backwardBarHeight = topography[k];
       let test = topography[i] - backwardBarHeight;
        console.log('test: '+test);
        // console.log(`backwards comparison: `+ k)
    }
   

}

































//add water will be highest bar of the bar that contain minus the curent hiest bar
//so bar 5 is 2-1 bar 6 is 2-0 10 is 2-1

// nextHeight = i+4;
// // console.log(topography[i]);
// if (topography[i] > currentBarHeight) {
//     currentBarHeight = topography[i];
//     // console.log(currentBarHeight)
    
// } else if (topography[i] < currentBarHeight) {
//     currentBarHeight = currentBarHeight % topography[i];
//     // console.log(currentBarHeight)
//    let fill= currentBarHeight - topography[i];
// // console.log("fill: "+fill)
// }
// if (nextHeight >= currentBarHeight){
//     water++
//     // console.log("water"+ water);
//}