import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'

type PaginationType = {
  pageCount: number[]
  handlePagination: (pageCount: number) => void
}

export default function Pagination({ pageCount, handlePagination }: PaginationType) {
  const [selected, setSelected] = useState<number>(1)
  const [prevState, setPrevState] = useState<boolean>(false)
  const [nextState, setNextState] = useState<boolean>(true)

  const handlePageClick = (page: number) => {
    setSelected(page)
    handlePagination(page)
  }

  useEffect(() => {
    console.log(selected + 1, pageCount.length)
    if (selected - 1 < 1) {
      setPrevState(false)
      setNextState(true)
      return
    } else if (selected + 1 > pageCount.length) {
      setNextState(false)
      setPrevState(true)
      return
    } else {
      setNextState(true)
      setPrevState(true)
    }
  }, [selected])

  useEffect(() => {
    if (selected - 1 < selected) {
      setPrevState(false)
      return
    } else if (selected + 1 > pageCount.length) {
      setNextState(false)
      return
    } else {
      setNextState(true)
      setPrevState(true)
    }
  }, [])

  const handleNextPrev = (name: string) => {
    if (name === 'prev') {
      setSelected(() => {
        handlePagination(selected - 1)
        return selected - 1
      })
    } else if (name === 'next') {
      setSelected(() => {
        handlePagination(selected + 1)
        return selected + 1
      })
    }
  }

  return (
    <nav className='border-t-2 border-[#EAECF3] px-4 flex items-center justify-between sm:px-0 py-2 h-[62px] '>
      <div className='-mt-px w-0 flex-1 flex'>
        <button
          className={
            prevState
              ? 'border-2 border-[#D5D8E4] h-[38px] w-[95px] rounded-[5px] ml-4 pr-1 flex items-center justify-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-300'
              : 'border-2 border-[#D5D8E4] h-[38px] w-[95px] rounded-[5px] ml-4 pr-1 flex items-center justify-center text-sm font-medium text-[#76709F]/60 bg-[#E0E0ED] '
          }
          onClick={() => handleNextPrev('prev')}
          disabled={prevState ? false : true}
        >
          <ArrowNarrowLeftIcon className={prevState ? 'ml-3 h-5 w-5 text-gray-400' : 'ml-3 h-5 w-5 text-[#76709F]/60'} aria-hidden='true' />
          Previous
        </button>
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {pageCount.length < 10
          ? pageCount.map((page) => {
              return (
                <p
                  onClick={() => handlePageClick(page)}
                  className={
                    !(selected === page)
                      ? 'h-[30px] w-[8%] border-[1px] border-[#D5D8E4] rounded text-gray-500 hover:bg-[#E1EBFF] hover:text-gray-700 hover:border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium'
                      : 'h-[30px] w-[8%] border-[1px] rounded text-gray-500 bg-[#E1EBFF] text-gray-700 border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium'
                  }
                >
                  {page}
                </p>
              )
            })
          : pageCount.map((page, index) => {
              if (index === 9) {
                return <span>...</span>
              }
              if (index >= 10) {
                return <></>
              }
              if (index >= pageCount.length - 4) {
                return (
                  <p
                    onClick={() => handlePageClick(page)}
                    className={
                      !(selected === page)
                        ? 'h-[30px] w-[10%] border-[1px] border-[#D5D8E4] rounded text-gray-500 hover:bg-[#E1EBFF] hover:text-gray-700 hover:border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium'
                        : 'h-[30px] w-[10%] border-[1px] rounded text-gray-500 bg-[#E1EBFF] text-gray-700 border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium'
                    }
                  >
                    {page}
                  </p>
                )
              }
              return (
                <p
                  onClick={() => handlePageClick(page)}
                  className={
                    !(selected === page)
                      ? 'h-[30px] w-[8%] border-[1px] border-[#D5D8E4] rounded text-gray-500 hover:bg-[#E1EBFF] hover:text-gray-700 hover:border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium'
                      : 'h-[30px] w-[8%] border-[1px] rounded text-gray-500 bg-[#E1EBFF] text-gray-700 border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium'
                  }
                >
                  {page}
                </p>
              )
            })}
      </div>

      <div className='-mt-px w-0 flex-1 flex justify-end'>
        <button
          className={
            nextState
              ? 'border-2 border-[#D5D8E4] h-[38px] w-[75px] rounded-[5px] mr-4 pl-1 flex items-center justify-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-300'
              : 'border-2 border-[#D5D8E4] h-[38px] w-[75px] rounded-[5px] mr-4 pl-1 flex items-center justify-center text-sm font-medium text-[#76709F] bg-[#E0E0ED] '
          }
          onClick={() => handleNextPrev('next')}
          disabled={nextState ? false : true}
        >
          Next
          <ArrowNarrowRightIcon className={nextState ? 'ml-3 h-5 w-5 text-gray-400' : 'ml-3 h-5 w-5 text-[#76709F]'} aria-hidden='true' />
        </button>
      </div>
    </nav>
  )
}
