import request from '../utils/request';

export function getBingWallpaper(): Promise<any> {
	return request({
		url: 'links/bingWallpaper',
		method: 'get',
	});
}

export function getSkillsList(): Promise<any> {
	return request({
		url: 'home/getSkillsList',
		method: 'get',
	});
}

export function getProjectList(pageSize: number, pageNum: number): Promise<any> {
	return request({
		url: 'project/getProjectList',
		method: 'get',
		params: { pageSize, pageNum },
	});
}

export function getOuterLinks(): Promise<any> {
	return request({
		url: 'links/getOuterLinks',
		method: 'get',
	});
}

export function getSystemConfig(): Promise<any> {
	return request({
		url: 'home/getSystemConfig',
		method: 'get',
	});
}
