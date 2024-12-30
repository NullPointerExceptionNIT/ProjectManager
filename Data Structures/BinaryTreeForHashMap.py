class Node_Tree:
    LC : object = None
    RC : object = None
    Key : object = None
    Data : object = None

class BinaryTree:
    def __init__(self):
        self.root = Node_Tree() 
    
    def insert(self , value, Key_index , node : Node_Tree = None):
        if self.root.Data == None:
            self.root.Data = value
            self.root.Key = Key_index
            return
        if node == None:
            node = self.root
        if Key_index == node.Key:
            node.Key = Key_index
            node.Data = value
            return
        elif Key_index < node.Key:
            if node.LC == None:
                new_node = Node_Tree()
                new_node.Key = Key_index
                new_node.Data = value
                node.LC = new_node
            else:
                self.insert(value , Key_index ,  node.LC)
        else:
            if node.RC == None:
                new_node = Node_Tree()
                new_node.Key = Key_index
                new_node.Data = value
                node.RC = new_node
            else:
                self.insert(value , Key_index , node.RC)
        
        return node
    
    def search_Project(self , key ,node : Node_Tree = None):
        if node is None:
            node = self.root
        if node is None:
            return None
        if key == node.Key:
            return node.Data
        elif key < node.Key and node.LC:
            return self.search_Project(key, node.LC)
        elif key > node.Key and node.RC:
            return self.search_Project(key, node.RC)
        else:
            return None 
        
    def update(self , value, Key_index , node : Node_Tree = None):
        if self.root.Data == None:
            self.root.Data = value
            return
        if node == None:
            node = self.root
        if Key_index == node.Key:
            node.Data = value
            return
        self.insert(value , Key_index ,  node.LC)
        self.insert(value , Key_index , node.RC)
        return node
    
    def delete(self , key ,node : Node_Tree = None , parent : Node_Tree = None ):
        if node == None:
            node = self.root
        if node == None:
            return None  
        if key < node.Key:
            self.delete(key, node.LC, node)
        elif key > node.Key:
            self.delete(key, node.RC, node)
        else:
            if node.LC == node.RC != None: 
                temp = self.find_min(node.RC)
                node.Key, node.Data = temp.Key, temp.Data
                self.delete(temp.Key, node.RC, node)
            elif parent != None:
                if node == parent.LC:
                    parent.LC = node.LC or node.RC
                elif node == parent.RC:
                    parent.RC = node.LC or node.RC
            else:
                self.root = node.LC or node.RC
    def find_min(self, node :Node_Tree):
        while node.LC:
            node = node.LC
        return node
                
    def inorder(self, node=None, result=None):
        if result is None:
            result = []
        if node is None:
            node = self.root
        if node.LC:
            self.inorder(node.LC, result)
        result.append(node.Data)
        if node.RC:
            self.inorder(node.RC, result)
        return result
    
    def print_tree_by_keys(self, node=None, result=None):
        if result is None:
            result = []
        if node is None:
            node = self.root
        if node.LC:
            self.print_tree_by_keys(node.LC, result)
        result.append((node.Key, node.Data)) 
        if node.RC:
            self.print_tree_by_keys(node.RC, result)
        return result

    