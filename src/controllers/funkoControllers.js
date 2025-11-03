 import * as funkoModels from "./../models/funkoModels.js";

 export const listarTodos = async (req, res) => {
    try {
        const funko = await funkoModels.findAll();

        if (!funko || funko.length === 0) {
            res.status(404).json({
                total: 0,
                mensagem: "Não há comidas na lista",
                funko
            });
        }

        res.status(200).json({
            total: comidas.length,
            mensagem: "Lista de comidas",
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
                erro: 'Comida não encontrada',
                mensagem: 'Verifique o id da comida',
                id: id
            });
        }

        res.status(200).json({
            mensagem: 'Comida encontrada',
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