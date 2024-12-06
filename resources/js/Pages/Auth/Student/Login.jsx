import React, { useState } from 'react';
import { useForm, Link } from '@inertiajs/react'

const LoginForm = ({ sections }) => {
    const { data, setData, post, errors } = useForm({
        id_number: '',
        section_id: ''
    });

  const handleSubmit = (e) => {
        e.preventDefault();
        post( route('admin.authenticate') );
  };

  return (<>
        <div className="flex justify-end">
            <Link href={route('student.registration')} >
                <h2 className="text-pink-700 uppercase text-end p-4 hover:underline cursor-pointer">registration</h2>
            </Link>
            <Link href={route('admin.login')} >
                <h2 className="text-pink-700 uppercase text-end p-4 hover:underline cursor-pointer">login as beadle</h2>
            </Link>
        </div>
        <div className="flex flex-row justify-around items-center h-[80vh] ">
            <div>
                <h2 className="text-pink-600 font-bold block text-6xl">Lourdes College</h2>
                <p className="text-pink-500 text-center text-2xl">Automated Attendance Checker</p>
            </div>
            <div className="p-4 rounded border border-gray-200 shadow-sm w-[500px]">
                <form className="flex flex-col gap-4">
                    <h2 className="text-gray-500 text-sm">Logging in as Student.</h2>
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
                            ID Number
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
                        <option selected="">Select Section</option>
                        { sections.map((section) => (
                        <option value={section.id}>{ section.name }</option>
                        ))}
                    </select>
                    <button className="block p-2 bg-pink-500 text-white font-medium rounded shadow-sm">Login</button>
                   <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-up-animation-modal" data-hs-overlay="#hs-slide-up-animation-modal">
                     <a className="text-blue-500 text-sm text-center">Where can I find my password?</a>
                    </button>
<div id="hs-slide-up-animation-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-slide-up-animation-modal-label">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
      <div class="flex justify-between items-center py-3 px-4 ">
        <h3 id="hs-slide-up-animation-modal-label" class="font-bold text-gray-800">
            Where to find your password?
        </h3>
        <button type="button" class="hs-dropup-toggle size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-slide-up-animation-modal">
          <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-4 m-auto">
        <img src="/img/demo.gif"/>
      </div>
        </div>
  </div>
</div>
                </form>
            </div>

        </div>
    </>);
};

export default LoginForm;
