import './menustyle.css'
import {React} from 'react'
const MenuBar = () => {
  return (
    <div className='navbar'>
        <a className='hover-underline-animation' href='/home'>Home</a>
        <a className='hover-underline-animation' href='/category/tourism'>Tourism</a>
        <a className='hover-underline-animation' href='/category/fitness'>Fitness</a>
        <a className='hover-underline-animation' href='/category/technology'>Technology</a>
        <a className='hover-underline-animation' href='/category/bollywood'>Bollywood</a>
        <a className='hover-underline-animation' href='/category/food'>Food</a>
    </div>
  )
}

export default MenuBar