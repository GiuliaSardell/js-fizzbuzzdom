/*
1- definisco l'elemento row con una costante
2- creo il ciclo i<100
3-creo l'incremento
4- creo l'elemento box dentro a row
5-scrivo i dentro a box (senza lo zero)
6- creo un if per i multipli di 3 e aggiungo la classe .per3
7- creo un if per i multipli di 5 e aggiungo la classe .per5
8-creo un if per i multipli di entrembi e ci aggiungo la classe .both
*/

const row = document.querySelector('.row');

for (let i = 1; i<=100; i++){
  const box = document.createElement('div');
  box.className = 'box';
  let result = i
  
  row.append(box);
  console.log(box);


if (!(i % 3) && (i % 5)) {
  result = 'fizz';
  box.classList.add('fizz');
}

if (!(i % 5) && (i % 3)){
  result = 'buzz';
  box.classList.add('buzz');
}

if (!(i % 3) && !(i % 5)){
  result = 'fizzbuzz';
  box.classList.add('fizzbuzz');
}


box.innerHTML = result;
}



