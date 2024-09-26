'use client'
import { Moon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='ghost'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? (
        <SunMoon className='size-6 text-orange-500' />
      ) : (
        <Moon className='size-6 text-sky-950' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
