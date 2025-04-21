import Navbar from './component/Navbar'
import roundBg from './assets/round-bg.png' // Import the image
import Banner from './component/Banner'

function App() {
  return (
    <div className=' w-full  mx-auto bg-[#0C0D0C] min-h-screen'>
      <div className='w-full relative text-white flex flex-col items-center min-h-screen overflow-x-hidden'>
        {/* Right side bg image */}
        <div className='absolute -top-[800px] -left-[500px] pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>

        <Navbar />

        <Banner />

        {/* Left side bg image */}
        <div className='absolute -top-[800px] -right-[500px] pointer-events-none z-0'>
          <img src={roundBg} alt='Background decoration' />
        </div>
      </div>
    </div>
  )
}

export default App
