from sqlalchemy import Column,Integer,String
from app.db.database import Base

class Employee(Base):
    __tablename__ = "employees"
    
    id= Column(Integer, primary_key=True, index=True)
    name=Column(String(255))
    email=Column(String(255))
    department=Column(String(255))
    
