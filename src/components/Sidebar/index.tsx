import Link from 'next/link'
import { Close } from '../UI/Icons/Close'
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname()

  const links = useMemo(
    () => [
      { href: '/', label: 'Início' },
      { href: '/ghosts', label: 'Fantasmas' },
      { href: '/equipments', label: 'Equipamentos' },
      { href: '/maps', label: 'Mapas' },
      { href: '/cursed-items', label: 'Itens Amaldiiçoados' },
    ],
    [],
  )

  return (
    <div className="fixed top-0 h-full">
      <div
        className={`absolute inset-y-0 left-0 w-64 transform bg-secondary px-2 text-white shadow-inset ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out`}
      >
        <div className="flex items-center space-x-2 px-4 py-7 text-white">
          <Close
            className="cursor-pointer"
            fillClass="fill-[#ccc] hover:fill-white"
            onClick={toggleSidebar}
          />
        </div>

        <nav className="space-y-2 py-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block rounded px-4 py-2.5 font-extrabold shadow-surface drop-shadow-2xl transition duration-200 ${
                pathname === href
                  ? 'bg-current-dark text-white'
                  : 'hover:bg-current-dark hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
