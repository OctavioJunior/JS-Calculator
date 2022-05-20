function addNum(num) {
    
    let num1 = document.getElementById("telaPrinc").value;
    document.getElementById("telaPrinc").value = num1 + num;
    

    let checkList = (document.getElementById("telaPrinc").value).split("");

    console.log(checkList);
}