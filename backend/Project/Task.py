from DataStructures.Stack import stackwrapper as Stack
from .Person import Person
import datetime
import enum


class Status(enum.Enum):
    ready = 0
    in_progress = 1
    done = 2


class Task:
    key = "id"

    def __init__(self):
        self.id: int
        self.name: str
        self.member: Person
        self.startTime: str
        self.end_time: str
        self.real_end_time: datetime.datetime
        self.comment: Stack = Stack()
        self.status: Status = Status.ready

    # def changeStatus(self, index: int, old_status: TaskStatus, new_status: TaskStatus):
    #     task = self.tasks.__dict__[old_status.name].delete(index)
    #     task.status = new_status
    #     self.addTask(task)
