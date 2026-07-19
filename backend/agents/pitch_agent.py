from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def pitch_generation(idea: str) -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "slides": [
                {"title": "Problem", "content": "The problem your startup solves"},
                {"title": "Solution", "content": "Your unique value proposition"},
                {"title": "Market", "content": "TAM/SAM/SOM analysis"},
                {"title": "Product", "content": "Key features and demo"},
                {"title": "Business Model", "content": "Revenue streams and pricing"},
                {"title": "Competition", "content": "Competitive landscape"},
                {"title": "Team", "content": "Core team members"},
                {"title": "Financials", "content": "Revenue projections"},
                {"title": "Ask", "content": "Funding requirements"},
                {"title": "Contact", "content": "Get in touch"}
            ]
        }
    try:
        prompt = f"""
        Create a pitch deck outline for: {idea}

        Return strictly as JSON:
        {{
            "slides": [
                {{"title": "string", "content": "string"}}
            ]
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {})
    except Exception:
        return {
            "slides": [
                {"title": "Problem", "content": "The problem your startup solves"},
                {"title": "Solution", "content": "Your unique value proposition"},
                {"title": "Market", "content": "TAM/SAM/SOM analysis"},
                {"title": "Product", "content": "Key features and demo"},
                {"title": "Business Model", "content": "Revenue streams and pricing"},
                {"title": "Competition", "content": "Competitive landscape"},
                {"title": "Team", "content": "Core team members"},
                {"title": "Financials", "content": "Revenue projections"},
                {"title": "Ask", "content": "Funding requirements"},
                {"title": "Contact", "content": "Get in touch"}
            ]
        }