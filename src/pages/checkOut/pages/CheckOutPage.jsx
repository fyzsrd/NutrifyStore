import React, { useEffect, useState } from 'react'
import CheckOutAdressBox from '../components/CheckOutAdressBox'
import { useGetAddressesQuery } from '../../../features/profile/api/profileApi'
import CheckOutAddressModal from '../components/CheckOutAddressModal'
import CouponBox from '../../../features/auth/coupons/components/CouponBox'
import OrderSummaryAccordion from '../components/OrderSummaryAccordion'
import PaymentSelection from '../components/PaymentSelection'

const CheckOutPage = () => {
   const { data: addressData = [], isLoading } = useGetAddressesQuery()
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // pick default address once data loads
  useEffect(() => {
    const defaultAddr = addressData.find((a) => a.defaultAddress)
    if (defaultAddr) setSelectedAddress(defaultAddr)
  }, [addressData])
  return (
     <div className="max-w-4xl mx-auto bg-white p-4 rounded shadow">
        <div>
          <CheckOutAdressBox
          address={selectedAddress}
          onAdd={() => console.log('Open add address form')}
        onChange={() => setIsModalOpen(true)}
        isLoading={isLoading}
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

      <div className='mt-4'>
        <OrderSummaryAccordion />
      </div>

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