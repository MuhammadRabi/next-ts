'use client'
import { Moon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <SunMoon />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <Moon />
        </button>
      )}
    </div>
  )
}
