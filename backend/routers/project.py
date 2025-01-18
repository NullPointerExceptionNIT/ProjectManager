from fastapi import APIRouter, Depends, HTTPException
from Project.ProjectManager import ProjectManager
from Project.Project import Project
from Project.Person import Person
from Project.Task import Task
from auth.auth_handler import get_current_active_ProjectManager
from schemas import ProjectBase, TaskBase

router = APIRouter()
main_project = ProjectManager()


def test():
    project1 = Project()
    project1.name = "ali "
    project1.description = "koadasdasds"
    project1.endTime = "30 Tir 1402"
    project2 = Project()
    project2.name = "amir and ali"
    project2.description = "asdsds"
    project2.endTime = "20 Tir 145200"
    project3 = Project()
    project3.name = "hosein and javid"
    project3.description = "asdsadsadzc"
    project3.endTime = "19 Aug 2000"
    main_project.addNewProject(project=project1)
    main_project.addNewProject(project=project3)
    main_project.addNewProject(project=project2)


# test()


@router.get("/", response_model=list[ProjectBase])
async def show_project(current_user=Depends(get_current_active_ProjectManager)):
    return main_project.getAllProjectsAsList()


@router.post("/create-project", response_model=list[ProjectBase])
async def add_project(
    project:ProjectBase, current_user=Depends(get_current_active_ProjectManager)
):
    new_project = Project()
    new_project.description = project.description
    new_project.name = project.name
    new_project.endTime=project.endTime
    main_project.addNewProject(new_project)
    return main_project.getAllProjectsAsList()


@router.put("/update-project/{id}", response_model=list[ProjectBase] or HTTPException)
async def update_project(
    project:ProjectBase,
    id :int,
    current_user=Depends(get_current_active_ProjectManager),
):
    current_project = main_project.getproject(id)
    current_project.name = project.name
    current_project.description = project.description
    current_project.endTime=project.endTime
    try:
        main_project.getProjects().update(current_project)
        return main_project.getAllProjectsAsList()
    except:
        raise HTTPException(status_code=404, detail="Project not updated")


@router.delete(
    "/delete-projrct/{id}", response_model=list[ProjectBase] or HTTPException
)
async def delete_project(
    id: int, current_user=Depends(get_current_active_ProjectManager)
):
    if not main_project.getProjects().delete(id):
        return main_project.getAllProjectsAsList()
    else:
        raise HTTPException(status_code=404, detail="Project not deleted")


@router.get("/project/{id}", response_model=ProjectBase or HTTPException)
async def get_project(id: int, current_user=Depends(get_current_active_ProjectManager)):
    if main_project.getproject(id):
        return main_project.getproject(id)
    else:
        raise HTTPException(status_code=404, detail="Project not found")


@router.post("/project/{project_id}/add-task", response_model=ProjectBase)
async def add_task(
    project_id: int,
    description: str,
    end_time: str,
    current_user=Depends(get_current_active_ProjectManager),
):
    new_task = Task()
    new_task.name = description
    new_task.end_time = end_time
    main_project.getproject(project_id).addNewTask(new_task)
    return main_project.getproject(project_id)


# @router.put("/project/{project_id}/update-task/{task_id}" , response_model=ProjectBase)
# async def update_task(project_id : int , task_id : int ,new_description : str , current_user=Depends(get_current_active_ProjectManager)):
#     return None
