import React from 'react';
import moneyImg from "../../images/money1.jpg";
// import Navbar from '../common/Navbar';

const Home = () => {


  const NavbarComp = () => {
    return (
      <>
        <nav className='p-3 px-4 flex flex-row items-center justify-between '>
          <div>
            <img src="" alt="Vimlesh Doshi" srcSet="" />
          </div>
          <div>
            {/* <div>
              <button className='bg-gray-700 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded'>Login</button>
            </div> */}
            {/* <div>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"></button>
            </div> */}
          </div>
        </nav>
      </>
    )
  }

  const styleElems = {
    // backgroundImage: `url(${moneyImg})`,
    minHeight: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right center",
  }
  return (
    <div className='' style={styleElems}>
      <NavbarComp />


      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 drop-shadow-2xl px-8 sm:px-8 md:px-4' style={{ "marginTop": "8vh" }}>

        <div></div>
        <div className='bg-blue-1000 text-white rounded-3xl p-9 '>
          <div>
            <h1 className='text-5xl sm:text-6xl md:text-6xl lg:text-6xl  font-black'>
              The&nbsp;
              <>Bill</>
              <div>Project...</div>
            </h1>
          </div>

          <div className='mt-4'>
            <form className="">
              <div className="mt-8 mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
              </div>
              <div className="mb-8">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*****" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home