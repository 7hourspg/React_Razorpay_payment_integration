import express from 'express'
import Razorpay from 'razorpay'
import shortid from 'shortid'

const router = express.Router()

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_KEY
})

router.post('/', async (req, res) => {

     const {item}=req.body;
     console.log(item);


  const amount = item.price * 100 // ₹1000
  const currency = 'INR'
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    notes: {
      paymentFor: `${item.title}`,
      productId: `${item.id}`
    }
  }

  try {
    const order = await razorpay.orders.create(options)

    console.log('Order created:', order)

    return res.status(200).json({
      message: 'Order created successfully!',
      order
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
})

export default router
