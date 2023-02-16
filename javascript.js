                                 // 1: Generate a random number between 1 and 100.


var randomNumber = Math.floor(Math.random()*100 +1);
console.log(randomNumber);

    var player = randomNumber;
                                 
                                //2: Record the turn number the player is on. Start it on 1.
        // Adding variable to store our data 
    
    const guess_result = document.querySelector(".guess-result");   //access p tag of class = guess 
    const last_result = document.querySelector(".last-result");     //access p tag of class = last-result
    const low_or_high = document.querySelector(".low-or-high");     //access p tag of class = low-or-high

    const guess_submit = document.querySelector(".guess-submit");   //access p tag of class = guess-submit
    const guess_field = document.querySelector(".guess-field");      //access p tag of class = guess-field

    let i = 1;            
    let reset_btn;

                                              // 3: Provide the player with a way to guess what the number is.
                            
function check_guess(){
    var v = guess_field.value;
    const user_guess = Number(v);        //guess_field is user Input Number function detect the user entered value is only number value is the attribute of input element.
    
    if(i === 1){
        guess_result.innerHTML = "previous_guesses: ";
    }
    guess_result.innerHTML += user_guess + " ";
    
    if (user_guess === randomNumber) {             //            user guess/random guess
    
        last_result.textContent = "Congratulations! You got it right!";
        last_result.style.backgroundColor = "green";
        last_result.style.color = "white";
        low_or_high.textContent = '';
    
        set_game_over();
    
    }else if (i === 10){
    
        last_result.textContent = "game_over";
        low_or_high.textContent = "";
    
        set_game_over();
    
    }else{

        last_result.textContent = "wrong";
        last_result.style.backgroundColor = "red";
        last_result.style.color = "white";
        
        if (user_guess < randomNumber){
            low_or_high.textContent = "Your guess was too low";

        }else if (user_guess > randomNumber){
            low_or_high.textContent = "Your guess was too high.";
        } 
        guess_field.focus();
           
    }
    guess_field.value = "";
        i++;

    }

guess_submit.addEventListener('click', function (){
    check_guess();
});

// game over function.

function set_game_over(){
    guess_field.disabled = true;
    guess_submit.disabled = true;
    reset_btn = document.createElement('button');
    reset_btn.textContent = "start_new_game";
    document.body.append(reset_btn);
    reset_btn.addEventListener('click', reset_game_funct);
}

// reset game function.
function reset_game_funct() {

    i = 1;
  
    const resetParas = document.querySelectorAll(".result_section p");
   
    for (const resetPara of resetParas) {
     resetPara.textContent = "";
    }
  
    reset_btn.parentNode.removeChild(reset_btn);
  
     guess_field.disabled = false;
     guess_submit.disabled = false;
     guess_field.value = "";
     guess_field.focus();
  
     last_result.style.backgroundColor = "white";
  
     randomNumber = Math.floor(Math.random() * 100) + 1;
    }