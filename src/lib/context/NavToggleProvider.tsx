import { useState, FC, useEffect } from 'react'
import { NavToggleContext } from './NavToggleContext'

type NavToggleProviderProps = {
	children: React.ReactNode
}

export const NavToggleProvider: FC<
	NavToggleProviderProps
> = ({ children }) => {
	const [isToggled, setNavToggled] = useState(false)
	const [windowsWidth, setWindowsWidth] = useState(
		window.innerWidth
	)
	const toggle = () => {
		setNavToggled(!isToggled)
	}

	const close = () => {
		setNavToggled(false)
	}

	return (
		<NavToggleContext.Provider
			value={{ isToggled, toggle, close, windowsWidth }}
		>
			{children}
		</NavToggleContext.Provider>
	)
}
