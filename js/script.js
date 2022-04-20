let container = document.querySelector(".wheel-container");
let btn = document.querySelector("#spin");


// Lightslider activator

  $(document).ready(function() {

    $(".lightSlider").lightSlider(); 
  });

  // View-all button click

  $('.view-all').click(()=>{
    $('.suggestions').hide();
    $('.all-view').show();
  });

  $('.fa-arrow-circle-left').click(()=>{
    $('.all-view').hide();
    $('.suggestions').show();
  })

  // spin the wheel script

let spin = Math.ceil(Math.random() * 1000);

btn.onclick = () => {
  container.style.transform = "rotate(" + spin + "deg)";
  spin += Math.ceil(Math.random() * 1000);
}

// Box toggle script
const box = document.querySelector('.box');
box.addEventListener('click', function () {
  this.classList.toggle("opening");
  setTimeout(() => {
    this.classList.toggle("open");
  }, 500);
});

// Card flip script

const card = document.querySelector('.inner-card');

card.addEventListener('click', ()=>{
  card.classList.toggle('is-flipped');
})

// Learn array splice script

let ul = document.querySelectorAll("li");
let li = Array.from(ul);
li.forEach(item =>{
  let liNum =Array.from(item.dataset.time)
  let totallist = liNum.reduce(function(total, item){
    return total + item;
    }, 0)
    console.log(liNum);
  
})

liNum = [2,3,4,5];

liNum.splice(1,0,2,4);






// console.log(totallist);