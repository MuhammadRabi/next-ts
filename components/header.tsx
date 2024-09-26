import React from 'react'
import { ThemeSwitcher } from './theme-switcher'

const Header = () => {
  return (
    <header className='flex justify-between py-4'>
      <div>header</div>
      <ThemeSwitcher />
    </header>
  )
}

export default Header
