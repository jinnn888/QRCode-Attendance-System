import Scanner from './Scanner.jsx'
import { Link } from '@inertiajs/react'
import Layout from '../Layout.jsx'
import Index from './Index.jsx'
import axios from 'axios'
import { useEffect, useState} from 'react'

export default function Create() {
    const [records, setRecords] = useState();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const fetchSections = async () => {
            axios.get(route('attendance.index'))
                .then((data) => setRecords(data.data))
                .catch((err) => console.error(err))
        }

        fetchSections();
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    console.log(time)


    return (<>
        <div className="flex w-full items-center flex-col">
            <div className="uppercase w-10/12 bg-white border-pink-500 border rounded-sm  p-2 mt-4 text-pink-600 text-center text-2xl">{ time && time.toLocaleTimeString("en-US", { month: 'long'}) }</div>
            <Scanner/>
            <div className="w-10/12 px-5">
                <a href="/attendance-pdf" className="text-sm bg-gray-800 rounded p-2 text-white text-start flex-start">View PDF</a>
            </div>
            <Index records={records}/>
        </div>
    </>)
}

Create.layout = page => <Layout children={page}/>;
