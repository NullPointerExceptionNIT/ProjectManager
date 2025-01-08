from DataStructures.BinaryTreeForHashMap import *
from DataStructures.Hashmap import Hashmap
from DataStructures.Stack import Stack
from person import person
import datetime

class Task:
    def __init__(self, name, sizeOfPeople, endtime):
        self.topic = name
        self.member: Hashmap = Hashmap(sizeOfPeople)
        self.status: str = "ready"
        self.startTime = self.getLiveTime()  # فراخوانی متد به درستی
        self.endTime = endtime  # از قرانت چجوری میاد؟؟؟
        self.realendtime: datetime.datetime
        self.chat: Stack  # comment

    def getLiveTime(self):  # اضافه کردن self به عنوان پارامتر
        return datetime.datetime.now()

    def add_Member(self, new_member: person):
        self.member.Add(new_member, new_member.id)

    def delete_Member(self, member: person):
        self.member.delete(member.id)

    def change_status(self, new_status: str):
        self.status = new_status
        # change in database and front

    # update chat = method that update database for chat