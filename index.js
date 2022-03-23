class Noticia{
  constructor(titulo, data_da_publicacao, resumo, texto){
    this.titulo = titulo;
    this.data_da_publicacao = data_da_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + this.data_da_publicacao + "\n" + this.resumo + "\n" +        this.texto;
  }
}
let noticia = new Noticia("Os novos ganhadores da MEGA DA VIRADA", "10/01/2022", "Estudantes ganham mega da virada.", "Dois estudantes do IFMS, campus Nova Andradina, se juntaram para o maior ganho de suas vidas, eles ganharam 378 milhões de reais, acumulando assim, 189 milhões de reais para cada um.")

console.log(noticia.mostrarNoticia())