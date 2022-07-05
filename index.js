let rate1 = document.getElementById('rate1')
let rate2 = document.getElementById('rate2')
let rate3 = document.getElementById('rate3')
let rate4 = document.getElementById('rate4')
let rate5 = document.getElementById('rate5')
let rate = document.getElementById('thanks')
let mainpage = document.getElementById('mainpage')
let thankYouPage = document.getElementById('Thankyou')
let submit = document.getElementById('submit')
let review = document.getElementById('review')


console.log(rate1.checked)

submit.addEventListener('click', function submit(){
    mainpage.style.display = 'none'
    thankYouPage.style.display = 'block'
    if(rate1.checked){
        rate.textContent = 1
    }
    else if(rate2.checked){
        rate.textContent = 2
    }
    else if(rate3.checked){
        rate.textContent = 3
    }
    else if(rate4.checked){
        rate.textContent = 4
    }
    else if(rate5.checked){
        rate.textContent = 5
    }
    else{
    review.textContent = 'oops, no rating from you  😔 '
    }
    
   
})