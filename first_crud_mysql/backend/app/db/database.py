from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL ="mysql+mysqlconnector://root:@localhost:3306/employee"

engine=create_engine(DATABASE_URL)
session=sessionmaker(autoflush=False,autocommit=False,bind=engine)
Base=declarative_base()
