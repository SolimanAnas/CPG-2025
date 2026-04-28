import os
import sys

# ==========================================
# Configuration
# ==========================================
TEMPLATE_PATH = 'pepp.html'  # Using pepp.html as the base template
OUTPUT_DIR = '.'             # Output directory for generated HTML files
SRC_DIR = 'src'              # Base directory for the JSON files

COURSES = [
    { 'id': 'itls', 'shortTitle': 'ITLS', 'title': 'International Trauma Life Support', 'link': 'itls.html', 'available': True, 'icon': '🚑' },
    { 'id': 'empact', 'shortTitle': 'EMPACT', 'title': 'Emergency Medical Patients: Assessment, Care & Transport', 'link': 'empact.html', 'available': True, 'icon': '⚕️' },
    { 'id': 'bls', 'shortTitle': 'BLS', 'title': 'Basic Life Support', 'link': 'bls.html', 'available': False, 'icon': '🫀' },
    { 'id': 'acls', 'shortTitle': 'ACLS', 'title': 'Advanced Cardiovascular Life Support', 'link': 'acls.html', 'available': False, 'icon': '🫀' },
    { 'id': 'bdls', 'shortTitle': 'BDLS', 'title': 'Basic Disaster Life Support', 'link': 'bdls.html', 'available': False, 'icon': '🌪️' },
    { 'id': 'pepp', 'shortTitle': 'PEPP', 'title': 'Pediatric Education for Prehospital Professionals', 'link': 'pepp.html', 'available': True, 'icon': '🧸' },
    { 'id': 'ppet', 'shortTitle': 'PPET', 'title': 'Prehospital Pediatric Emergency Transport', 'link': 'ppet.html', 'available': False, 'icon': '🚁' },
    { 'id': 'pals', 'shortTitle': 'PALS', 'title': 'Pediatric Advanced Life Support', 'link': 'pals.html', 'available': False, 'icon': '👶' },
    { 'id': 'ecg', 'shortTitle': 'ECG', 'title': 'ECG Interpretation', 'link': 'ecg.html', 'available': False, 'icon': '📉' },
    { 'id': 'medical', 'shortTitle': 'Medical Emergencies', 'title': 'Medical Emergencies Review', 'link': 'medical.html', 'available': False, 'icon': '💊' }
]

def create_src_folders(courses, base_dir):
    """Creates the necessary src/COURSE folders."""
    for course in courses:
        if course['available']:
            folder_path = os.path.join(base_dir, SRC_DIR, course['shortTitle'])
            os.makedirs(folder_path, exist_ok=True)
            print(f"   + Ensured folder exists: {folder_path}")

def generate_course_page(template, course):
    """Replaces placeholders in the template with course-specific data."""
    # 1. Global text replacements (Based on pepp.html being the template)
    html = template.replace('PEPP', course['shortTitle'])
    html = html.replace('pepp', course['id'])
    html = html.replace('Pediatric Education for Prehospital Professionals', course['title'])
    html = html.replace('🧸', course['icon'])

    # 2. Update the JSON file paths (Form A -> 1.json, Form B -> 2.json, etc.)
    html = html.replace(f"src/{course['shortTitle']}/exam_a.json", f"src/{course['shortTitle']}/1.json")
    html = html.replace(f"{course['shortTitle']} Exam — Form A", f"{course['shortTitle']} Exam — Form 1")
    
    html = html.replace(f"src/{course['shortTitle']}/exam_b.json", f"src/{course['shortTitle']}/2.json")
    html = html.replace(f"{course['shortTitle']} Exam — Form B", f"{course['shortTitle']} Exam — Form 2")
    
    html = html.replace(f"src/{course['shortTitle']}/exam_c.json", f"src/{course['shortTitle']}/3.json")
    html = html.replace(f"{course['shortTitle']} Exam — Form C", f"{course['shortTitle']} Exam — Form 3")

    html = html.replace(f"src/{course['shortTitle']}/exam_d.json", f"src/{course['shortTitle']}/4.json")
    html = html.replace(f"{course['shortTitle']} Exam — Form D", f"{course['shortTitle']} Exam — Form 4")

    return html

def main():
    print("🚀 Course Page Generator")
    print("=" * 50)

    # Load template
    if not os.path.exists(TEMPLATE_PATH):
        print(f"❌ Template not found: {TEMPLATE_PATH}")
        print(f"Please ensure {TEMPLATE_PATH} exists in the current directory.")
        sys.exit()  # Safely exits the script without throwing a syntax error

    print(f"📄 Loading template: {TEMPLATE_PATH}")
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        template = f.read()

    # Generate pages for each course
    generated = 0
    for course in COURSES:
        # Skip the template file itself or unavailable courses
        if course['id'] == 'pepp' or not course['available']:
            continue

        output_path = os.path.join(OUTPUT_DIR, course['link'])
        
        print(f"\n🔄 Generating: {course['title']}")
        print(f"   → Output: {course['link']}")
        print(f"   → Available: {'Yes' if course['available'] else 'No (placeholder)'}")
        
        try:
            content = generate_course_page(template, course)
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"   ✓ Generated: {output_path}")
            generated += 1
        except Exception as e:
            print(f"   ❌ Error: {e}")

    # Create src folders
    print(f"\n📁 Creating src folders...")
    create_src_folders(COURSES, OUTPUT_DIR)

    # Summary
    print(f"\n" + "=" * 50)
    print(f"✅ Generation complete!")
    print(f"   • Generated: {generated} new course pages")
    print(f"   • Template: {TEMPLATE_PATH}")
    print(f"   • Output directory: {OUTPUT_DIR}")
    print(f"\n📝 Next steps:")
    print(f"   1. Place JSON exam files (1.json, 2.json) in each course's src/ folder")
    print(f"   2. Update courses.html to link to new pages")
    print(f"   3. Test each generated page in a browser")
    print(f"\n💡 Tip: Set 'available: True' in COURSES config when ready to publish")

# This tells Python to execute the main() function when you run the file
if __name__ == "__main__":
    main()