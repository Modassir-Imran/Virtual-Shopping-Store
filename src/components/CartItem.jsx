import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  console.log("prining cart item")
  console.log(item)
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item Removed");


  }
  return (
    <div>
      <div className='flex justify-between p-4 py-8 gap-12 border-b-2 border-gray-900 '>
        <div className='max-w-44' >
          <img src={item.image}  alt='imgs' className= '' />
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-gray-900 font-bold text-2xl'>{item.title} </h1>
          <h1 className='text-gray-600 font-semibold text-lg'>{item.description.split(" ").slice(0,15).join(" ") + "..."} </h1>
          <div className='flex justify-between p-4 items-center'>
            <p className='text-green-600 text-lg font-bold '> ${item.price} </p> 
            <div 
             onClick={removeFromCart} className='bg-red-300 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
              <RiDeleteBin5Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
