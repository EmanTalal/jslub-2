// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

// Image files
/*
1-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg

2-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg

3-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg

4-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg

5-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg

6-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg

7-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg

8-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg

9-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg
*/

// Variables
// 1 - get channel from the remote
// 2 - get the screen and change in the image in there

// Pseudo-code
// Variable1, listen to it for a click
// function() {Listener would update the image in the screen}

// let image1 = 'joker.jpg';
// let image2 = 'header1.jpg';
// let isImage1 = true;

// function buttonChangeT() {
//     if (isImage1) {
//         let one = document.getElementById("one")
//         one.style.backgroundImage = `url(${image1})`;
//     } else {
//         let two = document.getElementById("two")
//         two.style.backgroundImage = `url(${image2})`;
//     }
//     isImage1 = !isImage1;
// }

// وظيفة لتغيير القناة
// function changeChannel(channel) {
//     const tvImage = document.getElementById('tv-show');
//     let imageUrl = '';

//     switch (channel) {
//         case 'one':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
//             break;
//         case '2':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
//             break;
//         case '3':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
//             break;
//         case '4':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
//             break;
//         case '5':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
//             break;
//         case '6':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
//             break;
//         case '7':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
//             break;
//         case '8':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
//             break;
//         case '9':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
//             break;
//         default:
//             console.log('Invalid channel');
//             return;
//     }

//     tvImage.src = imageUrl;
// }

// إضافة المستمعين للأزرار
// const buttons = document.querySelectorAll('ul');
// for (let i = 0; i < querySelectorAll.length; i++) {
//     buttons.addEventListener('click', () => {
//         let channel = buttons.getAttribute('li');
//         changeChannel(channel);
//     });
// }

// let image1 = document.getElementsByTagName("img")[1];
// let btn = document.getElementsByClassName('channel')[0];

// btn.addEventListener('click', function) {

// }
// btn.addEventListener('clikc', () => {
//     switch (channel) {
//         case 'one':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
//             break;
//         case 'two':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
//             break;
//         case 'three':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
//             break;
//         case '4':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
//             break;
//         case '5':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
//             break;
//         case '6':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
//             break;
//         case '7':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
//             break;
//         case '8':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
//             break;
//         case '9':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
//             break;
//         default:
//             console.log('Invalid channel');
//             return;
//     }



// })

// function changeChannel(channel) {
//     const tvImage = document.getElementById('tv-show');
//     let imageUrl = '';

//     switch (channel) {
//         case '1':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
//             break;
//         case '2':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
//             break;
//         case '3':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
//             break;
//         case '4':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
//             break;
//         case '5':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
//             break;
//         case '6':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
//             break;
//         case '7':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
//             break;
//         case '8':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
//             break;
//         case '9':
//             imageUrl = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
//             break;
//         default:
//             console.log('Invalid channel');
//             return;
//     }

//     tvImage.src = imageUrl;
// }

// الحصول على جميع الأزرار
let buttons = document.querySelectorAll('li');
let image = document.getElementsByTagName("img")[1]
    // إضافة مستمع للأحداث لكل زر باستخدام حلقة for
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let channel = buttons[i].getAttribute('id');
        if (channel == "one") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
        } else if (channel == "two") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
        } else if (channel == "three") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';

        } else if (channel == "four") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';

        } else if (channel == "five") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';

        } else if (channel == "six") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';

        } else if (channel == "seven") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';

        } else if (channel == "eight") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg'
        } else if (channel == "nine") {
            image.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';

        }



    });
}