from Task import Task
from DataStructures.HashmapWrapper import HashmapW
import datetime

class Project:
    
    def __init__(self , number):
        self.task : HashmapW = HashmapW(number)
        self.description : str
        self.startTime = self.getLiveTime()
        self.endTime : str
        
    def getLiveTime(self):
        return datetime.datetime.now()    
        
        
    
    def add_task(self, new_task: Task):
        self.task.add(new_task)

    def delete_task(self, new_task: Task):
        self.task.delete(new_task)

    def update_task(self, new_task : Task):
        self.task.update(new_task)
    
    def get_task(self , id):
        self.task.get(id)