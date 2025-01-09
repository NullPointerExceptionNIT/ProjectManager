from .Stack import *

class stack:
    def __init__(self):
        self.Running_stack = Stack()
        self.store_stack = Stack()
        
    def add(self , value):
        self.Running_stack.push(value)
        self.store_stack.empty()
        
    def undo(self):
        if self.Running_stack.isempty():
            raise Exception("everything is back")
        else:
            self.store_stack.push(self.Running_stack.pop())
        
    def redo(self):
        if self.store_stack.isempty():
            raise Exception("We have nothing left")
        else:
            self.Running_stack.push(self.store_stack.pop())