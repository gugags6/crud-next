import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default  function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([])

    const {tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()
    
  
    useEffect(obterTodos,[])
  
    function obterTodos(){
      repo.obterTodos().then(clientes=>{
        setClientes(clientes)
        exibirTabela()
        
      })
    }
  
  
    function selecionarCliente(cliente: Cliente){
      console.log(cliente.nome)
      setCliente(cliente)
      exibirFormulario()
    }
  
    async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
      console.log(cliente.nome)
    }
  
    async function salvarCliente(cliente:Cliente){
      console.log(cliente)
      await repo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela

    }
}