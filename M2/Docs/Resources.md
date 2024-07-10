# Controladores da API Pokemóns

## Controladores de Batalhas

AIOController: Gerencia operações relacionadas às batalhas.

Endpoints:

* GET /battles: Recupera todas as batalhas.

* POST /battles: Cria uma nova batalha.

* GET /battles/{id}: Recupera uma batalha específica pelo ID.

* PUT /battles/{id}: Atualiza uma batalha específica pelo ID.

* DELETE /battles/{id}: Deleta uma batalha específica pelo ID.

* GET /battles/count: Conta o número de batalhas.

## Controladores de Pokémon

AIOController: Gerencia operações relacionadas aos Pokémon.

Endpoints:

* GET /pokemon: Recupera todos os Pokémon.

* POST /pokemon: Cria um novo Pokémon.

* GET /pokemon/{id}: Recupera um Pokémon específico pelo ID.

* PUT /pokemon/{id}: Atualiza um Pokémon específico pelo ID.

* DELETE /pokemon/{id}: Deleta um Pokémon específico pelo ID.

* GET /pokemon/count: Conta o número de Pokémon.

## Controladores de Treinadores

AIOController: Gerencia operações relacionadas aos treinadores.

Endpoints:

* GET /trainers: Mostra todos os treinadores.

* POST /trainers: Cria um novo treinador.

* GET /trainers/{id}: Mostra um treinador específico pelo ID.

* PUT /trainers/{id}: Atualiza um treinador específico pelo ID.

* DELETE /trainers/{id}: Deleta um treinador específico pelo ID.

* GET /trainers/count: Conta o número de treinadores.

## Controladores de Equipas

AIOController: Gerencia operações relacionadas às equipas.

Endpoints:

* GET /teams: Mostra todas as equipas.

* POST /teams: Cria uma nova equipa.

* GET /teams/{id}: Mostra uma equipa específica pelo ID.

* PUT /teams/{id}: Atualiza uma equipa específica pelo ID.

* DELETE /teams/{id}: Deleta uma equipa específica pelo ID.

* GET /teams/count: Conta o número de equipas.

## Controladores de Tipos

AIOController: Gere operações relacionadas aos tipos de Pokémon.

Endpoints:

* GET /types: Mostra todos os tipos.

* POST /types: Cria um novo tipo.

* GET /types/{id}: Mostra um tipo específico pelo ID.

* PUT /types/{id}: Atualiza um tipo específico pelo ID.

* DELETE /types/{id}: Deleta um tipo específico pelo ID.

* GET /types/count: Conta o número de tipos.

## Controladores de Autenticação

AuthController: Gere a autenticação de usuários.

Endpoints:

* GET /login: Mostra a página de login.

* POST /logout: Faz logout do usuário.

* GET /protected: Mostra a página protegida.

* GET /auth/github: Autenticação via GitHub.

* GET /auth/github/callback: Callback após a autenticação via GitHub.

* GET /me: Mostra os detalhes do usuário autenticado.

* GET /github/me: Mostra os detalhes do usuário autenticado no GitHub.
