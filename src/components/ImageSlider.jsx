import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
    const images = [
        {
            src: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCrdAUhTV222FyFLUoCNvwDeRHxQD~pwTH9bDEPo3HWxVlXFNXgXbz2f0IwDqqAJqpr06SCJ7R~riEncNSeNWjtWWvyVlbr1oa7CKHh9viTvbpOp4bERpVIvy8el~xk-lk4XwlUMDBUBrP22L9gLGHFPiHeagz4Jnvp7atGuYR4yKaeXwMYZuROYzRV29S-GvzHwqLLXENChS~KNnO6Qcv7wXI8RzXx7X28LAbgUs0x~65ZTrlZSWPPcjxmEjpvsJYeAXITX04fMKA9ZntdIqep6ipL1KaPQ4CcuQqh9ido0cIXCNuUbjKqOUebSAAJhjvTNFTw9CHdbCyXy6G4nYA__',
            alt: 'Image 1',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mC8i~0f-kRzW5JsP29rItAx8iLklFpFxTPOd6klFJLz5E-Rkkd4baoJtxV9eYn7I1Qwf3BAhNsuqj7r94Jtoiz2UCkZzhqeepfkpzvF08IUmW9Lx1ZWHi-~~yPLb2Av~XNQ5qdZeWrowzwxRHyg2vbL4BwIPZrdvEuQaHx1ySTmZSTppeOvp1uqduc-IYT7MlXggg30JpoHvX2QgLZZB02FpuUmH0Fo1JSbpJM~sX9AnjlgLHtYHOvN7gbnxL3gjnm9kX2ty9469kpEA6cNTSR8cBeL4xoXn5pyY5WPOTQNG59jGuD1nMnciR8q~dhVlPWJnMhBDwmDFk7psSwBhDw__',
            alt: 'Image 2',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RavgO~1jQlqAxNukq8i4pS~Z9C9FsRlxCjSAufpfEm8GSB8O2J~qRuMp0mdO3pXMIU2d9QQXmv3FROFR6ppAmjgpJsj7w-1FnhVazFICOQgAhK97mMAfY8F-NlqmdGd103F~V67H-uh~SSEuTnaxhMft7I73oAjFCL00MPW3uwakzMwMKy75P29YCVo5SDlhVuCcGu5TT5AjEq47VAW8D7Czd24FlGOLQnWTGmXdnegFcL-DPV6KzMZuUN6VqHybKkemLcQEkPFAaTwLUOgJ7hg0o4Y52tcdsYVoMOedGNgeWJmwyNrU2-yjXV8tBznlHWJadi~cEE3-Rio9271jwA__',
            alt: 'Image 3',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VXFiA7W7IeKXS7AvtyCdeycPs7a5lOQUvEhHPGMi3w8kr8F~a99COCsIfMYGMXkcpL5J6yOLCd0SAD-ZxnPedrfi78NEpcksTE-uIsgIlISq5Ag9ayra-pNDshr5hyJ5VzriY9ZloCtIGupu6oIDw2IWjKXyLKwRFJCF6iBHQo17PAMFKk3zfJebtUhfR13RB3U2cp5U0D8asqqey60umdZp1THIOwxrRTYLzRUrBxkzTOOwQDPQZwYitHFIJ6g0NQqsdTyIGNT-vTHgK06ohEnlnGeVE~4YfmmZzEVfLWmE3-CicJRXJdfJbWaESF4gu6U~n3I1wh3kmTlAl1m~sw__',
            alt: 'Image 4',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RwOmAn0NTP1hmZNtOrVQb9PRHAvy27JUkjKUMrekbGkkRsdxGYRn548hyeRjqaOOSa6Cl~JdjQFsENkq5OUPkiTDvW94q6QCrGvR2vD6obLnJDysyqSJCc4yJQ4dly3JRqMBEEC2JUpb3Kn5XCSrvLabEDK5Ge66OOYoUh88Vagq9qmv27m03SMulBxZ3oHUigzRIsdZ6SaGHEfASX1KuDbqeckpNWndc0IG9OkZ-MPFWHSgnQ4fmQv-KfdA8-OQZnYA~mlzoTJorX7dcLIHafZx8tn5fzbNBN0UTbE2ECtWLmooAIHa3xJIZLdLUQHQdSFN7n3bFkdtE0ASCe9J3g__',
            alt: 'Image 4',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RntuviU9ALfTHFntdottkUoTlDb0zpYaz14lEF8oEbgKHkvh-54hrs0-k6kNv7HrygiFv6oGShtbcKen7-bkJoyG4QYn4WUoHi2~qhJEySvqDKW0clUYJyCIhvwwNlsmlJbYkWsKYKmZGYcDDPWrNYnpBZ9a5mLSpN-KoeEFrY6vYvnZSkO-EITK-6~KpCpTFQXRB~GpzUgIAQrS90ZnHlXDSXTdsTNV2MzIfQoTXyis-BVbqPX4AIlSNM8pAXthWVboCgmTNsxQ4zItQBGKvky6MEdTlSNcs-mTaRhuRLcbCZ4j7PUSIE7kI9d-Kn5a5pkG3-uC2uRcyvzlf8303g__',
            alt: 'Image 4',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
<div className='bg-purple-50'>
    <div className="relative w-full h-[70vh] overflow-hidden"> {/* Adjusted height to fit various devices */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-5 w-full max-w-md">
            <h2 className="text-gray-700 text-3xl md:text-4xl font-bold">50+ Beautiful Rooms <br /> Inspiration</h2>
            <p className="text-lg md:text-2xl text-gray-500">Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you</p>
            <button className="w-40 h-10 mt-4 text-white bg-yellow-600 hover:bg-yellow-500 transition duration-300">Explore More</button>
        </div>
        <img
            className="w-full h-full object-cover transition-opacity duration-500"
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
        />
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-yellow-700 rounded-full p-2 hover:bg-purple-100">
            &#10094; 
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-yellow-700 rounded-full p-2 hover:bg-purple-100">
            &#10095; 
        </button>
    </div>
</div>

    );
};

export default ImageSlider;
