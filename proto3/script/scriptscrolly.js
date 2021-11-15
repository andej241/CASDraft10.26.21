document.addEventListener('DOMContentLoaded', async function () {

    function changeOpacity(index, opacityValue){
      let shape = document.querySelector(index)
      shape.style.opacity = opacityValue
    }
  
    const scroller = scrollama();
  
    let numberSteps = document.querySelectorAll('.scroll-step').length;
    console.log(numberSteps);
  
    scroller
      .setup({step: '.scroll-step'})

    
      .onStepEnter((response) => {
  
        if (response.index == 0) {
        changeOpacity(".first", 1)
        }
  
        else if (response.index == 1) {
          changeOpacity(".second", 1)
        }
  
        else if (response.index == 2) {
            changeOpacity(".third", 2)
        }
  
        else if (response.index == 3) {
              changeOpacity(".fourth", 3)
        }
  
        else if (response.index == 4) {
                changeOpacity(".fifth", 4)
        }
      })


      .onStepExit((response) => {
        if (response.index == numberSteps - 1) {}
      });
      
  });