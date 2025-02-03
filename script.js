const alternatives = [
    {text:"", images:"https://cdn.pixabay.com/animation/2023/09/07/23/29/23-29-39-367_512.gif"},
    {text:"Te prometo que estaran ricas", images:"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTA0Njgza2NxZWgyaDl5Y2JvcTFoamdnc3dkN3U4Y2F5ODFpczUwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Aok5sXZk4e3b4VNPk1/giphy.gif"},
    {text:"Ademas dulces de lo que te gustan", images:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VybG44eGV0ZWdmc2FteTM1YnpnYW5mNWpoMzY5N2E4eG9tdTByZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T0lDZRL4kAAuutYRaK/giphy.gif"},
    {text:"y luego nos acurrucamos!!", images:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2J2a295NGV5ODhkOWRkcmplcTNwNjZqand2ZTM0MGQ1M2lxOWRvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RJzg2ep1uR6prHcbAV/giphy.gif"},
    {text:"Si no comere solo :(", images:"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2JxNGFrc3U4enFxdWliaDQ4cmlha3J0M3l5cnJqcTV5ZWFod2YwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U3qLhx8fs21WByWSda/giphy.gif"}
];
const ohyes = {text:"Sabía que aceptarías", images:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmZpa2VrbDh2ZzFubWp3ZnYxeTd5emJvOGE2dThyOXhlc2V2eXI2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zZHqN21xZrM27sbhwC/giphy.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'SI'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});