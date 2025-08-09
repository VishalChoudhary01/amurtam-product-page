import React from 'react'
import TopBanner from '../components/templates/TopBanner'
import Category from '../components/templates/Category'
import ProductCollection from '../components/templates/ProductCollection'
import BottomBanner from '../components/templates/BottomBanner'

const ConsumerShop = () => {
  return (
    <div>
      <TopBanner/>
      <Category/>
      <div className='md:space-y-28 space-y-8 md:py-28 py-8'>
      <ProductCollection/>
      <ProductCollection/>
      </div>
      <BottomBanner/>
    </div>
  )
}

export default ConsumerShop