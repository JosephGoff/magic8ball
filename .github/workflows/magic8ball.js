//Styling
document.body.style.backgroundColor = 'purple';

const myLabel = document.body.querySelector('label');
myLabel.style.color = 'white';

const myTitle = document.body.querySelector('h1');
myTitle.style.color = 'white';

//Images 
imgStart = 'images/magic8ball_start.png';

let img = document.createElement('img');
    img.style.width = '450px'
    img.style.height = '450px'
img.src = imgStart;
document.getElementById('answers').appendChild(img)


//Image Function
const myButton = document.body.querySelector('button');
myButton.addEventListener('click', function() {

    input = document.body.querySelector('input');
    console.log('Question:', input.value);
    if (input.value === '') {
        console.log('None')
        img.src = imgStart;
        console.log(imgStart);
    }
    else {

    const randomNumber = Math.round(Math.random() * 20);
    console.log(randomNumber);
    const imgGenerator = 'images/magic8ball_' + randomNumber + '.png';
    console.log(imgGenerator);
    img.src = imgGenerator
    }
    
});
