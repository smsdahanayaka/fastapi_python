from fastapi import FastAPI
from app.routes import employee, user
from app.db.database import engine
from app.models.employee import Base as EmployeeBase
from app.models.user import Base as UserBase
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(debug=True)

# ✅ Create all tables
EmployeeBase.metadata.create_all(bind=engine)
UserBase.metadata.create_all(bind=engine)

# ✅ OR if you want a single line for all models:
# from app.db.database import Base
# from app.models import employee, user
# Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(employee.router, tags=["Employee"])
app.include_router(user.router, tags=["User"])


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)