import logo from './assets/final.png'

function App () {
  return (
    <>
      <header className='w-full text-slate-50 bg-black border-gray-100 shadow-sm body-font font-MyFont'>
        <div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
          <nav className='flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto'>
            <a
              href='#_'
              className='mr-5 font-medium hover:text-gray-900'
              target='_blank'
            >
              Home
            </a>
            <a
              href='#_'
              className='mr-5 font-medium hover:text-gray-900'
              target='_blank'
            >
              About
            </a>
            <a
              href='#_'
              className='font-medium hover:text-gray-900'
              target='_blank'
            >
              Contact
            </a>
          </nav>
          <img  src={logo} alt='logo' height={200} width={200}/>
          <div className='inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0'>
            <a
              href='#_'
              className='mr-5 font-medium hover:text-gray-900'
              target='_blank'
            >
              Login
            </a>
            <a
              href='#_'
              className='px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-purple-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md hover:bg-teal-600 focus:outline-none ease'
              target='_blank'
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
      <div className='burbujas'>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
      </div>
    </>
  )
}

export default App
