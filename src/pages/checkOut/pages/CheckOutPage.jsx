import React, { useEffect, useState } from 'react'
import CheckOutAdressBox from '../components/CheckOutAdressBox'
import { useGetAddressesQuery } from '../../../features/profile/api/profileApi'
import CheckOutAddressModal from '../components/CheckOutAddressModal'
import CouponBox from '../../../features/auth/coupons/components/CouponBox'
import OrderSummaryAccordion from '../components/OrderSummaryAccordion'
import PaymentSelection from '../components/PaymentSelection'

import { useGetCartQuery } from '../../../features/cart/api/cartApi'
import AddAddressModal from '../../../features/profile/components/AddAddressModal'

const CheckOutPage = () => {
   const { data: addressData = [], isLoading:addressLoading } = useGetAddressesQuery()
   const {data:cartData,isLoading:cartLoading}=useGetCartQuery()

  const [selectedAddress, setSelectedAddress] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAddAddressModal,setIsAddAddressModal]=useState(false)


  const handelAddAddress=()=>{
    setIsAddAddressModal(true)
  }

  

  

  // pick default address once data loads
  useEffect(() => {
    const defaultAddr = addressData.find((a) => a.defaultAddress)
    if (defaultAddr) setSelectedAddress(defaultAddr)
  }, [addressData])

  if (addressLoading || cartLoading) {
    return <div className="text-center py-10">Loading checkout data...</div>;
  }

  return (
     <div className="max-w-4xl mx-auto bg-white p-4 rounded shadow">
        <div>
          <CheckOutAdressBox
          address={selectedAddress}
          onAdd={handelAddAddress}
        onChange={() => setIsModalOpen(true)}
        isLoading={addressLoading}
           />
        </div>

        <div className='mt-2'>

          <CouponBox />

        </div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {/* Implement checkout form / summary here */}
      <p>Checkout form and order summary goes here...</p>

      <div className='mt-4'>
        <PaymentSelection />
      </div>

      {/* <div className='mt-4'>
        <OrderSummaryAccordion />
      </div> */}

       {!cartLoading && <OrderSummaryAccordion cartData={cartData} />}

       {isAddAddressModal && <AddAddressModal
       handelClose={(()=>setIsAddAddressModal(false))} />}
      {isModalOpen && (
        <CheckOutAddressModal
        addresses={addressData}
         onClose={() => setIsModalOpen(false)}
        onSelect={(addr)=>{
          setSelectedAddress(addr),
          setIsModalOpen(false)
        }}
        />
      )}
    </div>
  )
}

export default CheckOutPage