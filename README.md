# Gerenciador de Fila de Pacientes

## Descrição
Este projeto é um sistema simples de gerenciamento de fila de pacientes implementado em JavaScript. Ele permite adicionar novos pacientes, consultar (remover) o próximo paciente da fila e encerrar o programa, tudo por meio de uma interface baseada em `prompt` e `alert`. O código foi desenvolvido como parte de um trabalho acadêmico em grupo, com foco no uso de conceitos de Programação Funcional.

## Funcionalidades
- **Adicionar Paciente**: Insere um novo paciente no final da fila.
- **Consultar Paciente**: Remove o primeiro paciente da fila e exibe o total de pacientes atendidos.
- **Exibir Menu**: Mostra a fila atual e as opções disponíveis.
- **Contador de Atendimentos**: Mantém um registro persistente do número de pacientes atendidos.
- **Tratamento de Erros**: Informa ao usuário sobre opções inválidas e permite novas tentativas.
- **Encerramento**: Finaliza o programa de forma controlada.

## Conceitos de Programação Funcional
O projeto utiliza os seguintes conceitos:
- **Função Lambda**: Presente no contador (`criarContadorPacientes`).
- **List Comprehension**: Implementada via `.map` na geração do menu (`criarMenu`).
- **Closure**: Usada para manter o estado do contador entre chamadas.
- **Função de Alta Ordem**: `consultarPaciente` recebe `contarPaciente` como argumento e a chama dentro da função.
