import { Link, router } from '@inertiajs/react'
import axios from 'axios'
const Layout = ({ children }) => {

    const logoutHandler = () => {
        axios.post( route('admin.logout'))
            .then(() => window.location.reload())
            .catch((err) => console.error(err))
    }

    return (<>
<header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-pink-600 text-sm">
    <nav class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex flex-row items-center gap-4">
            <div className="bg-white">
                <img src="/img/lc-seal.png" width="100" className="px-2"/>
            </div>
            <span className="font-light italic text-white text-2xl" style={{ fontFamily: 'Montserrat'}}>Attendance System</span>
        </div>
    <div class="sm:order-3 flex items-center gap-x-2">
      <button type="button" class="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-pink-200 bg-pink-50 text-pink-800 shadow-sm hover:bg-pink-100 focus:outline-none focus:bg-pink-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
        <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <span class="sr-only">Toggle</span>
      </button>
      <button onClick={logoutHandler} type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounde border border-pink-200 bg-pink-50 text-pink-800 shadow-sm hover:bg-pink-100 focus:outline-none focus:bg-pink-100 disabled:opacity-50 disabled:pointer-events-none">
        Logout
      </button>
    </div>
    <div id="hs-navbar-alignment" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
      <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
        {/*<Link class="font-medium text-white focus:outline-none" href={route('admin.dashboard')} aria-current="page">Home</Link>*/}
        <Link class="font-medium text-white focus:outline-none" href={route('attendance.create')} aria-current="page">Attendance Today</Link>
        <Link class="font-medium text-white focus:outline-none" href={route('attendance.view-all')} aria-current="page">Attendance Records</Link>
        <Link class="font-medium text-white focus:outline-none" href={route('student.index')} aria-current="page">Students</Link>
      </div>
    </div>
  </nav>
</header>

        { children }
    </>)
}
export default Layout;
