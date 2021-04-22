
let ketqua = null;

function tinh() {
    let soA = document.getElementById("soA").value;
    let soB = document.getElementById("soB").value;
    let soC = document.getElementById("soC").value;

    soA = parseInt(soA);
    soB = parseInt(soB);
    soC = parseInt(soC);

    let elKetQua = document.getElementById("ketqua");
    
    let denta = (( soB * soB ) - ( 4 * soA * soC ));
    if (denta < 0) {
        ketqua = "</br>Delta < 0 </br>Phuong trinh vo nghiem";
    } else if ( denta > 0 ) {
        let n1 = ((-soB + Math.sqrt(denta)) / 2) * soA;
        let n2 = ((-soB - Math.sqrt(denta)) / 2) * soA;
        n1 = n1.toFixed(2);
        n2 = n2.toFixed(2);
        ketqua = `</br>Delta > 0 PT co 2 nghiem</br> Nghiem 1 = ${n1} </br> Nghiem 2 = ${n2}`;
    } else if (denta == 0) {
        let nghiemkep = ( -soB / 2) * soA;
        ketqua = `</br>Delta = 0 </br>Phuong trinh co nghiem kep : ${nghiemkep}`;
    }
    console.log(soA);
    console.log(soB);
    console.log(soC);
    console.log(`denta = ${denta}`);

    elKetQua.innerHTML = `Ket qua ${ketqua}`;
}
