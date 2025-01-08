from DataStructures.HashmapWrapper import HashmapW as Hashmap

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
    def getUsers(self):
        return self.users