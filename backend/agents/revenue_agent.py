from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def revenue_forecast(idea: str) -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "projections": [
                {"year": "Year 1", "revenue": 0.5, "users": 1000, "growth": 0},
                {"year": "Year 2", "revenue": 2.5, "users": 10000, "growth": 400},
                {"year": "Year 3", "revenue": 8.0, "users": 50000, "growth": 220},
                {"year": "Year 4", "revenue": 18.0, "users": 150000, "growth": 125},
                {"year": "Year 5", "revenue": 35.0, "users": 400000, "growth": 94}
            ],
            "revenue_streams": ["Subscription", "Enterprise", "API", "Consulting"]
        }
    try:
        prompt = f"""
        Create a 5-year revenue forecast for: {idea}

        Return strictly as JSON:
        {{
            "projections": [
                {{"year": "string", "revenue": number, "users": number, "growth": number}}
            ],
            "revenue_streams": ["string"]
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {})
    except Exception:
        return {
            "projections": [
                {"year": "Year 1", "revenue": 0.5, "users": 1000, "growth": 0},
                {"year": "Year 2", "revenue": 2.5, "users": 10000, "growth": 400},
                {"year": "Year 3", "revenue": 8.0, "users": 50000, "growth": 220},
                {"year": "Year 4", "revenue": 18.0, "users": 150000, "growth": 125},
                {"year": "Year 5", "revenue": 35.0, "users": 400000, "growth": 94}
            ],
            "revenue_streams": ["Subscription", "Enterprise", "API", "Consulting"]
        }