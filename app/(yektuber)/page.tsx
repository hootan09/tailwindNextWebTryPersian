// import Link from "next/link";
import Image from "next/image";
import NavBar from "./Components/nav";
import Section1 from "./Components/Section1";
import { en2faDigits } from "@/utils/utils";



export default function Home() {

  return (
    <>
      {/* Section nav */}
      <NavBar />

      <Section1 />

      <div className="flex items-center justify-around flex-col md:flex-row-reverse p-4 mt-6 gap-11">

        <div className="flex flex-row-reverse">
          {/* circle */}
          <div className="w-14 h-14 rounded-full bg-orange-50 flex justify-center items-center">
            <i className='bx bx-error-circle bx-sm'></i>
          </div>
          {/* card */}
          <div className="relative -mr-14">
            <svg width="501" height="272" viewBox="0 0 501 272" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 34C0 15.2223 15.2223 0 34 0H397.346C414.323 0 427.23 15.2572 424.416 32C421.601 48.7428 434.508 64 451.486 64H467C485.778 64 501 79.2223 501 98V238C501 256.778 485.778 272 467 272H34C15.2223 272 0 256.778 0 238V34Z" fill="#FFF3EC" />
            </svg>
            <div className="absolute text-right right-24 top-4">
              <span className="text-slate-900 font-semibold text-sm">دلیل انتخاب ما</span>
            </div>
            <div className="absolute text-right right-6 top-20">

              <h3 className="font-bold text-2xl">چرا یکتیوبر را انتخاب کنیم؟</h3>
              <p className="text-slate-900 font-semibold text-sm py-7 pl-5 leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد است.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse">
          {/* circle */}
          <div className="w-14 h-14 rounded-full bg-violet-50 flex justify-center items-center">
            <i className='bx bx-user bx-sm' ></i>
          </div>
          {/* card */}
          <div className="relative -mr-14">
            <svg width="358" height="272" viewBox="0 0 358 272" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 34C0 15.2223 15.2223 0 34 0H267.244C284.431 0 297.816 14.9136 295.966 32C294.115 49.0864 307.501 64 324.687 64H327.018C344.129 64 358 77.871 358 94.9817V238C358 256.778 342.778 272 324 272H34C15.2223 272 0 256.778 0 238V34Z" fill="#F4F0FF" />
            </svg>
            <div className="absolute text-right right-20 top-4">
              <span className="text-slate-900 font-semibold text-sm">مشتریان ما</span>
            </div>
            <div className="absolute text-right right-6 top-20">

              <h3 className="font-bold text-2xl">+{en2faDigits("1200")}</h3>
              <p className="text-slate-900 font-semibold text-sm py-7 pl-5 leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است</p>
              <div className="flex justify-end -mt-4 -space-x-2">
                <Image src='/images/ava3.png' width={34} height={34} className="object-cover z-10" alt="" />
                <Image src='/images/ava2.png' width={34} height={34} className="object-cover z-0" alt="" />
                <Image src='/images/ava1.png' width={34} height={34} className="object-cover" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse">
          {/* circle */}
          <div className="w-14 h-14 rounded-full bg-rose-50 flex justify-center items-center">
            <i className='bx bx-dollar-circle bx-sm'></i>
          </div>
          {/* card */}
          <div className="relative -mr-14">
            <svg width="358" height="272" viewBox="0 0 358 272" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 34C0 15.2223 15.2223 0 34 0H267.244C284.431 0 297.816 14.9136 295.966 32C294.115 49.0864 307.501 64 324.687 64H327.018C344.129 64 358 77.871 358 94.9817V238C358 256.778 342.778 272 324 272H34C15.2223 272 0 256.778 0 238V34Z" fill="#FFF0F3" />
            </svg>

            <div className="absolute text-right right-20 top-4">
              <span className="text-slate-900 font-semibold text-sm">درآمد ها</span>
            </div>
            <div className="absolute text-right right-6 top-20">

              <h3 className="font-bold text-2xl">+{en2faDigits("10,000")}$</h3>
              <p className="text-slate-900 font-semibold text-sm py-7 pl-5 leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد است.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-around flex-col md:flex-col p-4 mt-6">
        {/* button */}
        <button className="px-4 py-2 rounded-xl bg-slate-200">
          <div className="flex justify-center items-center gap-2">
            <p className="text-slate-600">
              معرفی یکتیوبر
            </p>
            <i className='bx bx-movie-play bx-sm text-red-600 pt-1'></i>
          </div>
        </button>

        <div className="flex flex-row pt-6">
          <span className="font-bold text-md text-slate-950">!با یوتیوب محتوات رو بساز، به یکتیوبر درآمدت رو نقد کن</span>
        </div>

        <p className="text-sm text-slate-500 pt-6 max-w-xl text-center leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>

        <Image src='/images/Frame37.png' width={539} height={353} className="object-cover mt-6" alt="" />

        <div className="mt-9 bg-red-600 rounded-xl px-2 py-1">
          <span className="font-semibold text-sm text-white">ویژگی های یکتیوبر؟</span>
        </div>
      </div>

      <div className="flex items-center justify-around p-4 mt-6 gap-6 flex-nowrap overflow-auto min-h-60">
          <div className="relative min-h-24 min-w-56 rounded-2xl bg-neutral-100 flex flex-col justify-end pb-2 items-center">
              <Image src='/images/iconsCard (1).png' width={119} height={103} className="absolute -top-12 object-cover" alt=""/>
              <span className="text-sm font-bold text-black">حفاظت از کانال شما</span>
          </div>
          <div className="relative min-h-24 min-w-56 rounded-2xl bg-neutral-100 flex flex-col justify-end pb-2 items-center">
              <Image src='/images/iconsCard (4).png' width={82} height={2} className="absolute -top-12 object-cover" alt=""/>
              <span className="text-sm font-bold text-black">مانیتورینگ هوشمند کانال</span>
          </div>
          <div className="relative min-h-24 min-w-56 rounded-2xl bg-neutral-100 flex flex-col justify-end pb-2 items-center">
              <Image src='/images/iconsCard (5).png' width={98} height={87} className="absolute -top-12 object-cover" alt=""/>
              <span className="text-sm font-bold text-black">ارائه‌ی ابزارهای به روز </span>
          </div>
          <div className="relative min-h-24 min-w-56 rounded-2xl bg-neutral-100 flex flex-col justify-end pb-2 items-center">
              <Image src='/images/iconsCard (2).png' width={134} height={104} className="absolute -top-12 object-cover" alt=""/>
              <span className="text-sm font-bold text-black">تسویه سریع و به موقع</span>
          </div>
          <div className="relative min-h-24 min-w-56 rounded-2xl bg-neutral-100 flex flex-col justify-end pb-2 items-center">
              <Image src='/images/iconsCard (3).png' width={106} height={106} className="absolute -top-12 object-cover" alt=""/>
              <span className="text-sm font-bold text-black">کارمزد منصفانه</span>
          </div>
      </div>
    </>
  );
}
