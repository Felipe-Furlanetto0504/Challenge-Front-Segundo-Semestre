export default function Informacoes(props: {
  idprops: number;
  nomeprops: string;
  precoprops: number;
  descricaoprops: string;
  quantidadeprops: string;
}) {
  return (
    <section className="flex justify-center items-center bg-[#e6f9fc] py-20">
      <div className="bg-[#28659b] border border-black rounded-md p-6 w-80 flex flex-col justify-center items-start text-white shadow-lg space-y-2">
        <h2 className="font-bold text-lg">ID: {props.idprops}</h2>
        <p><strong>Nome:</strong> {props.nomeprops}</p>
        <p><strong>Preço:</strong> R$ {props.precoprops.toFixed(2)}</p>
        <p><strong>Descrição:</strong> {props.descricaoprops}</p>
        <p><strong>Quantidade:</strong> {props.quantidadeprops}</p>
      </div>
    </section>
  );
}
