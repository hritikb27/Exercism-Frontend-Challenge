const people = [
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

function TestimonialTable(): JSX.Element {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <div className="min-w-full flex justify-between items-center h-[60px] border-b border-gray ">
                                <select className="bg-[#F0F3F9] w-[10%] h-[40px] rounded-[5px] ">Icon</select>
                                <input type="text" placeholder="search here..." className="bg-[#F0F3F9] w-[20%] max-h-[70%] h-[40px] rounded-[5px]" />
                                <select className="bg-[#F0F3F9] w-[20%] max-h-[70%] h-[40px] rounded-[5px]">Sort by</select>
                            </div>

                            <table className="min-w-full divide-y divide-gray-300">

                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.email}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{person.name}</div>
                                                        <div className="text-gray-500">{person.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{person.title}</div>
                                                <div className="text-gray-500">{person.department}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit<span className="sr-only">, {person.name}</span>
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