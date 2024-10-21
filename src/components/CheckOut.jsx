import { AliwangwangOutlined, CheckCircleOutlined, ShopOutlined, TrophyOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CheckOut(){
    return(
<div>
    <div>
        <Navbar/>
    </div>
        <div className="container relative flex justify-between p-3">
    <img 
        className="w-full h-96 opacity-45" 
        src="https://dlifeinteriors.com/wp-content/uploads/2020/05/Living-room-design-3bhk-flat-kochi.jpg" 
        alt="" 
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-medium text-black">
    Checkout 
   </h1>
    <h1 className="absolute inset-0 flex items-center justify-center text-2xl font-normal text-black top-36">Home{'>'}
        <span className="text-gray-700">Checkout</span>
    </h1>
</div>
<div class="max-w-lg p-6 bg-white ml-44 rounded-lg shadow-md">
    <h1 class="text-4xl font-medium mb-4">Billing Details</h1>
    <div class="space-y-4">
        <div class="py-8">
            <label class="block text-md font-medium text-black" for="first-name">First Name</label>
            <input type="text" id="first-name" class="mt-1 block w-56 h-20 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="last-name">Last Name</label>
            <input type="text" id="last-name" class="mt-1 block w-56 h-20 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="company-name">Company Name (Optional)</label>
            <input type="text" id="company-name" class="mt-1 block w-96 h-16 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="country">Country/Region</label>
            <select id="country" class="mt-1 block border-gray-300 border-2 w-96 h-16 rounded-md">
                <option value="">Pakistan</option>
                <option value="">India</option>
                <option value="">U.S.A</option>
                <option value="">Sirilanka</option>
                <option value="">Dubai</option>
                <option value="">London</option>
                <option value="">Paris</option>
            </select>
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="street-address">Street Address</label>
            <input type="text" id="street-address" class="mt-1 block w-96 h-16 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="city">Town/City</label>
            <input type="text" id="city" class="mt-1 block w-96 h-16 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="province">Province</label>
            <select id="province" class="mt-1 block w-96 h-16 border-gray-300 border-2 rounded-md shadow-sm">
                <option value="">Western Province</option>
                <option value="">Eastern Province</option>
                <option value="">Southern Province</option>
                <option value="">Northern Province</option>
            </select>
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="zip-code">ZIP Code</label>
            <input type="text" id="zip-code" class="mt-1 block w-96 h-16 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="phone">Phone</label>
            <input type="number" id="phone" class="mt-1 block w-96 h-16 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
        <div>
            <label class="block text-md font-medium text-black" for="email">Email Address</label>
            <input type="email" id="email" class="mt-1 block w-96 h-16 border-gray-300 border-2 rounded-md shadow-sm" />
        </div>
    </div>
</div>
<div className="container flex flex-wrap justify-around py-6 bg-purple-100">
    <div className="flex items-center">
        <TrophyOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">High Quality</h1>
            <p className="text-gray-500">crafted from top materials</p>
        </div>
    </div>
    <div className="flex items-center">
        <CheckCircleOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">Warranty Protection</h1>
            <p className="text-gray-500">over 2 year</p>
        </div>
    </div>
    <div className="flex items-center">
        <ShopOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">Free Shipping</h1>
            <p className="text-gray-500">order over 150$</p>
        </div>
    </div>
    <div className="flex items-center">
        <AliwangwangOutlined className="text-5xl text-gray-950" />
        <div className="ml-6">
            <h1 className="text-xl font-semibold fpy-3 text-gray-950">24 / 7 Support</h1>
            <p className="text-gray-500">Dedicated support</p>
        </div>
    </div>
 
</div>
<div>
    <Footer/>
</div>
</div>
    )
}
export default  CheckOut;
