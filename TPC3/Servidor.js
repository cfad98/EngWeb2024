var http = require('http');
var url = require('url');
var axios = require('axios');
var fs = require('fs');
const paginas = require('./paginas.js');

http.createServer((req, res) => {
    console.log(req.method + " " + req.url);

    var q = url.parse(req.url, true);

    if (req.url === '/') {
        fs.readFile('index.html', (erro, dados) => {
            if (erro) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end("<p>Erro no servidor: " + erro + "</p>");
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write(dados);
            res.end();
        });

    } else if (req.url === '/filmes') {
        axios.get("http://localhost:3000/filmes")
            .then(resp => {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write(paginas.geraPagFilmes(resp.data));
                res.end();
            })
            .catch(erro => {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end("<p>Erro no servidor: " + erro + "</p>");
            });

    } else if (q.pathname.match(/\/filmes\/\w+/)) {
        var id = q.pathname.substring(8)
        axios.get("http://localhost:3000/filmes?_id.$oid=" + id)
            .then(resp => {
                res.write(paginas.geraFilme(resp.data));
                res.end();
            })
            .catch(erro => {
                if (erro.response && erro.response.status === 404) {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end("<p>Filme não encontrado</p>");
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end("<p>Erro no servidor: " + erro + "</p>");
                }
            });

    } else if (req.url === '/atores') {
        axios.get("http://localhost:3000/atores")
            .then(resp => {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write(paginas.geraPagAtores(resp.data));
                res.end();
            })
            .catch(erro => {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end("<p>Erro no servidor: " + erro + "</p>");
            });

        } else if (q.pathname.match(/\/atores\/\w+([\'|\`\w]+)?/)) {
            var nome = q.pathname.substring(8)
            var nameFormat = nome.replace(/%20/g, " ")
            axios.get("http://localhost:3000/filmes")
            .then(resp => {
                var filmes = resp.data.filter(filme => filme.cast.includes(nameFormat))
                res.write(paginas.geraAtor(nameFormat, filmes));
                res.end();
            })
            .catch(erro => {
                if (erro.response && erro.response.status === 404) {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end("<p>Ator não encontrado</p>");
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end("<p>Erro no servidor: " + erro + "</p>");
                }
            });

    } else if (req.url === '/generos') {
        axios.get("http://localhost:3000/generos")
            .then(resp => {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write(paginas.geraPagGeneros(resp.data));
                res.end();
            })
            .catch(erro => {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end("<p>Erro interno no servidor: " + erro + "</p>");
            });

        } else if (q.pathname.match(/\/generos\/(\w+)/)) {
            let gen = q.pathname.substring(9)
            var generoFormat = gen.replace(/%20/g, " ")
            axios.get('http://localhost:3000/filmes')
            .then(resp => {
                var filmes = resp.data.filter(filme => filme.genres.includes(generoFormat))
                res.write(paginas.geraGeneroFilmes(generoFormat, filmes));
                res.end();
            })
            .catch(erro => {
                if (erro.response && erro.response.status === 404) {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end("<p>Género não encontrado</p>");
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end("<p>Erro no servidor: " + erro + "</p>");
                }
            });
    } else {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<p>Operação não é suportada</p>');
        res.write('<pre>' + q.pathname + '</pre>');
        res.end();
    }
    console.log(q.pathname);
}).listen(1998);