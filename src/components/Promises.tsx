import { CheckCircle2 } from "lucide-react";

const promises = [
  "Como sair do completo zero e se tornar uma profissional desejada no mercado de estrias — mesmo que hoje você ainda duvide de si.",
  "O método prático pra atrair clientes todos os meses e faturar R$500 ou mais por sessão — sem precisar depender de indicações ou sorte.",
  "A técnica exclusiva que entrega resultados de até 100% nas estrias — e que vai fazer suas clientes te procurarem sozinhas.",
  "O erro silencioso que faz 90% das profissionais continuarem invisíveis, mesmo sendo boas no que fazem — e como você vai escapar dele.",
  "Como se posicionar de forma magnética e virar referência local, mesmo que ninguém saiba seu nome (ainda)."
];

export const Promises = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          O que você vai aprender nesta live
        </h2>
        
        <div className="space-y-6">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className="flex gap-4 items-start p-6 bg-secondary rounded-xl hover:shadow-lg transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground/90 leading-relaxed">
                {promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
