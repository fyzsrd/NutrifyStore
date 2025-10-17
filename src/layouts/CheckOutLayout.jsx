import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const CheckOutLayout = () => {
    const navigate=useNavigate()
    // const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
    // if(!isAuthenticated){
    //     navigate('/')
    // }
    const handleClose =()=>{
        navigate('/')
    }
  return (
   <div className="flex flex-col min-h-screen">
      {/* <Navbar onCartClick={() => setCartOpen(true)} /> */}
      <div className='flex p-2.5 justify-between bg-blue-100' >
            <h1 className='font-bold text-2xl'>Order Summery</h1>
            <button
            onClick={()=>handleClose()}
             className='bg-red-600 px-2 py-1 rounded-sm text-white cursor-pointer'>Close</button>
        </div>

      {/* <CartDrawer 
        open={cartOpen} 
        onClose={() => setCartOpen(false)} 
      /> */}

      <main className="flex-1 p-3 bg-gray-50">
        <Outlet />
      </main>

     
    </div>
  )
}

export default CheckOutLayout