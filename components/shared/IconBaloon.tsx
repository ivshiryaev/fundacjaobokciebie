import Image from "next/image"

function IconBaloon({
    baloons = 1,
    className,
}: {
    baloons?: number
    className?: string
}) {
    return (
        <div>
            <Image
                className={`pointer-events-none ${className}`}
                src={`/icons/Baloon${baloons}.svg`}
                alt="baloons"
                width={48}
                height={48}
            />
        </div>
    )
}

export default IconBaloon
