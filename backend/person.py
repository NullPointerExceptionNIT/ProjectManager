class person:
    
    def __init__(self , username : str, email : str):
        self.username = username
        self.email = email
        self.key = "username"
        self.password : object 
        self.skills : list # witch data structure ????
        self.Work_history : list # witch data structure ????
        self.Different_roles : str #maneger or boss or user!!! 
        
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
        
    def Request_entry(self , username , email , Pass): #Data base??? 
        pass    