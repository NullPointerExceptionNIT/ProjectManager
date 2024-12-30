from BinaryTreeForHashMap import *
class Hashmap:
    def __init__(self , size): #size = مبنای کار 
        self.size = size
        self.array = [None] * size
        for i in range(size):
            self.array[i] = BinaryTree()
            
    def check(self , number):
        return number % self.size
    
    def Add_Project(self , project , key):
        new_key = self.check(key)
        if project is None:
            print("project is empty")
        else:
            self.array[new_key].insert(project , key)
        
    def get_Project(self , key):
        new_key = self.check(key)
        return self.array[new_key].search_Project(key)
    
    def delete_Project(self , key):
        new_key = self.check(key)
        return self.array[new_key].delete(key)
    
    def update_Project(self ,project ,key):
        new_key = self.check(key)
        return self.array[new_key].update(project ,key)
    
    def has_Project(self, key):
        new_key = self.check(key)
        result = self.array[new_key].search_Project(key)
        if result is not None:
            return True
        else:
            return False