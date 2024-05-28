import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export const Nav = () => {
  const [open, setOpen] = useState(false)
    const nav = [
        {
          name: "Home",
            href: "#",
          icon:'',
        },
        
        {
          name: "Projects",
            href: "#",
          icon:'',
        },
        {
          name: "About",
            href: "#",
          icon:'',
        },
        {
          name: "Contact",
            href: "#",
          icon:'',
        },
    ]
  return (
    <>
    <nav className='hidden'>
          <ul>
              {nav.map((item, index) => (
                  <li key={index} className=''>
                      <a href={item.href}>{item.name}</a>
                  </li>
              ))}
          </ul>
    </nav>
      <nav className='xs:block m-5 '>
        <FontAwesomeIcon icon={faBars} onClick={() => { setOpen(!open) }} className='text-2xl cursor-pointer md:invisible' />
        
          <ul className={`fixed rounded-lg z-10 duration-1000 bg-fuchsia-800 h-screen w-fit p-4 ${open ? "left-0" : "  -left-96 invisible "}`}>
              {nav.map((item, index) => (
                  <li key={index} className=''>
                      <a href={item.href}>{item.name}</a>
                  </li>
              ))}
          </ul>
    </nav>
    </>
  )
}
