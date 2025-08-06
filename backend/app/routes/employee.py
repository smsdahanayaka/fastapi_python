from fastapi import APIRouter, Depends
from app.db.database import session
from sqlalchemy.orm import Session
from app.schemas.employee import EmployeeOut,EmployeeCreate
from app.crud import employee as crud
from app.auth.auth_bearer import JWTBearer

router = APIRouter()

def get_db():
    db=session()
    try:
        yield db
    finally:
        db.close()
        

@router.get("/employee", response_model=list[EmployeeOut], dependencies=[Depends(JWTBearer())])
def list_employee(db:Session=Depends(get_db)):
    return crud.get_employee(db)

@router.post("/employee",response_model=EmployeeOut)
def create_employee(employee:EmployeeCreate, db:Session=Depends(get_db), dependencies=[Depends(JWTBearer())]):
    return crud.create_employee(db,employee)    