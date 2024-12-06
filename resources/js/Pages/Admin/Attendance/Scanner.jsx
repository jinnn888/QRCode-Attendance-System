import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState  } from 'react'
import { useForm, usePage, router } from '@inertiajs/react'
import Layout from '../Layout.jsx'
const Scanner = () => {
    const { flash } = usePage().props;
    const { post } = useForm();
    const [student, setStudent] = useState();
    useEffect(() => {

        const scanner = new Html5QrcodeScanner('reader', {
            qrBox: {
                width: 250,
                height: 250
            },
            fps: 10
        })

        const onSuccess = (result) => {
            //alert(result)
            //const data = { student: result };
            router.visit( route('attendance.store'), {
                method: 'post',
                data: {
                    id_number: result
                },
                preserveState: true

            });
            console.log(result)
        }

        const onFailure = (error) => {
            console.log(error)
        }

        scanner.render(onSuccess, onFailure);
    }, []);



    return (<div className="flex flex-col">

        { flash.error &&
           <div class="bg-red-100 m-4 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                <p>{ flash.error }</p>
            </div>
        }
        { flash.warning &&
            <div class="bg-orange-100 m-4 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p>{ flash.warning }</p>
            </div>
        }
        { flash.success &&
            <div class="bg-green-100 m-4 order-l-4 border-green-500 text-green-700 p-4" role="alert">
                <p>{ flash.success }</p>
            </div>
        }
        <div className="flex items-center justify-center w-full p-2 flex-col mt-4">
            <div className="p-4 rounded">
                <div className="w-[800px]" id="reader"></div>
            </div>
        </div>

    </div>);
};
Scanner.layout = page => <Layout children={page}/>
export default Scanner;

