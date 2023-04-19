import React from 'react'

const Navbar = () => {


  const links = [
    { title: "Home", linkTo: "" },
    { title: "Clients", linkTo: "" },
    { title: "Bills", linkTo: "" },
  ]

  return (
    <>
      <nav className='sticky top-0 p-3 px-5 flex flex-row justify-between items-center bg-stone-800 text-gray-50 drop-shadow-[0px_10px_20px_rgba(255,255,255,0.15)]'>
        <div className='flex flex-row items-center justify-between w-full'>
          <div>
            <img src="#" alt="Vimlesh Doshi" srcSet="" />
          </div>
          <div className='flex flex-row gap-3'>
            {
              links.map((item, key) => (
                <div key={key}>
                  <button className='bg-stone-600 text-gray-300 hover:bg-stone-700 hover:text-gray-50 transition ease-in  font-bold p-1 md:w-16 lg:w-16 rounded-lg drop-shadow-[1px_2px_2px_rgba(255,255,255,0.5)] hover:drop-shadow-[2px_3px_3px_rgba(255,255,255,0.5)]'>
                    {item.title}
                  </button>
                </div>
              ))
            }
          </div>
        </div>
        <div>

        </div>
      </nav>
    </>
  )
}

export default Navbar