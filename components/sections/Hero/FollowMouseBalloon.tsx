// @ts-nocheck

"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface MousePosition {
    x: number
    y: number
    centerX: number
    centerY: number
    width: number
    height: number
}

function FollowMouseBalloon() {
    const [mousePosition, setMousePosition] = useState({} as MousePosition)
    const boxRef = useRef()
    const handleMouseMove = (e: any) => {
        setMousePosition(getRelativeCoordinates(e, boxRef.current))
    }

    return (
        <motion.div
            className="absolute w-full h-full hidden lg:block"
            ref={boxRef}
            style={{ perspective: 600 }}
            onMouseMove={(e) => handleMouseMove(e)}
            animate={{
                rotateX: mousePosition?.centerX * 20,
                rotateY: mousePosition?.centerY * 20,
            }}
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
        >
            <motion.div
                className="relative"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 110,
                    damping: 8,
                }}
            >
                <Image
                    className="absolute -translate-x-1/2 translate-y-[10%]"
                    src="/art/Baloon.svg"
                    width={96}
                    height={96}
                    alt="baloon"
                />
            </motion.div>
            <motion.div
                className="relative"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 7,
                }}
            >
                <Image
                    className="absolute -scale-x-100 translate-x-[20%]"
                    src="/art/Baloon.svg"
                    width={48}
                    height={48}
                    alt="baloon"
                />
            </motion.div>
            <motion.div
                className="relative"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 135,
                    damping: 5,
                }}
            >
                <Image
                    className="absolute -translate-x-[110%] translate-y-[15%]"
                    src="/art/Baloon.svg"
                    width={48}
                    height={48}
                    alt="baloon"
                />
            </motion.div>
        </motion.div>
    )
}

export default FollowMouseBalloon

function getRelativeCoordinates(event: any, referenceElement: any) {
    const position = {
        x: event.pageX,
        y: event.pageY,
    }

    const offset = {
        left: referenceElement.offsetLeft,
        top: referenceElement.offsetTop,
        width: referenceElement.clientWidth,
        height: referenceElement.clientHeight,
    }

    let reference = referenceElement.offsetParent

    while (reference) {
        offset.left += reference.offsetLeft
        offset.top += reference.offsetTop
        reference = reference.offsetParent
    }

    return {
        x: position.x - offset.left,
        y: position.y - offset.top,
        width: offset.width,
        height: offset.height,
        centerX:
            (position.x - offset.left - offset.width / 2) / (offset.width / 2),
        centerY:
            (position.y - offset.top - offset.height / 2) / (offset.height / 2),
    }
}
