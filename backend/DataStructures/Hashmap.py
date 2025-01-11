from DataStructures.BinaryTree import BinaryTree
class Hashmap:
    def __init__(self , size): #size = مبنای کار 
        self.size = size
        self.array = [None] * size
        for i in range(size):
            self.array[i] = BinaryTree()
                    
    def checker(self , number):
        return number.__hash__() % self.size
    
    def Add(self , value , key):
        new_key = self.checker(key)
        if value is None:
            raise Exception("value is empty")
        else:
            self.array[new_key].insert(value , key)
        
    def get(self , key):
        new_key = self.checker(key)
        return self.array[new_key].find(key)
    
    def delete(self , key):
        new_key = self.checker(key)
        return self.array[new_key].delete(key)
    
    def update(self ,value ,key):
        new_key = self.checker(key)
        return self.array[new_key].update(value ,key)
    
    def has(self, key):
        new_key = self.checker(key)
        result = self.array[new_key].find(key)
        if result is not None:
            return True
        else:
            return False
        
    # def show_all(self):
    #     all_item :list
    #     for i in range(self.size):
    #         a = self.array[i]
    #         a.