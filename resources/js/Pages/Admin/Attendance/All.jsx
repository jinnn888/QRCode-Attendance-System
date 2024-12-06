import Layout from '../Layout.jsx'
const All = ({ records }) => {
    return (<>
<div class="overflow-hidden p-6 flex justify-center items-center w-10/12">
            <table class="min-w-full divide-y divide-gray-200">
          <thead className="bg-pink-500">
            <tr>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase">ID Number</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase">Name</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase">Time in</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase">Time out</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase">Date</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase">Status</th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-white uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            { records && records.map((record, index) => (
            <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100 text-center" key={index}>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{ record.student.id_number }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{record.student.name }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{record.attendance_time_in}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ record.attendance_time_out ? record.attendance_time_out : ' '}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{record.attendance_day}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 uppercase">{record.remarks}</td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>)
}
All.layout = page => <Layout children={page}/>
export default All
