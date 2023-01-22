# Projeto Web - Listagem de Músicas

Esse é um projeto web para praticar meus conhecimento de ReactJS e PHP. 
O usuário pode organizar suas músicas preferidas em apenas um lugar. Foi criada uma API que lista as músicas trazidas do banco de dados e estou consumindo essa API no front-end.

## Telas do projeto

### 1 - Home
> Home ao carregar a página

![Home inicial](https://i.imgur.com/xS3EQ9g.jpg)

> Home ao selecionar uma música para ouvir

![Home ao selecionar uma música](https://i.imgur.com/ZXNrxqI.jpg)

### 2 - Login e Cadastro
> Tela de login

![Login](https://i.imgur.com/E3pjKTO.jpg)

> Formulário de cadastro de usuário

![Cadastro de usuários](https://i.imgur.com/ShRlpO8.jpg)

### 3 - Painel de controle
> Formulário para inserir novas músicas

![Inserir novas músicas](https://i.imgur.com/3WeiDwg.jpg)

> Lista de músicas cadastradas

![Listas de músicas](https://i.imgur.com/tvcMeTP.jpg)

## Tecnologias

* ReactJS
* PHP
* Banco de dados (MySql)
* Autenticação com Token JWT

## Funcionalidades
* [x] Ouvir a música selecionada
* [x] Autenticação e cadastro de usuário
* [x] Cadastro de novas músicas
* [x] Excluir músicas

## Como rodar

Pré-Requisitos
* NodeJS: https://nodejs.org/en/
* WampServer: https://www.wampserver.com/en/
* Composer: https://getcomposer.org/download/
  
Antes de tudo, clone este repositório
```bash
    git clone https://github.com/TeuSoares/siteMusic.git
```

Configurando servidor 👇
1. Execute o seu servidor wampserver:

    *Geralmente fica em seu menu iniciar ou um ícone na área de trabalho*

2. Mover a pasta server para dentro de seu servidor wamp: `C:\wamp64\www\`
   
   *PS: Deixe a pasta na raiz, sem nenhuma sub pasta: `C:\wamp64\www\server`*
  
3. Instale as dependências dentro de server
```bash
    composer init (pressione enter até instalar)
```
```bash
    composer require firebase/php-jwt
```
```bash
    composer require vlucas/phpdotenv
```

4. Crie um arquivo `.env` dentro da pasta server com a seguinte informação
```
KEY=<uma_chave_qualquer>
EX: KEY=hsdfh75sa6698sadfsdf
```

5. Criando seu banco de dados
   * Acesse essa URL e clique em executar: http://localhost/phpmyadmin/index.php
     * Usuário: root
     * Senha: vazia
     * Servidor: MySQL
   * Acesse a aba **SQL** na barra superior e cole o seguinte comando: ``CREATE DATABASE db_music;``
   * Importando tabelas:
     * Clique em **db_music** na barra lateral da esquerda.
     * Acesse a aba **Importar**.
     * Clique em **Escolher Arquivo**.
     * Navegue até o diretório: `C:\wamp64\www\server\database\`
     * Selecione o arquivo **db_music.sql**.
     * Clique em **Executar**.

Inicializando o projeto 👇
1. Acesse a pasta onde o projeto web está localizado

2. Acesse a pasta web
```bash
    cd web
```

3. Instalando dependências
```bash
    npm install
```

4. Inicializar projeto
```bash
    npm run dev
```

## Links

* Apresentação no YouTube: https://www.youtube.com/watch?v=AVKd6UlGJ4I

## Autor

* **Mateus Soares** [Linkedin](https://www.linkedin.com/in/mateus-soares-santos/)

## Versão

1.0.0

## Licença

Este projeto está licenciado sob a Licença MIT.
