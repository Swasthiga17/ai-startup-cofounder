import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROMA_PATH = os.path.join(BASE_DIR, "chroma_db")


def get_retriever():
    try:
        from langchain_google_genai import GoogleGenerativeAIEmbeddings
        from langchain_chroma import Chroma

        embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
        if not os.path.exists(CHROMA_PATH) or not os.listdir(CHROMA_PATH):
            class EmptyRetriever:
                def invoke(self, query):
                    return []
            return EmptyRetriever()
        vector_db = Chroma(
            persist_directory=CHROMA_PATH,
            embedding_function=embeddings
        )
        return vector_db.as_retriever(search_kwargs={"k": 3})
    except Exception:
        
            def invoke(self, query):
                return []
        return EmptyRetriever()