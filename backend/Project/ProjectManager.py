from DataStructures.Hashmap import Hashmap
from Project.Project import Project
from DataStructures.Stack import Stack
from DataStructures.Queue import PriorityQueue
from DataStructures.LinkedList import LinkedList
from Project.Task import Task,Status

instances = {}
def singleton(cls, *args, **kw):
    def _singleton(*args, **kw):
        global instances
        if cls not in instances:
            instances[cls] = cls(*args, **kw)
        return instances[cls]

    return _singleton


@singleton
class ProjectManager:
    def __init__(self):
        self.users: Hashmap = Hashmap(100)
        self.projects: Hashmap = Hashmap(100)
        self.last_project_index = 0
        self.chat:LinkedList = LinkedList()
        self.ready: LinkedList = LinkedList()
        self.in_progress: PriorityQueue = PriorityQueue()
        self.done: Stack = Stack()


    def getUsers(self):
        return self.users

    def getProjects(self):
        return self.projects

    def addNewProject(self, project: Project):
        self.last_project_index += 1
        project.id = self.last_project_index
        self.projects.add(project)

    def getAllProjectsAsList(self) -> list[Project]:
        return self.projects.show_all()

    def getproject(self, id: int) -> Project:
        return self.projects.get(id)
    
    def addTask(self,task:Task):
        
        return
    def getAllTasks(self):
        l=dict()
        for p in Status:
            l[p.name]=list(self.__dict__[p.name])
        return l