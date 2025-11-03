 import * as funkoModels from "./../models/funkoModels.js";

 export const listarTodos = async (req, res) => {
    try {
        const funko = await funkoModels.findAll();

        if (!funko || funko.length === 0) {
            res.status(404).json({
                total: 0,
                mensagem: "Não há funkos na lista",
                funko
            });
        }

        res.status(200).json({
            total: funko.length,
            mensagem: "Lista de funko",
            funko
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const funkos = await funkoModels.findById(id);

        if (!funkos) {
            return res.status(404).json({
                erro: 'funko não encontrado',
                mensagem: 'Verifique o id do funko',
                id: id
            });
        }

        res.status(200).json({
            mensagem: 'funko encontrado',
            funkos
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const criar = async (req, res) => {
    try {
        const { nome_personagem, nome_franquia, numero, raridade, condicao, preco, dataaquisicao, edicaoespecial  } = req.body;
        const dado = req.body;

        const camposObrigatorios = ["nome_personagem", "nome_franquia", "preco", "condicao","numero","edicaoespecial"];

        const faltando = camposObrigatorios.filter((campo) => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
              erro: `Os seguintes campos são obrigatórios: ${faltando.join(", ")}.`,
            });
          }

        const novafunko = await funkoModels.criar(req.body);

        if (numero < 0){
            return res.status(400).json({
              erro: `O numero deve ser maior que 0`,
            });
          }
        if (!condicao == "Mint" || !condicao == "Boa" || !condicao == "Regular" || !condicao == "Danificada"){
            return res.status(400).json({
              erro: `condição deve ser MINT, BOA, REGULAR OU DANIFICADA`,
            });
          }
        
        res.status(201).json({
            mensagem: 'funko adicionada com sucesso!',
            funko: novafunko
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const funkoExiste = await funkoModels.findById(id);
    
        if (!funkoExiste) {
            return res.status(404).json({
                erro: 'funko não encontrada com este id',
                id: id
            });
        }

        await funkoModels.deletar(id);

        res.status(200).json({
            mensagem: 'funko apagada com sucesso!',
            funkoRemovida: funkoExiste
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const funkoExiste = await funkoModels.findById(id);

        if (!funkoExiste) {
            return res.status(404).json({
                erro: 'funko não existe!',
                id: id
            });
        }

        const funkoAtualizada = await funkoModels.atualizar(id, dados);

        res.status(200).json({
            mensagem: 'funko atualizada com sucesso',
            funko: funkoAtualizada
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}