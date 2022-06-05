const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

circles.forEach((circle, idx)=> {
    circle.addEventListener(('click'), ()=> {
      if(idx < currentActive){
        currentActive = idx + 1 
        update()
      }
    })  
})

next.addEventListener('click', ()=>{
  currentActive ++

  if(currentActive > circles.length){
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', ()=>{
  currentActive --

  if(currentActive < 1){
    currentActive = 1  
  }
  update()
})

function update() {
  circles.forEach((circles, idx) => {
    if(idx < currentActive){
      circles.classList.add('active')
    } else {
      circles.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')
  const perc = ((actives.length-1) / (circles.length-1 ))
  progress.style.width = perc*100 + '%'
  prev.disabled = false
  next.disabled = false
  if(currentActive === 1) {
    prev.disabled = true
    next.disabled = false
  } 
  if(currentActive === circles.length) {
    next.disabled = true
    prev.disabled = false
  }
  console.log(currentActive)
}