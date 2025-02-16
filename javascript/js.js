document.addEventListener("DOMContentLoaded", function () {

    //1
  let str = "abcde";
    alert(str[0]);
    alert(str[1]);
    alert(str[2]);
    alert(str[3]);
    alert(str[4]);

  
    //2
    let a = prompt("Введите первое число:");
     let b = prompt("Введите второе число:");
    console.log(a > 0 || b > 0);
  
    //3
  
    let  age = prompt("возраст?:");
    if (age >= 18)
      {console.log("Совершеннолетний")}

    else 
      {console.log("Несовершеннолетний")};
  });
