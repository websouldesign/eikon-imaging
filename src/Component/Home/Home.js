import React from 'react'
import Slider from './Slider'
import Blog from './Blog'
import Service from './Service'
import About from './About'

export default function Home() {
  return (
    <div>
        <Slider/>
        <About/>
        <Service/>
        <Blog/>
    </div>
  )
}
