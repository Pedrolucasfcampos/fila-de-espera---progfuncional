const criarContadorPacientes = () => {
  let contador = 0;
  return () => ++contador;
};

const criarMenu = (pacientes) => {
  const listaPacientes = pacientes
    .map((paciente, index) => index + 1 + "º " + paciente)
    .join("\n");

  return `Fila de espera:\n${
    listaPacientes ? listaPacientes + "\n" : ""
  }\nEscolha uma das opções pelo número:\n1. Novo paciente\n2. Consultar paciente\n3. Sair\n`;
};

const adicionarPaciente = (pacientes, nome) => [...pacientes, nome];

const consultarPaciente = (pacientes, contarPaciente) => {
  if (pacientes.length === 0) {
    return { pacientes, mensagem: "Não há pacientes na fila." };
  }
  const [pacienteConsultado, ...restante] = pacientes;
  const totalAtendidos = contarPaciente();
  return {
    pacientes: restante,
    mensagem:
      "Paciente consultado: " +
      pacienteConsultado +
      "\n\nTotal atendidos: " +
      totalAtendidos,
  };
};

const main = (pacientes = [], contarPaciente) => {
  const opcao = parseInt(prompt(criarMenu(pacientes)));

  switch (opcao) {
    case 1: {
      const nome = prompt("Digite o nome do novo paciente:");
      return main(adicionarPaciente(pacientes, nome), contarPaciente);
    }
    case 2: {
      const { pacientes: novosPacientes, mensagem } = consultarPaciente(
        pacientes,
        contarPaciente
      );
      alert(mensagem);
      return main(novosPacientes, contarPaciente);
    }
    case 3: {
      alert("Encerrando o programa.");
      return;
    }
    default: {
      alert("Opção inválida. Tente novamente.");
      return main(pacientes, contarPaciente);
    }
  }
};

const contarPaciente = criarContadorPacientes();
main([], contarPaciente);
