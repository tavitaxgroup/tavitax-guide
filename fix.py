import os
files_to_edit = [
    r'src\App.tsx',
    r'src\pages\Home.tsx',
    r'src\pages\HRMockup.tsx',
    r'src\pages\LarkBasics.tsx',
    r'src\pages\MarketingGuide.tsx',
    r'src\pages\SalesMockup.tsx'
]
for file in files_to_edit:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace("import React from 'react';\n", "")
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed {file}')
