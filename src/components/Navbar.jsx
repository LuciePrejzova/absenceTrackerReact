import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-bile.png'

const Navbar = () => {
  return (
<nav className="bg-darkGreen border-b border-emerald-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <a className="flex flex-shrink-0 items-center mr-4" href="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="V Mechu"
              />
              <span className="hidden md:block text-vanilla text-2xl font-bold ml-2"
                >V Mechu a kapradí</span
              >
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/index.html"
                  className="text-vanilla hover:bg-yellowGreen hover:text-darkGreen rounded-md px-3 py-2"
                  >Admin</Link>
                <Link
                  to="/jobs.html"
                  className="text-vanilla hover:bg-yellowGreen hover:text-darkGreen rounded-md px-3 py-2"
                  >Prihlasit se
                  </Link>
                <Link
                  to="/substitutes"
                  className="text-vanilla hover:bg-yellowGreen hover:text-darkGreen rounded-md px-3 py-2"
                  >Nahrady
                  </Link>
                {/* <a
                  href="/substitutes"
                  className="text-vanilla hover:bg-yellowGreen hover:text-darkGreen rounded-md px-3 py-2"
                  >Nahrady</a
                > */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
