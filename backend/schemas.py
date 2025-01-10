from pydantic import BaseModel, validator
from typing import Optional
from Person import Role
from re import compile
from fastapi.exceptions import HTTPException

regex = compile("^(?!.*[.]{2})(?=(?:[a-zA-Z\\d]\\.?){6}.*@)[a-zA-Z\\d][\\da-zA-Z.]{4,}[a-zA-Z\\d]@(?:[\\da-zA-Z]+.)+[\\da-zA-Z]{2,}$")

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
    role : Role
    @validator("email")
    def EmailValidator(cls, email):
        if not regex.match(email):
            raise HTTPException(422, detail=[{"msg":"Invalid Email"}])
        return email

class UserResponse(BaseModel):
    username: str
    email: str | None = None

class UserInDB(UserResponse):
    hashed_password: str


class ProductBase(BaseModel):
    name: str
    price: float
    category: str
    description: Optional[str] = None

class ProductCreate(ProductBase):
    pass