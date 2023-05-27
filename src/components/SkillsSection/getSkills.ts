import {
	otherSkills,
	backendSkills,
	frontendSkills,
	allSkills,
} from 'src/data/skills';

export const getFrontendSkillsByIndex = (index: number) =>
	frontendSkills[index % frontendSkills.length];
export const getBackendSkillsByIndex = (index: number) =>
	backendSkills[index % backendSkills.length];
export const getOtherSkillsByIndex = (index: number) =>
	otherSkills[index % otherSkills.length];
export const getAllSkillsByIndex = (index: number) =>
	allSkills[index % allSkills.length];
