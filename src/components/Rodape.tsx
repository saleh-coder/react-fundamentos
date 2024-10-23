export default function Rodape(props: any) {
  return (
    <div
      className={`
    flex justify-between items-center 
    text-xl px-10
    h-36
    rounded-lg
    bg-cyan-600`}
    >
      <span>{props.textoEsquerdo}</span>
      <span>{props.textoDireito}</span>
    </div>
  );
}
