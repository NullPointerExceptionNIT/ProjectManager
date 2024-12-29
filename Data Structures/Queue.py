class Node:
    def __init__(self, data):
        self.Data = data
        self.Next = None

class Queue:
    def __init__(self):
        self.front = None  
        self.rear = None
        self.size = 0  
    
    def enqueue(self, value):
        self.size += 1
        new_node = Node(value) 
        if self.rear is None: 
            self.front = self.rear = new_node 
        else:
            self.rear.Next = new_node  
            self.rear = new_node  
            
    def dequeue(self):
        self.size -= 1
        if self.front is None:  
            raise ValueError("Queue is empty")
        temp = self.front
        self.front = self.front.Next  
        if self.front is None:  
            self.rear = None  
        return temp.Data
    
    def makeNull(self):
        while self.front is not None:
            self.dequeue()