from .Tasks import Tasks
from .Task import Task
from DataStructures.Stack import Stack
import datetime
from Project.Task import Task,Status
from DataStructures.Stack import Stack
from DataStructures.Queue import PriorityQueue
from DataStructures.LinkedList import LinkedList

class Project:
    key = "id"

    def __init__(self):
        self.id = 0
        self.ready: LinkedList = LinkedList()
        self.in_progress: PriorityQueue = PriorityQueue()
        self.done: Stack = Stack()
        self.name: str
        self.description: str
        self.startTime = self.getLiveTime()
        self.endTime: str
        self.chat: Stack

    def getLiveTime(self):
        return datetime.datetime.now()
    
    def removeTask(self,index:int,status:Status):
        self.__dict__[task.Status.name].pop(index)
    
    def changeTask(self,index:int,status:Status,new_task:Task):
        old_task = self.__dict__[task.Status.name].pop(index)
        self.addTask(new_task)

    def addTask(self,task:Task):
        print(task.status.name)
        self.__dict__[task.status.name].add(task)
        return

    def getAllTasks(self):
        l=dict()
        print(l)
        for p in Status:
            l[p.name]=list(self.__dict__[p.name])
        return l