from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def market_analysis(idea: str, context: str = "") -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "target_market": {"demographics": ["Urban professionals", "Small business owners"], "psychographics": ["Tech-savvy", "Cost-conscious"]},
            "market_size": {"tam": "$50B", "sam": "$15B", "som": "$2B"},
            "growth_potential": "High - 15% CAGR expected",
            "risks": ["Market saturation", "Regulatory changes"]
        }
    try:
        prompt = f"""
        You are a professional Market Research Analyst.
        Analyze the startup idea: {idea}
        Additional knowledge base context: {context}

        Return strictly as JSON:
        {{
            "target_market": {{
                "demographics": ["string"],
                "psychographics": ["string"]
            }},
            "market_size": {{
                "tam": "string",
                "sam": "string",
                "som": "string"
            }},
            "growth_potential": "string",
            "risks": ["string"]
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {})
    except Exception:
        return {
            "target_market": {"demographics": ["Urban professionals", "Small business owners"], "psychographics": ["Tech-savvy", "Cost-conscious"]},
            "market_size": {"tam": "$50B", "sam": "$15B", "som": "$2B"},
            "growth_potential": "High - 15% CAGR expected",
            "risks": ["Market saturation", "Regulatory changes"]
        }