import SelectDropdown from "../SelectDropDown/SelectDropdown"
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/outline'
import SortItems from "../Sort/SortItems";
import { useEffect, useState } from "react";
import { Track } from "../SelectDropDown/SelectDropdown";

const people = [
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
]

type mentor = {
    avatar_url: string,
    handle: string
}

interface Testimonial {
    content: string,
    created_at: string,
    mentor: mentor,
    track: Track,
    id: number
}

function TestimonialTable(): JSX.Element {
    const [testimonials, setTestimonials] = useState<Testimonial[]>();
    const [searchValue, setSearchValue] = useState<string>();
    const [exerciseFilter, setExerciseFilter] = useState<string>();
    const [trackFilter, setTrackFilter] = useState<string>();
    const [orderFilter, setOrderFilter] = useState<string>();

    useEffect(()=>{
        const getTestimonials = async() => {
            const Testimonials = await fetch("https://exercism.org/api/v2/hiring/testimonials")
            .then(res=>res.json())
            .then(data=>{
                setTestimonials(data.testimonials.results)
                console.log(data.testimonials)
            })
        }

        getTestimonials();
    },[])

    const getFilteredTestimonials = async()=> {
        const getTestimonials = await fetch(`https://exercism.org/api/v2/hiring/testimonials?${trackFilter && `track=${trackFilter}`}&${exerciseFilter && `exercise=${exerciseFilter}`}&${orderFilter && `order=${orderFilter}`}`)
    }

    const handleExerciseChange = (value: string) => {
        setSearchValue(value);
        setExerciseFilter(value);
        getFilteredTestimonials();
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-h-[791px] min-h-[500px] ">
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full pt-2 pb-8 align-middle md:px-6 lg:px-8 ">
                        <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg shadow-xl shadow-gray-200">
                            <div className="min-w-full flex items-center h-[60px] border-b border-gray ">
                                <div className="flex items-center gap-2 w-full">
                                    <SelectDropdown />
                                    <div className="relative flex bg-[#F0F3F9] min-w-[35%] max-h-[70%] h-[40px] ml-3 rounded-[5px] px-6">
                                        <span className="ml-3 absolute inset-y-0 left-0 flex items-center pr-2 pointer-events-none">
                                            <SearchIcon className="h-5 w-5 text-thin text-gray-600" aria-hidden="true" />
                                        </span>
                                        <input type="text" value={searchValue} onChange={(e)=>handleExerciseChange(e.target.value)} placeholder="search here..." className="bg-[#F0F3F9] ml-4 w-full outline-none" />
                                    </div>
                                </div>
                                <div className="min-w-[30%] mr-4 min-h-full flex items-center">
                                    <SortItems />
                                </div>
                            </div>

                            <table className="min-w-full divide-y divide-gray-300">

                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {testimonials && testimonials.map((testimonial) => (
                                        <tr key={testimonial.id}>
                                            <td>
                                                <div>
                                                    <img src={testimonial.track.icon_url} />
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={testimonial.mentor.avatar_url} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{testimonial.mentor.handle}</div>
                                                        {/* <div className="text-gray-500">{person.email}</div> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{testimonial.content}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{testimonial.created_at}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-[#5C5589]">
                                                    <ChevronRightIcon className="h-7 w-7" /> <span className="sr-only">, {testimonial.mentor.handle}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialTable;