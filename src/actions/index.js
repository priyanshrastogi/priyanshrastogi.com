import projectsData from '../data/projects';

export const FETCH_PROJECTS = 'fetch_projects';

export function fetchProjects() {
    
    const projects = projectsData();
    
    return {
        type: FETCH_PROJECTS,
        payload: projects
    }
}