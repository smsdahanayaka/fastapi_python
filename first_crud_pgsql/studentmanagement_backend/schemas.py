from pydantic import BaseModel

class StudentCreate(BaseModel):
    name:str
    age:int
    grade:str
    
class StudentResponse(StudentCreate):
    id:int
    
    class Config:
        # orm_mode=True
        from_attributes = True