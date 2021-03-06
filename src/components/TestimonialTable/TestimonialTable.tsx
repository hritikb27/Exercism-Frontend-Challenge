import TracksDropdown from '../TracksDropDown/TracksDropdown'
import { SearchIcon } from '@heroicons/react/outline'
import SortItems from '../Sort/SortItems'
import { useEffect, useState } from 'react'
import { Track } from '../TracksDropDown/TracksDropdown'
import Pagination from '../Pagination/Pagination'
import _ from 'lodash'
import { RotatingLines } from 'react-loader-spinner'
import sampleTestimonialData from '../../utils/sampleTestimonialData'
import TestimonialRow from './TestimonialRow'

const pageSize = 9

type mentor = {
  avatar_url: string
  handle: string
}

export type Testimonial = {
  content: string
  created_at: string
  exercise?: {
    icon_url: 'https://dg8krxphbh767.cloudfront.net/exercises/gigasecond.svg'
    slug: 'gigasecond'
    title: 'Gigasecond'
  }
  mentor: mentor
  track: Track
  id: number
}

function TestimonialTable(): JSX.Element {
  const [testimonials, setTestimonials] = useState<Testimonial[]>()
  const [exerciseFilter, setExerciseFilter] = useState<string>()
  const [selectedTrack, setSelectedTrack] = useState<Track>({
    title: 'string',
    icon_url: 'string',
    num_exercises: 1,
    slug: 'string'
  })
  const [trackFilter, setTrackFilter] = useState<string>()
  const [searchValue, setSearchValue] = useState<string>('')
  const [orderFilter, setOrderFilter] = useState<string>('')
  const [pageCount, setPageCount] = useState<number[]>([1])
  const [paginatedTestimonials, setPaginatedTestimonials] = useState<Testimonial[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [inputActive, setInputActive] = useState<boolean>()

  useEffect(() => {
    const getTestimonials = async () => {
      setIsLoading(true)
      setPaginatedTestimonials(sampleTestimonialData)
      await fetch('https://exercism.org/api/v2/hiring/testimonials')
        .then((res) => res.json())
        .then((data) => {
          setTestimonials(data.testimonials.results)
          setPaginatedTestimonials(_(data.testimonials.results).slice(0).take(pageSize).value())
          setIsLoading(false)
          const count =
            data.testimonials.results && data.testimonials.results.length > 1 ? Math.ceil(data.testimonials.results.length / pageSize) : 0
          console.log('Count: ', count)
          const pages = _.range(1, count + 1)
          setPageCount(pages)
        })
    }

    getTestimonials()
  }, [])

  // Fetch/Filter the data with the specified track or order selected by the user
  useEffect(() => {
    getFilteredTestimonials()
  }, [orderFilter, trackFilter])

  const getFilteredTestimonials = async () => {
    setPaginatedTestimonials(sampleTestimonialData)
    setIsLoading(true)
    await fetch(
      `https://exercism.org/api/v2/hiring/testimonials?${trackFilter && `track=${trackFilter}`}&${
        exerciseFilter && `exercise=${exerciseFilter}`
      }&${orderFilter && `order=${orderFilter}`}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.testimonials.results)
        console.log('DATA: ', data.testimonials.results)
        setPaginatedTestimonials(_(data.testimonials.results).slice(0).take(pageSize).value())
        const count =
          data.testimonials.results && data.testimonials.results.length > 1 ? Math.ceil(data.testimonials.results.length / pageSize) : 0
        console.log('Updated Count: ', count)
        const pages = _.range(1, count + 1)
        setPageCount(pages)
        setIsLoading(false)
      })
  }

  const handleExerciseChange = (value: string) => {
    setSearchValue(value)
    setExerciseFilter(value)
    if (timeoutID) clearTimeout(timeoutID)
    callFetcher()
  }

  let timeoutID: any

  // SetTimout gets cancelled when user again changes the search value under 1.5sec resulting in fewer api calls
  const callFetcher = () =>
    (timeoutID = setTimeout(() => {
      getFilteredTestimonials()
    }, 1500))

  const handlePagination = (pageNo: number) => {
    const startIndex = (pageNo - 1) * pageSize
    const paginatedPosts = _(testimonials).slice(startIndex).take(pageSize).value()
    setPaginatedTestimonials(paginatedPosts)
  }

  return (
    <div className='px-4 sm:px-6 lg:px-8 mx-auto min-w-[80%]'>
      <div className='-mt-3 flex flex-col '>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
          <div className='inline-block min-w-full pt-12 pb-20 align-middle md:px-6 lg:px-20 '>
            <div className=' overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg shadow-[5px_30px_60px_30px_rgba(79,114,205,0.3)] shadow-gray-200'>
              <div className='min-w-full flex items-center h-[70px] border-b border-gray '>
                <div className='flex items-center w-full ml-2 gap-1'>
                  <TracksDropdown selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} setTrackFilter={setTrackFilter} />
                  <div
                    className={
                      !inputActive
                        ? 'relative flex bg-[#F0F3F9] min-w-[45%] max-h-[70%] h-[50px] ml-1 rounded-[5px] px-6'
                        : 'relative flex bg-[#F0F3F9] min-w-[45%] max-h-[70%] h-[50px] ml-1 rounded-[5px] px-6 outline-none ring-1 ring-[#2E57E8] border border-[#2E57E8]'
                    }
                  >
                    <span className='ml-3 absolute inset-y-0 left-0 flex items-center pr-2 pointer-events-none'>
                      <SearchIcon className='h-5 w-5 text-thin text-[#5C5589]' aria-hidden='true' />
                    </span>
                    <input
                      type='text'
                      value={searchValue}
                      onChange={(e) => handleExerciseChange(e.target.value)}
                      onFocus={() => setInputActive(true)}
                      onBlur={() => setInputActive(false)}
                      placeholder='Filter by exercise title'
                      className='bg-[#F0F3F9] placeholder:text-[#5C5589] ml-6 w-full outline-none'
                    />
                  </div>
                </div>
                <div className='min-w-[30%] mr-4 min-h-full flex items-center'>
                  <SortItems orderFilter={orderFilter} setOrderFilter={setOrderFilter} />
                </div>
              </div>

              <table className='min-w-full divide-y divide-gray-300'>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {isLoading && (
                    <div className='relative min-w-full ml-[330%] blur-none z-10'>
                      <RotatingLines width='120' strokeColor='#5C5589' strokeWidth='1' animationDuration='2' />
                    </div>
                  )}
                  {paginatedTestimonials &&
                    paginatedTestimonials.map((testimonial) => (
                      <tr key={testimonial.id} className={isLoading ? 'blur-lg' : 'max-h-[40px] hover:bg-[#F4F7FD]'}>
                        <TestimonialRow testimonial={testimonial} />
                      </tr>
                    ))}
                </tbody>
              </table>
              <Pagination pageCount={pageCount} handlePagination={handlePagination} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialTable
