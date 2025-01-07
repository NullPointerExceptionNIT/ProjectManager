from ..DataStructures.Hashmap import Hashmap
from ..DataStructures.Stack import Stack
from ..backend.person import person
import datetime

class Task:
    def __init__(self , name , sizeOfPeople , endtime):
        self.topic = name
        self.member :Hashmap = Hashmap(sizeOfPeople)
        self.status : str = "ready"
        self.startTime = self.getLiveTime 
        self.endTime = endtime
        self.realendtime : datetime.datetime
        self.chat : Stack #comment
            
    def getLiveTime():
        return datetime.datetime.now()
    
    def updateName(self , new_name):
        self.topic = new_name
    
    def add_Member(self , new_member : person):
        self.member.Add(new_member , new_member.id)
    
    def delete_Member(self , member : person):
        self.member.delete(member.id)
    
    def change_status(self , new_status : str):
        
    
    # update chat = method that update database for chat
             