import {  AliwangwangOutlined, BookOutlined, CheckCircleOutlined, DatabaseOutlined, ShopOutlined, TrophyOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Image } from "antd";

function Blog(){
    return(
<div>
    <div>
        <Navbar />
    </div>
    <div className="container relative flex justify-between p-3">
        <img 
            className="w-full h-96 object-cover opacity-45" 
            src="https://dlifeinteriors.com/wp-content/uploads/2020/05/Living-room-design-3bhk-flat-kochi.jpg" 
            alt="" 
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-medium text-black">
            Blog
        </h1>
        <h1 className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-normal text-black top-36">
            Home {'>'}
            <span className="text-gray-700"> Blog</span>
        </h1>
    </div>

    {[ 
        "https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q7M-TZvzPElgVyYqrkIMQgBHS~9nMZ5VY4yBO0V8NwNB6swCSA7vmyKkP3EQJB2ZFdl2D5aTRrHwHUbRW6Rldb5h3gqQsRCrFNvEtrSD-KPb12ATU~emC3cdhVBPWBtT9r3ynD0SphlJZ5mRLJZV0xKfj7mSHIp-oCAwnCpZEN2MF-uOUfWTKdUzphSjbcmJavbDaikIVat1oqrY9REJhOVsoUX~y4Jd-HC-V5jb~xJW4veuIx0U5NJ44ET4LF2aH788bCCUFpbRzEUYMUBaZEYh3S2SW1EMv~6B2ccBo2oUtI0CMSOA1aqJeVEkr7d1EtP5q3A5AahISYm-Ef2Grg__",
        "https://s3-alpha-sig.figma.com/img/d248/0301/96ed5dc3b3d01cf6cd369ef7aff2f296?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0rRV-2IGASsrwh1DjvpOJffZCJLCKJnghWAeLfPoITvymLcDE21UJOn-EG4HX6KEPZGZTRFcz~2ZV8svLQIdTAhFYuNThTnmK4xzxRbicty~XXQ4L7h1HGpdQGk2YeZ2tbpnKSIa4Uj58xWyj-9kuxVbE~Nr4lVPks6si1IMLStt59f4YLNWi6P67tiigJ3iEmiO~ZoBCN5jj7JX0TTHUcFDJPDJUlXtY19v6T5J17UAmf-~hwVOf7ZrmVVlRV~zmRptrfQbkAfrZ~w3a1iNvWrUW31zu2RsczoK9GSpHH13l~I8KbAD4YANofWlE-Qf~ctHgt7LLE5Tx~VJzABuA__",
        "https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EH1FSEMku743A2m1uGIGrRgYYCKvvSzxKFQMybgMvPZNXvOkCnPS2Ch5Tr5uFPBMY2vRFLjFKjIRGSmc27mCnjtFuzOChBN5lqcAzSeButEPfa47PtiQiZ3PAU2I8pVG0SE2c-FXlrcqDZNl-anlS4wa-HV-EEUt735nuZZDhbgXR07Sr9hIe7tIS7SJwKAuabonb~zlZ3Yr-DbaPkFMPmHCSVSu9HWKC7OzCxnaQDD9t-IUoQDS319mIfS~Yno2kf~UWa64eztqZI4euBcY076JbvQzoafR9sB6jAs6F3aSr3vGVzkqAU9NMQrQ7WfyvAVzIFTB~23hUPQXgzavKw__"
    ].map((src, index) => (
        <div key={index} className="flex justify-center items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 w-full md:w-3/4 lg:w-1/2 mx-4">
                <Image 
                    preview={false}
                    height={500}
                    width={1200} 
                    src={src}
                    alt="Card Image"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center mb-2 gap-2">
                    <UserOutlined className="text-gray-500" />
                    <span>Admin</span>
                    <DatabaseOutlined className="text-gray-500" />
                    <span>14-Oct-2024</span>
                    <BookOutlined className="text-gray-500" />
                    <span>Wood</span>
                </div>
                <h1 className="text-xl font-semibold mb-2">Post Title {index + 1}</h1>
                <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus <br />
                    mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus <br />
                    at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras <br />
                    pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque <br />
                    ornare aenean euismod elementum.
                </p>
                <Link to="/more" className="text-blue-600 hover:text-blue-800 transition">
                    Read More
                </Link>
            </div>
        </div>
    ))}

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
export default  Blog;
