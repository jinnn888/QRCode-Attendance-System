import React, { useState } from "react";
import { useForm, Link, usePage } from "@inertiajs/react";
import Layout from "../Layout.jsx";
import Breadcrumb from "../Components/Breadcrumb.jsx";

function Create({ sections }) {
  const { post, data, setData, errors } = useForm({
    id_number: "",
    name: "",
    birthday: "",
    address: "",
    gender: "male",
  });

  const { flash } = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("student.store"));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-4">
        {flash.success && (
          <div
            role="alert"
            className="rounded border-s-4 border-green-500 bg-green-50 p-4 w-10/12 mb-2"
          >
            <strong className="block font-medium text-green-800">Success</strong>
            <p className="mt-2 text-sm text-green-700">{flash.success}</p>
          </div>
        )}
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-scroll-inside-body-modal"
          data-hs-overlay="#hs-scroll-inside-body-modal"
        >
          New Student
        </button>

        <div
          id="hs-scroll-inside-body-modal"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
          role="dialog"
          tabIndex="-1"
          aria-labelledby="hs-scroll-inside-body-modal-label"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 h-[calc(100%-3.5rem)] sm:mx-auto">
            <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3
                  id="hs-scroll-inside-body-modal-label"
                  className="font-bold text-gray-800"
                >
                  Add new student record
                </h3>
                <button
                  type="button"
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Close"
                  data-hs-overlay="#hs-scroll-inside-body-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto">
                <div className="py-2">
                  <div className="bg-white gap-6 flex w-full justify-center">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="id_number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ID Number
                        </label>
                        <input
                          type="text"
                          id="id_number"
                          name="id_number"
                          value={data.id_number}
                          onChange={(e) =>
                            setData("id_number", e.target.value)
                          }
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={data.name}
                          onChange={(e) => setData("name", e.target.value)}
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="birthday"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Birthday
                        </label>
                        <input
                          type="date"
                          id="birthday"
                          name="birthday"
                          value={data.birthday}
                          onChange={(e) => setData("birthday", e.target.value)}
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Gender
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={data.gender}
                          onChange={(e) => setData("gender", e.target.value)}
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          required
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                        <button
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                          data-hs-overlay="#hs-scroll-inside-body-modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-slate-600 text-white hover:bg-slate-700 focus:outline-none focus:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Create.layout = (page) => <Layout children={page} />;
export default Create;
