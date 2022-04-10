import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { useState } from 'react'

type PaginationType = {
  pageCount: number[],
  handlePagination: (pageCount: number)=>void,
}

export default function Pagination({pageCount, handlePagination}:PaginationType) {
  const [selected, setSelected] = useState<number>(1);
  console.log(pageCount)

  const handlePageClick = (page: number) => {
      setSelected(page);
      handlePagination(page)
  }

  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {
          pageCount.map(page=>{
            return <p
          onClick={()=>handlePageClick(page)}
          className={!(selected === page) ? "h-[30px] w-[8%] border-[1px] border-[#D5D8E4] rounded text-gray-500 hover:bg-[#E1EBFF] hover:text-gray-700 hover:border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium" : 
          "h-[30px] w-[8%] border-[1px] rounded text-gray-500 bg-[#E1EBFF] text-gray-700 border-[#76709F] border-t-2 px-4 mx-2 flex items-center justify-center text-sm font-medium"}
        >
          {page}
        </p>
          })
        }
      </div>

      <div className="-mt-px w-0 flex-1 flex justify-end">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          Next
          <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
    </nav>
  )
}
