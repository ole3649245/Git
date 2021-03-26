//write method draw(int n)must print n for case resume
// ** n=2   *** n=3   ***** n=5
// this is algorithm-->>วิธีการเป็นขั้นๆ และมีส่วนวนซ้ำ จนเสร็จ
function draw(n) {
    let star = ''
    for(let i=0;i<n;i++){
        star = star+ '*'
    }
    console.log(star);
}
