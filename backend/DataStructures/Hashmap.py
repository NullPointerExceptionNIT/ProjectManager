from DataStructures.BinaryTree import BinaryTree
from DataStructures.getKey import getKey
import hashlib

class Hashmap:
    def __init__(self, size):  # size = مبنای کار
        self.size = size
        self.array = [None] * size
        for i in range(size):
            self.array[i] = BinaryTree()

    def checker(self, number):
        return int(hashlib.md5(str(number).encode('utf-8')).hexdigest(),16) % self.size

    def add(self, item):
        key = getKey(item)
        new_key = self.checker(key)
        self.array[new_key].insert(item)

    def get(self, key):
        new_key = self.checker(key)
        return self.array[new_key].find(key)

    def delete(self, key):
        new_key = self.checker(key)
        return self.array[new_key].delete(key)

    def update(self, item):
        key = getKey(item)
        new_key = self.checker(key)
        return self.array[new_key].update(item, key)

    def has(self, key):
        new_key = self.checker(key)
        result = self.array[new_key].find(key)
        if result is not None:
            return True
        else:
            return False

    def show_all(self):
        all_items = []
        for tree in self.array:
            if tree is not None:
                all_items += tree.inorder()
        return all_items
