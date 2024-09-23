

let input = document.querySelector('#display');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (err) {
                input.value = "Error";
            }
        }
        else if (buttonText == 'AC') {
            string = "";
            input.value = string;
        }
        else if (buttonText == 'C') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += buttonText;
            input.value = string;
        }
    });
});

document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (key === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch (err) {
            input.value = "Error";
        }
    }
    else if (key === 'Escape') {
        string = "";
        input.value = string;
    }
    else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    }
    else if ('0123456789+-*/.%'.includes(key)) {
        string += key;
        input.value = string;
    }
});


 