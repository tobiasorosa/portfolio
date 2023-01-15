import { otherSkills, backendSkills, frontendSkills } from 'src/data/skills';

export const getFrontendSkillsByIndex = (index: number) =>
	frontendSkills[index % frontendSkills.length];
export const getBackendSkillsByIndex = (index: number) =>
	backendSkills[index % backendSkills.length];
export const getOtherSkillsByIndex = (index: number) =>
	otherSkills[index % otherSkills.length];
