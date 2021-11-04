function staircase(n) {
    // Write your code here
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(' ');
    };
    for(let i=0; i<n; i++){
        arr.push('#');
        arr.shift();
        let arr2 = arr.join('');
        console.log(arr2);
    };
    
}
