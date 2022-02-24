// Tìm số chẵn/lẻ nhỏ hơn 100
document.getElementById("btnChanLeFOR").onclick = function () {
    var dsSoChan = "";
    var dsSoLe = "";
    for (var i = 1; i < 100; i++) {
        //kiểm tra số chẵn
        if (i % 2 == 0) {
            dsSoChan += i + " ";
        } else {
            dsSoLe += i + " ";
        }
    }
    document.getElementById("result1For").innerHTML = "Số chẵn: " + dsSoChan + "; " + "<br>" + "Số lẻ: " + dsSoLe;
}
document.getElementById("btnChanLeWHILE").onclick = function () {
    var dsSoChanW = "";
    var dsSoLeW = "";

    var count = 1;
    while (count < 100) {
        if (count % 2 == 0) {
            dsSoChanW += count + " ";
        } else {
            dsSoLeW += count + " ";
        }
        count++;
    }
    document.getElementById("result1While").innerHTML = "Số chẵn: " + dsSoChanW + "; " + "<br>" + "Số lẻ: " + dsSoLeW;
}


// Đếm số chia hết cho 3
document.getElementById("btnChiaBaFOR").onclick = function () {
    var soChiaBa = 0;

    for (var i = 0; i <= 1000; i++) {
        //kiểm tra số chia hết cho 3
        if (i % 3 == 0) {
            soChiaBa += 1;
        }
    }
    console.log(soChiaBa);
    document.getElementById("result2FOR").innerHTML = "Số chia hết cho 3 từ 0 - 1000: " + soChiaBa;
}

document.getElementById("btnChiaBaWHILE").onclick = function () {
    var soChiaBa = 0;
    var count = 0;
    while (count <= 1000) {
        if (count % 3 == 0) {
            soChiaBa += 1;
        }
        count++;
        console.log(soChiaBa);
    }
    document.getElementById("result2WHILE").innerHTML = "Số chia hết cho 3 từ 0 - 1000: " + soChiaBa;
}


// Tìm số nguyên dương nhỏ nhất sao cho:1 + 2 + … + n > 10000
document.getElementById("btn3FOR").onclick = function () {
    var total = 0;

    for (var i = 0; i < 10000; i++) {
        if (total < 10000) {
            total += i;
        } else {
            break;
        }
    }
    if (total > 10000) {
        i = i - 1
    }
    document.getElementById("result3FOR").innerHTML = "Số nguyên dương nhỏ nhất cần tìm: " + i;
}

document.getElementById("btn3WHILE").onclick = function () {
    var total = 0;

    var count = 0;
    while (count < 10000) {
        if (total < 10000) {
            total += count;
        } else {
            break;
        }
        count++;
    }
    if (total > 10000) {
        count = count - 1
    }
    document.getElementById("result3WHILE").innerHTML = "Số nguyên dương nhỏ nhất cần tìm: " + count;
}


// tính tổng: S(n) = x + x^2 + x^3 +… + x^n
document.getElementById("btn4FOR").onclick = function () {
    var x = Number(document.getElementById("soX").value);
    var n = Number(document.getElementById("soN").value);

    var total = 0;

    for (var i = 1; i <= n; i++) {
        if (i <= n) {
            total += x ** i;
        } else {
            break;
        }
    }
    document.getElementById("result4FOR").innerHTML = "Tổng: " + total;
}

document.getElementById("btn4WHILE").onclick = function () {
    var x = Number(document.getElementById("soX").value);
    var n = Number(document.getElementById("soN").value);

    var total = 0;

    var count = 1;
    while (count <= n) {
        total += x ** count;
        count++;
    }
    document.getElementById("result4WHILE").innerHTML = "Tổng: " + total;
}

// Tính giai thừa 1*2*...n
document.getElementById("btn5FOR").onclick = function () {
    var numb = Number(document.getElementById("inputNumb").value);
    var total = 1;
    for (var i = 1; i <= numb; i++) {
        if (i <= numb) {
            total = total * i;
        } else {
            break;
        }
    }
    document.getElementById("result5FOR").innerHTML = "Kết quả: " + total;
}



// Tạo Div Xanh-Đỏ

document.getElementById("btn6FOR").onclick = function () {
    for (var i = 1; i <= 10; i++) {
        var div = document.createElement("div");
        document.getElementById("content").appendChild(div);
        if (i % 2 == 0) {
            div.style.cssText = "padding: 20px; background-color: red;";
            div.innerHTML = "Thẻ Chẵn"
        } else {
            div.style.cssText = "padding: 20px; background-color: blue;";
            div.innerHTML = "Thẻ Lẻ"
        }
    }
}


// In số nguyên tố
function checkPrime(numb) {
    if (numb <= 1) {
        return false;
    } else {
        for (var i = 2; i < numb; i++) {
            if (numb % i == 0) {
                return false;
            }
        }
    } return true;
}
function xuatSoNguyen() {
    var numb = Number(document.getElementById("inputSoNT").value);
    var result = "";
    for (var i = 2; i <= numb; i++) {
        if (checkPrime(i) == true) {
            result += i + " ";
        }
    }
    document.getElementById("result7FOR").innerHTML = "Kết quả: " + result
} document.getElementById("btn7FOR").onclick = xuatSoNguyen;