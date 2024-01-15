/*
    Practice Example Of Shopping Cart
*/

const cartItems = ["Adobe Photoshop", "Microsoft Windows 10", "Netbeans", "Kaspersky"];
const createCart = (cartAvailaleId, cartItems) => {
    let freeCartId = "SGP133";
    cartAvailaleId = freeCartId;
    console.log('Cart is ready to take for processing....');
    while(cartAvailaleId){
        const currentTimer = new Date().getTime();
        if((currentTimer + 2000) > new Date().getTime()) {
            processingCartForOrderProcess(cartAvailaleId);
        }
    }
};
const processingCartForOrderProcess = createCart.apply(this);



const paymentDetails = {
    paymentType: "Online Transaction",
    paymentMethod: ["G-pay", "Paytym", "Payoneer", "Paypal"],
    paymentWay: ["Card", "Cash"]
}
const processingPayment = (orderCartId, paymentDetails);

createCart(cartAvailaleId='undefined', cartItems, function(){

});