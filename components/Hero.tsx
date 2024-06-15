import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Hero = () => {
    const t = useTranslations("Header");

    return (
        <div className="pb-20 pt-36 relative">  {/* Added relative here for positioning context */}
            <div className="absolute top-0 right-0 z-20 mt-5"> {/* Container for the LanguageSwitcher */}
                <LanguageSwitcher />
            </div>
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div
                className="h-screen w-full dark:bg-black-100 bg-grid-black-100/[0.05]
       absolute top-0 left-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        {t("top-title")}
                    </p>

                    <TextGenerateEffect
                        words={t('bottom-title')}
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        {t("main-title")}
                    </p>

                    <a href="#about">
                        <MagicButton
                            title={t("button-text")}
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
