let pict = document.getElementById("homeprofile");
let vid = document.getElementById("homeprofile2");
var borRad1 = "25% 10%;"
var borRad2 = "10px 100px / 120px;"
pict.style.borderRadius=borRad1

pict.addEventListener('mouseenter', handleMouseEnter);
pict.addEventListener('mouseleave', handleMouseLeave);
vid.addEventListener('mouseenter', handleMouseEnter);
vid.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter() {

  pict.classList.add('d-none')
  vid.classList.add('d-block')
  vid.style.borderRadius=borRad2
  vid.style.transition="border-radius 0.5s";
  vid.classList.remove('d-none')
}

function handleMouseLeave() {
  vid.classList.add('d-none')
  pict.classList.add('d-block')
  pict.classList.remove('d-none')

}

let skillCard1 = document.getElementById('skillCard1');
let skillBody1 = document.getElementById('skillBody1')
let skillCard2 = document.getElementById('skillCard2');
let skillBody2 = document.getElementById('skillBody2')
let skillCard3 = document.getElementById('skillCard3');
let skillBody3 = document.getElementById('skillBody3')
let skillCard4 = document.getElementById('skillCard4');
let skillBody4 = document.getElementById('skillBody4')
let skillCard5 = document.getElementById('skillCard5');
let skillBody5 = document.getElementById('skillBody5')
let skillCard6 = document.getElementById('skillCard6');
let skillBody6 = document.getElementById('skillBody6')
let skillCard7 = document.getElementById('skillCard7');
let skillBody7 = document.getElementById('skillBody7')
let skillCard8 = document.getElementById('skillCard8');
let skillBody8 = document.getElementById('skillBody8')
let skillCard9 = document.getElementById('skillCard9');
let skillBody9 = document.getElementById('skillBody9');
let skillCard10 = document.getElementById('skillCard10');
let skillBody10 = document.getElementById('skillBody10');
const nonTech1 = document.getElementById('nonTech1');
const nonTech2 = document.getElementById('nonTech2');
const nonTech3 = document.getElementById('nonTech3');
const nonTech4 = document.getElementById('nonTech4');
let tBody1 = document.getElementById('tBody1')
let tBody2 = document.getElementById('tBody2')
let tBody3 = document.getElementById('tBody3')
let tBody4 = document.getElementById('tBody4')



var defaultBorderRadius = "20%"
var newBorderRadius = "15px"
var defaultBackgroundColor = "#1B2328"
var newBackgroundColor = "#3e4346"

  skillCard1.addEventListener('mouseenter', function skillCardOne(){
  skillBody1.classList.add('d-block')
  skillBody1.classList.remove('d-none')
  skillCard1.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard1.style.borderRadius=newBorderRadius;
  skillCard1.style.backgroundColor = newBackgroundColor
});

skillCard2.addEventListener('mouseenter', function skillCardOne(){
  skillBody2.classList.add('d-block')
  skillBody2.classList.remove('d-none')
  skillCard2.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard2.style.borderRadius=newBorderRadius;
  skillCard2.style.backgroundColor = newBackgroundColor
});

skillCard3.addEventListener('mouseenter', function skillCardOne(){
  skillBody3.classList.add('d-block')
  skillBody3.classList.remove('d-none')
  skillCard3.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard3.style.borderRadius=newBorderRadius;
  skillCard3.style.backgroundColor = newBackgroundColor
});

skillCard4.addEventListener('mouseenter', function skillCardOne(){
  skillBody4.classList.add('d-block')
  skillBody4.classList.remove('d-none')
  skillCard4.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard4.style.borderRadius=newBorderRadius;
  skillCard4.style.backgroundColor = newBackgroundColor
});

skillCard5.addEventListener('mouseenter', function skillCardOne(){
  skillBody5.classList.add('d-block')
  skillBody5.classList.remove('d-none')
  skillCard5.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard5.style.borderRadius=newBorderRadius;
  skillCard5.style.backgroundColor = newBackgroundColor
});

skillCard6.addEventListener('mouseenter', function skillCardOne(){
  skillBody6.classList.add('d-block')
  skillBody6.classList.remove('d-none')
  skillCard6.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard6.style.borderRadius=newBorderRadius;
  skillCard6.style.backgroundColor = newBackgroundColor
});

skillCard7.addEventListener('mouseenter', function skillCardOne(){
  skillBody7.classList.add('d-block')
  skillBody7.classList.remove('d-none')
  skillCard7.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard7.style.borderRadius=newBorderRadius;
  skillCard7.style.backgroundColor = newBackgroundColor
});

