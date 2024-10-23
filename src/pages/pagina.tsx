import Cabecalho from "@/components/Cabecalho";
import "../app/globals.css";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Pagina() {
  const ano = new Date().getFullYear();
  return (
    <div
      className={`
      flex flex-col h-screen
      p-5 gap-5
    bg-black text-white`}
    >
      <Cabecalho titulo="Minha página" subtitulo="Estou na pasta pages" />
      <Conteudo />
      <Rodape
        textoEsquerdo="Feito com ❤️ por Amal"
        textoDireito={`Desenvolvido em ${ano}.`}
      />
    </div>
  );
}
