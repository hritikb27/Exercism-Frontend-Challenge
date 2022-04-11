import Badge from '../../assets/MainTitle/Badge.png'
import UnderLineVector from '../../assets/MainTitle/UnderLineVector.png'

function MainTitle(): JSX.Element {
  return (
    <div className='mt-6 flex flex-col items-center justify-center gap-3'>
      <img src={Badge} />
      <div className='flex w-[50%] gap-5 justify-center'>
        <p className='text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 text-[#130B43] '>Testimonials I've left</p>
        <div className='w-[12%] 2xl:w-[7%] h-[34px] border border-gray-300 rounded-full flex items-center justify-center font-normal text-[#130B43]'>
          <p>47</p>
        </div>
      </div>
      <img src={UnderLineVector} />
    </div>
  )
}

export default MainTitle
