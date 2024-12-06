import React from 'react';
import { useForm, usePage } from '@inertiajs/react'

const UserProfile = ({ auth }) => {
    const student = auth.student;

    const { post } = useForm();
    const { flash } = usePage().props;
    const logoutHandler = () => {
        post( route('logout') );
    }

  return (<div className="flex row justify-center p-4">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 min-w-[500px]">
            <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
    <button onClick={logoutHandler} className="p-2 bg-gray-700 text-white rounded shadow-sm">Logout</button>
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
         <div className="flex-grow p-4">
            <table className="table table-bordered table-hover w-full">
                <thead className="text-white bg-pink-700">
                    <th className="p-2">Day</th>
                    <th className="p-2">Time In</th>
                    <th className="p-2">Time Out</th>
                    <th className="p-2">Status</th>
                </thead>
                <tbody>
                    { student.attendances.map((record, index) => (
                        <tr key={index}>
                            <td className="p-2">{ record.attendance_day }</td>
                            <td className="p-2">{ record.attendance_time_in }</td>
                            <td className="p-2">{ record.attendance_time_out ? record.attendance_time_out : 'Still in school...' }</td>
                            <td className="p-2 capitalize">{ record.remarks }</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>

    </div>
  );
};

export default UserProfile;
