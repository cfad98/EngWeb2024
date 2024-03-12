var http = require('http');
var fs = require('fs');
var url = require('url');
var axios = require('axios');


function geraPagFilmes(dados){
    pagHTML = `<!DOCTYPE html> 
        <html>
            <head>
                <meta charset="utf-8">
                <title>Filmes Americanos</title>
                <link rel="stylesheet" href="/w3.css">
            </head>
            <body>
                <div class="w3-card-4">
        
                    <header class="w3-container w3-blue">
                    <h1>Filmes Americanos</h1>
                    <h5>Gerado por ENGWEB24: Carlos Dias [<a href='/'> Voltar à página inicial </a>]</h5>
                    </header>
                    
                    <div class="w3-container">
                        <ul> `
                    dados.forEach(filme => {
                            pagHTML += `
                                <li> 
                                    <a href='/Filmes/${filme._id}'>${filme.title}</a>
                                </li>
                            `
                        });
                     pagHTML +=  
                        `</ul>
                    </div>
                </div>
            </body>
        </html>
    `;
    return pagHTML;
}

function geraFilme(filme) {
    pagHTML = `<!DOCTYPE html> 
        <html>
            <head>
                <meta charset="utf-8">
                <title>Filme ${filme._id}</title>
                <link rel="stylesheet" href="/w3.css">
            </head>
            <body>
                <div class="w3-card-4">
        
                    <header class="w3-container w3-blue">
                        <h1>Filme ${filme._id}</h1>
                    </header>
                    <div class="w3-responsive">
                        <table class="w3-table-all">
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>ANO</th>
                                <th>ATORES</th>
                                <th>GENERO</th>
                            </tr>
                            <tr> 
                                <td>${filme._id}</td>
                                <td>${filme.title}</td>
                                <td>${filme.year}</td>
                                <td>${filme.cast}</td>
                                <td>${filme.genres}</td>
                            </tr>
                        </table>
                    </div>
                    <footer class="w3-container w3-blue">
                        <h5>Gerado por ENGWEB24: Carlos Dias [<a href='/Filmes'> Voltar à pagina dos filmes </a>]</h5>
                    </footer>
                </div>
            </body>
        </html>`;
    return pagHTML;
}


function geraPagAtores(dados){
    pagHTML = `<!DOCTYPE html> 
        <html>
            <head>
                <meta charset="utf-8">
                <title>Atores</title>
                <link rel="stylesheet" href="/w3.css">
            </head>
            <body>
                <div class="w3-card-4">
        
                    <header class="w3-container w3-blue">
                    <h1>Atores dos filmes</h1>
                    <h5>Gerado por ENGWEB24: Carlos Dias [<a href='/'> Voltar à página inicial </a>]</h5>
                    </header>
                    
                    <div class="w3-container">
                        <ul> `
                    dados.forEach(ator => {
                            pagHTML += `
                                <li> 
                                    <a href = '/Atores/${ator.id}'>${ator.ator}</a>
                                </li>
                            `
                        });
                     pagHTML +=  
                        `</ul>
                    </div>
                    </div>
            </body>
        </html>
    `;
    return pagHTML;
}

function geraAtor(ator) {
    pagHTML = `<!DOCTYPE html> 
        <html>
            <head>
                <meta charset="utf-8">
                <title>Ator ${ator.id}</title>
                <link rel="stylesheet" href="/w3.css">
            </head>
            <body>
                <div class="w3-card-4">
        
                    <header class="w3-container w3-blue">
                        <h1>Ator ${ator.id}</h1>
                    </header>
                    <div class="w3-container">
                        <ul class="w3-ul w3-center">
                            <li>${ator.ator}</li>
                        </ul>
                    </div>

                    <footer class="w3-container w3-blue">
                        <h5>Gerado por ENGWEB24: Carlos Dias [<a href='/Atores'> Voltar à pagina dos atores </a>]</h5>
                    </footer>
                </div>
            </body>
        </html>`;
    return pagHTML;
}

function geraPagGeneros(dados){
    pagHTML = `<!DOCTYPE html> 
        <html>
            <head>
                <meta charset="utf-8">
                <title>Generos dos filmes</title>
                <link rel="stylesheet" href="/w3.css">
            </head>
            <body>
                <div class="w3-card-4">
        
                    <header class="w3-container w3-blue">
                    <h1>Gêneros dos filmes</h1>
                    </header>
                    
                    <div class="w3-container">
                        <ul> `
                    dados.forEach(genero => {
                            pagHTML += `
                                <li> 
                                    <a href = '/Generos/${genero}'>${genero}</a>
                                </li>
                            `
                        });
                    pagHTML +=  
                        `</ul>
                    </div>
                    <footer class="w3-container w3-blue">
                        <h5>Gerado por ENGWEB24: Carlos Dias [<a href='/'> Voltar à pagina inicial </a>]</h5>
                    </footer>
                    </div>
            </body>
        </html>
    `;
    return pagHTML;
}
function geraGeneroFilmes(genero, filmes) {
    pagHTML = `<!DOCTYPE html> 
        <html>
            <head>
                <meta charset="utf-8">
                <title>Filmes de genero ${genero}</title>
                <link rel="stylesheet" href="/w3.css">
            </head>
            <body>
                <div class="w3-card-4">
        
                    <header class="w3-container w3-blue">
                        <h1> Gênero ${genero}</h1>
                        <h5>Gerado por ENGWEB24: Carlos Dias [<a href='/Generos'> Voltar à página inicial </a>]</h5>
                    </header>
                    <div class="w3-container">
                        <ul> `
                        filmes.forEach(filme => {
                            if(filme.genres == genero)
                                pagHTML += `
                                    <li> 
                                        <a href='/Filmes/${filme._id}'>${filme.title}</a>
                                    </li>
                                `
                        });
                pagHTML += `
                        </ul>
                    </div>
                </div>
            </body>
        </html>`;
    return pagHTML;
}