skillCard8.addEventListener('mouseenter', function skillCardOne(){
  skillBody8.classList.add('d-block')
  skillBody8.classList.remove('d-none')
  skillCard8.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard8.style.borderRadius=newBorderRadius;
  skillCard8.style.backgroundColor = newBackgroundColor
});

skillCard9.addEventListener('mouseenter', function skillCardOne(){
  skillBody9.classList.add('d-block')
  skillBody9.classList.remove('d-none')
  skillCard9.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard9.style.borderRadius=newBorderRadius;
  skillCard9.style.backgroundColor = newBackgroundColor
});

skillCard10.addEventListener('mouseenter', function skillCardOne(){
  skillBody10.classList.add('d-block')
  skillBody10.classList.remove('d-none')
  skillCard10.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard10.style.borderRadius=newBorderRadius;
  skillCard10.style.backgroundColor = newBackgroundColor
});

nonTech1.addEventListener('mouseenter', function skillCardOne(){
  tBody1.classList.add('d-block')
  tBody1.classList.remove('d-none')
  nonTech1.style.transition = "border-radius 0.5s, background-color 0.5s";
  nonTech1.style.borderRadius=newBorderRadius;
  nonTech1.style.backgroundColor = newBackgroundColor
});

nonTech2.addEventListener('mouseenter', function skillCardOne(){
  tBody2.classList.add('d-block')
  tBody2.classList.remove('d-none')
  nonTech2.style.transition = "border-radius 0.5s, background-color 0.5s";
  nonTech2.style.borderRadius=newBorderRadius;
  nonTech2.style.backgroundColor = newBackgroundColor
});

nonTech3.addEventListener('mouseenter', function skillCardOne(){
  tBody3.classList.add('d-block')
  tBody3.classList.remove('d-none')
  nonTech3.style.transition = "border-radius 0.5s, background-color 0.5s";
  nonTech3.style.borderRadius=newBorderRadius;
  nonTech3.style.backgroundColor = newBackgroundColor
});

nonTech4.addEventListener('mouseenter', function skillCardOne(){
 tBody4.classList.add('d-block')
 tBody4.classList.remove('d-none')
 nonTech4.style.transition = "border-radius 0.5s, background-color 0.5s";
 nonTech4.style.borderRadius=newBorderRadius;
 nonTech4.style.backgroundColor = newBackgroundColor
});


// MOUSE LEAVE----------------------------------------------------------------------
nonTech1.addEventListener('mouseleave', function skillCardLeave1(){
  tBody1.classList.add('d-none')
  tBody1.classList.remove('d-block')
  nonTech1.style.transition = "border-radius 0.5s, background-color 0.5s";
  nonTech1.style.borderRadius=defaultBorderRadius;
  nonTech1.style.backgroundColor = defaultBackgroundColor;
})

nonTech2.addEventListener('mouseleave', function skillCardLeave1(){
  tBody2.classList.add('d-none')
  tBody2.classList.remove('d-block')
  nonTech2.style.transition = "border-radius 0.5s, background-color 0.5s";
  nonTech2.style.borderRadius=defaultBorderRadius;
  nonTech2.style.backgroundColor = defaultBackgroundColor;
})

nonTech3.addEventListener('mouseleave', function skillCardLeave1(){
  tBody3.classList.add('d-none')
  tBody3.classList.remove('d-block')
  nonTech3.style.transition = "border-radius 0.5s, background-color 0.5s";
  nonTech3.style.borderRadius=defaultBorderRadius;
  nonTech3.style.backgroundColor = defaultBackgroundColor;
})

nonTech4.addEventListener('mouseleave', function skillCardLeave1(){
  tBody4.classList.add('d-none')
  tBody4.classList.remove('d-block')
  nonTech4.style.transition = "border-radius 0.5s, background-color 0.5s";
  nonTech4.style.borderRadius=defaultBorderRadius;
  nonTech4.style.backgroundColor = defaultBackgroundColor;
})


skillCard1.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody1.classList.add('d-none')
  skillBody1.classList.remove('d-block')
  skillCard1.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard1.style.borderRadius=defaultBorderRadius;
  skillCard1.style.backgroundColor = defaultBackgroundColor;
})

skillCard2.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody2.classList.add('d-none')
  skillBody2.classList.remove('d-block')
  skillCard2.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard2.style.borderRadius=defaultBorderRadius;
  skillCard2.style.backgroundColor = defaultBackgroundColor;
})

