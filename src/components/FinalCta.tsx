import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const FinalCta = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
  });

  // Máscara para o campo WhatsApp
  const formatWhatsApp = (value: string) => {
    const cleaned = value.replace(/\D/g, ""); // remove tudo que não é número
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (!match) return value;

    let formatted = "";
    if (match[1]) formatted += `(${match[1]}`;
    if (match[1] && match[1].length === 2) formatted += ") ";
    if (match[2]) formatted += match[2];
    if (match[3]) formatted += `-${match[3]}`;

    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // aplica máscara apenas no campo WhatsApp
    const newValue = name === "whatsapp" ? formatWhatsApp(value) : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, whatsapp, email } = formData;

    if (!nome || !whatsapp || !email) {
      toast.error("Preencha todos os campos antes de enviar.");
      return;
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbybAUwowmMb0i3Zlk7yALCfu-pbXXKh7SKbfH_sbPg3e1BRyPA0lnI7VpGhUCDwkTUAFQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, whatsapp, email }),
      });

      toast.success("Inscrição realizada com sucesso! Verifique seu email.");
      setFormData({ nome: "", whatsapp: "", email: "" });
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Ocorreu um erro ao enviar seus dados. Tente novamente.");
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-neutral-900" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
          Garanta sua vaga agora
        </h2>

        <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20">
          <p className="text-xl md:text-2xl text-white mb-8 text-balance">
            As vagas para essa live são limitadas e a gravação não ficará disponível.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              name="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
              className="h-14 text-lg bg-white text-black border-0"
            />

            <Input
              type="tel"
              name="whatsapp"
              placeholder="Seu WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              maxLength={15}
              className="h-14 text-lg bg-white text-black border-0"
            />

            <Input
              type="email"
              name="email"
              placeholder="Seu melhor email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-14 text-lg bg-white text-black border-0"
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#B8860B] text-white hover:bg-[#B8860B]/90 text-lg py-6 h-auto font-semibold shadow-2xl hover:scale-105 transition-all"
            >
              Quero meu acesso gratuito à live
            </Button>
          </form>

          <p className="text-white/80 mt-6 text-sm">
            🔒 Seus dados estão seguros e<br />não serão compartilhados
          </p>
        </div>

        <p className="text-white/60 text-sm max-w-2xl mx-auto">
          Esta é uma oportunidade única de aprender com quem realmente vive da estética e ensina o caminho real
          para o sucesso nesse mercado.
        </p>
      </div>
    </section>
  );
};
