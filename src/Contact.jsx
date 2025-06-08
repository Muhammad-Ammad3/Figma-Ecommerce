import Footer from "./components/Footer"
import { AliwangwangOutlined, CheckCircleOutlined, ClockCircleFilled, EnvironmentOutlined, PhoneFilled, ShopOutlined, TrophyOutlined } from "@ant-design/icons";
import Navbar from "./components/Navbar"
import ContactForm from "./components/contactForm";

function Contact(){
    return(
<div>
    <Navbar />
    
    <div className="container relative flex justify-between p-3">
        <img 
            className="w-full h-96 object-cover opacity-45" 
            src="https://dlifeinteriors.com/wp-content/uploads/2020/05/Living-room-design-3bhk-flat-kochi.jpg" 
            alt="" 
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-medium text-black">
            Contact
        </h1>
        <h1 className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-normal text-black top-36">
            Home {'>'}
            <span className="text-gray-700"> Contact</span>
        </h1>
    </div>

    <div className="py-20 text-center">
        <h1 className="text-5xl text-black font-normal">Get In Touch With Us</h1>
        <p className="py-10 text-gray-400 max-w-xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
    </div>

    <div className="flex flex-col md:flex-row justify-around items-start max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10 hover:text-yellow-700">
            <EnvironmentOutlined className="text-5xl mb-2 " />
            <h1 className="font-normal text-xl">Address</h1>
            <p className="text-gray-600">
                236 5th SE Avenue, New
                <br /> York NY 10000, United
                <br /> States
            </p>
        </div>
        <div className="flex flex-col items-center text-center mb-10 hover:text-yellow-700">
            <PhoneFilled className="text-5xl mb-2 " />
            <h1 className="font-normal text-xl">Phone</h1>
            <p className="text-gray-600">
                Mobile: +(84) 546-6789
                <br /> Hotline: +(84) 456-6789
            </p>
        </div>
        <div className="flex flex-col items-center text-center mb-10 hover:text-yellow-700">
            <ClockCircleFilled className="text-5xl mb-2 " />
            <h1 className="font-normal text-xl">Working Time</h1>
            <p className="text-gray-600">
                Monday-Friday: 9:00
                <br /> - 22:00
                <br /> Saturday-Sunday: 9:00
                <br /> - 21:00
            </p>
        </div>
    </div>
    
    <div>
        <ContactForm />
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
                <p className="text-gray-500">over 2 years</p>
            </div>
        </div>
        <div className="flex items-center">
            <ShopOutlined className="text-5xl text-gray-950" />
            <div className="ml-6">
                <h1 className="text-xl font-semibold fpy-3 text-gray-950">Free Shipping</h1>
                <p className="text-gray-500">order over $150</p>
            </div>
        </div>
        <div className="flex items-center">
            <AliwangwangOutlined className="text-5xl text-gray-950" />
            <div className="ml-6">
                <h1 className="text-xl font-semibold fpy-3 text-gray-950">24/7 Support</h1>
                <p className="text-gray-500">Dedicated support</p>
            </div>
        </div>
    </div>
    
    <div>
        <Footer />
    </div>
</div>

    

)
}
export default Contact