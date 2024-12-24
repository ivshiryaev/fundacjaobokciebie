"use client"

import { useState } from "react"
import Snowfall from "react-snowfall"
import { FaRegSnowflake } from "react-icons/fa"
import { IoPartlySunnyOutline } from "react-icons/io5"

export default function ClientSnowfall() {
    const [isSnowing, setIsSnowing] = useState(true)

    return (
        <>
            {isSnowing && (
                <Snowfall
                    style={{
                        zIndex: 100,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
            )}
            <button
                title="Toggle snowfall effect"
                onClick={() => setIsSnowing(!isSnowing)}
                className="                
                    fixed
                    bottom-2.5 right-2.5 z-50
                    w-[56px] h-[56px] text-[2rem]
                    flex justify-center items-center text-center
                    bg-primary shadow-md text-white
                    border-none rounded-full
                    cursor-pointer
                    hover:bg-white hover:scale-105 hover:text-primary
                    transition-all duration-300
                    active:shadow-inner
                "
            >
                {isSnowing ? <IoPartlySunnyOutline /> : <FaRegSnowflake />}
            </button>
        </>
    )
}
