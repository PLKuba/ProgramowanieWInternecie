import {useTranslations} from "next-intl";
import RecentProjectsClient from "@/components/RecentProjectsClient";
import { projects } from "@/data";

const RecentProjects = () => {
    const t = useTranslations("RecentProjects");

    const translatedProjects = projects.map(project => ({
        ...project,
        title: t(`${project.id}.title`),
        des: t(`${project.id}.des`)
    }));

    return (
        <RecentProjectsClient heading_1={t("header_1")} heading_2={t("header_2")} projects={translatedProjects}/>
    );
};

export default RecentProjects;