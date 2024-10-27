
export default function Menu() {
  return (
    <menu className="xl:flex hidden justify-between items-center py-4 px-8 bg-primary shadow-md">
        {/* Left section: Menu links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li className="cursor-pointer hover:text-secondary transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-secondary transition-colors">
            Shop
          </li>
          <li className="cursor-pointer hover:text-secondary transition-colors">
            Pages
          </li>
          <li className="cursor-pointer hover:text-secondary transition-colors">
            Blog
          </li>
          <li className="cursor-pointer hover:text-secondary transition-colors">
            Contact
          </li>
        </ul>

        {/* Right section: Cart and logo */}
        <div className="flex items-center space-x-8">
          <p className="text-lg font-bold">$ 00.00</p>
          <p className="text-xl font-extrabold text-third">Logo</p>
          <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-third transition-colors">
            JF
          </button>
        </div>
      </menu>
  )
}
