import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f5cab3] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/db38235f-b64e-445d-bb83-62e6afcd8372" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-black'>Contact</p>
                <p className='text-black py-4'>Submit the form below or shoot me an email .</p>
                <p className='text-black py-2'>cimenugur73@gmail.com</p>
            </div>
            <input className='bg-[#f5f6f8] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#fefeff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f8f8fa] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 hover:bg-[#a8d3da] hover:border-[#a8d3da] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact