import { AliwangwangOutlined, CheckCircleOutlined, ShopOutlined, TrophyOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CheckOut(){
    return(
<div>
    <div>
        <Navbar />
    </div>
    <div className="relative flex justify-center p-3">
    <img
        className="w-full h-96 object-cover opacity-45"
        src="https://dlifeinteriors.com/wp-content/uploads/2020/05/Living-room-design-3bhk-flat-kochi.jpg"
        alt=""
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-medium text-black">
        Checkout
    </h1>
    <h1 className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-normal text-black top-36">
        Home {'>'}
        <span className="text-gray-700"> Checkout</span>
    </h1>
</div>


    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-medium mb-4">Billing Details</h1>
        <div className="space-y-4">
            {[
                { label: 'First Name', id: 'first-name' },
                { label: 'Last Name', id: 'last-name' },
                { label: 'Company Name (Optional)', id: 'company-name', type: 'text', width: 'w-full' },
                { label: 'Country/Region', id: 'country', type: 'select', options: ['Pakistan', 'India', 'U.S.A', 'Sirilanka', 'Dubai', 'London', 'Paris'] },
                { label: 'Street Address', id: 'street-address' },
                { label: 'Town/City', id: 'city' },
                { label: 'Province', id: 'province', type: 'select', options: ['Western Province', 'Eastern Province', 'Southern Province', 'Northern Province'] },
                { label: 'ZIP Code', id: 'zip-code' },
                { label: 'Phone', id: 'phone', type: 'number' },
                { label: 'Email Address', id: 'email', type: 'email' },
            ].map(({ label, id, type = 'text', options = [] }) => (
                <div key={id} className="py-4">
                    <label className="block text-md font-medium text-black" htmlFor={id}>{label}</label>
                    {type === 'select' ? (
                        <select id={id} className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm h-12">
                            {options.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    ) : (
                        <input type={type} id={id} className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm h-12" />
                    )}
                </div>
            ))}
        </div>
    </div>

    <div className="container flex flex-wrap justify-around py-6 bg-purple-100">
        {[
            { icon: <TrophyOutlined className="text-5xl text-gray-950" />, title: 'High Quality', description: 'crafted from top materials' },
            { icon: <CheckCircleOutlined className="text-5xl text-gray-950" />, title: 'Warranty Protection', description: 'over 2 years' },
            { icon: <ShopOutlined className="text-5xl text-gray-950" />, title: 'Free Shipping', description: 'order over 150$' },
            { icon: <AliwangwangOutlined className="text-5xl text-gray-950" />, title: '24 / 7 Support', description: 'Dedicated support' },
        ].map(({ icon, title, description }) => (
            <div key={title} className="flex items-center mb-4 md:mb-0">
                {icon}
                <div className="ml-6">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
        ))}
    </div>

    <div>
        <Footer />
    </div>
</div>

    )
}
export default  CheckOut;
