
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
  return await prisma.funko_tabela.findMany({
    orderBy: { nome_personagem: 'asc' }
  });
};

export const findById = async (id) => {
  return await prisma.funko_tabela.findUnique({
    where: { id: Number(id) },
  });
};

export const criar = async (dado) => {
    return await prisma.funko_tabela.create({
        data: {
            nome_personagem: dado.nome_personagem,
            nome_franquia: dado.nome_franquia,
            numero: dado.numero,
            raridade: dado.raridade,
            condicao: dado.condicao,
            preco: dado.preco,
            dataaquisicao: dado.dataaquisicao,
            edicaoespecial: dado.edicaoespecial
        }
    });
}
export const deletar = async (id) => {
    return await prisma.funko_tabela.delete({
        where: { id: Number(id) }
    });
}

export const atualizar = async (id, dado) => {
    return await prisma.funko_tabela.update({
        where: { id: Number(id) },
        data: {
            ...(dado.nome_personagem && {nome_personagem: dado.nome_personagem}),
            ...(dado.nome_franquia && {nome_franquia: dado.nome_franquia}),
            ...(dado.numero && {preco: dado.preco}),
            ...(dado.raridade && {descricao: dado.descricao}),
            ...(dado.condicao && {condicao: dado.condicao}),
            ...(dado.preco && {preco: dado.preco}),
            ...(dado.dataaquisicao && {dataaquisicao: dado.dataaquisicao}),
            ...(dado.edicaoespecial && {edicaoespecial: dado.edicaoespecial})
        }
    });
}