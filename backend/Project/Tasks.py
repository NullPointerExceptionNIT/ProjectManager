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

    def find(self, index):
        task = None
        new_queue = Queue()
        while self.task.size() >= 0:
            temp = self.task.dequeue()
            if temp.Data.id == index:
                task = temp.Data
            else:
                new_queue.enqueue(temp, temp.priority)
        self.task = new_queue
        if task is None:
            raise Exception(f"task not found!")
        return task


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

    def find(self, index):
        task = None
        new_stack = Stack()
        while self.task.size() >= 0:
            temp = self.task.pop()
            if temp.Data.id == index:
                task = temp.Data
            else:
                new_stack.push(temp)

        new_stack.reverse()
        self.task = new_stack
        if task is None:
            raise Exception(f"task not found!")
        return task

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

    def find(self, index):
        return self.task.find_and_remove(index)

    def update(self, id):
        pass


class Tasks:
    def __init__(self):
        self.in_progress: inprogress = inprogress()
        self.done: Done = Done()
        self.ready: Ready = Ready()
        self.index_of_inprogress: int = 0
        self.index_of_done: int = 0
        self.index_of_ready: int = 0

    def search(self, key: int):
        pass
