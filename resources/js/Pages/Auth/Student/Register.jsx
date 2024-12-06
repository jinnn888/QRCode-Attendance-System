export default function Register({ sections }){
    return (<>
        <div className="flex justify-center items-center h-[90vh] w-full">
            <div className="p-4 rounded border border-gray-200 shadow-sm w-[500px]">
                <div className="flex items-center flex-col justify-center mb-4">
                    <img src="https://placehold.co/150x150" className="rounded-full text-center"/>
                </div>
                <form className="flex flex-col gap-4">
                    <label
                        htmlFor="Username"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-pink-600 focus-within:ring-1 focus-within:ring-pink-600 py-3 px-2"
                    >
                        <input
                            type="text"
                            id="Username"
                            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder="Username"
                        />

                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            ID Number <span className='text-red-700'>*</span>
                        </span>
                    </label>
                    <label
                        htmlFor="fullname"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-pink-600 focus-within:ring-1 focus-within:ring-pink-600 py-3 px-2"
                    >
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Full Name"
                            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        />

                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Full Name  <span className='text-red-700'>*</span>

                        </span>
                    </label>

                    <select data-hs-select='{
                        "hasSearch": true,
                        "searchPlaceholder": "Search...",
                        "searchClasses": "block w-full text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 py-2 px-3",
                        "searchWrapperClasses": "bg-white p-2 -mx-1 sticky top-0",
                        "placeholder": "Select country...",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800\" data-title></span></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                        "dropdownClasses": "mt-2 max-h-72 pb-1 px-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
                        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100",
                        "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"text-gray-800\" data-title></div></div></div>",
                        "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"shrink-0 size-3.5 text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                    }'>
                        <option selected="">Select Section <span className='text-red-700'>*</span></option>
                        { sections.map((section) => (
                        <option value={section.id}>{ section.name }</option>
                        ))}
                    </select>
                    <button className="block p-2 bg-pink-500 text-white font-medium rounded shadow-sm">Login</button>

                </form>
            </div>

        </div>
    </>)
}
