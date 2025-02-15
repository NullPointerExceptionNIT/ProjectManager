from pydantic import BaseModel, field_validator
from typing import Optional,List
from Project.Person import Role
from re import compile
from fastapi.exceptions import HTTPException
from datetime import date
from Project import Task
regex = compile(
    "^(?!.*[.]{2})(?=(?:[a-zA-Z\\d]\\.?){6}.*@)[a-zA-Z\\d][\\da-zA-Z.]{4,}[a-zA-Z\\d]@(?:[\\da-zA-Z]+.)+[\\da-zA-Z]{2,}$"
)


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    skills: str
    experience: str
    role: Role

    @field_validator("email")
    def EmailValidator(cls, email: str) -> str:
        if not regex.match(email):
            raise HTTPException(422, detail=[{"msg": "Invalid Email"}])
        return email


class UserResponse(BaseModel):
    username: str
    email: str | None = None
    role: Role


class UserInDB(UserResponse):
    hashed_password: str


class ProjectBase(BaseModel):
    id: Optional[int] = None
    name: str
    description: str
    endTime: date


class TaskBase(BaseModel):
    name: str
    endTime: date
    status : Task.Status

class AllTask(BaseModel):
    ready:List[TaskBase]
    in_progress:List[TaskBase]
    done:List[TaskBase]
