const paymentInfo = {
    paymentId: 1341,
    paymentProcesStatus: "processing",
    paymentCategory: "cart",
    paymentPrice: 120
}
const cartDetails = ["Shoes", "Adobe", "Balls"];
const creteCart = function Cart(paymentInfo, cartDetails){
    this.paymentInfo = paymentInfo;
    this.cartDetails = cartDetails;
    attachInfo: () =>{
        const info = [
            {
                getCartItems: function(){
                    for (let items of this.paymentInfo){
                        console.log(items);
                    }
                },
                getPayementItems: function(){
                    for (let items of this.paymentInfo){
                        console.log(items);
                    }
                },
                getMappedItems: function(){
                    const mapItems = this.cartDetails.map(function (this.paymentInfo){

                    })
                }
            }
        ];
        return info;
    }
}

const creatOrder = (cartDetails, function processingOrder(orderId){
    processingOrder(orderId);
})

const processOrder = (cartDetails, function processingOrder(orderId){});
const orderSummary = (orderDetails, function orderSummary(orderId){});
const updateWallet = (orderDetails, function updateWallet(orderId){});
const promises = new Promise((resolve, reject) => {
    
})