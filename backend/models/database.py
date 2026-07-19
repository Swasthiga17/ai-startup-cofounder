from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    startup_ideas = relationship("StartupIdea", back_populates="owner")

class StartupIdea(Base):
    __tablename__ = "startup_ideas"

    id = Column(Integer, primary_key=True, index=True)
    idea = Column(Text, nullable=False)
    owner_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime, default=datetime.utcnow)

    owner = relationship("User", back_populates="startup_ideas")
    reports = relationship("Report", back_populates="startup")

class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    startup_id = Column(Integer, ForeignKey("startup_ideas.id"))
    report_type = Column(String, nullable=False)
    file_path = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    startup = relationship("StartupIdea", back_populates="reports")
