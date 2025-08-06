from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate
from passlib.hash import bcrypt


def get_user_by_username(db: Session,username:str):
    return db.query(User).filter(User.username==username).first()

def create_user(db:Session , user:UserCreate):
    hashed_pw = bcrypt.hash(user.password)
    new_user=User(username=user.username,email=user.email,password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def authenticate_user(db:Session,username:str,password:str):
    user = get_user_by_username(db, username)
    if not user or not bcrypt.verify(password, user.password):
        return None
    return user    