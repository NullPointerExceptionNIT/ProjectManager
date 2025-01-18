class Node:
    value:object
    next_ptr:object
    def __init__(self, value, next_ptr=None):
        self.value = value
        self.next_ptr = next_ptr

class LinkedList:
    __first: Node | None = None
    __last: Node | None = None
    __size: int = 0

    def __len__(self):
        return self.__size

    def __iter__(self):
        node = self.__first
        while node is not None:
            yield node.value
            node = node.next_ptr
    
    def add(self,data):
        self.insert_at_end(data)

    def insert_at_front(self, data):
        new_node = Node(data, self.__first)
        if self.__first is None:
            self.__last = new_node
        self.__first = new_node
        self.__size += 1

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.__first is None:
            self.__first = new_node
        else:
            self.__last.next_ptr = new_node
        self.__last = new_node
        self.__size += 1

    def delete_at_front(self):
        if self.__first is None:
            raise IndexError("Delete from an empty list.")
        
        node = self.__first
        if self.__first == self.__last:
            self.__last = None
        self.__first = self.__first.next_ptr
        self.__size -= 1
        return node.value

    def search(self, value):
        node = self.__first
        while node is not None:
            if node.value == value:
                return node
            node = node.next_ptr
        return None

    def print_forward(self):
        for i in self:
            print(i)

    def clear(self):
        self.__first = None
        self.__last = None
        self.__size = 0

    def reverse_recursive(self):
        self.__first = LinkedList.__reverse_recursive(self.__first)
        return

    @staticmethod
    def __reverse_recursive(node):
        if node is None or node.next_ptr is None:
            return node
        revnode = LinkedList.__reverse_recursive(node.next_ptr)
        node.next_ptr.next_ptr = node
        node.next_ptr = None
        return revnode

    def reverse_non_recursive(self):
        if self.__first is None or self.__first.next_ptr is None:
            return
        current = self.__first.next_ptr
        self.__first.next_ptr = None
        next_node = current.next_ptr
        while current is not None:
            current.next_ptr = self.__first
            self.__first = current
            current = next_node
            if next_node is not None:
                next_node = next_node.next_ptr

    def pop(self, index):
        if index < 0 or index >= self.__size:
            raise IndexError("Index out of range.")
        if index==0:
            return self.delete_at_front()
        prev = None
        current = self.__first
        for _ in range(index):
            prev = current
            current = current.next_ptr

        if current == self.__last:
            self.__last = prev

        prev.next_ptr = current.next_ptr
        self.__size -= 1
        return current.value

    def get(self, index):
        if index < 0 or index >= self.__size:
            raise IndexError("Index out of range.")
        
        current = self.__first
        for _ in range(index):
            current = current.next_ptr
        
        return current.value

    def get_node(self, value):
        for node in self:
            if node.value == value:
                return node
        return None

    def get_index(self, value):
        node = self.__first
        n = 0
        while node is not None:
            if node.value == value:
                return n
            n += 1
            node = node.next_ptr
        return -1

if __name__=='__main__':
    a=LinkedList()
    a.insert_at_end(1)
    a.insert_at_end(2)
    a.insert_at_end(3)
    a.insert_at_end(4)
    print(a.get(1))
    print(a.pop(1))
    print(list(a))

