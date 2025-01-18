from DataStructures.Stack import stackwrapper as Stack
from .Person import Person
import datetime
import enum


class Status(enum.Enum):
    ready = "ready"
    in_progress = "in_progress"
    done = "done"


class Task:
    key = "id"

    def __init__(self):
        self.id: int
        self.name: str
        self.member: Person
        self.startTime: datetime.date
        self.endTime: datetime.date
        # self.comment
        self.status: Status = Status.ready

    # def changeStatus(self, index: int, old_status: TaskStatus, new_status: TaskStatus):
    #     task = self.tasks.__dict__[old_status.name].delete(index)
    #     task.status = new_status
    #     self.addTask(task)
