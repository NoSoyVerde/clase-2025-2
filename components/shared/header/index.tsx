import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { APP_NAME } from '@/lib/constants'
import MenuHeader from './menu'


export default function Header() {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex-between'>
            <div className='flex-start'>
                <Link href={'/'} className='flex-start'>
                    <Image src='/images/logo.svg' alt={`Home`} width={48} height={48}/>
                </Link>
                <span className='hidden lg:block font-bold text-2xl ml-3'>
                    {APP_NAME}
                </span>
            </div>
            <MenuHeader />
        </div>
    </header>
  )
}
