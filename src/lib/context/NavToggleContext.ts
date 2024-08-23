import { createContext } from 'react'

interface NavToggleContextProps {
	isToggled: boolean
	toggle: () => void
	close: () => void
	windowsWidth: number
}

export const NavToggleContext =
	createContext<NavToggleContextProps>({
		isToggled: false,
		toggle: () => {},
		close: () => {},
		windowsWidth: 0,
	})
