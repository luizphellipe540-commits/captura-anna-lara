import { Heart } from "lucide-react";

const audience = [
  "Pra mulheres que estão cansadas de depender dos outros e sonham em construir uma renda com as próprias mãos — fazendo algo que realmente amam.",
  "Pra mães que querem ter mais tempo pros filhos, mas também desejam ser reconhecidas e bem pagas pelo que fazem.",
  "Pra quem quer sair da CLT, ter liberdade de horários e viver da estética sem precisar implorar por clientes.",
  "Pra quem sente que tem talento, mas ainda não encontrou o caminho pra entrar de verdade no mercado e ser valorizada.",
  "Pra profissionais que já fizeram cursos, mas ainda não conseguem resultados, e estão prontas pra aprender o que realmente dá lucro.",
  "Pra mulheres que decidiram parar de se contentar com pouco — e querem se tornar referência, mesmo começando do zero."
];

export const TargetAudience = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">
          Esta live é pra você?
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          Se você se identifica com pelo menos uma dessas situações, essa live foi feita especialmente pra você:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {audience.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 items-start p-6 bg-white rounded-xl hover:shadow-lg transition-all"
            >
              <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-base text-foreground/90 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
