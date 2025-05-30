import type { Area } from "./dto";
import { areasRepository } from "./repository";

const uploadAreas = async (areas: Area[]) => {
	await areasRepository.setAreas(areas);
};

const getAreas = async () => {
	return areasRepository.getAreas();
};

export const areasService = {
	uploadAreas,
	getAreas,
};
