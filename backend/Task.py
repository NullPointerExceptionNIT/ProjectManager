from DataStructures.Stackwrapper import stack as Stack
from person import person
import datetime

class Task:
    def __init__(self):
        self.topic : str
        self.member: person 
        self.status: str = "ready"
        self.startTime : str
        self.endTime : str
        self.realendtime: datetime.datetime # اگه دیر یارو انجام داد کار رو
        self.chat : Stack = Stack()  # comment

    

                
    def change_status(self, new_status: str):
        self.status = new_status
        # change in database and front

    # update chat = method that update database for chat