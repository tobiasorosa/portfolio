import {frontendSkills} from "src/data/skills"

export const getFrontendSkillsByIndex = (index: number) => frontendSkills[index % frontendSkills.length];
