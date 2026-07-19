from typing import TypedDict, Dict, List
from langgraph.graph import StateGraph, START, END

from agents.market_agent import market_analysis
from agents.competitor_agent import competitor_analysis
from agents.swot_agent import swot_analysis
from agents.business_model_agent import business_model_analysis
from agents.mvp_agent import mvp_plan
from agents.revenue_agent import revenue_forecast
from agents.score_agent import startup_scoring
from agents.pitch_agent import pitch_generation


class StartupState(TypedDict):
    idea: str
    market: Dict
    competitors: Dict
    swot: Dict
    business_model: Dict
    mvp: Dict
    revenue: Dict
    score: Dict
    pitch: Dict


def market_node(state: dict) -> dict:
    try:
        from services.rag_service import get_retriever
        retriever = get_retriever()
        docs = retriever.invoke(state["idea"])
        context = "\n\n".join([doc.page_content for doc in docs])
    except Exception:
        context = ""
    return {"market": market_analysis(state["idea"], context=context)}


def competitor_node(state: dict) -> dict:
    return {"competitors": competitor_analysis(state["idea"])}


def swot_node(state: dict) -> dict:
    return {"swot": swot_analysis(state["idea"])}


def business_model_node(state: dict) -> dict:
    return {"business_model": business_model_analysis(state["idea"])}


def mvp_node(state: dict) -> dict:
    return {"mvp": mvp_plan(state["idea"])}


def revenue_node(state: dict) -> dict:
    return {"revenue": revenue_forecast(state["idea"])}


def score_node(state: dict) -> dict:
    return {"score": startup_scoring(state["idea"])}


def pitch_node(state: dict) -> dict:
    return {"pitch": pitch_generation(state["idea"])}


builder = StateGraph(StartupState)
builder.add_node("market", market_node)
builder.add_node("competitor", competitor_node)
builder.add_node("swot", swot_node)
builder.add_node("business_model", business_model_node)
builder.add_node("mvp", mvp_node)
builder.add_node("revenue", revenue_node)
builder.add_node("score", score_node)
builder.add_node("pitch", pitch_node)

builder.add_edge(START, "market")
builder.add_edge("market", "competitor")
builder.add_edge("competitor", "swot")
builder.add_edge("swot", "business_model")
builder.add_edge("business_model", "mvp")
builder.add_edge("mvp", "revenue")
builder.add_edge("revenue", "score")
builder.add_edge("score", "pitch")
builder.add_edge("pitch", END)

startup_graph = builder.compile()
