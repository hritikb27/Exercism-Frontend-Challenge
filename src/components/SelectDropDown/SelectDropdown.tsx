import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/outline'
import SelectDropMainImg from "../../assets/Table/SelectDropMain.png"

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    icon_url:
      SelectDropMainImg,
  },
  
]

interface Track {
    title: string,
    icon_url: string,
    num_exercises: number,
    slug: string,
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectDropdown() {
  const [selected, setSelected] = useState(people[0]);
  const [tracks, setTracks] = useState<Track[]>();

  useEffect(()=>{
      const getTracks = async()=>{
        const fetchTracks = await fetch('https://exercism.org/api/v2/tracks')
        .then(data=>data.json())
        .then(res=> {
            setTracks(res.tracks)
            console.log(res.tracks)
        });
      }

      getTracks();
  },[])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }: any) => (
        <>
          <div className="mt-1 relative min-w-[12%] max-w-[8%] ">
            <Listbox.Button className="relative min-w-full bg-white shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm">
              <span className="flex items-center">
                <img src={selected.icon_url} alt="" className="min-w-[30px] size-cover rounded-full" />
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon className="h-5 w-5 text-thin text-gray-600" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-[300px] bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {tracks && tracks.map((track) => (
                  <Listbox.Option
                    key={track.slug}
                    className={({ active }: any) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={track}
                  >
                    {({ selected, active }: any) => (
                      <>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <img src={track.icon_url} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                <span
                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                    {track.title}
                                </span>
                            </div>
                          <span className="w-[45px] h-[30px] border border-gray-400 rounded-full flex items-center justify-center">
                              {track.num_exercises}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
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