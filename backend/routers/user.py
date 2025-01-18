from fastapi import APIRouter, Depends, HTTPException
from auth.auth_handler import get_current_active_user, get_current_active_ProjectManager
from schemas import UserResponse
from Project.ProjectManager import ProjectManager

router = APIRouter()
main_project = ProjectManager()


@router.get("/me/", response_model=UserResponse)
async def read_users_me(current_user=Depends(get_current_active_user)):
    return current_user


@router.get("/alluser", response_model=list[UserResponse] or HTTPException)
async def get_all_user(current_user=Depends(get_current_active_ProjectManager)):
    try:
        return main_project.get_users()
    except:
        raise HTTPException(status_code=404, detail="users not found")
