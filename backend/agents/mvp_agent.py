from agents.gemini_client import model, GEMINI_AVAILABLE
from agents.utils import safe_json_parse

def mvp_plan(idea: str) -> dict:
    if not GEMINI_AVAILABLE:
        return {
            "phases": [
                {"phase": "Phase 1", "title": "Discovery & Planning", "duration": "4 weeks", "tasks": ["Market research", "User interviews", "Technical architecture"]},
                {"phase": "Phase 2", "title": "MVP Development", "duration": "12 weeks", "tasks": ["Core features", "UI/UX design", "Backend setup"]},
                {"phase": "Phase 3", "title": "Beta Launch", "duration": "8 weeks", "tasks": ["User testing", "Bug fixes", "Performance optimization"]}
            ]
        }
    try:
        prompt = f"""
        Create an MVP roadmap for: {idea}

        Return strictly as JSON:
        {{
            "phases": [
                {{
                    "phase": "string",
                    "title": "string",
                    "duration": "string",
                    "tasks": ["string"]
                }}
            ]
        }}
        """
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return safe_json_parse(response.text, {})
    except Exception:
        return {
            "phases": [
                {"phase": "Phase 1", "title": "Discovery & Planning", "duration": "4 weeks", "tasks": ["Market research", "User interviews", "Technical architecture"]},
                {"phase": "Phase 2", "title": "MVP Development", "duration": "12 weeks", "tasks": ["Core features", "UI/UX design", "Backend setup"]},
                {"phase": "Phase 3", "title": "Beta Launch", "duration": "8 weeks", "tasks": ["User testing", "Bug fixes", "Performance optimization"]}
            ]
        }