import React from 'react'

const Bills = () => {

  const billsDoc = [
    { name: "ABC", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem, incidunt nostrum modi ducimus aliquid odio alias ratione fugit in deleniti obcaecati dolorum animi et fuga recusandae esse doloribus facilis.", billAmt: "2000", date: "19th April, 2023", paid: 1 },
    { name: "ABC", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem, incidunt nostrum modi ducimus aliquid odio alias ratione fugit in deleniti obcaecati dolorum animi et fuga recusandae esse doloribus facilis.", billAmt: "2000", date: "19th April, 2023", paid: 1 },
    { name: "ABC", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem, incidunt nostrum modi ducimus aliquid odio alias ratione fugit in deleniti obcaecati dolorum animi et fuga recusandae esse doloribus facilis.", billAmt: "2000", date: "19th April, 2023", paid: 1 },
    { name: "ABC", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem, incidunt nostrum modi ducimus aliquid odio alias ratione fugit in deleniti obcaecati dolorum animi et fuga recusandae esse doloribus facilis.", billAmt: "2000", date: "19th April, 2023", paid: 1 },
    { name: "ABC", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem, incidunt nostrum modi ducimus aliquid odio alias ratione fugit in deleniti obcaecati dolorum animi et fuga recusandae esse doloribus facilis.", billAmt: "2000", date: "19th April, 2023", paid: 1 },
  ]

  return (
    <div className='container mx-auto my-16'>
      <div>
        <h1 className='text-gray-50 text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black '>
          My Bills
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 sm:px-10 md:px-0 gap-6 my-10'>
        {
          billsDoc.map((item, key) => (
            <div key={key} className='text-gray-50 bg-stone-800 rounded-2xl p-4'>
              <div className='flex justify-between items-start'>
                <h1 className='text-3xl font-bold'>{item.name}</h1>
                <div className='text-white'>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
              <div className='text-lg'>Amount: {item.billAmt} &#8377;</div>
              <div>Date Created: {item.date}</div>
              <div className='font-extralight text-sm'>{item.description && item.description}</div>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default Bills