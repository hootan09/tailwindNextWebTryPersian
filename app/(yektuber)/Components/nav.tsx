'use client'

// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function NavBar() {

    const [togglehamburger, setTogglehamburger] = useState(false);

    return (
        // Section nav
        // <nav className="px-6 py-3 sticky shadow-lg top-0">
        <nav className="px-6 py-3 shadow-lg top-0">
            <div className="container mx-auto flex justify-between items-center">

                {/* logo right info */}
                <div>
                    <div className="flex flex-row justify-center items-center gap-2">

                        <div className="flex w-12 h-12 bg-red-100 justify-center items-center rounded-lg">
                            <i className='bx bx-mobile-alt bx-sm text-red-500'></i>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg">021-2345678</h4>
                            <p className="hidden md:flex text-xs text-slate-500">پشتیبانی 24 ساعته</p>
                        </div>
                    </div>
                </div>

                {/* meun items */}
                <div className="hidden md:flex items-center justify-center ">
                    <div className="flex font-bold text-sm space-x-4 pt-2 pr-4">
                        <Link href="#" className="hover:text-red-600">درباره ما</Link>
                        <Link href="#" className="hover:text-red-600">تماس با ما</Link>
                        <Link href="#" className="hover:text-red-600">وبلاگ</Link>
                        <Link href="#" className="hover:text-red-600">تعرفه ها</Link>
                        <Link href="#" className="hover:text-red-600">مشاوره</Link>
                        <Link href="#" className="hover:text-red-600">خدمات و ابزارها</Link>
                        <Link href="#" className="hover:text-red-600 text-red-600">صفحه اصلی</Link>
                    </div>
                    {/* logo  */}
                    <div className="hidden md:flex justify-center items-center gap-2">
                        <p className="font-extrabold text-2xl text-red-600">.</p>
                        <h3 className="text-2xl font-bold">یکتیوبر</h3>
                    </div>
                </div>

                {/* hamburger menu */}
                <div className="md:hidden flex justify-center">

                    <div className="flex justify-center gap-2">
                        <p className="font-extrabold text-2xl text-red-600">.</p>
                        <h3 className="text-2xl font-bold">یکتیوبر</h3>
                    </div>

                    <button onClick={() => setTogglehamburger(!togglehamburger)} className="hover:text-red-600">
                        <i className="bx bx-menu bx-md"></i>
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {togglehamburger && <div className="md:hidden flex flex-col-reverse font-bold md:text-xs lg:text-sm mt-8">
                <Link href="#" onClick={() => setTogglehamburger(false)} className="hover:text-red-600 p-2">درباره ما</Link>
                <Link href="#" onClick={() => setTogglehamburger(false)} className="hover:text-red-600 p-2">تماس با ما</Link>
                <Link href="#" onClick={() => setTogglehamburger(false)} className="hover:text-red-600 p-2">وبلاگ</Link>
                <Link href="#" onClick={() => setTogglehamburger(false)} className="hover:text-red-600 p-2">تعرفه ها</Link>
                <Link href="#" onClick={() => setTogglehamburger(false)} className="hover:text-red-600 p-2">مشاوره</Link>
                <Link href="#" onClick={() => setTogglehamburger(false)} className="hover:text-red-600 p-2">خدمات و ابزارها</Link>
                <Link href="#" onClick={() => setTogglehamburger(false)} className="hover:text-red-600 p-2 text-red-600">صفحه اصلی</Link>
            </div>
            }
        </nav>
    );
}
