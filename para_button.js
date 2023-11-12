// Get references to the buttons and the image/message elements
const start01Button = document.querySelector('.start01_para_button');
const start02Button = document.querySelector('.start02_para_button');
const start03Button = document.querySelector('.start03_para_button');

const start01Message = document.querySelector('.start01_para_massage');
const start02Message = document.querySelector('.start02_para_massage');
const start03Message = document.querySelector('.start03_para_massage');



start01Message.style.display = 'block';
start02Message.style.display = 'none';
start03Message.style.display = 'none';

start01Button.style.fontWeight = 'bolder';
start01Button.style.color = 'darkcyan';
start01Button.style.borderBottom = '2px solid darkcyan';

/****************************************************************** */

// Function to handle hover effect
function handleHover(button, color) {
    button.addEventListener('mouseover', () => {
        button.style.color = color;
    });

    button.addEventListener('mouseout', () => {
        button.style.color = 'gray'; // Set the default color when not hovering
    });
}

// Set hover effect for each button
handleHover(start01Button, 'darkcyan');
handleHover(start02Button, 'darkcyan');
handleHover(start03Button, 'darkcyan');


/****************************************************************** */


// Add click event listeners to the buttons
start01Button.addEventListener('click', () => {

    start01Message.style.display = 'block';
    start02Message.style.display = 'none';
    start03Message.style.display = 'none';

    start01Button.style.fontWeight = 'bolder';
    start01Button.style.color = 'darkcyan';
    start01Button.style.borderBottom = '2px solid darkcyan';
    start02Button.style.fontWeight = 'lighter';
    start02Button.style.color = 'gray';
    start02Button.style.border = 'none';
    start03Button.style.fontWeight = 'lighter';
    start03Button.style.color = 'gray';
    start03Button.style.border = 'none';

});

start02Button.addEventListener('click', () => {

    start01Message.style.display = 'none';
    start02Message.style.display = 'block';
    start03Message.style.display = 'none';

    start01Button.style.fontWeight = 'lighter';
    start01Button.style.color = 'gray';
    start01Button.style.border = 'none';
    start02Button.style.fontWeight = 'bolder';
    start02Button.style.color = 'darkcyan';
    start02Button.style.borderBottom = '2px solid darkcyan';
    start03Button.style.fontWeight = 'lighter';
    start03Button.style.color = 'gray';
    start03Button.style.border = 'none';

});

start03Button.addEventListener('click', () => {

    start01Message.style.display = 'none';
    start02Message.style.display = 'none';
    start03Message.style.display = 'block';

    start01Button.style.fontWeight = 'lighter';
    start01Button.style.color = 'gray';
    start01Button.style.border = 'none';
    start02Button.style.fontWeight = 'lighter';
    start02Button.style.color = 'gray';
    start02Button.style.border = 'none';
    start03Button.style.fontWeight = 'bolder';
    start03Button.style.color = 'darkcyan';
    start03Button.style.borderBottom = '2px solid darkcyan';

});
