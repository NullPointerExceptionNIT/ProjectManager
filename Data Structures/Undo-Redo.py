from Stack import *

class Undo_Redo:
    def __init__(self):
        self.Running_stack = Stack()
        self.store_stack = Stack()
        
    def get(self , data):
        self.Running_stack.push(data)
        self.store_stack.empty()
        # self.Running_stack.peek()
        
    def undo(self):
        if self.Running_stack.isempty():
            print("We have nothing left")
        else:
            self.store_stack.push(self.Running_stack.pop())
        # self.Running_stack.peek()
        
    def redo(self):
        if self.store_stack.isempty():
            print("We have nothing left")
        else:
            self.Running_stack.push(self.store_stack.pop())
        # self.Running_stack.peek()