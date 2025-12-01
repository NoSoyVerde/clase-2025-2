import React from 'react'
import Image from 'next/image'
import spinnergif from '@/assets/loader.gif'

export default function MainLoading() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        }}>
        <Image src={spinnergif} alt='Loading...'/>
    </div>
  )
}
