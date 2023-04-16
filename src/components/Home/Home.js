import React from 'react';
import moneyImg from "../../images/money2.jpg";
import Navbar from '../common/Navbar';

const Home = () => {


  const NavbarComp = () => {
    return (
      <>
        <nav className='p-3 px-4 flex flex-row items-center justify-between '>
          <div>
            <img src="" alt="Vimlesh Doshi" srcSet="" />
          </div>
          <div>
            <div>
              <button className='bg-gray-700 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded'>Login</button>
            </div>
            {/* <div>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"></button>
            </div> */}
          </div>
        </nav>
      </>
    )
  }

  const styleElems = {
    backgroundImage: `url(${moneyImg})`,
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }
  return (
    <div className='' style={styleElems}>
      {/* <Navbar /> */}
      <NavbarComp />
    </div>
  )
}

export default Home