from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from mongoengine import connect
from dotenv import load_dotenv
import os

# from app.routes.url_prediction_routes import router as url_router
# from app.routes.image_prediction_routes import router as image_router
from app.routes.user_routes import router as user_router
from app.routes.dashboard_routes import router as dashboard_router


load_dotenv()
MONGO_URI = os.getenv("MONGODB_URI")

connect(host=MONGO_URI)

app = FastAPI(title="Phishing Detection Server")

app.add_middleware(SessionMiddleware, secret_key="notasecret")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(url_router, prefix="/api")
# app.include_router(image_router, prefix="/api")
app.include_router(user_router, prefix="/api")
app.include_router(dashboard_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Phishing Detection Server is up. POST to /api"}
