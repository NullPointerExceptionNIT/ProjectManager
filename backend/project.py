from Task import Task
from person import person
from DataStructures.HashmapWrapper import HashmapW
class project:
    
    def __init__(self , number):
        self.task : HashmapW = HashmapW(number)
        
        
    
    def add_member(self, new_member: person):
        self.member.add(new_member)

    def delete_member(self, member: person):
        self.member.delete(member)

    def update_member(self, member : person):
        self.member.update(member)
    
    def get_member(self , id):
        self.member.get(id)