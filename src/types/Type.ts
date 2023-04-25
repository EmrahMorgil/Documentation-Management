export class project{
    id: string;
    projectName: string;
    createdDate: string;
    updatedDate: string;
    createdPerson: string;
    updatedPerson: string;
    totalContent: number;
    visibilityRole: string;

    constructor(id: string, projectName: string, createdDate: string, updatedDate: string, createdPerson: string, updatedPerson: string, totalContent: number, visibilityRole: string)
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
    id?: string;
    contentName?: string;
    createdDate?: string;
    updatedDate?: string;
    createdPerson?: string;
    updatedPerson?: string;
    version?: number;
    content?: string;
    contentTags?: [];
    projectId?: string;
}


export class user{
    id: string;
    name: string;
    surname: string;
    password: string;
    role: userRole;
    visibilityProjects: [];
    createdDate: string;
    updatedDate: string;
    createdPerson: string;
    updatedPerson: string;

    constructor(id: string, name: string, surname: string, password: string, role: userRole, visibilityProjects: [],createdDate: string, updatedDate: string, createdPerson: string, updatedPerson: string)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.role = role;
        this.visibilityProjects = visibilityProjects;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdPerson = createdPerson;
        this.updatedPerson = updatedPerson;
    }

}

enum userRole{
    user,
    admin,
}

export interface IItemProp{
    item: user;
  }

export interface IUpdateUser{
    item: user,
    setUpdateControl: React.Dispatch<React.SetStateAction<boolean>>,
  }