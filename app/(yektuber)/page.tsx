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
    </>
  );
}
