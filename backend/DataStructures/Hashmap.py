from DataStructures.BinaryTreeForHashMap import BinaryTree
class Hashmap:
    def __init__(self , size): #size = مبنای کار 
        self.size = size
        self.array = [None] * size
        for i in range(size):
            self.array[i] = BinaryTree()            
    def check(self , number):
        return number % self.size
    
    def Add(self , value , key):
        new_key = self.check(key)
        if value is None:
            raise Exception("value is empty")
        else:
            self.array[new_key].insert(value , key)
        
    def get(self , key):
        new_key = self.check(key)
        return self.array[new_key].search(key)
    
    def delete(self , key):
        new_key = self.check(key)
        return self.array[new_key].delete(key)
    
    def update(self ,value ,key):
        new_key = self.check(key)
        return self.array[new_key].update(value ,key)
    
    def has(self, key):
        new_key = self.check(key)
        result = self.array[new_key].search(key)
        if result is not None:
            return True
        else:
            return False