export default class BaseComponent{
    responsibilities: Array<string> =[];
    projects: Array<Project> = [];
}

export class Project{
    name: string ='';
    link: string = '';
}