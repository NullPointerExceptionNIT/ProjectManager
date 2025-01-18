from .Tasks import Tasks
from .Task import Task
from DataStructures.Stack import Stack
import datetime


class Project:
    key = "id"

    def __init__(self):
        self.id = 0
        self.tasks: Tasks = Tasks()
        self.name: str
        self.description: str
        self.startTime = self.getLiveTime()
        self.endTime: str
        self.chat: Stack
        self.last_task_index = 0

    def getLiveTime(self):
        return datetime.datetime.now()

    def addNewTask(self, task: Task):
        if task.status == 2:    
            self.tasks.index_of_done += 1
            task.id = self.tasks.index_of_done
            self.tasks.done.add(task)
        elif task.status == 1:
            self.tasks.index_of_inprogress += 1
            task.id = self.tasks.index_of_inprogress
            self.tasks.in_progress.add(task)
        else:
            self.tasks.index_of_ready += 1
            task.id = self.tasks.ready
            self.tasks.ready.add(task)

    def getTask(self , id:int) -> Task:
        return self.tasks.search(id)
    
    def change_status_to_inprogress(self , index):
        task : Task = self.tasks.ready.find(index=index)
        task.status = 1
        self.addNewTask(task)
        
    def change_status_to_done(self , index):
        task : Task = self.tasks.in_progress.find(index=index)
        task.status = 2
        self.addNewTask(task)