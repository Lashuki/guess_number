const guessInput = document.getElementById('guess-input');

// const guessButton = document.getElementById('guess-button');

// const message = document.getElementById('message');

// const result = document.getElementById('result');

 

// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let guessCount = 0;

 

// guessButton.addEventListener('click', () => {

//   const guess = parseInt(guessInput.value);

//   guessButton.innerHTML = "გამოცნობა";

//   guessInput.style.display = "inline-block";

 

//   if (isNaN(guess)) {

//     result.textContent = "გთხოვთ შეიყვანოთ რიცხვი.";

//     return;

//   }

 

//   guessCount++;

 

//   if (guess === secretNumber) {

//     result.textContent = `გილოცავთ ! თქვენ გამოიცანით რიცხვი ${guessCount} ცდაში.`;

//     guessButton.innerHTML = "თავიდან თამაში";

//     guessInput.style.display = "none";

//     secretNumber = Math.floor(Math.random() * 10) + 1;

//     guessCount= 0;

 

//   } else if (guess < secretNumber) {

//     result.textContent = "ჩაწერილი რიცხვი ნაკლებია ჩაფიქრებულზე. კიდევ სცადეთ.";

//   } else {

//     result.textContent = "ჩაწერილი რიცხვი მეტია ჩაფიქრებულზე. კიდევ სცადეთ.";

//   }

 

//   guessInput.value = "";

// });


// console app  

 

  function guessNumber() {

    const secretNumber = Math.floor(Math.random() * 20); //რენდომად დაგენერირებული რიცხვი 1-20 მდე

    let guessCount = 0;

    let guessed = false;

    console.log(secretNumber)

 

    while (!guessed) {

      const guess = parseInt(prompt("გამოიცანით რიცხვი 1 დან 20 -ის ჩათვლით: "));

     

 

      if (isNaN(guess)) {

        console.log("გთხოვთ შეიყვანოთ რიცხვი 1 დან 20 მდე");

        continue;

      }

 

      guessCount++;

 

      if (guess === secretNumber) {

        console.log("გილოცავთ ! თქვენ გამოიცანით რიცხვი", guessCount, " - ცდაში.");

        alert("გილოცავთ, თქვენ გამოიცანით " + guessCount + " - ცდაში")

        guessed = true;

 

        const playAgain = prompt("კიდევ გნებავთ თამაში ? (დიახ/არა): ");

      if (playAgain.toLowerCase() === "დიახ") {

        guessNumber(); // თავიდან დაწყება

      } else {

        console.log("მადლობა თამაშისთვის !");

      }

 

      } else if (guess < secretNumber) {

        console.log("ნაკლებია ჩაფიქრებულ რიცხვზე. კიდევ სცადეთ");

        alert("ნაკლებია ჩაფიქრებულ რიცხვზე. კიდევ სცადეთ");

 

      } else {

        console.log("მეტია ჩაფიქრებულ რიცხვზე. კიდევ სცადეთ");

        alert("მეტია ჩაფიქრებულ რიცხვზე. კიდევ სცადეთ");

 

      }

 

    }

  }

 

  guessNumber();