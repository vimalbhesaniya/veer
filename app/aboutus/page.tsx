import React from 'react'
import pic from "../../public/me.jpg"
import Image from 'next/image'
function page() {
  return (
    <>
      <div className='homemain'>
        <div className='datetime'>
          <h1 className='h2'>Know Who <span className='findme'>I'M </span></h1>
        </div>
        <div className='hellopicture2'>
          <div className="section1">
            <div className='profile'>
              <Image src={pic} height={800} className='pic' width={800} alt='not found'></Image>
            </div>
            <div className='myname2'><h5 className='h25'>Vimal Bhesaniya</h5></div>
          </div>
          <div className="section2">
            <p>I'm a React.js Developer with experience in building user-friendly websites. I know languages like JavaScript, HTML, CSS, and more. I've worked on projects using React.js and have a basic understanding of other languages like Python, C++, and databases like MongoDB and SQL.</p>
          </div>
        </div>
        <div className='introduction'>
          <div className='part1'>
          </div>
          <div className='part2'>
          </div>
        </div>
        <div className='followme'>

        </div>
      </div>
    </>
  )
}

export default page
