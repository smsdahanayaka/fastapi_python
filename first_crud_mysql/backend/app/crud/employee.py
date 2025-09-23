
from sqlalchemy.orm import Session
from app.models.employee import Employee
from app.schemas.employee import EmployeeCreate

def get_employee(db:Session):
    return db.query(Employee).all()

def create_employee(db:Session,emp:EmployeeCreate):
    new_emp=Employee(**emp.dict())
    db.add(new_emp)
    db.commit()
    db.refresh(new_emp)
    return new_emp