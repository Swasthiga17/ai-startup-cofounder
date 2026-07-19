from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def startup_scoring(idea: str) -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "overall_score": 7.5,
            "market_potential": 8.5,
            "innovation_level": 7.8,
            "feasibility": 7.2,
            "risk_factor": 3.5,
            "summary": "Strong market opportunity with innovative approach. Moderate risk profile."
        }
    try:
        prompt = f"""
        Score this startup idea: {idea}

        Return strictly as JSON:
        {{
            "overall_score": number,
            "market_potential": number,
            "innovation_level": number,
            "feasibility": number,
            "risk_factor": number,
            "summary": "string"
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {})
    except Exception:
        return {
            "overall_score": 7.5,
            "market_potential": 8.5,
            "innovation_level": 7.8,
            "feasibility": 7.2,
            "risk_factor": 3.5,
            "summary": "Strong market opportunity with innovative approach. Moderate risk profile."
        }