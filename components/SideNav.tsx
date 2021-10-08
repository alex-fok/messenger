const SideNav = () => {
  return (
    <nav className='w-44 ml-4 lg:ml-12 px-2'>
    <ul className='mt-12  text-xl font-semibold'>
      <li className='text-gray-400 mb-5 hover:text-gray-800 cursor-pointer'><a>Contact</a></li>
      <li className='text-gray-400 mb-5 hover:text-gray-800 cursor-pointer'><a>Profile</a></li>
    </ul>
    <br />
    <figure>
      <figcaption className='text-gray-400 text-base font-light mb-2'>Direct Messages</figcaption>
      <ul>
        <li className='rounded-sm text-gray-600 text-sm px-2 mb-1 cursor-pointer hover:bg-gray-300'>Person 1</li>
        <li className='rounded-sm text-gray-600 text-sm px-2 mb-1 cursor-pointer hover:bg-gray-300'>Person 1</li>
      </ul>
    </figure>
    </nav>
  )
}
export default SideNav