"use client"

import { useState, useEffect } from "react"
import Snowfall from "react-snowfall"
import { FaRegSnowflake } from "react-icons/fa"
import { IoPartlySunnyOutline } from "react-icons/io5"

import { getCookie, setCookie } from "@/lib/utils"
import { showSnowfallCookieName } from "@/constants/index"

export default function ClientSnowfall() {
    const [isSnowing, setIsSnowing] = useState(true)

    useEffect(() => {
        const showSnowfall = getCookie(showSnowfallCookieName)
        if (showSnowfall !== "") {
            setIsSnowing(showSnowfall === "true")
        }
    }, [])

    function handleClick() {
        const newIsSnowing = !isSnowing
        setIsSnowing(newIsSnowing)
        setCookie(showSnowfallCookieName, newIsSnowing.toString(), 7) // Cookie expires in 7 days
    }

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
                onClick={() => handleClick()}
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
                    bg-opacity-50
                "
            >
                {isSnowing ? <IoPartlySunnyOutline /> : <FaRegSnowflake />}
            </button>
        </>
    )
}
