from fastapi import APIRouter, Depends
from Project.ProjectManager import ProjectManager
from Project.Project import Project
from auth.auth_handler import get_current_active_ProjectManager
from schemas import ProjectBase

router = APIRouter()
main_project = ProjectManager()
def test ():
        # if main_project.getAllProjectsAsList():  # اگر پروژه‌ای موجود است، نیازی به مقداردهی نیست
        #     return  
    project1 = Project() 
    project1.name = "ali " 
    project1.description = "fjajfja" 
    project1.endTime = "30 Tir 1402"
    project2 = Project() 
    project2.name = "amir and ali" 
    project2.description = "wurouqwrg" 
    project2.endTime = "20 Tir 145200"
    project3 = Project()
    project3.name = "hosein and javid" 
    project3.description = "fuosafnknkasf" 
    project3.endTime = "19 Aug 2000"
    main_project.addNewProject( project = project1)
    main_project.addNewProject( project = project3)
    main_project.addNewProject( project = project2)

test()
@router.get("/projects", response_model = list[ProjectBase])
async def show_project(current_user = Depends(get_current_active_ProjectManager)): 
    return  main_project.getAllProjectsAsList()

@router.post("/create-project", response_model = ProjectBase)
async def add_project(description : str, name : str ,current_user = Depends(get_current_active_ProjectManager)):
    new_project = Project(name=name , description=description)
    main_project.addNewProject(new_project)
    return main_project
     

@router.put("/update-project", response_model = ProjectBase)
async def updtae_project(id : int, current_user = Depends(get_current_active_ProjectManager)):
    main_project.getProjects().update(id)
    return main_project.getProjects().get(id)

@router.delete("/delete-projrct")
async def delete_project(id_of_projects : int , current_user = Depends(get_current_active_ProjectManager)):
    main_project.getProjects().delete(id_of_projects)
    return ...