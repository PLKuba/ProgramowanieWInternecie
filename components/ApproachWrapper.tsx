import React from 'react'
import ApproachClient from './ApproachClient'
import {useTranslations} from "next-intl";
import {approach} from "@/data";


const ApproachWrapper = () => {
    const t = useTranslations("Qualities");

    const translatedApproach = approach.map(approach => ({
        ...approach,
        title: t(`${approach.id}.title`),
        description: t(`${approach.id}.des`),
        order: t(`${approach.id}.order`)
    }));

    return (
        <ApproachClient header_1={t("header_1")} header_2={t("header_2")} cards={translatedApproach}/>
    )
}
export default ApproachWrapper
