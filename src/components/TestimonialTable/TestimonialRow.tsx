import TimeFormat from './TimeFormat'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { Testimonial } from './TestimonialTable'

type TestimonialRowType = {
  testimonial: Testimonial
}

export default function TestimonialRow({ testimonial }: TestimonialRowType) {
  return (
    <>
      <td>
        <div className='w-11 ml-5'>
          <img src={testimonial.track.icon_url} className='size-cover' />
        </div>
      </td>
      <td className='whitespace-nowrap pl-4 pr-3 text-sm sm:pl-0'>
        <div className='flex items-center'>
          <div className='h-10 w-10 flex-shrink-0'>
            <img className='h-10 w-10 rounded-full' src={testimonial.mentor.avatar_url} alt='' />
          </div>
          <div className='ml-4'>
            <div className='font-medium text-[#130B43]'>{testimonial.mentor.handle}</div>
            <p className='text-[#5C5589] '>on {testimonial.exercise?.title}</p>
            {/* <div className="text-gray-500">{person.email}</div> */}
          </div>
        </div>
      </td>

      <td className='truncate min-h-[60.5px] text-[#3F3A5A] max-w-[400px] font-normal'>{testimonial.content}</td>

      <td className='whitespace-nowrap px-3 text-sm text-[#5C5589]'>
        <TimeFormat date={testimonial.created_at} />
      </td>
      <td className='relative whitespace-nowrap py-4 pl-3 text-right text-sm font-medium'>
        <a href={String(testimonial.id)} className='text-[#5C5589]'>
          <ChevronRightIcon className='h-7 w-7 text-[#5C5589]' /> <span className='sr-only'>, {testimonial.mentor.handle}</span>
        </a>
      </td>
    </>
  )
}
