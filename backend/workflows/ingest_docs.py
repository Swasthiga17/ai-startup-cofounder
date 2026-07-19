import os
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_chroma import Chroma

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_PATH = os.path.join(BASE_DIR, "startup_docs")
CHROMA_PATH = os.path.join(BASE_DIR, "chroma_db")

def run_ingestion():
    if not os.path.exists(DOCS_PATH):
        os.makedirs(DOCS_PATH)
        print(f"Created {DOCS_PATH}. Place PDFs there and re-run.")
        return

    print(f"Loading docs from {DOCS_PATH}...")
    loader = DirectoryLoader(DOCS_PATH, glob="*.pdf", loader_cls=PyPDFLoader)
    documents = loader.load()
    print(f"Splitting {len(documents)} pages...")

    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks = splitter.split_documents(documents)

    print(f"Creating embeddings in {CHROMA_PATH}...")
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    Chroma.from_documents(chunks, embeddings, persist_directory=CHROMA_PATH)
    print("Ingestion complete.")

if __name__ == "__main__":
    run_ingestion()