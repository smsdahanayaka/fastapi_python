from fastapi import APIRouter, Depends, HTTPException
from app.db.database import session
from app.crud import user as crud 
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserOut,UserLogin
from app.auth.auth_bearer import JWTBearer
from app.auth.auth_handler import create_access_token, verify_token

router =APIRouter()
def get_db():
    db=session()
    try:
        yield db
    finally:
        db.close()
        

@router.post("/register",response_model=UserOut)
def register(user :UserCreate,db: Session=Depends(get_db)):
   existing= crud.get_user_by_username(db,user.username)
   if existing:
       raise HTTPException(status_code=401, detail="Username Allready Taken")
   return crud.create_user(db,user)


@router.post("/login")
def login(credentials: UserLogin, db: Session = Depends(get_db)):
    user = crud.authenticate_user(db, credentials.username, credentials.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": user.username})
    return {"access_token": token, "token_type": "bearer"}

@router.get("/me", response_model=UserOut, dependencies=[Depends(JWTBearer())])
def get_current_user(token: str = Depends(JWTBearer()), db: Session = Depends(get_db)):
    payload = verify_token(token)
    username = payload.get("sub")
    user = crud.get_user_by_username(db, username)
    return user