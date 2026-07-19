import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

try:
    import google.generativeai as genai
    from config import GEMINI_API_KEY
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel("gemini-2.5-pro"
                                  )
    GEMINI_AVAILABLE = True
except Exception as e:
    print(f"Warning: Gemini AI not available: {e}")
    GEMINI_AVAILABLE = False
    model = None
