import CreatorSec1 from '@/components/how-it-works/creators/CreatorSec1'
import CreatorSec2 from '@/components/how-it-works/creators/CreatorSec2'
import CreatorSec3 from '@/components/how-it-works/creators/CreatorSec3'
import React from 'react'

export default function page() {
  return (
    <div className='overflow-hidden'>
      <CreatorSec1/>
      <CreatorSec2/>
      <CreatorSec3/>
    </div>
  )
}
