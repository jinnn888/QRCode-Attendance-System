import { Link } from '@inertiajs/react'
export default function Breadcrumb({ items }) {
    return (<>
        <ol class="flex items-center whitespace-nowrap m-4">
            { items.map((item, index) => (
                item.url ? (<li class="inline-flex items-center">
                    <Link class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href={ route(`${item.url}`)}>
                        { item.label }
                    </Link>
                    <svg class="shrink-0 mx-2 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    </li>)
                : (<li class="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                       { item.label }
                    </li>)
            ))}
    </ol>
    </>)
}
