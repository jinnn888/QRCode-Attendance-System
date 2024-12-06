import React from 'react';
import { useForm, router, Link } from '@inertiajs/react'
import Layout from '../Layout.jsx'
const Show = ({ student }) => {
  return (<div className="flex items-center justify-center">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 min-w-[500px]">
            <Link className="text-sm underline" href={ route('student.index') }>Back</Link>
            <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <p className="mt-1 text-black  border p-2">{student.name}</p>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">ID Number</label>
        <p className="mt-1 border p-2 text-black">{student.id_number}</p>
    </div>
         <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Section</label>
        <p className="mt-1 border p-2 text-black">{student.section.name }</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">QR Code</label>
        <div className="flex items-center">
          <img src={`/storage/${student.qrcode.image_path}`} alt="QR Code" className="w-24 h-24 mr-4" />
          <a href={student.qrcode.image_path} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download QR Code
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
Show.layout = page => <Layout children={page}/>
export default Show;
