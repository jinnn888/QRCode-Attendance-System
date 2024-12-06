import React from 'react';
import { Link, router } from '@inertiajs/react'
import Layout from '../Layout.jsx'
import Breadcrumb from '../Components/Breadcrumb.jsx'
import Create from './Create.jsx'
const Index = ({ students }) => {

    const deleteHandler = (studentId) => {
        router.delete( route('student.destroy', { id: studentId}), { preserveScroll: true } )
    }
    // Submit button to be passed in Create
    const submitBtn = (
    <button></button>
    )
  return (<>
      <div class="flex flex-col p-5 justify-center items-center">
  <div class="-m-1.5 overflow-x-auto ">
    <div class="p-1.5 min-w-full inline-block align-middle">
    <Create/>
      <div class="overflow-hidden flex-grow">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">ID Number</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Birth Date</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Gender</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            { students.map((student, index) => (
            <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100" key={index}>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{ student.id_number }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ student.name }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ student.birthday}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ student.gender}</td>
                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button onClick={e => deleteHandler(student.id)} type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                    <Link href={ route('student.show', { id: student.id}) } class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">View</Link>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div></>  );
};
Index.layout = page => <Layout children={page}/>
export default Index;
