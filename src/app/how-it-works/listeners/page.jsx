import ListenerSec1 from '@/components/how-it-works/listeners/ListenerSec1'
import ListenerSec2 from '@/components/how-it-works/listeners/ListenerSec2'
import ListenerSec3 from '@/components/how-it-works/listeners/ListenerSec3'
import React from 'react'

export default function page() {
  return (
    <div className='overflow-hidden'>
      <ListenerSec1/>
     <ListenerSec2/>
     <ListenerSec3/>
    </div>
  )
}
