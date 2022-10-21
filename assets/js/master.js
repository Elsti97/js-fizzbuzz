let Boxone = document.getElementById('FizzGerard');


for (let i = 1; i <= 100; i++){
  let quadrato = document.createElement("div");
  Boxone.append(quadrato);

  if(i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz')
    quadrato.innerText = 'FizzBuzz';
    quadrato.classList.add ("bg-danger");

  }
  else if (i % 3 == 0) {
    console.log('Fizz');
    quadrato.innerText = 'Fizz';
    quadrato.classList.add ("bg-success");

  }
  else if (i % 5 == 0) {
    console.log('Buzz');
    quadrato.innerText = 'Buzz';
    quadrato.classList.add ("bg-warning");

  }
  else {
    console.log(i);
    quadrato.innerText = `${i}`;
    quadrato.classList.add ("bg-primary");
  }
} 