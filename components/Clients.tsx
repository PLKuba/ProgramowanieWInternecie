import React from 'react'
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {companies, testimonials} from "@/data"
import {useTranslations} from "next-intl";

const Clients = () => {
    const t = useTranslations("Testimonials");

    const translatedProjects = testimonials.map(testimonials => ({
        ...testimonials,
        quote: t(`${testimonials.name}.quote`),
        name: t(`${testimonials.name}.name`),
        title: t(`${testimonials.name}.title`)
    }));

    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                {t("title_1")}
                <span className="text-purple"> {t("title_2")}</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards items={translatedProjects} direction="right" speed="slow"/>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-ls:mt-10">
                    {companies.map(({id, img, name, nameImg}) => (
                        <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                            <img src={img} alt={name} className="w-10 md:w-16 lg:w-20"/>
                            <img src={nameImg} alt={name + " logo"} className="w-20 md:w-24 lg:w-32"/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Clients
