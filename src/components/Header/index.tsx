import { MenuH } from '../UI/Icons/MenuH'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  toggleSidebar: () => void
  isOpen: boolean
}

const Header = ({ toggleSidebar, isOpen }: HeaderProps) => {
  const pathname = usePathname()

  const pageTitles: Record<string, string> = {
    '/': 'Início',
    '/ghosts': 'Fantasmas',
    '/equipments': 'Equipamentos',
    '/maps': 'Mapas',
    '/cursed-items': 'Itens Amaldiiçoados',
  }

  const pageTitle = pageTitles[pathname] || 'Default Title'

  return (
    <div className="sticky top-0">
      <div className="relative flex w-full">
        <div className="w-full flex-1 space-y-6 bg-secondary px-2 py-7 text-2xl font-bold shadow-inset">
          <div className="flex items-center gap-4 px-4">
            <button onClick={toggleSidebar}>
              <MenuH className="fill-[#ccc] hover:fill-white" />
            </button>
            <span
              className={`text-white transition-all duration-200 ease-in-out ${
                isOpen ? 'md:ml-52' : 'ml-0'
              }`}
            >
              {pageTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
