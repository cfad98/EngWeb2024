import json
import os

def fix_composers_and_periods(data):
    composers = []
    periodos_map = {}
    next_periodo_id = 1

    for composer in data.get("compositores", []):
        periodo_name = composer.get("periodo")
        if periodo_name:
            if periodo_name not in periodos_map:
                periodos_map[periodo_name] = {
                    "id": str(next_periodo_id),
                    "nome": periodo_name
                }
                next_periodo_id += 1

            composer["periodo"] = periodos_map[periodo_name]["nome"]
            composers.append(composer)

    return composers, list(periodos_map.values())

def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        return json.load(file)

def save_json(filepath, data):
    with open(filepath, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=2)

def main():
    try:
        filepath = os.path.join(os.getcwd(), "compositores.json")
        data = load_json(filepath)
        composers, periodos = fix_composers_and_periods(data)
        
        new_data = {
            "compositores": composers,
            "periodos": periodos,
        }
        
        output_filepath = os.path.join(os.getcwd(), "compUpdate.json")
        save_json(output_filepath, new_data)

    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
    except FileNotFoundError:
        print(f"File not found: {filepath}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
