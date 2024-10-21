import { AliwangwangOutlined, CheckCircleOutlined, ShopOutlined, StarFilled, TrophyOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Image } from "antd";

function ProductComparision() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container relative flex justify-between p-3">
                <img
                    className="w-full h-96 opacity-45"
                    src="https://dlifeinteriors.com/wp-content/uploads/2020/05/Living-room-design-3bhk-flat-kochi.jpg"
                    alt=""
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-medium text-black">
                    Product Comparison
                </h1>
                <h1 className="absolute inset-0 flex items-center justify-center text-2xl font-normal text-black top-36">
                    Home {'>'}
                    <span className="text-gray-700"> Comparison</span>
                </h1>
            </div>
            <div className="container mx-auto p-6 flex flex-col md:flex-row justify-center">
                <div className="mb-8 md:ml-10 p-4">
                    <h1 className="text-4xl font-normal">Go To Product <br /> Page For More <br /> Products</h1>
                    <Link to={'/shop'} className="mt-4 inline-block underline text-xl text-gray-500">View More</Link>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:ml-40">
                    <div className="flex flex-col items-center">
                        <Image preview={false} height={300} width={450} src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A48V1PV1lZVvMFoFBeOVQueiIleT9L4nXivR7zHgx96OJZhvl5af353WPur8rpJAoMPzXUqcpOAcB9f-hOZxASk3qL9PXugNgsIJxJD8eEMvvNoE3ghPq3wxRRQxwvjNTmVrKE6CohfgM6t0Cr8opCxbM6QCPDyXBz1C-Y0wLdxSvywczpAG8376zNkORfD-l5k4YSqM1h9rjiVO9uTIz6uwxPpoXDDJLkskBACsQEtJslBVEKqpsVWTHNZ63t-3Fq0DluBS6Oc-~X8QyrmncM4jsuTPDI2klnq8PVKx6Eq3tsdv-zfGLHCuoTB5iFfvZDcx0fPrcM804f5GrjiQbg__" alt="Asgaard Sofa" className="  object-cover bg-pink-100" />
                        <h2 className="text-2xl font-semibold">Asgaard Sofa</h2>
                        <p className="text-lg text-gray-700">Rs: 250,000.00</p>
                        <p>Rating: 4.7 <StarFilled className="text-yellow-300" /><StarFilled className="text-yellow-300" /><StarFilled className="text-yellow-300" /><StarFilled className="text-yellow-300" /></p>
                    </div>
                    <div className="flex flex-col items-center mb-14">
                        <Image preview={false} height={300} width={450} src="https://s3-alpha-sig.figma.com/img/e8e6/980e/c9e9224b3002d53824688ecee9c882c5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LyMxe6auQcQYZ2AZyZpZ62UMHS3h--YK4F3Ptlccj8HMPKkTLwFiUPSNDG~K7vUjT5ZKelo0NzmW~eKX3D0X0a-~Ql8dek-SbbsOhZNubm1j6OTTBZgct9v2meKaoFz2ITFHSaxUS-Qxv8d--655Fqu3te-w4UBi9kWI55C7zc8Q9NNv866txAZx1lmHM5V~VmEEN25-IjV5KuKpx7ktoPVCxbreSEUJvC0hgZsUOW6QgTe1yUApkCxrSW83-zOXXpH00uYaS4wzpVbBuYE~1ucG1X08cIIhKCWVljajE102TA3-qVcEAU5s5rZ8ZEKPRHuWWgUg3UeWsGO43YlYFA__" alt="Asgaard Sofa" className=" bg-pink-100" />
                        <h2 className="text-2xl font-semibold">Outdoor Sofa Set</h2>
                        <p className="text-lg text-gray-700">Rs: 224,000.00</p>
                        <p>Rating: 4.2 <StarFilled className="text-yellow-300" /><StarFilled className="text-yellow-300" /><StarFilled className="text-yellow-300" /><StarFilled className="text-yellow-300" /></p>
                    </div>
                </div>
            </div>

            {/* General Information Section */}
            <div className="flex flex-col space-y-6 p-6 mx-auto">
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-4xl font-normal py-7">General</h1>
                        <p className="p-3 font-normal text-lg">Sales Package</p>
                        <p className="p-3 font-normal text-lg">Model Number</p>
                        <p className="p-3 font-normal text-lg">Secondary Material</p>
                        <p className="p-3 font-normal text-lg">Configuration</p>
                        <p className="p-3 font-normal text-lg">Upholstery Material</p>
                        <p className="p-3 font-normal text-lg">Upholstery Color</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">1 sectional sofa</p>
                        <p className="p-3 font-normal text-lg">TFCBLIGRBL6SRHS</p>
                        <p className="p-3 font-normal text-lg">Solid Wood</p>
                        <p className="p-3 font-normal text-lg">L-Shaped</p>
                        <p className="p-3 font-normal text-lg">Fabric + Cotton</p>
                        <p className="p-3 font-normal text-lg">Bright Grey & Lion</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">1 Three Seater, 2 Single Seater</p>
                        <p className="p-3 font-normal text-lg">DTUBLIGRBL568</p>
                        <p className="p-3 font-normal text-lg">Solid Wood</p>
                        <p className="p-3 font-normal text-lg">L-Shaped</p>
                        <p className="p-3 font-normal text-lg">Fabric + Cotton</p>
                        <p className="p-3 font-normal text-lg">Bright Grey & Lion</p>
                    </div>
                </div>

                {/* Additional Sections */}
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-4xl font-normal py-7">Product</h1>
                        <p className="p-3 font-normal text-lg">Filling Material</p>
                        <p className="p-3 font-normal text-lg">Finish Type</p>
                        <p className="p-3 font-normal text-lg">Adjustable Headrest</p>
                        <p className="p-3 font-normal text-lg">Maximum Load <br /> Capacity</p>
                        <p className="p-3 font-normal text-lg">Origin of Manufacture</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">Foam</p>
                        <p className="p-3 font-normal text-lg">Bright Grey & Lion</p>
                        <p className="p-3 font-normal text-lg">No</p>
                        <p className="p-3 font-normal text-lg">28 KG</p>
                        <p className="p-3 font-normal text-lg">India</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">Matte</p>
                        <p className="p-3 font-normal text-lg">Bright Grey & Lion</p>
                        <p className="p-3 font-normal text-lg">Yes</p>
                        <p className="p-3 font-normal text-lg">300 KG</p>
                        <p className="p-3 font-normal text-lg">India</p>
                    </div>
                </div>

                {/* Dimensions Section */}
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-4xl font-normal py-7">Dimensions</h1>
                        <p className="p-3 font-normal text-lg">Width</p>
                        <p className="p-3 font-normal text-lg">Height</p>
                        <p className="p-3 font-normal text-lg">Depth</p>
                        <p className="p-3 font-normal text-lg">Weight</p>
                        <p className="p-3 font-normal text-lg">Seat Height</p>
                        <p className="p-3 font-normal text-lg">Leg Height</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">265.32 cm</p>
                        <p className="p-3 font-normal text-lg">76 cm</p>
                        <p className="p-3 font-normal text-lg">167.76 cm</p>
                        <p className="p-3 font-normal text-lg">45 KG</p>
                        <p className="p-3 font-normal text-lg">41.52 cm</p>
                        <p className="p-3 font-normal text-lg">5.46 cm</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">265.32 cm</p>
                        <p className="p-3 font-normal text-lg">76 cm</p>
                        <p className="p-3 font-normal text-lg">167.76 cm</p>
                        <p className="p-3 font-normal text-lg">65 KG</p>
                        <p className="p-3 font-normal text-lg">41.52 cm</p>
                        <p className="p-3 font-normal text-lg">5.46 cm</p>
                    </div>
                </div>

                {/* Warranty Section */}
                <div className="flex justify-evenly">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-4xl font-normal py-7">Warranty</h1>
                        <p className="p-11 font-normal text-lg">Warranty Summary</p>
                        <p className="p-11 font-normal text-lg">Warranty Service <br /> Type</p>
                        <p className="p-11 font-normal text-lg">Covered in Warranty</p>
                        <p className="p-11 font-normal text-lg">Not Covered in <br /> Warranty</p>
                        <p className="p-11 font-normal text-lg">Domestic Warranty</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">1 Year Manufacturing <br /> Warranty</p>
                        <p className="p-3 font-normal text-lg">For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> operations@trevifurniture.com</p>
                        <p className="p-3 font-normal text-lg">Warranty Against <br /> Manufacturing Defect</p>
                        <p className="p-3 font-normal text-lg">The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
                        <p className="p-3 font-normal text-lg">1 Year</p>
                    </div>
                    <div className="py-24">
                        <p className="p-3 font-normal text-lg">1.2 Year Manufacturing <br /> Warranty</p>
                        <p className="p-3 font-normal text-lg">For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> support@xyz.com</p>
                        <p className="p-3 font-normal text-lg">Warranty of the product <br /> is limited to <br /> manufacturing defects <br /> only.</p>
                        <p className="p-3 font-normal text-lg">The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
                        <p className="p-3 font-normal text-lg">3 Months</p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container flex flex-wrap justify-around py-6 bg-pink-50">
                <div className="flex items-center p-5">
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
                <Footer />
            </div>
        </div>
    );
}

export default ProductComparision;
