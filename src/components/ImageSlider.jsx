import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
    const images = [
        {
            src: 'https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cODEA1bY4akRpfqv1587rc-pMB6GVOARCkqw2UK38F6I1Xq-Ss-8sXIM07WBbuxBX9Cc0LM5Sgsi7~pk5Wyq3WzFVO46XkaahA4Pmnd8D1bH1vUT76wJ6WLJbafWztuznKjqZc058wrLbrDNrgPYhSaV~sGTiA2arWqAITW-xhg-m8eSR65L3kckDmE3BXwwLlKn44Kln7EfGtm-aps7~67RVBrgHn~X62FYOQlK0Ts8YEiciRUd9hFRPuoQZoRKL-w3lUyhVI3WUHB8s0IhSyR7TwRicEs7cNK-OrLIcyOaKZlDFGC7xGAWbbHtTUqGnrm8cPy37zt5jdo62ro2CQ__',
            alt: 'Image 1',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mi-RmAxTufdhS2rE5RVadS6zUrGGuR1nD~DWNhj~hDs8lz9LfZK1Td67YUwVqEgx3ImnPNKebraoDUvI3XWf1QR4nsc8LRwiD7gjzseoxuib4P51Sc~xg7Qxbq-BjcyNSulD0~71HqTV7cNiS4bMPazRN-gBxHxJUe5Bs75G7Qki8sjWghASfDzqNO0v9E0ZlIMv~LbtaH~lixdbsuGwcv9unIhmO4GYFRpTxRlPvwCZNnHEA2JymJYGIlWeFEuIvsDruEjX-AwK0vkBx5Pt9Dqn05prVRa6vrro8tihF8xrl1eFpj3nYSJFuC4okN~TUZj-TJo8e4fxeshiz3pbFw__',
            alt: 'Image 2',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j9T10BCLZpM54mCaIPEfMpJYpA1lYeLiuPjB-kkj9xVe519I3mm-0WH5UNg7dyFfPuG25CmbYYfvRLDmH8sZE7Ha~Mxzy1SHPtikdFthvGqy-bLhCo~RJAlO~rqocGGggYKjecsAUIVac6yqTewRxOji2kmRL8EbiY6rJHoXelV0LHgXVh-5k6DovCPx9ps7iBm~NPXbiNOzgVqZ7iDiGzo0JCkuXnizzcLLv7ItGDWABCaB-JKozN-KFjn8VInj4Q2aU4ONKhqBk1tarJEEdVB1D0-Vi-5Smw5~--UEurnCorNctF9IuGMaOq3RzGViOwMBE6lm-HxhX9kr8fmh0g__',
            alt: 'Image 3',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/9532/f812/360b02673b349021a24f23d4184b4e15?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppzqQSu~v3pqtmdNH~nzckjJxMNC8mmSu~h7pE9kB4QLw9ndFkMd8nzjibH28TCDMMmCNam2cSvjrTht19tbA-riB122EaYhWPtYzJV1hlWyC7f2fE0RqFpYv453~xSWuVuseSrucNobsm~RCB6-S3CnMQIETCJvSt5pFfpPvd33I-nLt~kpZHAlOOPg5JQYljGdr~WEC1B45kUZRrt1of0Icy~DTS~r40WFnu9pc7RApJEIalYK9UlPoSPy-4huqXeqNRtz0POH~QfJdzcim2AN6hGhXPORgDlsFCXM4uGUlLAP98BeKj8j4mpa5rF2Vz-eKOnTe8kVaB2mmR561g__',
            alt: 'Image 4',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/e8ee/1dc9/413c23f2d7371be94a52ea9020db45cc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dT~6ozGxRBF~7dAoeDpJ4A7rbzum~OmQ1p1XAFcC2orCjPDaUCWv~pCNabiDPWRqC3XC3SLUn0f~AhCsUkkNIqi-WJuzU0pUscuYGYvMEjTop7qxxIA-fdIbtUlKkpvJPlzLkqCp2nwBhj4MazCOUwPPXyCf7OYOYPonBJ4eMAH1hUvNxvMjnAYGn7vlnwX0T1djVQbVmoMRrSEkGcIS1GmD~TORgjfYL-cLHFcOUu0Pm5efVyAFbSA-0BcHoAZ2B-bcbXREfACDQ-TlUsY8bjonc11Nu5wmgD3~wFFYG7GyODYdaadNdSRGORd5nMdgRzsYoJEaBOerskc-xbayUg__',
            alt: 'Image 4',
        },
        {
            src: 'https://s3-alpha-sig.figma.com/img/057c/3bab/f9de6c6ff643cd2e7661215ad26aed46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ha9nrXGpUKTieolEUBMaW3BR2X0xFwbFKqVeQEQFEfMd66-qMLg4Uyx~Go26Le4vP6pa24aTSRLqF4VnJOrIU-RAUbi-h4uqtEXbcXNwt~LVsCMMvi~vbf54e1AEz8Zwig8RClgLxLlGD2iuUjFtafWW-nW91zSwJRj3wEXNxSI-3uXe1l3Mtr-i~2nQVGwFlwjdDBwANZqA120uoVt7dVfOBvaQvw3MchYf3DxXUgp1MOgxZRjYwc~lHgkosFIO1Ib1XzwtPZXfIuC4XRpGXai7MyE8WW2NSnrHCFQg6ZpNoo2mlc7RezF1cLuYWlUkLFLM4XCP1R2E5A4p3iGibA__',
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

        <div className="relative w-full h-svh overflow-hidden">
            <div className="absolute top-72 items-center justify-center h-full w-1/3 p-5 ">
                <h2 className="text-gray-700 text-4xl font-bold">50+ Beautiful Rooms <br /> Inspiration</h2>
                <p className="text-2xl text-gray-500">Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you</p>
                <button className="w-40 h-10 mt-4 text-white bg-yellow-600">Explore More</button>
            </div>
            <img
                className="w-full h-auto object-cover transition-opacity duration-500"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
            />
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white ml-96 text-yellow-700 rounded-full p-2 hover:bg-purple-100">
                &#10094; 
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-yellow-700 border rounded-full p-2 hover:bg-purple-100">
                &#10095; 
            </button>
        </div>
        </div>
    );
};

export default ImageSlider;
