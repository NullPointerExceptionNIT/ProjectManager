class Tree:
    LC : object = None
    RC : object = None
    Data : object = None

class BinaryTree:
    def __init__(self):
        self.root = Tree() 
    
    def insert(self , value , node : Tree = None):
        if self.root.Data == None:
            self.root.Data = value
            return
        if node == None:
            node = self.root
        if value < node.Data:
            if node.LC == None:
                new_node = Tree()
                new_node.Data = value
                node.LC = new_node
            else:
                self.insert(value, node.LC)
        else:
            if node.RC == None:
                new_node = Tree()
                new_node.Data = value
                node.RC = new_node
            else:
                self.insert(value, node.RC)
        
        return node
    
    def sizeOfNode(self):
            return BinaryTree.SizeOfNode(self.root)
    @staticmethod
    def SizeOfNode(node : Tree):
        if node == None:
            return 0
        return 1 + BinaryTree.SizeOfNode(node.LC) + BinaryTree.SizeOfNode(node.RC)    
        
    def find_Node(self , node : Tree, value ):
        if self.root == None:
            return  
        if node == None:
            node = self.root 
        if node.LC != None: 
            self.find_Node(node.LC , value)
        if node.Data == value:
            return node
        if node.RC != None:  
            self.find_Node(node.RC , value)
        
    def delete(self  , node : Tree , value):
        if self.root == None:
            return  
        if node == None:
            node = self.root 
        if node.LC != None: 
            self.delete(node.LC , value )
        if node.Data == value:
            node = node.RC
        if node.RC != None:  
            self.delete(node.RC , value )
    
    def get_height(self):
            return BinaryTree.get_height(self.root)
    @staticmethod
    def get_height(node : Tree):
        if node == None:
            return 0
        return 1 + max(BinaryTree.get_height(node.LC) + BinaryTree.get_height(node.RC))
    
    def LMC(self, node=None):
        if self.root == None:
            return  
        if node == None:
            node = self.root  
        if node.LC != None: 
            self.LMC(node.LC)
        if (node.LC == None and node.RC == None):
            return node 
        if node.RC != None:  
            self.LMC(node.RC)
        
    def parent(self , node : Tree):
        if(self.root == None):
            return "Errorroror"
        self.find_Node(self.root.LC , node)
        if (self.root == node):
            return self.root
        self.find_Node(self.root.RC , node)
        
    def print_preorder(self, node=None):
        
        if self.root is None:
            print("Tree is empty")
            return

        if node == None:
            node = self.root
            # l : list
        # list.append(node.Data)
        print(node.Data, end=" ")
        if node.LC != None:
            self.print_preorder(node.LC)
        if node.RC != None:
            self.print_preorder(node.RC)
        # return l    

    def print_inorder(self, node=None):
        if self.root == None:
            return  
        if node == None:
            node = self.root
            # l : list  
        if node.LC != None: 
            self.print_inorder(node.LC)
        # list.append(node.Data)    
        print(node.Data, end=" ")  
        if node.RC != None:  
            self.print_inorder(node.RC)
        # return l    

    def print_postorder(self, node=None):
        if self.root == None:
            return  
        if node == None:
            node = self.root
            # l : list  
        if node.LC != None:  
            self.print_postorder(node.LC)
        if node.RC != None:  
            self.print_postorder(node.RC)
        # list.append(node.Data)
        print(node.Data, end=" ")
        # return l
    @staticmethod    
    def create_tree(inorder : list, postorder : list):
        if not inorder or not postorder:
            return None  
        
        root_value = postorder.pop() 
        root = Tree()
        root.Data = root_value
        root_index = inorder.index(root_value)
        
        
        root.RC = BinaryTree.create_tree(inorder[root_index + 1:], postorder)
        root.LC = BinaryTree.create_tree(inorder[:root_index], postorder)

        return root