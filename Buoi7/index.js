let ketqua1 = document.getElementById("ketqua1");
let arr1 = [];
function cauMot(){
    let soN1 = document.getElementById("soN1").value;
    console.log(soN1);
    for(let i = 1; i <= soN1; i++){
        console.log(i);
        arr1.push(i);
        ketqua1.innerHTML += `${i} `;
    }
}

// cau 2

let ketqua2 = document.getElementById("ketqua2");
let arr2 = [];
function cauHai(){
    let soN2 = document.getElementById("soN2").value;
    console.log(soN2);
    for(let i = 1; i <= soN2; i++){
        if( i % 2 == 1){
            console.log(i);
            arr2.push(i);
            ketqua2.innerHTML += `${i} `;
        }
        
    }
}

// cau 3

let ketqua3 = document.getElementById("ketqua3");
let arr3 = [];
function cauBa(){
    let soN3 = document.getElementById("soN3").value;
    console.log(soN3);
    for(let i = 1; i <= soN3; i++){
        if( i % 2 == 0){
            console.log(i);
            arr3.push(i);
            ketqua3.innerHTML += `${i} `;
        }
        
    }
}

// cau 5

let ketqua5 = document.getElementById("ketqua5");
let tong5 = 0;
function cauNam(){
    let soN5 = document.getElementById("soN5").value;
    for(let i = 1; i <= soN5; i++){
        tong5 += i;
        ketqua5.innerHTML = `Tong = ${tong5} `;
        
    }
}

// cau 6

let ketqua6 = document.getElementById("ketqua6");
let tong6 = 0;
function cauSau(){
    let soN6 = document.getElementById("soN6").value;
    for(let i = 1; i <= soN6; i++){
        tong6 += i * i;
        ketqua6.innerHTML = `Tong = ${tong6} `;
    }
}

// cau 7

let ketqua7 = document.getElementById("ketqua7");
let tong7 = 0;
function cauBay(){
    let soN7 = document.getElementById("soN7").value;
    for(let i = 1; i <= soN7; i++){
        if( i % 2 == 1){
            tong7 += i;
            ketqua7.innerHTML = `Tong = ${tong7} `;
        }
    }
}

// cau 8

let ketqua8 = document.getElementById("ketqua8");
let check = false;
let arr8 = [];
function cauTam(){
    let soN8 = document.getElementById("soN8").value;
    soN8 = soN8.split("", 10);
    console.log(soN8);
    for(let i = 0; i <= soN8.length-1; i++){
        console.log(soN8[i]);
        if( soN8[i] % 2 == 1){
            console.log('So du la '+soN8[i]);
            arr8.push(soN8[i]);
            console.log("mang sau duyet "+arr8);
            check = true;
        }else if( soN8[i] % 2 == 0){
            check = false;
            break;
        }
    }
    ketqua8.innerHTML = `Ket qua = ${check}`;
}