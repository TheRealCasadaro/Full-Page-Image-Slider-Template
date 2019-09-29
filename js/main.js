let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    // Clear all images
    function reset(){
        for(let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none"
        }
        console.log("First reset complete")
    }

    // Initializes The Slider 
    function startSlider(){
        console.log("slider started")
        reset()
        sliderImages[0].style.display = 'block'
        console.log("Image Displayed, waiting for click")
    }
    
    // show Prev
    function sliderLeft(){
        reset()
        sliderImages[current - 1].style.display = 'block'
        current--
    }

    // show Next
    function sliderRight(){
        reset()
        sliderImages[current + 1].style.display = 'block'
        current++
    }

    // Left Arrow Click
    arrowLeft.addEventListener('click',function(){
        console.log("left Button Clicked")
        if(current === 0){
            console.log("current is equal to 0")
            current = sliderImages.length
        }
        console.log("current not equal to 0, triggering Left Slider")
        sliderLeft()
    })

    // Right Arrow Click
    arrowRight.addEventListener('click',function(){
        if(current === sliderImages.length - 1){
            current = -1
        }
        sliderRight()
    })

    startSlider()


    