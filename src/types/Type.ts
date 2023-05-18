export class project{
    id: string;
    projectName: string;
    createdDate: Date;
    updatedDate: Date;
    createdPerson: string;
    updatedPerson: string;
    totalContent: number;
    visibilityRole: number;

    constructor(id: string, projectName: string, createdDate: Date, updatedDate: Date, createdPerson: string, updatedPerson: string, totalContent: number, visibilityRole: number)
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
    createdDate: Date;
    updatedDate: Date;
    createdPerson: string;
    updatedPerson: string;
    version: number;
    content: string;
    contentTags: string;
    projectId: string;

    constructor(id: string, contentName: string, createdDate: Date, updatedDate: Date, createdPerson: string, updatedPerson: string, version: number, content: string, contentTags: string, projectId: string)
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
    createdDate: Date;
    updatedDate: Date;
    createdPerson: string;
    updatedPerson: string;
    totalProject: number;

    constructor(id: string, name: string, surname: string, password: string, role: userRole,createdDate: Date, updatedDate: Date, createdPerson: string, updatedPerson: string, totalProject: number)
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
    createdDate: Date;
    updatedDate: Date;
    createdPerson: string;
    updatedPerson: string;
    totalContent: number;
    visibilityRole: number;
    userId: string;
    projectId: string

    constructor(id: string, projectName: string, createdDate: Date, updatedDate: Date, createdPerson: string, updatedPerson: string, totalContent: number, visibilityRole: number, userId: string, projectId: string)
    {
        this.id = id;
        this.projectName = projectName;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdPerson = createdPerson;
        this.updatedPerson = updatedPerson;
        this.totalContent = totalContent;
        this.visibilityRole = visibilityRole;
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

export interface IProjectProp{
    project: project;
}

export interface IContentProp{
    content: content;
}


export interface IProject {
    project: any;
    projectsControl: string;
    userId?: string;
  }

export interface IContent {
    content: content;
    projectId?: string;
  }





export  interface IContentList{
    projectId?: string;
  }

export interface IDeleteContent{
    contentId: string;
    projectId?: string;
  }

 export  interface IAddContent{
    projectId: string;
  }

 export interface IOnUserProjectAddButton{
    userId?: string;
    project: project;
  }

  export interface IOnUserProjectRemoveButton{
    userId?: string;
    projectId: string;
  }

  export interface IProjectsList{
    projectsControl: string;
    userId?: string;
  }

  export interface IAddContentModal{
    projectId: string;
  }




  export interface IProtected{
    loggedIn: boolean,
    children: any,
} 



export interface IUserDetailUpdateButton {
  user: user;
  updatedUser: user;
  buttonActive: boolean;
  setButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserDetailUndoButton{
  user: user,
  updatedUser: user,
  setUpdatedUser: React.Dispatch<React.SetStateAction<user>>,
  buttonActive: boolean,
}

export interface IProjectDetailUndoButton{
  project: project;
  setUpdatedProject: React.Dispatch<React.SetStateAction<project>>;
  buttonActive: boolean;
}

export interface IProjectDetailUpdateButton{
  project: project;
  buttonActive: boolean;
  setButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
  updatedProject: project;
}

export interface IContentDetailUndoButton{
  content: content,
  updatedContent: content,
  setUpdatedContent: React.Dispatch<React.SetStateAction<content>>,
  buttonActive: boolean,
}

export interface IContentDetailUpdateButton {
  content: content;
  updatedContent: content;
  buttonActive: boolean;
  setButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}
