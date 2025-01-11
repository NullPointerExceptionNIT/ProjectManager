from DataStructures.HashmapWrapper import HashmapW as Hashmap
from Project import Project

def singleton(cls, *args, **kw):
    instances = {}
    def _singleton(*args, **kw):
       if cls not in instances:
            instances[cls] = cls(*args, **kw)
       return instances[cls]
    return _singleton

@singleton
class ProjectManager:
    def __init__(self):
        self.users:Hashmap = Hashmap(100)
        self.projects:Hashmap = Hashmap(100)
        self.last_project_index = 0
    
    def getUsers(self):
        return self.users
    
    def getProjects(self):
        return self.projects
    
    def addNewProject(self,project:Project):
        self.last_project_index += 1
        project.id = self.last_project_index
        self.projects.add(project)