// Promise Example

function validateCart(cart) {
  return true; // Change to see error
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart Invalid!!");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  pr = new Promise(function (resolve, reject) {
    resolve("proceeded to payment ✅");
  });
  return pr;
}

const cart = ["item1", "item2", "item3"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // Always return something. This is what the below ones get.
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log("❌ " + err.message);
  });
