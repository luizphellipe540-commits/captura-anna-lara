import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.png";

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Imagem de fundo visível, sem sobreposição */}
      <img
        src={heroBackground}
        alt="Fundo da seção principal"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance drop-shadow-lg">
          Do absoluto zero a especialista em estrias:<br />
          <span className="text-[#B8860B]">aprenda a faturar<br></br>R$500 por sessão</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto text-balance drop-shadow-md">
          Mesmo que você ainda não tenha clientes, equipamentos caros ou experiência, vou te mostrar
          o passo a passo que usei pra entrar no mercado de estética e criar uma agenda cheia — começando do zero.
        </p>

        <div className="pt-6">
          <Button
            onClick={onCtaClick}
            size="lg"
            className="w-full bg-[#B8860B] text-white hover:bg-[#DAA520] text-lg py-6 h-auto font-semibold shadow-2xl hover:scale-105 transition-all"
          >
            Quero meu acesso gratuito à live
          </Button>

          <p className="mt-4 text-sm text-white/80">
            Sim, quero aprender a entrar no mercado de estética e faturar com estrias
          </p>
        </div>
      </div>
    </section>
  );
};
