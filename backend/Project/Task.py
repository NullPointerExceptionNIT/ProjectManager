from DataStructures.Stack import stackwrapper as Stack
from .Person import Person
import datetime


class Task:
    key = "id"

    def __init__(self):
        self.id = 0
        self.topic: str
        self.member: Person
        self.status: str = "ready"
        self.startTime: str
        self.endTime: str
        self.realendtime: datetime.datetime  # اگه دیر یارو انجام داد کار رو
        self.comment: Stack = Stack()

    def change_status(self, new_status: str):
        self.status = new_status
        # change in database and front

    # update chat = method that update database for chat
