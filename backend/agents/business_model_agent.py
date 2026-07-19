from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def business_model_analysis(idea: str) -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "revenue_streams": ["Subscription", "Enterprise", "API", "Consulting"],
            "cost_structure": ["Development", "Marketing", "Operations", "Support"],
            "key_metrics": ["MRR", "CAC", "LTV", "Churn Rate"]
        }
    try:
        prompt = f"""
        Create a business model for: {idea}

        Return strictly as JSON:
        {{
            "revenue_streams": ["string"],
            "cost_structure": ["string"],
            "key_metrics": ["string"]
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {})
    except Exception:
        return {
            "revenue_streams": ["Subscription", "Enterprise", "API", "Consulting"],
            "cost_structure": ["Development", "Marketing", "Operations", "Support"],
            "key_metrics": ["MRR", "CAC", "LTV", "Churn Rate"]
        }