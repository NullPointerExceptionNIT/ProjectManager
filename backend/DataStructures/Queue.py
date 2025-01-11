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
    def __init__(self, value, priority):
        self.Data = value
        self.priority = priority
        self.Next = None


class PriorityQueue:
    def __init__(self):
        self.front = None

    def enqueue(self, value, priority):
        new_node = PriorityQueue_Node(value, priority)

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
