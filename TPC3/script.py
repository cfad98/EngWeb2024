import json

def script_json(data):
    new_data = []
    actors_set = set()
    genres_set = set()

    for line in data.strip().split('\n'):
        try:
            entry = json.loads(line)

            if 'genres' in entry:
                genres_set.update(genre for genre in entry['genres'] if genre)

            if 'cast' in entry:
                actors_set.update(actor for actor in entry['cast'] if actor)

            if entry.get('cast') and entry.get('genres'):
                new_data.append(entry)

        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}. Skipping line: {line}")

    actors = [{"nome": actor} for actor in actors_set]
    genres = [{"nome": genre} for genre in genres_set]

    return new_data, actors, genres

def main():
    input_file_path = "~/Desktop/Web/EngWeb2024/TPC3/filmes.json"
    output_file_path = "~/Desktop/Web/EngWeb2024/TPC3/filmes_fix.json"

    with open(input_file_path, 'r', encoding='utf-8') as file:
        data = file.read()
        data, actors, genres = script_json(data)
    
    new_data = {
        "filmes": data,
        "atores": actors,
        "generos": genres
    }

    with open(output_file_path, 'w', encoding='utf-8') as file:
        json.dump(new_data, file, indent=2)
    
if __name__ == "__main__":
    main()
