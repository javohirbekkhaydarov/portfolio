

const forms =  document.querySelectorAll("form");

forms.forEach(item => {
    postData(item)
})

function postData(form) {
    form.addEventListener("submit" , (e) => {
        e.preventDefault();
      
        const request = new XMLHttpRequest()
        request.open("POST" , "input.php")
        request.setRequestHeader("Content-type" , "application/json")

        const formData = new FormData(form)

        const object = {}
        formData.forEach(function (value , key) {
            object[key] = value
        })

        const json = JSON.stringify(object)

        request.send(json)

        request.addEventListener("load" , ()=> {
            if(request.status = 200) {
                console.log(request.response);
                form.reset()
            }
            else{
              console.log("ishlamayapti jigit");
            }

        })
    })
}






  // const forms = document.querySelectorAll('form')

  // const message = {
  //   loading: 'img/form/spinner.svg',
  //   success: 'Murojatingiz qabul qilindi',
  //   failure: 'Error'
  // }

  // forms.forEach(item => {
  //   postData(item)
  // })

  // function postData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault()

  //     const statusMessage = document.createElement('img')
  //     statusMessage.src = message.loading;
  //     statusMessage.style.cssText = `
  //       display: block;
  //       margin: 0 auto
  //     `
  //     form.insertAdjacentElement('afterend', statusMessage)

  //     const request = new XMLHttpRequest()
  //     request.open('POST', 'input.php')
  //     request.setRequestHeader('Content-type', 'application/json')
  //     const formData = new FormData(form)

  //     const object = {}
  //     formData.forEach(function (value, key){
  //       object[key] = value
  //     })

  //     const json = JSON.stringify(object)

  //     request.send(json)

  //     request.addEventListener('load', () => {
  //       if (request.status === 200) {
  //         console.log(request.response)
  //         showThanksModal(message.success)
  //         form.reset()
  //         statusMessage.remove()
  //       }else{
  //         showThanksModal(message.failure)
  //       }
  //     })
  //   })
  // }

  