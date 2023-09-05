const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_j7QEcPBT2HIaqJ",
  key_secret: "kBO7rOCKIlO4o4fM36ReaiAj",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "INR",
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
};

module.exports = { checkout, paymentVerification };
