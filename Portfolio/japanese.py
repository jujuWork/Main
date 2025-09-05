# japanese_pdf.py
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont

# 1️⃣ Register Japanese font
pdfmetrics.registerFont(UnicodeCIDFont('HeiseiMin-W3'))  # 明朝体
# pdfmetrics.registerFont(UnicodeCIDFont('HeiseiKakuGo-W5'))  # ゴシック体

# 2️⃣ Set styles
styles = getSampleStyleSheet()
styles['Normal'].fontName = 'HeiseiMin-W3'
styles['Title'].fontName = 'HeiseiMin-W3'
styles['Heading3'].fontName = 'HeiseiMin-W3'

# 3️⃣ Create PDF
doc = SimpleDocTemplate("japanese_example.pdf", pagesize=A4)
story = []

# 4️⃣ Add content (you can duplicate for multiple pages)
for i in range(1, 6):  # Example: 5 pages
    story.append(Paragraph(f"ページ {i}", styles['Title']))  # Page number
    story.append(Spacer(1, 20))
    story.append(Paragraph("こんにちは、世界！これは日本語のテキストです。", styles['Normal']))
    story.append(Spacer(1, 500))  # Add space to push to next page

# 5️⃣ Build PDF
doc.build(story)

print("PDF generated successfully as 'japanese_example.pdf'")