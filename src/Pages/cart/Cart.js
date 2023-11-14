import React from 'react'
import './Cart.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Card from '../../components/card/Card'
import axios from 'axios'
import Loading from '../../components/loading/Loading'
import { useNavigate } from 'react-router-dom'

function Cart () {
  const [isLoading, setIsLoading] = React.useState(false)

  const navigate=useNavigate()

  const cartData = useSelector(state => state.cartReducer)

  if (cartData.length === 0)
    return <div className='cart_container'>No items in cart</div>

  const makePayment = async item => {
    // console.log(item);
    setIsLoading(true)

    try {
      const response = await axios.post('http://localhost:3002/api', {
        item
      })

      const data = response.data

      console.log(data)

      let options = {
        key: `${process.env.REACT_APP_RAZORPAY_ID}`,
        amount: data.order.amount,
        currency: 'INR',
        name: 'Example Corp.',
        image:
          'https://img.freepik.com/premium-vector/charity-abstract-logo-healthy-lifestyle_660762-34.jpg?size=626&ext=jpg',
        description: 'Test Transaction',
        order_id: data.orderId,
        'theme.color': '#EC2E58',
         handler: (response) => {
           console.log(response,"response");
             navigate("/success", { state: { response } });
         }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()

      paymentObject.on('payment.failed', function (response) {
        console.log(response.error.code)
        console.log(response.error.description)
        console.log(response.error.source)
      })

      paymentObject.on('payment.success', function (response) {
        console.log(response)
      })
    } catch (error) {
      console.error('Error fetching Order ID:', error)
    }
    setIsLoading(false)
  }

  return (
    <div className='cart_container'>
      {isLoading ? (
        <Loading />
      ) : (
        cartData.map(item => {
          return <Card item={item} key={item.id} makePayment={makePayment} />
        })
      )}
    </div>
  )
}

export default Cart
