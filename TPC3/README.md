# TPC3: Biblioteca de Filmes

## Autor

**Nome:** Carlos Dias

**Id:** A93185

## Enunciado TPC3

**Data:** 2024-02-07

## Resumo:

### **script.py:**
- Esta script processa um arquivo JSON de filmes para extrair informações relevantes sobre **atores** e **gêneros**.
- A função script_json recebe os dados brutos do arquivo JSON como entrada.
- Itera sobre cada linha do arquivo JSON.
- Para cada linha, tenta carregar o JSON usando json.loads().
- Se a decodificação for bem-sucedida, verifica se a entrada contém informações válidas sobre **gêneros** e **atores**.
- As informações válidas são adicionadas a conjuntos (sets) de **atores** e **gêneros** únicos.
- No final, os conjuntos de atores e gêneros são transformados em listas de dicionários com a chave "nome".
- Os dados processados são então salvos em um novo arquivo JSON com as chaves "filmes", "atores" e "gêneros".


### **Ficheiros Servidor.js e paginas.js:**

- Este ficheiro contém a implementação de um servidor HTTP que opera na porta 1998 e utiliza os módulos http, url, axios e fs para lidar com pedidos HTTP, analisar URLs, fazer chamadas de API e interagir com o sistema de ficheiros.
- O servidor encaminha os pedidos para diferentes manipuladores de rota com base no caminho do URL, servindo uma variedade de recursos, incluindo uma página inicial em /, listas de filmes em /filmes, detalhes de filmes em /filmes/id, listas de atores em /atores, detalhes de atores em /atores/nome, listas de géneros em /generos, e listas de filmes de um género específico em /generos/genero.
- As respostas do servidor são geradas dinamicamente com base nos dados recebidos das chamadas de API e nos modelos de página HTML gerados pelo módulo paginas.js. Este último contém funções como geraPagFilmes, geraFilme, geraPagAtores, geraAtor, geraPagGeneros e geraGeneroFilmes, que recebem dados específicos e retornam strings contendo o HTML correspondente.
- Quando um pedido é recebido, o servidor analisa o URL para determinar a rota solicitada e realiza pedidos para obter os dados correspondentes. Com base nas respostas, o servidor gera páginas HTML dinâmicas e as envia de volta ao cliente como resposta. Em caso de rotas não reconhecidas ou erros durante o pedido, o servidor retorna respostas de erro apropriadas.
