
import Form from '../components/Checkout/Form'
import ProductCard from '../components/Checkout/ProductCard'
import { useSelector } from 'react-redux'

export default function Checkout() {

  let {totalAmount } = useSelector((state) => state.cart);

  const stringOrders = localStorage.getItem('cartItems')
  const orders = stringOrders ? JSON.parse(stringOrders) : []

  return (
    <main className='md:flex justify-center'>
      <section className='container mx-auto flex flex-col md:border-r-2 border-gray-500  my-4'>
        <Form />
      </section>

      <section className='container flex flex-col gap-5'>
        {/* Products */}
        <div className=' mt-5 flex flex-col justify-center items-center md:items-start gap-3 pb-3 border-b'>
          <ProductCard orders={orders} />
        </div>

        <div className='flex justify-between items-center'>
          <p>subtotal:</p>
          <p className=' text-xl'>$ {totalAmount.toFixed(2)}</p>
        </div>

        <div className='flex justify-between items-center'>
          <p>shipping</p>
          <p className='uppercase'>free</p>
        </div>

        <div className='flex justify-between items-center font-bold text-2xl'>
          <p>Total</p>
          <p>
            <span className='uppercase text-gray-400 text-lg'>usd</span> ${' '}
            {totalAmount.toFixed(2)}
          </p>
        </div>

        <p className='text-gray-400 text-lg'>Including $ 0 in taxes</p>
      </section>
    </main>
  )
}
