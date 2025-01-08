from DataStructures.HashmapWrapper import HashmapW
from DataStructures.Stack import Stack
from person import person
import datetime

class Task:
    def __init__(self, name , sizeOfPeople, endtime):
        self.topic = name
        self.member: person 
        self.status: str = "ready"
        self.startTime = self.getLiveTime()
        self.endTime = endtime  # از فرانت چجوری میاد؟؟؟
        self.realendtime: datetime.datetime
        self.chat: Stack  # comment

    def getLiveTime(self):
        return datetime.datetime.now()

                
    def change_status(self, new_status: str):
        self.status = new_status
        # change in database and front

    # update chat = method that update database for chat