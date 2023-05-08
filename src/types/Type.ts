export class project{
    id: string;
    projectName: string;
    createdDate: string;
    updatedDate: string;
    createdPerson: string;
    updatedPerson: string;
    totalContent: number;
    visibilityRole: number;

    constructor(id: string, projectName: string, createdDate: string, updatedDate: string, createdPerson: string, updatedPerson: string, totalContent: number, visibilityRole: number)
    {
        this.id = id;
        this.projectName = projectName;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdPerson = createdPerson;
        this.updatedPerson = updatedPerson;
        this.totalContent = totalContent;
        this.visibilityRole = visibilityRole;
    }
}

export class content{
    id: string;
    contentName: string;
    createdDate: string;
    updatedDate: string;
    createdPerson: string;
    updatedPerson: string;
    version: number;
    content: string;
    contentTags: [];
    projectId: string;

    constructor(id: string, contentName: string, createdDate: string, updatedDate: string, createdPerson: string, updatedPerson: string, version: number, content: string, contentTags: [], projectId: string)
    {
        this.id = id;
        this.contentName = contentName;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdPerson = createdPerson;
        this.updatedPerson = updatedPerson;
        this.version = version;
        this.content = content;
        this.contentTags = contentTags;
        this.projectId = projectId;
    }

}


export class user{
    id: string;
    name: string;
    surname: string;
    password: string;
    role: userRole;
    createdDate: string;
    updatedDate: string;
    createdPerson: string;
    updatedPerson: string;
    totalProject: number;

    constructor(id: string, name: string, surname: string, password: string, role: userRole,createdDate: string, updatedDate: string, createdPerson: string, updatedPerson: string, totalProject: number)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.role = role;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdPerson = createdPerson;
        this.updatedPerson = updatedPerson;
        this.totalProject = totalProject;
    }

}

export class visibilityProjects{
    id: string;
    projectName: string;
    createdDate: string;
    updatedDate: string;
    createdPerson: string;
    updatedPerson: string;
    totalContent: number;
    visibilityRole: number;
    visibility: boolean;
    userId: string;
    projectId: string

    constructor(id: string, projectName: string, createdDate: string, updatedDate: string, createdPerson: string, updatedPerson: string, totalContent: number, visibilityRole: number, visibility: boolean, userId: string, projectId: string)
    {
        this.id = id;
        this.projectName = projectName;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdPerson = createdPerson;
        this.updatedPerson = updatedPerson;
        this.totalContent = totalContent;
        this.visibilityRole = visibilityRole;
        this.visibility = visibility;
        this.userId = userId;
        this.projectId = projectId;
    }

}

enum userRole{
    user,
    admin,
}

export interface IUserProp{
    user: user;
  }

export interface IOnUserProp{
    onUser?: user;
}

export interface IUpdateUser{
    item: user,
    setUpdateControl: React.Dispatch<React.SetStateAction<boolean>>,
  }
  export interface IProject {
    item: project;
  }