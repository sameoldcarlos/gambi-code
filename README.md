# Gambi Code

Gambi code é um ambiente de desenvolvimento front-end online, que disponibiliza ao usuário um espaço para escrever código HTML, CSS e Javascript e executá-los diretamente no navegador.

## Tecnologias Utilizadas

- Vue 3
- Tailwind CSS
- CodeMirror 6

## Funcionalidades

Na versão atual do projeto, as seguintes funções estão disponíveis:
- Editor de código com tabs separadas para cada linguagem (HTML, CSS e Javascript)
- Execução do código, com o resultado exibido em uma janela
- Download do código escrito, em formato .zip
- Função de copiar código do editor atual para a área de transferência

## Configuração e execução

Atualmente o projeto está disponível através do link https://gambi-code.netlify.app/

Caso deseje instalar e testar localmente, basta clonar o projeto e rodar os comandos abaixo no seu terminal:

### Instalar as dependências do projeto
```sh
npm install
```

### Build dos arquivos de estilo do Tailwind
```sh
npx tailwindcss -i ./src/input.css -o ./dist/output.css
```

### Compilar e executar para desenvolvimento

```sh
npm run dev
```

## Screenshots
![image](https://user-images.githubusercontent.com/7574584/214464900-db9d5ec2-60bf-4a5b-b4a3-bf55313f0ae7.png)
![image](https://user-images.githubusercontent.com/7574584/214464912-e5494804-e9e5-4530-9111-5cc47d6aace0.png)
![image](https://user-images.githubusercontent.com/7574584/214464926-7746e2ec-6e9c-44bb-8159-4a75ff283462.png)
![image](https://user-images.githubusercontent.com/7574584/214464934-3f92de1d-e711-4f66-ada8-f2a05d11a019.png)
