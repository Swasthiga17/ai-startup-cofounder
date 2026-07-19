from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def competitor_analysis(idea: str) -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "competitors": [
                {"name": "Competitor A", "market_share": "25%", "strengths": ["Brand recognition"], "weaknesses": ["Legacy tech"], "competitive_advantage": "Low pricing"},
                {"name": "Competitor B", "market_share": "18%", "strengths": ["Low pricing"], "weaknesses": ["Poor UX"], "competitive_advantage": "Market presence"},
                {"name": "Competitor C", "market_share": "12%", "strengths": ["Innovation"], "weaknesses": ["Small scale"], "competitive_advantage": "Niche focus"}
            ]
        }
    try:
        prompt = f"""
        Analyze potential competitors for: {idea}

        Return strictly as JSON:
        {{
            "competitors": [
                {{
                    "name": "string",
                    "strengths": ["string"],
                    "weaknesses": ["string"],
                    "market_share": "string",
                    "competitive_advantage": "string"
                }}
            ]
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {"competitors": []})
    except Exception:
        return {
            "competitors": [
                {"name": "Competitor A", "market_share": "25%", "strengths": ["Brand recognition"], "weaknesses": ["Legacy tech"], "competitive_advantage": "Low pricing"},
                {"name": "Competitor B", "market_share": "18%", "strengths": ["Low pricing"], "weaknesses": ["Poor UX"], "competitive_advantage": "Market presence"},
                {"name": "Competitor C", "market_share": "12%", "strengths": ["Innovation"], "weaknesses": ["Small scale"], "competitive_advantage": "Niche focus"}
            ]
        }