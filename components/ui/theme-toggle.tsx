"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
  variant="ghost"
  size="icon"
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md p-2 transition-colors"
>
  <Sun className="h-[1.2rem] w-[1.2rem] text-gray-900 dark:text-gray-400 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
  <Moon className="absolute h-[1.2rem] w-[1.2rem] text-gray-400 dark:text-gray-200 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
  <span className="sr-only">Toggle theme</span>
</Button>

  )
}

