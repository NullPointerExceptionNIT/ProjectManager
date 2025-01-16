from DataStructures.Stack import stackwrapper as Stack
from DataStructures.Queue import PriorityQueue as Queue
from DataStructures.LinkedList import LinkedList
from .Person import Person
from .Tasks import Tasks
import datetime
import enum


class Status(enum.Enum):
    ready = 0
    in_progress = 1
    done = 2


class Task:
    key = "id"

    def __init__(self):
        self.topic: str
        self.member: Person
        self.startTime: str
        self.end_time: str
        self.real_end_time: datetime.datetime
        self.comment: Stack = Stack()
        self.status: Status = Status.ready

    def getStatusTask(self):
        return self.status

    # def changeStatus(self, index: int, old_status: TaskStatus, new_status: TaskStatus):
    #     task = self.tasks.__dict__[old_status.name].delete(index)
    #     task.status = new_status
    #     self.addTask(task)
