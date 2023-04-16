import React from 'react'

const Navbar = () => {


  const links = [
    { title: "Home", linkTo: "" },
    { title: "Clients", linkTo: "" },
    { title: "Bills", linkTo: "" },
  ]

  return (
    <>
      <nav className='p-3 px-5 flex flex-row justify-between items-center '>
        <div className='flex flex-row items-center justify-between w-full'>
          <div>
            <img src="#" alt="Vimlesh Doshi" srcset="" />
          </div>
          <div className='flex flex-row gap-3'>
            {
              links.map((item, key) => (
                <div key={key}>
                  <button className=''>
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