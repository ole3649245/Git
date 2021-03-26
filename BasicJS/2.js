// write method draw(int n)must print n in case resume
//                             ****
//              ***            ****
//   **         ***            ****
//   **         ***            ****
// n = 2        n = 3          n = 4
// n= rows and stars

function draw(n) {
    let star =''
    for(let colum=0;colum<n;colum++){
        star = star +'*'
    }
    for(let row =0;row<n;row++){
    console.log(star);
    }
}