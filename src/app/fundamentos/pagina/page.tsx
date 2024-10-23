import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Page() {
  return (
    <div
      className={`
    flex flex-col
    gap-4
    p-4 h-screen`}
    >
      <Cabecalho titulo="Minha Aplicacão" subtitulo="Melhor app da web!" />
      <Conteudo>
        <p>test</p>
      </Conteudo>
      <Rodape
        textoEsquerdo="Feito com ❤️ por Amal"
        textoDireito={`Desenvolvido em ${new Date().getFullYear()}.`}
      />
    </div>
  );
}
