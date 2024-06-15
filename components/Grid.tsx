import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";
import {gridItems} from "@/data";
import {useTranslations} from "next-intl";

function Grid() {
    const t = useTranslations("About");

    return (
        <section id='about'>
            <BentoGrid className="w-full py-20">
                {
                    gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                        <BentoGridItem
                            id={id}
                            key={id}
                            title={t(`${id}.title`)}
                            description={t(`${id}.description`)}
                            className={className}
                            img={img}
                            imgClassName={imgClassName}
                            spareImg={spareImg}
                        />
                    ))
                }
            </BentoGrid>
        </section>
    )
}

export default Grid
