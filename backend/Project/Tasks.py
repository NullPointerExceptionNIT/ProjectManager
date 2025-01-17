from DataStructures.LinkedList import LinkedList
from DataStructures.Stack import stack as Stack
from DataStructures.Queue import PriorityQueue as Queue


class inprogress:
    def __init__(self):
        self.task: Queue = Queue()

    def get(self):
        return self.task

    def getAll(self) -> list[Queue]:
        List = []
        while self.task.size() > 0:
            List += self.task.dequeue()
        return List

    def add(self, item):
        if self.task.enqueue(item, item.__dict__[item.key]):
            return True
        return False

    def delete(self, id: int):
        pass

    def update(self, item):
        pass


class Done:
    def __init__(self):
        self.task: Stack = Stack()

    def get(self):
        return self.task

    def getAll(self) -> list[Stack]:
        List: list = []
        temp_stack = Stack()
        while self.task.size > 0:
            task = self.task.pop()
            List.append(task)
            temp_stack.push(task)
        while temp_stack.size > 0:
            self.task.push(temp_stack.pop())
        return List

    def add(self, item):
        if self.task.push(item):
            return True
        return False

    def delete(self, item):
        if self.task.isempty():
            raise IndexError("Stack is empty.")
        prev = None
        current = self.task.top
        while current:
            if current == item:
                if prev:
                    prev.Next = current.Next
                else:
                    self.top = current.Next
                self.task.size -= 1
                return True
            prev = current
            current = current.Next
        return False

    def update(self, id):
        pass


class Ready:
    def __init__(self):
        self.task: LinkedList = LinkedList()

    def get(self):
        return self.task

    def getAll(self) -> list[LinkedList]:
        List = []
        temp = self.task.L
        while temp:
            List += temp.Data
        return List

    def add(self, item):
        if self.task.insert_at_front(item):
            return True
        return False

    def delete(self, id):
        pass

    def update(self, id):
        pass


class Tasks:
    def __init__(self):
        self.in_progress: inprogress = inprogress()
        self.done: Done = Done()
        self.ready: Ready = Ready()

    def search(self , key :int):
        pass