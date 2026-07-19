import os

for root, dirs, files in os.walk('frontend/src'):
    for f in files:
        if f.endswith('.jsx'):
            path = os.path.join(root, f)
            with open(path, 'r') as file:
                content = file.read()
            content = content.replace("from '../hooks/useApp'", "from '../context/AppContext'")
            with open(path, 'w') as file:
                file.write(content)
            print(f'Fixed: {path}')