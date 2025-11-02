export const Authority = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Quem vai te ensinar
          </h2>

          {/* Imagem abaixo do título */}
          <img
            src="https://i.imgur.com/teu92d2.png"
            alt="Anna Lara - Especialista em Estrias"
            className="mx-auto rounded-2xl shadow-lg w-full max-w-md object-cover"
          />

          <div className="space-y-6 text-left bg-secondary p-8 md:p-12 rounded-2xl mt-8">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Sou Anna Lara, especialista em tratamentos de estrias e apaixonada por transformar vidas através da estética.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Há 5 anos vivo esse universo, e dediquei o último 1 ano e meio exclusivamente ao estudo profundo da pele,
              entendendo o que realmente funciona e o que é só promessa vazia.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Mas foi quando percebi que técnica sozinha não sustenta uma carreira que tudo mudou.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              O que me fez viver da estética não foi só dominar protocolos, mas aprender a me posicionar,
              conquistar clientes e gerar valor de verdade.
            </p>

            <p className="text-lg font-semibold text-primary leading-relaxed">
              Hoje, ensino outras profissionais a fazerem o mesmo: a saírem do zero, entrarem no mercado com confiança
              e construírem uma vida de liberdade, reconhecimento e propósito através da estética.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
