const remainingSeats = getConvertedValue('remaining-seats');
const selectedSeat = getConvertedValue('selectedSeat');
const seatInfo = document.getElementById('seat-info');
const couponBtn = document.getElementById('apply-copun');
let totalPrice = document.getElementById('totalPrice');
let grandTotalPrice = document.getElementById('grandTotalPrice')
let bookingSeats = []
const allSeats = document.getElementsByClassName('seat')
for (const seat of allSeats) {
    seat.addEventListener("click", function (e) {
        seat.style.background = 'rgb(29 209 0 / var(--tw-bg-opacity))'
        if (e.target.innerText === bookingSeats[0] || e.target.innerText === bookingSeats[1] || e.target.innerText === bookingSeats[2] || e.target.innerText === bookingSeats[3]) {
            alert("This seat already selected")
        } else {
            bookingSeats.push(e.target.innerText);
            const quantityBukingSeats = bookingSeats.length;

            if (quantityBukingSeats > 4) {
                alert("You can Selected only 4 seats")
            } else {
                // remaining seats calculation start
                const totalRemainingSeats = remainingSeats - quantityBukingSeats;
                document.getElementById('remaining-seats').innerText = totalRemainingSeats;
                //Selected seats quantity
                document.getElementById('selectedSeat').innerText = quantityBukingSeats;
                const tr=document.createElement('tr')
                const tdSeatName = document.createElement('td')
                tdSeatName.textContent = e.target.innerText;
                tr.appendChild(tdSeatName)

                const tdSeatClassName = document.createElement('td')
                tdSeatClassName.textContent = "Economy"
                tdSeatClassName.classList.add('text-center')
                tr.appendChild(tdSeatClassName)

                const tdPrice = document.createElement('td')
                tdPrice.textContent = 550
                tdPrice.classList.add('text-end')
                tr.appendChild(tdPrice)

                seatInfo.appendChild(tr)
                // total price calculation
                const totalSitPrice = quantityBukingSeats * 550
                totalPrice.innerText = totalSitPrice;
                grandTotalPrice.innerText = totalSitPrice;
                // coupon code calculation
                if(quantityBukingSeats=== 4){
                    document.getElementById('apply-copun').disabled = false
                    couponBtn.addEventListener('click',function(){
                      let  couponCode = document.getElementById('coupon')
                      let couponCodeValue = couponCode.value;
                      if(couponCodeValue === "NEW15"){
                        const discount = 0.15;
                        const totalDiscount = (quantityBukingSeats * 550) * discount;
                        grandTotalPrice.innerText = totalSitPrice - totalDiscount;
                        couponCode.value = " "
                      }
                      if(couponCodeValue === "Couple 20"){
                        const coupleDiscount = 0.2
                        const totalcoupleDiscount = (quantityBukingSeats * 550) * coupleDiscount;
                        grandTotalPrice.innerText = totalSitPrice - totalcoupleDiscount;
                        couponCode.value = " "
                      }
                      
                    })
                }
            }
        }
    })
}
// Next button section 
const number = document.getElementById('number')
const numberValue = number.value
const name = document.getElementById('name');
const email = document.getElementById('email')
const nextButton = document.getElementById('nextButton')
console.log(numberValue);
number.addEventListener('input',function(e){
    if(e.target.value.length>7){
        nextButton.disabled = false
    }
})

nextButton.addEventListener('click',function(){
    if(name.value == " " || email.value == "" ){
        alert("Did not provide your name or email")
    }else{
        document.getElementById('my_modal_1').showModal()
        event.preventDefault()
        name.value =" "
        email.value = " "
        number.value = " "
        nextButton.disabled = true

    }
    
})

function getConvertedValue(id) {
    const myValue = document.getElementById(id).innerText
    const convertedMyValue = Number(myValue)
    return convertedMyValue;
}
