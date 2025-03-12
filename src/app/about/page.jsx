import AboutSec1 from '@/components/about/AboutSec1'
import AboutSec2 from '@/components/about/AboutSec2'
import AboutSec3 from '@/components/about/AboutSec3'
import AboutSec4 from '@/components/about/AboutSec4'
import React from 'react'

export default function About() {
  return (
    <div className='overflow-hidden'>
      <AboutSec1/>
      <AboutSec2/>
      <AboutSec3/>
      <AboutSec4/>
    </div>
  )
}
