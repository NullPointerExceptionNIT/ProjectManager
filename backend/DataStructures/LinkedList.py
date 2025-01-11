class Node:
    def __init__(self, data):
        self.Data = data
        self.Next = None


class DoubleNode:
    def __init__(self, data):
        self.Data = data
        self.Next = None
        self.Prev = None


class LinkedList:
    def __init__(self):
        self.L = None  # L is head

    def insert_at_front(self, value):
        new_node = Node(value)
        new_node.Next = self.L
        self.L = new_node

    def insert_at_end(self, value):
        new_node = Node(value)
        if self.L is None:
            self.L = new_node
        else:
            temp = self.L
            while temp.Next:
                temp = temp.Next
            temp.Next = new_node

    def is_empty(self):
        return self.L is None

    def search(self, value):
        temp = self.L
        while temp:
            if temp.Data == value:
                return temp
            temp = temp.Next
        return "Data not found!"

    def clear(self):
        temp = self.L
        while temp:
            amir = temp.Next
            temp = amir
        self.L = None

    def size(self):
        temp = self.L
        size = 0
        while temp:
            size += 1
            temp = temp.Next
        return size

    def delete_at_front(self):
        if self.is_empty():
            raise ValueError("LinkedList is empty!")
        temp = self.L
        self.L = self.L.Next

    def print_forward(self):
        temp = self.L
        while temp:
            print(temp.Data, end="-")
            temp = temp.Next
        # print("None")

    def reverse_recursive(self, current=None, prev=None):
        if current is None:
            current = self.L
        if current.Next is None:
            self.L = current
            current.Next = prev
            return
        next_node = current.Next
        current.Next = prev
        self.reverse_recursive(next_node, current)

    def reverse_non_recursive(self):
        prev = None
        current = self.L
        while current:
            next_node = current.Next
            current.Next = prev
            prev = current
            current = next_node
        self.L = prev

    def make_double(self):
        if self.is_empty():
            raise ValueError("LinkedList is empty!")

        double_head = DoubleNode(self.L.Data)
        temp = self.L.Next
        current_double = double_head

        while temp:
            temp_double = DoubleNode(temp.Data)
            current_double.Next = temp_double
            temp_double.Prev = current_double
            current_double = temp_double
            temp = temp.Next

        return double_head

    def interleave_lists(list1, list2):
        new_list = LinkedList()
        temp1 = list1.L
        temp2 = list2.L

        while temp1 or temp2:
            if temp1:
                new_list.insert_at_end(temp1.Data)
                temp1 = temp1.Next
            if temp2:
                new_list.insert_at_end(temp2.Data)
                temp2 = temp2.Next
        return new_list

    def make_circular(self):
        if self.is_empty():
            raise ValueError("LinkedList is empty!")
        temp = self.L
        while temp.Next:
            temp = temp.Next
        temp.Next = self.L

    def insert_at_end_circular(self, value):
        new_node = Node(value)
        if self.L is None:
            self.L = new_node
            self.L.Next = self.L
        else:
            temp = self.L
            while temp.Next != self.L:
                temp = temp.Next
            temp.Next = new_node
            new_node.Next = self.L


class DoubleLinkedList:
    def __init__(self):
        self.L = None

    def insert_at_end(self, value):
        new_node = DoubleNode(value)
        if self.L is None:
            self.L = new_node
        else:
            temp = self.L
            while temp.Next:
                temp = temp.Next
            temp.Next = new_node
            new_node.Prev = temp

    def delete_at_end(self):
        if self.L is None:
            raise ValueError("DoubleLinkedList is empty!")
        temp = self.L
        if temp.Next is None:
            self.L = None
            return
        while temp.Next:
            temp = temp.Next
        temp.Prev.Next = None

    def backward_print(self):
        if self.L is None:
            print("empty")
            return
        temp = self.L
        while temp.Next:
            temp = temp.Next
        while temp:
            print(temp.Data, end="_")
            temp = temp.Prev

    @staticmethod
    def search_and_count(list: LinkedList, value):
        temp = list.L
        index = 0
        count = 0
        while temp:
            if temp.Data == value:
                count += 1
                if count == 1:
                    first_position = index
            temp = temp.Next
            index += 1

        if count > 0:
            return f"Element found at index {first_position} with {count} occurrences."
        else:
            return "Data not found!"

    @staticmethod
    def split_even_odd(list: LinkedList):
        even_list = LinkedList()
        odd_list = LinkedList()
        temp = list.L
        index = 0
        while temp:
            if index % 2 == 0:
                even_list.insert_at_end(temp.Data)
            else:
                odd_list.insert_at_end(temp.Data)
            temp = temp.Next
            index += 1
        print("Even index list:")
        even_list.print_forward()
        print("Odd index list:")
        odd_list.print_forward()

    @staticmethod
    def merge_sorted_lists(list1: LinkedList, list2: LinkedList):
        new_list = LinkedList()
        temp1 = list1.L
        temp2 = list2.L
        while temp1 and temp2:
            if temp1.Data < temp2.Data:
                new_list.insert_at_end(temp1.Data)
                temp1 = temp1.Next
            else:
                new_list.insert_at_end(temp2.Data)
                temp2 = temp2.Next
        while temp1:
            new_list.insert_at_end(temp1.Data)
            temp1 = temp1.Next

        while temp2:
            new_list.insert_at_end(temp2.Data)
            temp2 = temp2.Next

        return new_list
