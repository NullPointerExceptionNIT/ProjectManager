from fastapi import APIRouter, Depends
from Project.ProjectManager import ProjectManager
from Project import Project
from auth.auth_handler import get_current_active_ProjectManager
from schemas import ProjectBase

router = APIRouter()
projects = ProjectManager()

@router.post("/create-project", response_model = ProjectBase)
async def add_project(description : str, name : str ,current_user = Depends(get_current_active_ProjectManager)):
    new_project = Project(name=name , description=description)
    projects.addNewProject(new_project)
    return new_project

@router.get("/projects", response_model = ProjectBase)
async def show_project( current_user = Depends(get_current_active_ProjectManager)):
    all_Pro : list = projects.getProjects().get(current_user.key)
    return all_Pro

@router.put("/update-project", response_model = ProjectBase)
async def updtae_project(id : int, current_user = Depends(get_current_active_ProjectManager)):
    projects.getProjects().update(id)
    return projects.getProjects().get(id)

@router.get("/delete-projrct")
async def delete_project(id_of_projects : int , current_user = Depends(get_current_active_ProjectManager)):
    projects.getProjects().delete(id_of_projects)
    return ...