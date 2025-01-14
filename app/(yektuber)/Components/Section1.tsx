import Image from 'next/image'
import React from 'react'

export default function Section1() {
  return (
    <section className="container mx-auto mt-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/background.png)" }}>

    <div className="flex items-center justify-between flex-col md:flex-row p-4">

      {/* image */}
      <div className="flex  gap-8 p-4">
        <Image src={'/images/headerImage.png'} width={294} height={382} className="hover:scale-105 transition ease-in-out duration-300" alt="" />
      </div>
      {/* data  */}
      <div className="flex flex-col items-end">

        <div className="flex items-center gap-2">
          <span className="text-slate-900 font-semibold">بهترین ابزار ها در اختیار شما خواهد بود</span>
          <div className="bg-red-200 rounded-full w-10 h-10 flex justify-center items-center">
            <Image src='/images/moshak.png' width={22} height={25} className="object-cover hover:scale-[1.05] transition ease-in-out duration-300" alt="" />
          </div>
        </div>

        <div className="mt-4 flex flex-col items-end gap-3">
          <h2 className="font-bold text-5xl">پاتوق رشد یوتیوبر</h2>
          <div className="flex flex-row-reverse gap-2">
            <h2 className="font-bold text-5xl">های ایرانی</h2>
            <div className="flex justify-center items-center pt-4 -space-x-2">
              <Image src='/images/ava3.png' width={40} height={40} className="object-cover z-10" alt="" />
              <Image src='/images/ava2.png' width={40} height={50} className="object-cover z-0" alt="" />
              <Image src='/images/ava1.png' width={40} height={50} className="object-cover" alt="" />
            </div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row-reverse mt-4 gap-2 items-end">

          <button className="flex py-1 text-slate-200 bg-red-600 rounded-2xl px-2">
            <i className='bx bx-left-arrow-alt bx-sm mt-1'></i>
            <span>شروع نقد کردن درآمد از یوتیوب</span>
          </button>

          <button className="text-slate-500 bg-slate-100 rounded-2xl px-1 py-1 font-semibold border-slate-200 border-2 w-40">ابزار های یک تیوبر</button>
        </div>


        <div className="mt-8 flex flex-row">
          <div className="flex -space-x-4 items-end -mr-96 m-1">
            <div className="h-6 w-6 rounded-full bg-red-600" />
            <div className="h-6 w-6 rounded-full bg-black flex justify-center items-center">
              <i className='bx bx-up-arrow-alt bx-xs text-white rotate-45'></i>
            </div>
          </div>
          <span className="text-slate-500 text-sm text-right max-w-md leading-8 pl-8">یکتیوبر پاتوق یوتیوبرها و مشاورهای حرفه‌ایه که امکانالت رو بررسی می‌کنن و کلی ایده و ابزار برای رشد توی یوتیوب جلوی پات می‌ذارن ، تازه کانالت رو به حساب ادسنس وصل و درآمدت رو هم برات نقد می‌کنن!</span>
        </div>


      </div>

    </div>
  </section>
  )
}
