from .Tasks import Tasks
from .Task import Task
from DataStructures.Stack import stack as Stack
import datetime


class Project:
    key = "id"

    def __init__(self):
        self.tasks: Tasks = Tasks()
        self.name: str
        self.id: int
        self.description: str
        self.startTime = self.getLiveTime()
        self.endTime: str
        self.chat: Stack
        self.last_task_index = 0

    def getLiveTime(self):
        return datetime.datetime.now()

    def addNewTask(self, task: Task):
        self.last_task_index += 1
        task.id = self.last_task_index
        if task.status == 2:    
            self.tasks.done.add(task)
        elif task.status == 1:
            self.tasks.in_progress.add(task)
        else:
            self.tasks.ready.add(task)

    def getTask(self , id:int) -> Task:
        return self.tasks.search(id)