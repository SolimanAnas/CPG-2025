import csv
import json
import os

def generate_js():
    data = {
        "id": "c2",
        "title": "Airway Management",
        "shortTitle": "2.0 Airway & Breathing",
        "sections": []
    }

    def get_section(section_code, title):
        for sec in data["sections"]:
            if sec["id"] == section_code:
                return sec

        new_section = {
            "id": section_code,
            "shortTitle": title,
            "summary": "",
            "quiz": [],
            "flashcards": [],
            "critical": []
        }

        data["sections"].append(new_section)
        return new_section

    try:
        with open("content.csv", encoding="utf-8") as file:
            reader = csv.DictReader(file)

            for row in reader:
                section_number = row["Section"].strip()
                section_index = section_number.split(".")[-1]
                section_id = f"c2s{section_index}"
                section_title = f"{section_number} {row['Topic']}"

                section = get_section(section_id, section_title)

                content_type = row["Type"].strip()

                # ======================
                # QUIZ
                # ======================
                if content_type == "Quiz":
                    options = [
                        row["Option1"],
                        row["Option2"],
                        row["Option3"],
                        row["Option4"]
                    ]

                    section["quiz"].append({
                        "q": row["Question"],
                        "options": options,
                        "correct": int(row["CorrectIndex"]),
                        "explanation": row["Explanation"]
                    })

                # ======================
                # FLASHCARD
                # ======================
                elif content_type == "Flashcard":
                    section["flashcards"].append({
                        "category": row["Topic"],
                        "question": row["Question"],
                        "answer": row["Explanation"]
                    })

                # ======================
                # CRITICAL SCENARIO
                # ======================
                elif content_type == "Critical":
                    options = [
                        {"t": row["Option1"], "f": "Incorrect."},
                        {"t": row["Option2"], "f": "Incorrect."},
                        {"t": row["Option3"], "f": "Incorrect."},
                        {"t": row["Option4"], "f": "Incorrect."}
                    ]

                    correct_index = int(row["CorrectIndex"])
                    options[correct_index]["f"] = "Correct."

                    section["critical"].append({
                        "id": f"crit_{section_number}_{len(section['critical'])+1}",
                        "scenario": row["Question"],
                        "question": "What is the correct action?",
                        "options": options,
                        "correct": correct_index,
                        "explanation": row["Explanation"],
                        "kpi": "Auto-generated KPI"
                    })

        # Write output
        os.makedirs("content", exist_ok=True)

        js_output = "window.CPG_DATA = " + json.dumps(data, indent=4) + ";"

        with open("content/c2.js", "w", encoding="utf-8") as outfile:
            outfile.write(js_output)

        print("✅ c2.js successfully generated!")

    except Exception as e:
        print("❌ Error:", e)

if __name__ == "__main__":
    generate_js()
