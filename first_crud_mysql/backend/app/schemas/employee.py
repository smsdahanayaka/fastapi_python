from pydantic import BaseModel

class EmployeeBase(BaseModel):
    name: str
    email :str
    department: str | None=None

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeOut(EmployeeBase):
    id: int
    
    class Config:
        orm_mode=True