import enum


class Role(enum.Enum):
    normal_user = 1
    member = 2
    project_manager = 3


class Person:
    key = "username"

    def __init__(
        self,
        username: str,
        email: str,
        hashed_password: str,
        skills: str,
        experience: str,
        role: Role,
    ):
        self.username = username
        self.email = email
        self.hashed_password: object = hashed_password
        self.skills: list = skills  # witch data structure ????
        self.experience: list = experience  # witch data structure ????
        self.role: Role = role  # maneger or boss or user!!!

    # def updateName(self , new_name):
    #     self.name = new_name

    # def updateEmail(self , new_email):
    #     self.email = new_email

    # def updatePassword(self , new_password):
    #     self.password = new_password

    # def setRole(self , new_role):
    #     self.Different_roles = new_role

    def addSkill(self, new_skill):
        self.skills.append(new_skill)

    def addWorkHistory(self, new_work):
        self.Work_history.append(new_work)

    def Request_entry(self, username, email, Pass):  # Data base???
        pass
