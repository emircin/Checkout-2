const ascend = document.querySelectorAll(".ascend");
const descend = document.querySelectorAll(".descend");
const productTotal = document.querySelectorAll(".product-total");
const productPiecesPar = document.querySelector(".product-pieces-par")
const subTotal = document.querySelector(".subtotal")
const tax = document.querySelector(".tax");
const total = document.querySelector(".total")
const shipping = document.querySelector(".shipping")
const removeButton = document.querySelectorAll(".remove-button")
const emptyCart = document.querySelector(".empty-cart")






ascend.forEach((item) => {

    item.addEventListener("click", ()=>{

        if(item.nextElementSibling.innerText > 1 && item.nextElementSibling.innerText < 16){

            item.nextElementSibling.innerText = Number(item.nextElementSibling.innerText) - 1;


            item.parentElement.parentElement.lastElementChild.firstElementChild.innerText = 
            (Number(item.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText)
            * Number(item.nextElementSibling.innerText)).toFixed(2);


        } else if (item.nextElementSibling.innerText = 1) {

            item.parentElement.parentElement.lastElementChild.firstElementChild.innerText = 0;
            item.parentElement.parentElement.parentElement.remove();
        }

        
        if (+productTotal[0].innerText == 0 && +productTotal[1].innerText == 00 && +productTotal[2].innerText == 00) {
            subTotal.innerText =0;
            tax.innerText = 0;
            shipping.innerText = 0;
            total.innerText = 0;
            emptyCart.style.display = "block";

        } else{
            subTotal.innerText = (+productTotal[0].innerText + +productTotal[1].innerText + +productTotal[2].innerText).toFixed(2);
            total.innerText = (+subTotal.innerText + +tax.innerText + 15).toFixed(2);
            tax.innerText = (Number(subTotal.innerText) * 18 / 100).toFixed(2);
        };
        
    })
});

descend.forEach((item2) => {

    item2.addEventListener("click", ()=>{


        if(item2.previousElementSibling.innerText > 0 && item2.previousElementSibling.innerText < 15){
            
            item2.previousElementSibling.innerText = Number(item2.previousElementSibling.innerText) + 1;
        }
       
        item2.parentElement.parentElement.lastElementChild.firstElementChild.innerText = 
        (Number(item2.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText) 
        * Number(item2.previousElementSibling.innerText)).toFixed(2);

        
        if (+productTotal[0].innerText == 0 && +productTotal[1].innerText == 00 && +productTotal[2].innerText == 00) {
            subTotal.innerText =0;
            tax.innerText = 0;
            shipping.innerText = 0;
            total.innerText = 0;
            emptyCart.style.display = "block";


        } else{
            subTotal.innerText = (+productTotal[0].innerText + +productTotal[1].innerText + +productTotal[2].innerText).toFixed(2);
            total.innerText = (+subTotal.innerText + +tax.innerText + 15).toFixed(2);
            tax.innerText = (Number(subTotal.innerText) * 18 / 100).toFixed(2);
        };
        

    });
});


removeButton.forEach((item3) => {

    item3.addEventListener("click", ()=>{
        
        
        item3.parentElement.parentElement.remove();
        item3.nextElementSibling.nextElementSibling.lastChild.innerText = 0;

        if (+productTotal[0].innerText == 0 && +productTotal[1].innerText == 00 && +productTotal[2].innerText == 00) {
            subTotal.innerText =0;
            tax.innerText = 0;
            shipping.innerText = 0;
            total.innerText = 0;
            emptyCart.style.display = "block";

        } else{
            subTotal.innerText = (+productTotal[0].innerText + +productTotal[1].innerText + +productTotal[2].innerText).toFixed(2);
            total.innerText = (+subTotal.innerText + +tax.innerText + 15).toFixed(2);
            tax.innerText = (Number(subTotal.innerText) * 18 / 100).toFixed(2);
        };

        

        

    });

});