from .Task import Task
from DataStructures.Hashmap import Hashmap
import datetime


class Project:
    key = "id"

    def __init__(self):
        self.name : str
        self.id : int
        self.task: Hashmap = Hashmap(100)
        self.description: str
        self.startTime = self.getLiveTime()
        self.endTime: str

    def getLiveTime(self):
        return datetime.datetime.now()

    def add_task(self, new_task: Task):
        self.task.add(new_task)

    def delete_task(self, new_task: Task):
        self.task.delete(new_task)

    def update_task(self, new_task: Task):
        self.task.update(new_task)

    def get_task(self, id):
        self.task.get(id)
