import Image from "next/image"
import Button from "@/components/button/Button"
import Link from "next/link"

import { centsToValue } from "@/lib/utils"
import { countPercentage } from "@/lib/utils"

import Slide from "@/components/animations/Slide"
import { getZbiorkaById } from "@/lib/actions/zbiorka.actions"

async function Zbiorka({ id }: { id: string }) {
    const response = await getZbiorkaById(id)
    const data = JSON.parse(response)
    if (!data) return null

    const totalDonatedValue = centsToValue(data?.totalDonated)
    const fundraisedPercentage = countPercentage(
        Number(totalDonatedValue),
        data?.totalGoal
    )
    const toGoalValue = (data?.totalGoal - Number(totalDonatedValue)).toFixed()

    return (
        <Slide verticalDirection="up" className="w-full h-full">
            <article
                className={`
						w-full h-full
						flex flex-col
						justify-between items-center
						rounded-[2rem]
						overflow-hidden
						transition
						outline outline-1 outline-myGray
						hover:shadow-lg

                        lg:flex-row
					`}
            >
                <Link
                    href={`Zbiorka/${data?.href}`}
                    className="
							w-full
							relative
							lg:h-[550px]
							overflow-hidden

                            aspect-square
						"
                >
                    <Image
                        className="object-cover pointer-events-none"
                        src={`/images/zbiorki/${data?.href}/1.jpg`}
                        alt={data?.name}
                        fill
                    />
                    {data?.isFinished ? (
                        <div className="top-3 right-3 text-success font-semibold absolute px-[1rem] py-[0.5rem] bg-white rounded-[2rem] text-[0.875rem]">
                            Udało się ! :)
                        </div>
                    ) : (
                        <>
                            <div className="bottom-3 left-3 text-primary absolute flex gap-2">
                                <div className="px-[1rem] py-[0.5rem] bg-white rounded-[2rem] text-[0.875rem]">
                                    Wpłat: {data?.donations?.length}
                                </div>
                                <div className="px-[1rem] py-[0.5rem] bg-white rounded-[2rem] text-[0.875rem]">
                                    PILNIE
                                </div>
                            </div>
                        </>
                    )}
                </Link>
                <div
                    className="
							w-full
							p-[1.5rem]
							flex flex-col gap-[0.5rem]
						"
                >
                    <div>
                        <p className="text-[1.5rem]">{data?.name}</p>
                        <p className="text-myGray2">{data?.nazwaChoroby}</p>
                    </div>
                    <div className="flex flex-col gap-[0.5rem]">
                        <p className="text-[0.750rem] text-myGray2">
                            Uzbieraliśmy: {totalDonatedValue} zł
                        </p>
                        <div className="h-[0.25rem] bg-myGray rounded-full overflow-hidden">
                            <div
                                style={{
                                    width: data?.isFinished
                                        ? "100%"
                                        : `${fundraisedPercentage}%`,
                                }}
                                className={`
										${data?.isFinished ? "bg-success" : "bg-primary"} h-full
									`}
                            ></div>
                        </div>
                        <p className="text-end text-[0.750rem] text-myGray2">
                            Cel: {data?.totalGoal} zł
                        </p>
                    </div>
                    <Link className="lg:w-fit" href={`Zbiorka/${data?.href}`}>
                        {data?.isFinished ? (
                            <Button className="w-full bg-success">
                                Zbiórka zakończona
                            </Button>
                        ) : (
                            <Button className="w-full">Do zbiórki</Button>
                        )}
                    </Link>
                </div>
            </article>
        </Slide>
    )
}

export default Zbiorka
