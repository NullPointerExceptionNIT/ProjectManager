class Node:
    def __init__(self, data):
        self.Data = data
        self.Next = None


class stack:
    def __init__(self):
        self.size = 0
        self.top = Node(None)

    def isempty(self):
        temp = self.top
        if temp.Data == None:
            return True
        return False

    def push(self, value: object):
        temp = self.top
        new_Item = Node(value)
        new_Item.Next = temp
        self.top = new_Item
        self.size += 1

    def pop(self):
        temp = self.top
        if self.isempty():
            raise IndexError("Pop from an empty stack.")
        else:
            value = temp.Data
            self.top = temp.Next
            self.size -= 1
            return value

    def peek(self):
        temp = self.top
        while temp:
            if temp.Data is not None:
                print(temp.Data, end=" ")
            temp = temp.Next

    def empty(self):
        self.top = None

    def size(self):
        return self.size

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
