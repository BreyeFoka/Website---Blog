import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
    <>
    <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
            <Image src="../public/next.svg" alt="Logo" width={50} height={50} className="mr-2" />
            <span className="text-lg font-bold bg-yellow-300">CSSC</span>
        </Link>
      </div>

    </div>
    </>
  )
}

export default Navbar