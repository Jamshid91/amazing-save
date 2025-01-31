const watch_btn = document.querySelector('button.watch'),
      cancel_btn = document.querySelector('button.cancel-btn'),
      save_btn = document.querySelector('button.save-btn'),
      desired_price = document.getElementById('desired-price'),
      email_address = document.getElementById('email-address');

let elem = watch_btn.parentElement.parentElement;
let count = 0;
watch_btn.addEventListener('click', () => {
    if(count == 0) {
        elem.classList.add('d-none');
        elem.nextElementSibling.classList.remove('d-none');
        elem.parentElement.style.position = 'relative'

        return count = 1;
    } else {
        watch_btn.parentElement.nextElementSibling.classList.add('d-none');
        watch_btn.style.background = '#00B5EE'
        desired_price.value = ''
        email_address.value = ''

        
        return count = 0;
    }
});

cancel_btn.addEventListener('click', () => {
    elem.classList.remove('d-none');
    elem.nextElementSibling.classList.add('d-none');
    elem.parentElement.style.position = 'sticky'
});

desired_price.addEventListener("keyup",(event)=>{
    let tempNumber = desired_price.value.replace(/,/gi, "");
    let commaSeparatedNumber = tempNumber.split(/(?=(?:\d{3})+$)/).join(",");
    desired_price.value = commaSeparatedNumber;
})


save_btn.addEventListener('click', () => {
    let desired_price_val = desired_price.value.trim(),
    email_address_val = email_address.value.trim();
    if(desired_price_val != '' &  isEmail(email_address_val)) {
        elem.classList.remove('d-none');
        elem.nextElementSibling.classList.add('d-none');
        elem.parentElement.style.position = 'sticky';
        watch_btn.parentElement.nextElementSibling.classList.remove('d-none')
        watch_btn.style.background = '#FF3495'
    }

    if(desired_price_val === '') {
        desired_price.classList.add('error')
    } else {
        desired_price.classList.remove('error')
    }

    
    if(email_address_val === '') {
        email_address.classList.add('error')
      }
      else if(!isEmail(email_address_val)) {
        email_address.classList.add('error')
      }
       else {
        email_address.classList.remove('error')
    }
})

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }