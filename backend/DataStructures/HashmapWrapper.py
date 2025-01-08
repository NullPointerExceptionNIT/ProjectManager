from Hashmap import Hashmap

class HashmapW:
    def __init__(self , number):
        self.Hashmap: Hashmap = Hashmap(number)
        
    def add(self, item):
        self.Hashmap.Add(item,item.__dict__[item.__dict__["key"]])
        
    def delete(self , item):
        self.Hashmap.delete(item.__dict__[item.__dict__["key"]])
        
    def update(self , item):
        self.Hashmap.update(item , item.__dict__[item.__dict__["key"]])
        
    def get(self , key):
        self.Hashmap.get(key)
        
    def exist(self , item):
        return self.Hashmap.has(item.__dict__[item.__dict__["key"]])    