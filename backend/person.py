class person:
    
    def __init__(self , name : str, email : str):
        self.id : int = 1
        self.name = name
        self.email = email
        self.password : object 
        self.skills : list # witch data structure ????
        self.Work_history : list # witch data structure ????
        self.Different_roles : str
        
        
    # def updateName(self , new_name):
    #     self.name = new_name
        
    # def updateEmail(self , new_email):
    #     self.email = new_email
        
    # def updatePassword(self , new_password):
    #     self.password = new_password
    
    # def setRole(self , new_role):
    #     self.Different_roles = new_role
        
    def addSkill(self , new_skill):
        self.skills.append(new_skill)
        
    def addWorkHistory(self , new_work):
        self.Work_history.append(new_work)    
        
    def Request_entry(self , name , email , Pass): #Data base??? 
        pass    