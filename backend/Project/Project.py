from .Tasks import Done, inprogress, Ready
from DataStructures.Stack import stack as Stack
import datetime


class Project:
    key = "id"

    def __init__(self):
        self.in_progress: inprogress = inprogress()
        self.done: Done = Done()
        self.ready: Ready = Ready()
        self.name: str
        self.id: int
        self.description: str
        self.startTime = self.getLiveTime()
        self.endTime: str
        self.chat: Stack

    def getLiveTime(self):
        return datetime.datetime.now()
