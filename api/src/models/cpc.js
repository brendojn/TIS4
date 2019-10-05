import Sequelize, { Model } from 'sequelize';

const enrollment = require('./enrollment')

class Cpc extends Model {
  static init(sequelize) {
    super.init( {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        refferences: Sequelize.STRING,
        is_open: Sequelize.BOOLEAN,
        opens_at: Sequelize.DATE,
        closes_at: Sequelize.DATE
    },
        { sequelize }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(enrollment);
  }
}

export default Cpc;

/*
Número de Grupos
Número de Alunos
Número de Etapas
Data de criação
Referência (informações sobre o CPC)

Etapas (id)
Turma(id)

27- 
Eu como ALUNO, preciso de ACESSAR UMA INTERFACE com as CPCs,
para que eu acesse os DESAFIOS disponíveis para cada CPC.
*/