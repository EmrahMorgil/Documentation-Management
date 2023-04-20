export class project{
    id?: number;
    projectName?: string;
    createdDate?: string;
    updatedDate?: string;
    createdPerson?: string;
    updatedPerson?: string;
    totalContent?: number;
    visibilityRole?: string;
    contents?: content;
}

export class content{
    id?: number;
    contentName?: string;
    createdDate?: string;
    updatedDate?: string;
    createdPerson?: string;
    updatedPerson?: string;
    version?: number;
    content?: string;
    contentTags?: [];
}


export class user{
    id: number;
    name: string;
    surname: string;
    password: string;
    role: userRole;
    visibilityProjects: [];
    createdDate: string;
    updatedDate: string;
    createdPerson: string;
    updatedPerson: string;

    constructor(id: number, name: string, surname: string, password: string, role: userRole, visibilityProjects: [],createdDate: string, updatedDate: string, createdPerson: string, updatedPerson: string)
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

