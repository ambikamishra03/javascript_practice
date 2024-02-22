(function () {
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let equal = document.querySelector('.btn-equal')
    let clear = document.querySelector('.btn-clear')


    // for clicking buttons
    buttons.forEach(function (button){
        button.addEventListener('click',function(e) {
          let value = e.target.dataset.num;
          screen.value +=value
        })
    });


    // for clicking = 
        equal.addEventListener('click',function(e) {
          if(screen.value === ''){
            screen.value = ''
          }else{
            let answer = eval(screen.value);
            screen.value=answer
          }
        })

         // for clicking clear (C)
         clear.addEventListener('click',function(e) {
              screen.value = ''
          })




}())