import React from 'react'
import ModeToggle from './mode-toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function MenuHeader() {
  return (
    <div className='flex justify-end gap-3'>
        <nav className='hidden md:flex max-w-xs gap-1'>
                <ModeToggle />
                <Button asChild variant={'ghost'}>
                        <Link href={'/cart'}>
                           <ShoppingCartIcon/> Cart
                        </Link>
                    </Button>
                    <Button asChild variant={'ghost'}>
                        <Link href={'/sign-in'}>
                           <UserIcon/> Sign in
                        </Link>
                    </Button>
        </nav>
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'><EllipsisVertical />
                    <SheetContent className='flex flex-col items-start p-4 max-w-xs'>
                        <SheetTitle>Menu</SheetTitle>
                         <ModeToggle />
                <Button asChild variant={'ghost'}>
                        <Link href={'/cart'}>
                           <ShoppingCartIcon/> Cart
                        </Link>
                    </Button>
                    <Button asChild variant={'ghost'}>
                        <Link href={'/sign-in'}>
                           <UserIcon/> Sign in
                        </Link>
                    </Button>
                    <SheetDescription></SheetDescription>
                    </SheetContent>
                </SheetTrigger>
            </Sheet>
               
        </nav>
            </div>
  )
}
