from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def swot_analysis(idea: str) -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "strengths": ["Strong technical team", "Innovative product", "Low operational costs"],
            "weaknesses": ["Limited brand recognition", "Small customer base", "Dependency on key personnel"],
            "opportunities": ["Growing market demand", "Technology advancement", "Partnership potential"],
            "threats": ["New market entrants", "Economic uncertainty", "Regulatory changes"]
        }
    try:
        prompt = f"""
        Perform SWOT analysis for: {idea}

        Return strictly as JSON:
        {{
            "strengths": ["string"],
            "weaknesses": ["string"],
            "opportunities": ["string"],
            "threats": ["string"]
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {})
    except Exception:
        return {
            "strengths": ["Strong technical team", "Innovative product", "Low operational costs"],
            "weaknesses": ["Limited brand recognition", "Small customer base", "Dependency on key personnel"],
            "opportunities": ["Growing market demand", "Technology advancement", "Partnership potential"],
            "threats": ["New market entrants", "Economic uncertainty", "Regulatory changes"]
        }