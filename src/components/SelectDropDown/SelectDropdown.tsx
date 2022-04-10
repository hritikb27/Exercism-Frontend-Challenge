import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/outline'

export interface Track {
    title: string,
    icon_url: string,
    num_exercises: number,
    slug: string,
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type SelectDropdownType = {
  selectedTrack: Track,
  setSelectedTrack: React.Dispatch<React.SetStateAction<Track>>,
  setTrackFilter: React.Dispatch<React.SetStateAction<string|undefined>>,
}

export default function SelectDropdown({selectedTrack, setSelectedTrack, setTrackFilter}: SelectDropdownType) {
  const [tracks, setTracks] = useState<Track[]>();

  useEffect(()=>{
      const getTracks = async()=>{
        await fetch('https://exercism.org/api/v2/tracks')
        .then(data=>data.json())
        .then(res=> {
            console.log(res.tracks)
            setTracks(res.tracks)
            setSelectedTrack(res.tracks[45])
        });
      }

      getTracks();
  },[])

  const handleTrackChange = (track: Track) => {
    setSelectedTrack(track);
    setTrackFilter(track.title)
  }

  return (
    <Listbox value={selectedTrack} onChange={(e)=>handleTrackChange(e)}>
      {({ open }: any) => (
        <>
          <div className="mt-1 relative min-w-[12%] max-w-[8%] ">
            <Listbox.Button className="relative min-w-full bg-white shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm">
              <span className="flex items-center">
                <img src={selectedTrack.icon_url} alt="" className="min-w-[30px] size-cover rounded-full" />
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
                        active ? 'text-[#3D3B45] bg-[#F0F3F9]' : 'text-[#3D3B45]',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={track}
                  >
                    {({ selected, active }: any) => (
                      <>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <span className='relative w-[21px] h-[21px] rounded-full border border-[#5C5589] mr-4 flex justify-center items-center'>
                                  
                                    {selected && 
                                      <span className='absolute w-[9px] h-[9px] rounded-full bg-[#5C5589] m-2 '></span>
                                      }
                                  
                                </span>
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
                              active ? 'text-[#3D3B45]' : 'text-indigo-600',
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