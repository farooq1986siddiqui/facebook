import Image from 'next/image'

export default function Home() {
  return (
          <div className='bg-slate-200 h-screen flex items-center justify-center'>
            <div className='text-2xl w-1/2 px-14'>
            <Image src={"/pictures/facebook.svg"} width={300} height={100} alt="Facebook Logo"/>
            <p className='ml-8 -mt-3'>Facebook helps you connect and share with people in your life.</p>
            </div>
            {/*right side div*/}
            <div className='bg-white flex flex-col p-5 rounded-xl w-1/3
            '>
              <input className='my-2 border border-1 border-slate-200 p-3 rounded-md focus:outline-1 outline-blue-400' type='text' placeholder='Enter email or phone number' />
              <input className='my-2 border border-1 border-slate-200 p-3 rounded-md focus:outline-1 outline-blue-400' type='password' placeholder='Enter password' />
              <button className='bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700'>Log In</button>
              <p className='cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline
              '>Forgotten account? · Sign up for Facebook</p>
              <span className='my-2'>
                <hr/>
              </span>
              <button className='bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto'>Create new account</button>
            </div>
          </div>
  )
}
