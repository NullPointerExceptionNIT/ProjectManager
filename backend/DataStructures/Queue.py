from Project.Task import Task

class Queue_Node:
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
        new_node = Queue_Node(value)
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


class PriorityQueue_Node:
    def __init__(self, data, priority):
        self.Data = data
        self.priority = priority
        self.Next = None


class PriorityQueue:
    def __init__(self):
        self.front = None

    def __iter__(self):
        a = self.front
        while a is not None:
            yield a.Data
            a = a.Next

    def add(self,task:Task):
        self.enqueue(task,task.endTime)

    def enqueue(self, value, priority):
        new_node = PriorityQueue_Node(value, priority)

        if self.front is None or self.front.priority > priority:
            new_node.Next = self.front
            self.front = new_node
        else:
            temp = self.front
            while temp.Next and temp.Next.priority <= priority:
                temp = temp.Next
            new_node.Next = temp.Next
            temp.Next = new_node

    def dequeue(self):
        if self.front is None:
            raise ValueError("Queue is empty")

        temp = self.front
        self.front = self.front.Next
        return temp.Data

    def pop(self, index):
        if self.front is None:
            raise ValueError("Queue is empty")
        if index < 0:
            raise IndexError("Index out of range")
        if index == 0:
            value = self.front.Data
            self.front = self.front.Next
            return value
        temp = self.front
        for _ in range(index - 1):
            if temp.Next is None:
                raise IndexError("Index out of range")
            temp = temp.Next
        
        if temp.Next is None:
            raise IndexError("Index out of range")

        value = temp.Next.Data
        temp.Next = temp.Next.Next
        return value

    def get(self, index):
        if self.front is None:
            raise ValueError("Queue is empty")
        
        if index < 0:
            raise IndexError("Index out of range")

        temp = self.front
        for _ in range(index):
            if temp is None:
                raise IndexError("Index out of range")
            temp = temp.Next
        if temp is None:
            raise IndexError("Index out of range")
        
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

    def search(self, value):
        temp = self.front
        while temp:
            if temp.Data == value:
                return temp
            temp = temp.Next
        return None

    def update(self, old_value, new_value, new_priority):
        temp = self.front
        while temp:
            if temp.Data == old_value:
                temp.Data = new_value
                temp.priority = new_priority
                return True
            temp = temp.Next
        return False

    def delete(self, value):
        if self.front is None:
            raise ValueError("Queue is empty")
        if self.front.Data == value:
            self.front = self.front.Next
            return True
        temp = self.front
        while temp.Next:
            if temp.Next.Data == value:
                temp.Next = temp.Next.Next
                return True
            temp = temp.Next

        return False



if __name__=='__main__':
    a=PriorityQueue()
    a.enqueue(1,1)
    a.enqueue(2,1)
    a.enqueue(3,1)
    a.enqueue(2,5)
    a.enqueue(0,5)
    print(a.get(1))
    print(a.pop(1))
    print(list(a))