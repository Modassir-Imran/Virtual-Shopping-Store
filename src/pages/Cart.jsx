import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart } = useSelector(state => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <div>
      {cart.length > 0 ? (
        <div className='flex flex-row max-w-6xl mx-auto gap-8'>
          <div className='w-[60%]'>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            })}
          </div>
          <div className='flex flex-col justify-between mt-20 mb-10 items-center '>
            <div className='flex flex-col gap-2'>
              <div className='text-green-700  text-2xl font-bold'>YOUR CART </div>
              <div  className='text-green-700  text-6xl font-bold uppercase'> Summary </div>
              <p className='mt-6'>
                <span className='text-xl font-bold '>Total Item : {cart.length} </span>
              </p>
            </div>
            <div>
              <p className='font-bold text-2xl'>Total amount : <span className='font-extrabold'>${totalAmount}</span></p>
                
              <button className='w-96 py-3 text-xl font-extrabold text-white rounded-xl mt-6 bg-green-700'>CheckOut Now</button>

            </div>
          </div>
        </div>
      ) : (
        <div className='h-screen flex flex-col items-center justify-center'>
          <h1 className=' text-2xl font-bold text-' >Cart Empty </h1>
          <Link to={'/'}
          className=''
          >
            <button className='w-52 py-3 text-2xl font-extrabold text-white rounded-xl t 
            mt-6 bg-green-700 hover:bg-white hover:text-green-700 transition duration-300 ease-in border-2 border-black'>
              Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
