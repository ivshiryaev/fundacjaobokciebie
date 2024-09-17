import Section from "@/components/shared/Section"
import { snap } from "@/app/fonts"
import Card from "./Card"

export default function PromoBanner() {
    const zbiorkaId = "66e9a4af47ab53a9c54ac0d6"

    return (
        <Section
            className="
				container mx-auto
			"
        >
            <h2 className={`${snap.className} text-primary text-[2rem]`}>
                Pilna zbiorka
            </h2>
            <div className='lg:w-full'>
                <Card id={zbiorkaId} />
            </div>
        </Section>
    )
}
