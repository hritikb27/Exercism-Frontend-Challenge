import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/outline'

const sortItems = [
  { id: 1, name: 'Sort by Most Recent', value:'newest_first' },
  { id: 1, name: 'Sort by Oldest', value:'oldest_first' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type SortItemsType = {
  orderFilter: string,
  setOrderFilter: React.Dispatch<React.SetStateAction<string>>,
}

export default function SortItems({ orderFilter, setOrderFilter }: SortItemsType) {
  const [selected, setSelected] = useState(sortItems[1])

  useEffect(()=>{
    setOrderFilter(selected.value);
  },[selected])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative w-full max-h-[70%] h-[50px] mb-2 ">
            <Listbox.Button className="relative w-full h-full bg-[#F0F3F9] rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:border focus:outline-none focus:ring-1 focus:ring-[#2E57E8] focus:border-[#2E57E8] sm:text-sm">
              <span className="block truncate text-[#5C5589] ">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon className="h-7 w-7 text-gray-500 mr-2" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {sortItems.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {item.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}