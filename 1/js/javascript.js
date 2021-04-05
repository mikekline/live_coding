
const length = 7;


function diamond (len){
    let i = 1;
    let k = 1;
    let space = " ";
    let reverse = space.repeat(length);

    //switch for even numbers
    if (len % 2 == 0){
        k=0;
    }


    for (i; i<=len; i++) {
            //renders top point
        if (i == 1){
            console.log(reverse + space + "*");
        }else if (i == len){  
            //renders bottom point
            if (k == 1) {
                console.log(reverse + "*");
            } else if (k == 0) {
                console.log(reverse + space + "*");
            }

        }else {
            if (i <= len / 2){
                //renders top half if even, including middle
                console.log(reverse + "*" + space + "*"); 
                reverse=reverse.replace(" ", "");
                space+="  ";

            } else if (i > len / 2 && k == 1){
                //renders top half if odd
                console.log(reverse + "*" + space + "*");
                space=space.replace("  ","");
                reverse+=" ";
                
            } else {
                //renders bottom half
                space=space.replace("  ","");
                reverse+=" ";
                console.log(reverse + "*" + space + "*");
                
            }
        }
    }     
}
    
diamond(length);

//odd first then even
//1st
//*
//**
//* *
//*  *
//*   *

//2nd
//    *
//    **
//   * *
//  *  *
//  *   *
//3rd then bottom half

// const l = 10;
// let space = ' '; 
// let star = '*';
// let i = 1;
// let k;
// let n = 0;

// while(i <= l) {
//   k = (l - i)/2;
//   console.log(space.repeat(k) + star.repeat(i));
//   i = i + 2;
// }

// while(i >= l) {
//   k = (i - l)/2;
//   n = i - (4 * k);
//   if (n > 0) {console.log(space.repeat(k) + star.repeat(n));
//   } else { break; }
//   i = i + 2;
// }



//the code it the comments is the code I got from stack over flow as a helper


//eqj's version by not following her own advice

function setStar(str,index) {
    // replace a space with a star
    return str.substring(0, index) + `*` + str.substring(index + 1);
}

function diamond(n) {
  let middle = Math.floor(n / 2);

  console.log(`n: ${n}`);
  let counter = 0

  for (let i = 0; i < n; i++) {
    // make n spaces
    let line = Array(n + 1).join(' ');
    
    if (i === 0 || i === n-1){
      // first or last row
      line = setStar(line,middle,"*");

      counter++;
    }
    else if(i === middle
      || (!(n % 2) && i === (middle - 1))) {
      // middle
      line = setStar(line,middle + counter);
      line = setStar(line,middle - counter);
    }
    else if (i > middle) {
      // bottom half
      counter--;
      
      line = setStar(line,middle + counter);
      line = setStar(line,middle - counter);      
    }
    else if (i < middle) {
      // top half      
      line = setStar(line,middle + counter);
      line = setStar(line,middle - counter);

      counter++;
    }

    console.log(line + `\n`);
  }
  
}

for ( let i = 1; i <= 10; i++ ) {
  diamond(i);
}