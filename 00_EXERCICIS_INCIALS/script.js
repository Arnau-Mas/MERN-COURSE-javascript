/* //Asignaciones y cálculos

function numeros(a,b){
    console.log(`El primer número es ${a} y el segundo número es ${b}`)
  }
  
  function mayor(a,b,c){
    let response = `El número mayor es ${a}`
    if(b>a && b>c){
      response = `El número mayor es ${b}`
    }else if(c>a && c>b){
      response = `El número mayor es ${c}`
    }
    console.log(response)
  }
  
  function calcula(a,b){
    let suma = `${a}+${b}=${a+b}`;
    let resta = `${a}-${b}=${a-b}`;
    let multiplicacion = `${a}*${b}=${a*b}`;
    let division = `${a}/${b}=${a/b}`;
    console.log(suma, resta, multiplicacion, division)
  }
  
  function xx(chicos, chicas){
    let result = (chicas*100)/(chicos+chicas);
    console.log(`El porcentaje de chicas es ${result.toFixed(2)}%`)
  }
  
  numeros(1,2)
  mayor(5,4,3)
  calcula(2,2)
  xx(20,10)
  
  //Comparaciones
  
  function compara(a,b){
    let result = `${a} es mayor que ${b}`;
    if(b>a){
       result = `${b} es mayor que ${a}`;
       }
    console.log(result);
  }
  
  function operacion(number1, number2, operation){
    let result ="Operación desconocida";
    switch(operation){
      case "s": result = `La suma es: ${number1+number2}`;
      break;
      case "r": result = `La resta es: ${number1-number2}`;
      break;
      case "m": result = `La multiplicación es: ${number1*number2}`
      break;
      case "d": result = `La división es: ${number1/number2}`
      break;
    }
    console.log(result)
  }
  
  function anyo(num){
    let result = `${num} no es bisiesto`
    let number4 = num/4;
    let number100 = num/100;
    let number400 = num/400;
  
    if((Number.isInteger(number4) && !Number.isInteger(number100)) || Number.isInteger(number400)){
      result = `${num} es bisiesto`
    };
    
    console.log(result)
  }
  
  compara(2,4)
  operacion(4,2, "e")
  anyo(2023)
  
  //Bucles
  function numEntre1y10(){
    let isCorrect = false;
    while(!isCorrect){
        let a= Number(prompt("Introduce un número del 1 al 10"));
        if(a>0 && a<11 && !isNaN(a)){
          console.log("hola")
          isCorrect = true;
        }
    }
  }

  function sumarNumHasta0(){
    let sumNumbers = 0;
    let isZero = false;
    while(!isZero){
      let number = Number(prompt("Introduce un número hasta 0"));
      if(!isNaN(number)){
        sumNumbers += number;
      }
      if(number == 0){
          isZero = true;
          console.log("La suma es: ", sumNumbers)
      }
    }
  }
    function pedirNumHasta0(){
    let numbers = [];
    let isZero = false;
    while(!isZero){
      let number = Number(prompt("Introduce un número hasta 0"));
      if(!isNaN(number)){
        numbers.push(number);
      }else{
        console.log("error")
      }
      if(number == 0){
          if(numbers[0] == 0){
            console.log("error")
          }else{
            isZero = true;
            numbers.sort();
            numbers.shift();
            let numbersLength = numbers.length;
            console.log("El número más bajo es: ", numbers[0]);
            console.log("El numero más alto es: ", numbers[numbers.length-1])
            const initialValue = 0;
            const sumWithInitial = numbers.reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              initialValue
            );
            console.log("La media es: ", sumWithInitial/numbersLength);
          }
      }
    }
  }

  function productoFactorial(num){
  let factorial = 1;
  for(let i=num; i>0; i--){
      factorial *=i;
  }
  console.log(factorial);
}

function pedirPassword(){
  let passwordPrompt = 0;
  const password = 1234;
  let isCorrect = false;
  let contador = 0;
  while(!isCorrect && contador<3){
    contador++;
    passwordPrompt = prompt("Introduce la password");
    if(passwordPrompt != 1234){
      alert("Incorrecta");
    }else{
      alert("Correcto!");
      isCorrect=true;
    }
  }
}

function pedirSegundos(){
  let parrafo = document.querySelector("#tiempo");
  let num = prompt("Introduce un número de segundos");
  parrafo.innerHTML = num;
  let intervalo = setInterval(function() {
    if(num==1){
      parrafo.innerHTML ="BOOM";
      clearInterval(intervalo);
    }else{
      num--;
      parrafo.innerHTML = num;
    }
  }, 1000);
}

  numEntre1y10();
  sumarNumHasta0(); 
  pedirNumHasta0();
  productoFactorial();
  pedirPassword();
  pedirSegundos();
  */

  function sumaDePares(num){
    let numero = num;
    let suma = 0;
    if(numero%2==0){
      suma+=numero;
      numero--;
    }else{
      numero--;
    }
  }




