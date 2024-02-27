import csv
import json

def read_csv_file(fil_path):
    bd = []
    try:
        with open(file_path, "r") as csv_file:
            csv_reader = csv.DictReader(csv_file, delimiter=';')

            for row in csv_reader:
                bd.append(row)
    
    except FileNotFoundError:
        print(f"O ficheiro {file_path} nao encontrado")
    except Exception as e:
        print(f"An error ocurred: {e}")

    return bd


def pertence(valor, lista):
    encontrado = False
    i = 0
    while i < len(lista) and not encontrado:
        if lista[i]["designacao"] == valor:
            encontrado = True
        i+=1

    return encontrado



def calc_especies(db):
    contador = 1
    especies = []

    for reg in db:
        if not pertence(reg["BreedIDDesc"], especies) and reg["BreedIDDesc"] != '':
            especies.append({
                "id": f"e{contador}",
                "designacao": reg["BreedIDDesc"],
                "animal" : reg["SpeciesIDDesc"]
            })
            
            contador = contador + 1

    return especies



def calc_animais(db):
    contador = 1
    animais = []

    for reg in db:
        if not pertence(reg["SpeciesIDDesc"], animais):
            animais.append({
                "id": f"e{contador}",
                "designacao" : reg["SpeciesIDDesc"]
            })
            
            contador = contador + 1

    return animais


file_path = "Health_AnimalBites.csv"
myDB = read_csv_file(file_path)
especies = calc_especies(myDB)
animais = calc_animais(myDB)

novaBD = {
    "ocorrencias" : myDB,
    "especies" : especies,
    "animais" : animais
}



f = open("mordidas.json", "w")
json.dump(novaBD, f, indent=4)
f.close()
