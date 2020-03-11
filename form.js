function hitung() {
    nilai_1 = eval(form.nilai1.value);
    nilai_2 = eval(form.nilai2.value);
    nilai_3 = eval(form.nilai3.value);
    nilai_4 = eval(form.nilai4.value);
    nilai_5 = eval(form.nilai5.value);

    average();
    highest();
    lowest();
    median();
}

//average
function average() {
    rata_rata = (nilai_1 + nilai_2 + nilai_3 + nilai_4 + nilai_5) / 5
    form.avg.value = rata_rata;
}

function highest() {
    var number = [nilai_1, nilai_2, nilai_3, nilai_4, nilai_5]
    var maks = Math.max.apply(Math, number);
    form.max.value = maks;
}

function lowest() {
    var number = [nilai_1, nilai_2, nilai_3, nilai_4, nilai_5]
    var minimum = Math.min.apply(Math, number);
    form.min.value = minimum;
}

function median() {
    var number = [nilai_1, nilai_2, nilai_3, nilai_4, nilai_5]
    number.sort((nilai1, nilai2) => nilai1 - nilai2);
    var lowMiddle = Math.floor((number.length - 1) / 2);
    var highMiddle = Math.ceil((number.length - 1) / 2);
    var hasilmedian = (number[lowMiddle] + number[highMiddle]) / 2;
    form.med.value = hasilmedian;

}

function reset() {
    document.getElementById("form").reset();
    reset();
}