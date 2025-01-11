class TreeNode:
    key : object
    value : object
    lc : object
    rc : object
    def __init__(self,key,value):
        self.key = key
        self.value = value
        self.lc = None
        self.rc = None

class BinaryTree:
    __root : TreeNode
    def __init__(self, root=None):
        self.__root = root
    def insert(self, value, key):
        newNode = TreeNode(key, value)
        if self.__root == None:
            self.__root = newNode
        else:
            root=self.__root
            while True:
                if key < root.key:
                    if root.lc == None:
                        root.lc = newNode
                        break
                    else:
                        root = root.lc
                else:
                    if root.rc == None:
                        root.rc = newNode
                        break
                    else:
                        root = root.rc

    def lmc(self):
        return BinaryTree.LMC(self.__root)
    @staticmethod
    def LMC(tree):
        if tree == None:
            return None
        if tree.lc:
            return BinaryTree.LMC(tree.lc)
        if tree.rc:
            return BinaryTree.LMC(tree.rc)
        return tree
    def find_node(self, key):
        return BinaryTree.Find_Node(self.__root, key)
    def find(self, key):
        node = BinaryTree.Find_Node(self.__root, key)
        if node:
            return node.value
        return None
    @staticmethod
    def Find_Node(tree:TreeNode,key):
        return_node = None
        if tree == None:
            return None
        if tree.key == key :
            return tree
        if tree.lc:
            if tree.lc.key == key:
                return tree.lc
            else:
                return_node = BinaryTree.Find_Node(tree.lc,key)
                if return_node:
                    return return_node
        if tree.rc:
            if tree.rc.key == key:
                return tree.rc
            else:
                return_node = BinaryTree.Find_Node(tree.rc,key)
                if return_node:
                    return return_node
        return None
    
    def get_size(self):
        return BinaryTree.Get_Size(self.__root)
    @staticmethod
    def Get_Size(tree):
        if tree == None:
            return 0
        return 1 + BinaryTree.Get_Size(tree.lc) + BinaryTree.Get_Size(tree.rc)
   
    def get_height(self):
        return BinaryTreen.Get_Height(self.__root)
    @staticmethod
    def Get_Height(tree):
        if tree == None:
            return 0
        return 1 + max(BinaryTree.Get_Height(tree.lc) , BinaryTree.Get_Height(tree.rc))
    
    def parent(self,node):
        if node == self.__root:
            return None
        return BinaryTree.Parent(self.__root, node)
    @staticmethod
    def Parent(tree,node):
        if tree == None:
            return None
        returnval = None
        if tree.lc:
            if tree.lc == node:
                return tree
            returnval = BinaryTree.Parent(tree.lc, node)
            if returnval:
                return returnval
        if tree.rc:
            if tree.rc == node:
                return tree
            returnval = BinaryTree.Parent(tree.rc, node)
            if returnval:
                return returnval
        return None
    
    def delete(self, node):
        parent_node = self.parent(node)
        if parent_node == None:
            self.__root = None
            return
        child = None
        if parent_node.lc == node:
            child = parent_node.lc
        else:
            child = parent_node.rc
        if node.lc or node.rc:
            if node.rc:
                child= node.rc
            else:
                child= node.lc
        if node.lc and node.rc:
            BinaryTree.lmc(parent_node).lc=node.lc
    
    def print_preorder(self):
        BinaryTree.Print_PreOrder(self.__root)
    @staticmethod
    def Print_PreOrder(tree):
        if tree == None:
            return
        print(tree.key, end=" ")
        BinaryTree.Print_PreOrder(tree.lc)
        BinaryTree.Print_PreOrder(tree.rc)
    
    def print_postorder(self):
        BinaryTree.Print_PostOrder(self.__root)
    @staticmethod
    def Print_PostOrder(tree):
        if tree == None:
            return
        BinaryTree.Print_PostOrder(tree.lc)
        BinaryTree.Print_PostOrder(tree.rc)
        print(tree.key, end=" ")
    
    def print_inorder(self):
        BinaryTree.Print_InOrder(self.__root)
    @staticmethod
    def Print_InOrder(tree):
        if tree == None:
            return
        BinaryTree.Print_InOrder(tree.lc)
        print(tree.key, end=" ")
        BinaryTree.Print_InOrder(tree.rc)
    
    def inorder(self):
        inorder_list : list = []
        BinaryTree.InOrder(self.__root ,inorder_list)
        return inorder_list
    @staticmethod
    def InOrder(tree : TreeNode , lis : list):
        if tree == None:
            return
        BinaryTree.InOrder(tree.lc , lis)
        lis.append(tree.value)
        BinaryTree.InOrder(tree.rc , lis)

    @staticmethod
    def create_tree(inorder: list, postorder: list,first_time=True):
        if not inorder or not postorder:
            return None
        root_value = postorder[-1]
        root = TreeNode(root_value)
        root_index = inorder.index(root_value)
        right_subtree_length = len(inorder) - root_index - 1

        left_postorder = postorder[:len(postorder) - right_subtree_length - 1]
        right_postorder = postorder[len(postorder) - right_subtree_length - 1:-1]

        root.rc = BinaryTree.create_tree(inorder[root_index + 1:], right_postorder,False)
        root.lc = BinaryTree.create_tree(inorder[:root_index], left_postorder,False)

        if first_time:
            return BinaryTree(root)
        else:
            return root




if __name__ == '__main__':
    a= BinaryTree ()
    a.insert("asd","asd")
    print(a.find("asd"))