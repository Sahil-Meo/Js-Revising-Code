import React, { useEffect, useState } from 'react'

const FirstCrousal = () => {
  const Images = [
    { id: 1, src: 'https://picsum.photos/id/1015/800/600', alt: 'Image 1' },
    { id: 2, src: 'https://picsum.photos/id/1016/800/600', alt: 'Image 2' },
    { id: 3, src: 'https://picsum.photos/id/1018/800/600', alt: 'Image 3' },
    { id: 4, src: 'https://picsum.photos/id/1020/800/600', alt: 'Image 4' },
    { id: 5, src: 'https://picsum.photos/id/1021/800/600', alt: 'Image 5' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
  }
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <>
      <div className='relative flex max-w-7xl h-[80vh] mx-auto mt-10 overflow-hidden'>

        <div className='w-full h-full bg-cover bg-center duration-500' style={{backgroundImage:`url(${Images[currentIndex].src})`}}>
        </div>

        <div className='absolute top-1/2 left-0 transform -translate-y-1/2'>
          <button onClick={prevImage} className='bg-white p-2 rounded-full shadow-lg hover:bg-gray-200'>
            &lt;
          </button>
        </div>
        <div className='absolute top-1/2 right-0 transform -translate-y-1/2'>
          <button onClick={nextImage} className='bg-white p-2 rounded-full shadow-lg hover:bg-gray-200'>
            &gt;
          </button>
        </div>
      </div>
    </>
  )
}

export default FirstCrousal
