import React from 'react'

export default function Mail() {
  return (
    <div className='flex items-center gap-10 text-textColor fixed bottom-32 -right-48 rotate-90 sm-max:hidden'>
        <a className='font-mono text-lg hover:text-primaryColor transition transform' href='mailto:anilec4870@gmail.com'>
            anilec4870@gmail.com
        </a>
        <hr className='border-[2px] w-48 rounded-full bg-textColor border-textColor' />
    </div>
  )
}
