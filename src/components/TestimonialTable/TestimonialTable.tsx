import SelectDropdown from "../SelectDropDown/SelectDropdown"
import { SearchIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import SortItems from "../Sort/SortItems";
import { useEffect, useRef, useState } from "react";
import { Track } from "../SelectDropDown/SelectDropdown";
import Pagination from "../Pagination/Pagination";
import _ from "lodash";
import TimeFormat from "./TimeFormat";
import { RotatingLines } from  'react-loader-spinner'

const people = [
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 1
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 2,
        },
        id: 2
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 3
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 4
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 5
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 6
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 7
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 8
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 9
    },
    {
        content: "I got fantastic and timely feedback from him. He was super help...",
        created_at: "2020-08-14T10:37:34.000Z",
        mentor:{
            avatar_url: "https://avatars2.githubusercontent.com/u/10456471?v=4",
            handle: "elektronaut0815"
        },
        track:{
            icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            slug: "rust",
            title: "Rust",
            num_exercises: 1,
        },
        id: 10
    },
]

const pageSize = 10;

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

type TestimonialTableType = {
    selectedTrack: Track,
    setSelectedTrack: React.Dispatch<React.SetStateAction<Track>>;
}

function TestimonialTable({ selectedTrack, setSelectedTrack }: TestimonialTableType): JSX.Element {
    const [testimonials, setTestimonials] = useState<Testimonial[]>();
    const [searchValue, setSearchValue] = useState<string>();
    const [exerciseFilter, setExerciseFilter] = useState<string>();
    const [trackFilter, setTrackFilter] = useState<string>();
    const [orderFilter, setOrderFilter] = useState<string>();
    const [pageCount, setPageCount] = useState<number[]>([1]);
    const [paginatedTestimonials, setPaginatedTestimonials] = useState<Testimonial[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [inputActive, setInputActive] = useState<boolean>();

    useEffect(() => {
        const getTestimonials = async () => {
            setIsLoading(true);
            setPaginatedTestimonials(people);
            const Testimonials = await fetch("https://exercism.org/api/v2/hiring/testimonials")
                .then(res => res.json())
                .then(data => {
                    setTestimonials(data.testimonials.results)
                    setPaginatedTestimonials(_(data.testimonials.results).slice(0).take(pageSize).value());
                    setIsLoading(false);
                    const count = (data.testimonials.results && data.testimonials.results.length>1) ? Math.ceil(data.testimonials.results.length / pageSize) : 0;
                    console.log('Count: ', count)
                    const pages = _.range(1, count+1);
                    setPageCount(pages);
                })
        }

        getTestimonials();
    }, [])

    // Fetch/Filter the data with the specified track selected by the user
    useEffect(() => {
        setIsLoading(true)
        setPaginatedTestimonials(people);
        getFilteredTestimonials();

    }, [trackFilter])

    const getFilteredTestimonials = async () => {
         await fetch(`https://exercism.org/api/v2/hiring/testimonials?${trackFilter && `track=${trackFilter}`}&${exerciseFilter && `exercise=${exerciseFilter}`}&${orderFilter && `order=${orderFilter}`}`)
            .then(res => res.json())
            .then(data => {
                setTestimonials(data.testimonials.results);
                console.log("DATA: ", data.testimonials.results)
                setPaginatedTestimonials(_(data.testimonials.results).slice(0).take(pageSize).value());
                const count = (data.testimonials.results && data.testimonials.results.length>1) ? Math.ceil(data.testimonials.results.length / pageSize) : 0;
                console.log('Updated Count: ', count)
                const pages = _.range(1, count+1);
                setPageCount(pages);
                setIsLoading(false);
            })

    }

    const handleExerciseChange = (value: string) => {
        setSearchValue(value);
        setExerciseFilter(value);
        getFilteredTestimonials();
    }

     const handlePagination = (pageNo: number)=> {
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPosts = _(testimonials).slice(startIndex).take(pageSize).value();
        setPaginatedTestimonials(paginatedPosts);
     }

    return (
        <div className="px-4 sm:px-6 lg:px-8 min-h-[500px] min-w-full">
            <div className="-mt-3 flex flex-col ">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="inline-block min-w-full pt-12 pb-8 align-middle md:px-6 lg:px-20 ">
                        <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg shadow-[5px_25px_60px_25px_rgba(0,0,0,0.3)] shadow-gray-200">
                            <div className="min-w-full flex items-center h-[70px] border-b border-gray ">
                                <div className="flex items-center gap-2 w-full ml-2">
                                    <SelectDropdown selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} setTrackFilter={setTrackFilter} />
                                    <div className={!inputActive ? "relative flex bg-[#F0F3F9] min-w-[45%] max-h-[70%] h-[50px] ml-3 rounded-[5px] px-6" : "relative flex bg-[#F0F3F9] min-w-[45%] max-h-[70%] h-[50px] ml-3 rounded-[5px] px-6 outline-none ring-1 ring-[#2E57E8] border border-[#2E57E8]"}>
                                        <span className="ml-3 absolute inset-y-0 left-0 flex items-center pr-2 pointer-events-none">
                                            <SearchIcon className="h-5 w-5 text-thin text-gray-600" aria-hidden="true" />
                                        </span>
                                        <input type="text" value={searchValue} onChange={(e) => handleExerciseChange(e.target.value)} onFocus={()=>setInputActive(true)} onBlur={()=>setInputActive(false)} placeholder="Filter by exercise title" className="bg-[#F0F3F9] placeholder:text-[#5C5589] ml-6 w-full outline-none" />
                                    </div>
                                </div>
                                <div className="min-w-[30%] mr-4 min-h-full flex items-center">
                                    <SortItems />
                                </div>
                            </div>

                            <table className="min-w-full divide-y divide-gray-300">
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    
                                    {isLoading &&
                                        <div className="relative min-w-full ml-[380%] blur-none z-10"><RotatingLines
                                        width="100"
                                        strokeColor="#5C5589"
                                        strokeWidth="1"
                                        animationDuration="2" 
                                    /></div>
                                    }
                                    {paginatedTestimonials && paginatedTestimonials.map((testimonial,index) => (
                                        <tr key={testimonial.id} className={isLoading?"blur-md":"max-h-[40px] z-1"}>
                                            <td>
                                                <div className="w-11 ml-5">
                                                    <img src={testimonial.track.icon_url} className="size-cover" />
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap pl-4 pr-3 text-sm sm:pl-6">
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

                                            <td className="truncate ml-20 min-h-[60.5px] text-gray-900 max-w-[400px] ">
                                               {testimonial.content}
                                            </td>

                                            <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                                                <TimeFormat date={testimonial.created_at} />
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 text-right text-sm font-medium">
                                                <a href={testimonial.track.slug} className="text-[#5C5589]">
                                                    <ChevronRightIcon className="h-7 w-7" /> <span className="sr-only">, {testimonial.mentor.handle}</span>
                                                </a>
                                            </td>
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

export default TestimonialTable;