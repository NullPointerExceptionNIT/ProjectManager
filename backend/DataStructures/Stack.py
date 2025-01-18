class Node:
    def __init__(self, data):
        self.Data = data
        self.Next = None


class stack:
    def __init__(self):
        self.size = 0
        self.top = None

    def __iter__(self):
        a = self.top
        while a is not None:
            yield a.Data
            a = a.Next
    
    def add(self, data):
        self.push(data)

    def isempty(self):
        return self.top is None

    def push(self, value: object):
        new_Item = Node(value)
        new_Item.Next = self.top
        self.top = new_Item
        self.size += 1

    def pop(self, index=None):
        if self.isempty():
            raise IndexError("Pop from an empty stack.")
        if index is None:
            index = 0
        if not (0 <= index < self.size):
            raise IndexError("Index out of range.")
        current = self.top
        if index == 0:
            value = current.Data
            self.top = current.Next
        else:
            prev = None
            for _ in range(index):
                prev = current
                current = current.Next
            value = current.Data
            prev.Next = current.Next
        
        self.size -= 1
        return value

    def get(self, index):
        if self.isempty():
            raise IndexError("Get from an empty stack.")
        
        if not (0 <= index < self.size):
            raise IndexError("Index out of range.")
        
        current = self.top
        for _ in range(index):
            current = current.Next
        
        return current.Data

    def peek(self):
        temp = self.top
        while temp:
            if temp.Data is not None:
                print(temp.Data, end=" ")
            temp = temp.Next

    def empty(self):
        self.top = None
        self.size = 0

    def reverse(self):
        prev = None
        current = self.top
        while current:
            next_node = current.Next
            current.Next = prev
            prev = current
            current = next_node
        self.top = prev


class stackwrapper:
    def __init__(self):
        self.Running_stack = stack()
        self.store_stack = stack()

    def add(self, value):
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

if __name__=='__main__':
    a=stack()
    a.push(1)
    a.push(2)
    a.push(3)
    a.push(4)
    print(a.get(1))
    print(a.pop(1))
    print(list(a))