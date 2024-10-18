import { Link } from "react-router-dom"

function Footer(){
    return (
<div className="py-12 bg-purple-50">
    <div className="container flex flex-col justify-between px-4 mx-auto md:flex-row">
        <div className="py-6">
            <h1 className="text-3xl font-bold text-black">Funiro.</h1>
            <p className="py-4 mt-2 text-gray-400">
                400 University Drive Suite 200 Coral <br />
                Gables, <br />
                FL 33134 USA
            </p>
        </div>
        
        <div className="py-4 mt-4 md:mt-0">
            <p className="text-gray-400">Links</p>
            <div className="flex flex-col flex-wrap py-4">
    <div className="w-full md:w-1/2">
        <Link to={"/"} className="text-lg font-semibold text-gray-800 hover:text-blue-500">Home</Link>
    </div>
    <div className="w-full md:w-1/2">
        <Link to={'/Shop'} className="text-lg font-semibold text-gray-800 hover:text-blue-500">Shop</Link>
    </div>
    <div className="w-full md:w-1/2">
        <Link to={'/About'} className="text-lg font-semibold text-gray-800 hover:text-blue-500">About</Link>
    </div>
    <div className="w-full md:w-1/2">
        <Link to={'/Contact'} className="text-lg font-semibold text-gray-800 hover:text-blue-500">Contact</Link>
    </div>
</div>

        </div>
        
        <div className="py-4 mt-4 md:mt-0">
    <p className="text-gray-400">Help</p>
    <div className="flex flex-col flex-wrap py-4">
        <div className="w-full mb-2 md:w-1/2">
            <Link to={"/"} className="text-lg font-semibold text-gray-800 hover:text-blue-500">Payment Option</Link>
        </div>
        <div className="w-full mb-2 md:w-1/2">
            <Link to={'/Shop'} className="text-lg font-semibold text-gray-800 hover:text-blue-500">Return</Link>
        </div>
        <div className="w-full mb-2 md:w-1/2">
            <Link to={'/About'} className="text-lg font-semibold text-gray-800 hover:text-blue-500">Privacy Policies</Link>
        </div>
    </div>
</div>


        <div className="py-3 mt-4 mr-3 md:mt-0">
            <p className="text-gray-400">Newsletter</p>
            <div className="flex flex-col items-center py-4 md:flex-row">
                <input 
                    type="email" 
                    placeholder="Enter Your Email Address" 
                    className="p-2 mb-2 mr-2 bg-transparent border-b-2 border-gray-950 md:mb-0" 
                />
                <button className="p-2 font-semibold bg-transparent border-b-2 border-gray-950">SUBSCRIBE</button>
            </div>
        </div>
    </div>
    
    <p className="mt-4 text-center text-gray-400">2024 Funiro. All rights reserved.</p>
</div>

    )
}
export default Footer