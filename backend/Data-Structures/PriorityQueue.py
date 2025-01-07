class Node:
    def __init__(self, value, priority):
        self.Data = value  
        self.priority = priority  
        self.Next = None 

class PriorityQueue:
    def __init__(self):
        self.front = None
    
    def enqueue(self, value, priority):
        new_node = Node(value, priority)  
        
        if self.front is None or self.front.priority < priority:
            new_node.Next = self.front
            self.front = new_node
        else:
            temp = self.front
            while temp.Next and temp.Next.priority >= priority:
                temp = temp.Next
            new_node.Next = temp.Next
            temp.Next = new_node
    
    def dequeue(self):
        if self.front is None:
            raise ValueError("Queue is empty")
        
        temp = self.front
        self.front = self.front.Next
        return temp.Data 
    
    def size(self):
        temp = self.front
        size = 0
        while temp:
            size += 1
            temp = temp.Next
        return size
    
    def empty(self):
        return self.front is None
    
    def peek(self):
        if self.front is None:
            raise ValueError("Queue is empty")
        return self.front.Data
    
    def makeNull(self):
        while self.front is not None:
            self.dequeue()