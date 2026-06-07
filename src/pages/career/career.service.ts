import Experience from "@core/models/experience";

export default async function fetchExperiences(language: string): Promise<Experience[]> {
    let data = await fetch(`/assets/career/${language}.json`);
    let json = await data.json();
    return json as Experience[];
}