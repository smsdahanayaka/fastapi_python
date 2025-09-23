from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models, schemas
Base.metadata.create_all(bind=engine)

app=FastAPI(title="Student CRUD")

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()
        

# Create Students
@app.post("/student/",response_model=schemas.StudentResponse)
def create_student(student:schemas.StudentCreate,db:Session=Depends(get_db)):
    db_student=models.Student(name=student.name,age=student.age,grade=student.grade)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

# Get All Students
@app.get("/students/",response_model=list[schemas.StudentResponse])
def get_students(db:Session=Depends(get_db)):
    return db.query(models.Student).all()

# Get Single Student
@app.get("/students/{student_id}",response_model=schemas.StudentResponse)
def get_student(student_id:int,db:Session=Depends(get_db)):
    student=db.query(models.Student).filter(models.Student.id==student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student Not found")
    return student

# Update Student
@app.put("/students/{student_id}",response_model=schemas.StudentResponse)
def update_student(student_id:int,student:schemas.StudentCreate, db:Session=Depends(get_db)):
    db_student=db.query(models.Student).filter(models.Student.id==student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student Not found")
    
    db_student.name=student.name
    db_student.age=student.age
    db_student.grade=student.grade
    db.commit()
    db.refresh(db_student)
    return db_student


# Delete Student
@app.delete("/students/{student_id}")
def delete_student(student_id:int,db:Session=Depends(get_db)):
    db_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    db.delete(db_student)
    db.commit()
    return{"message":"Student delete successfully"}