skillCard3.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody3.classList.add('d-none')
  skillBody3.classList.remove('d-block')
  skillCard3.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard3.style.borderRadius=defaultBorderRadius;
  skillCard3.style.backgroundColor = defaultBackgroundColor;
})

skillCard4.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody4.classList.add('d-none')
  skillBody4.classList.remove('d-block')
  skillCard4.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard4.style.borderRadius=defaultBorderRadius;
  skillCard4.style.backgroundColor = defaultBackgroundColor;
})


skillCard5.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody5.classList.add('d-none')
  skillBody5.classList.remove('d-block')
  skillCard5.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard5.style.borderRadius=defaultBorderRadius;
  skillCard5.style.backgroundColor = defaultBackgroundColor;
})

skillCard6.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody6.classList.add('d-none')
  skillBody6.classList.remove('d-block')
  skillCard6.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard6.style.borderRadius=defaultBorderRadius;
  skillCard6.style.backgroundColor = defaultBackgroundColor;
})

skillCard7.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody7.classList.add('d-none')
  skillBody7.classList.remove('d-block')
  skillCard7.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard7.style.borderRadius=defaultBorderRadius;
  skillCard7.style.backgroundColor = defaultBackgroundColor;
})

skillCard8.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody8.classList.add('d-none')
  skillBody8.classList.remove('d-block')
  skillCard8.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard8.style.borderRadius=defaultBorderRadius;
  skillCard8.style.backgroundColor = defaultBackgroundColor;
})
skillCard9.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody9.classList.add('d-none')
  skillBody9.classList.remove('d-block')
  skillCard9.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard9.style.borderRadius=defaultBorderRadius;
  skillCard9.style.backgroundColor = defaultBackgroundColor;
})
skillCard10.addEventListener('mouseleave', function skillCardLeave1(){
  skillBody10.classList.add('d-none')
  skillBody10.classList.remove('d-block')
  skillCard10.style.transition = "border-radius 0.5s, background-color 0.5s";
  skillCard10.style.borderRadius=defaultBorderRadius;
  skillCard10.style.backgroundColor = defaultBackgroundColor;
})

// // Function to handle the intersection event
// function handleIntersection(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } else {
//       entry.target.classList.remove('active');
//     }
//   });
// }

// // Create a new Intersection Observer
// const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// // Get the skills section element
// const skillsSection = document.getElementById('skillsSection');

// // Observe the skills section
// observer.observe(skillsSection);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      entry.target.classList.remove('inactive');
      // observer.unobserve(entry.target);
    } else {
      entry.target.classList.add('inactive');
      entry.target.classList.remove('active');

    }
  });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Get the skill cards

const skillsSection = document.getElementById('skillsSection');
const about1 = document.getElementById('about1')
const about2 = document.getElementById('about2')
const about3 = document.getElementById('about3')
const about4 = document.getElementById('about4')
const hello = document.getElementById('hello')
const iAm = document.getElementById('iAm')
const hobbiesText = document.getElementById('hobbiesText')
const photosText = document.getElementById('photosText')
const musicImg = document.getElementById('musicImg')
const projectText = document.getElementById('projectText')
const hobbiesImg1 = document.getElementById('hobbiesImg1')
const musicText = document.getElementById('musicText')
const photosImg = document.getElementById('photosImg')
const projectImg = document.getElementById('projectImg')
const contactForm = document.getElementById('contactForm')
const contacts = document.getElementById('contacts')
const contacts1 = document.getElementById('contacts1')
const contacts2= document.getElementById('contacts2')
const contacts3= document.getElementById('contacts3')
const contacts4= document.getElementById('contacts4')


// Observe each skill card
observer.observe(skillsSection);
observer.observe(about1);
observer.observe(about2);
observer.observe(about3);
observer.observe(about4);
observer.observe(hello);
observer.observe(iAm);
observer.observe(nonTech1);
observer.observe(nonTech2);
observer.observe(nonTech3);
observer.observe(nonTech4);
observer.observe(hobbiesText);
observer.observe(photosText);
observer.observe(musicImg);
observer.observe(projectText);
observer.observe(hobbiesImg1);
observer.observe(musicText);
observer.observe(photosImg);
observer.observe(projectImg);
observer.observe(contactForm);
observer.observe(contacts);
observer.observe(contacts1);
observer.observe(contacts2);
observer.observe(contacts3);
observer.observe(contacts4);