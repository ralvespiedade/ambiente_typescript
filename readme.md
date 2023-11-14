Criando ambiente Node.js para Typescript
4 libs que não podem faltar no Node.js com TypeScript (Setup Node.js + TypeScript)

cria a pasta do projeto
npm i typescript -D
npx tsc --init // para gerar o arquivo de configuração do typescript
no tsconfig.json, no target: “es2020”
cria a pasta src e o server.ts dentro dela
npm i tsx -D //executa typescript sem precisar fazer conversão qualquer
e tem o modo de watch integrado, que aplicamos criando um outro script
no package.json, cria o script “start”: “tsx src/server.ts”
no package.json, cria o script “start:dev”: “tsx watch src/server.ts”
para ativar o watch é npm run start:dev  e para sair dele ctrl+c
npm i tsup -D 
//Qd formos colocar nossa app em produção, vamos querer que ela esteja em javascript e não em typescript para que o node consiga executar a nossa aplicação, a não ser que estivessemos usando Bun ou o Deno (I don’t know them). 
Não é viável usar o tsx, pois queremos executar o node em produção, pq qd executamos o processo do node, é muito mais fácil fazer inspeção, entender memória, processamento, evitar algum processamento desnecessário que uma determinada lib faz. Então não se usa essas libs (tsx ou ts-node) em produção. Em produção, usaremos node e javascript, por isso precisaremos fazer a build.
Para isso criaremos um novo script:
“build”: “tsup src”
e para executar, é só mandar um: >> npm run build
que a pasta dist é gerada e dentro o arquivo server.js transpilado.
agora podemos executar o app pelo node, assim:
node dist/server.js
npm i vitest -D
//VITEST >> Que é um framework de testes, assim como é o “jest” (I don't know!), para escrever testes automatizados, unitários e “end to end”, a idéia do vitest é trazer suporte para typescript e para uma gama de novidades que tem no javascript sem necessidade adicional de configuração. “Quando se usa o jest para dar suporte ao typescript e react precisamos ficar instalando tsjest e mais outras libs, fora que ainda precisa fazer muitas configurações, é um processo penoso / menos performático para rodar os testes. 
foi feito um exemplo para demonstrar: dentro do src frio criado o arquivo exemple.spec.ts e dentro dele escrevemos:
import { expect, test } from 'vitest'


test('sum two numbers', () => {
  expect(1 + 3).toEqual(4)
})

criamos um outro script “test”: “vitest”
e executamos um npm run test ( e foi lindo!!!)



Empolgação: HIGH!!!!

Foi falado que o vitest também vem com toda parte e coverage, então dá pra fazer cobertura de testes, dá pra ver quanto da minha aplicação estou cobrindo com testes. 

Agora saindo da gama de ferramentas para ambientes de desenvolvimento…

npm i zod -D

//ZOD é uma biblioteca de validação e transformação de dados. O typescript faz uma checagem de tipos quando estamos desenvolvendo a app, porém o zod consegue validar a tipagem em produção. Foi feito o seguinte exemplo:



O ZOD consegue usar a typage do typescript de forma automática e no exemplo acima podemos substituir o interface pela seguinte sintaxe do zod:


