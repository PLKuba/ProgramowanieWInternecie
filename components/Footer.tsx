import React from 'react'
import MagicButton from "@/components/MagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {socialMedia} from "@/data";
import {useTranslations} from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-2-[45vw]">
                    {t("header_1")}<span className="text-purple">{t("header_2")}</span>
                </h1>
                <a href="mailto:jniewczas03@gmail.com">
                    <MagicButton
                        title={t("contact_text")}
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-small md:font-normal font-light">Copyright © 2024 Jakub Niewczas</p>
                <div className="flex items-center md:gap-3 gap-6 align-middle">
                    {socialMedia.map((profile)=>(
                        <div key={profile.id}>
                            <a href={profile.link} target="_blank" rel="noopener noreferrer">
                                <img className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounder-lg border border-black-300" src={profile.img} alt={profile.id.toString()} width="20" height="20"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
