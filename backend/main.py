from Project.ProjectManager import ProjectManager,instances
import dill as pickle

obj = ProjectManager()
try:
    with open("savefile", "rb") as f:
        asd=pickle.load(f)
        instances[obj.__class__]=asd
except FileNotFoundError:
    pass


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routers import user, auth, project

app = FastAPI(debug=True)

@app.on_event("shutdown")
async def shutdown_event():
    with open("savefile", "wb") as f:
        bsss=instances[obj.__class__]
        pickle.dump(bsss, f)


origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router, prefix="/users", tags=["Users"])
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(project.router, prefix="/projects", tags=["Projects"])

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
