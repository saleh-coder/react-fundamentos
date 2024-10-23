export default function Page() {
  const nome = "João";
  const idade = 40;

  return (
    <div>
      <div>
        Nome:{nome} Idade:{idade}
      </div>
      <div>{1 + 1}</div>
      <div>{Math.trunc(Math.random() * 6) + 1}</div>
    </div>
  );
}
