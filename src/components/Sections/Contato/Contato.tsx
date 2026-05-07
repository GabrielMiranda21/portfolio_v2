'use client'

import Button from "@/components/UI/Button";
import { ShieldCheck, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        whatsapp: "",
        doubt: "",
    });

    const [status, setStatus] = useState<{
        type: "idle" | "loading" | "success" | "error";
        message: string;
    }>({
        type: "idle",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const isDisabled =
        !form.name.trim() ||
        !form.email.trim() ||
        !form.whatsapp.trim() ||
        !form.doubt.trim();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus({ type: "loading", message: "Enviando..." });

        try {
            const response = await fetch("https://formspree.io/f/xjglyqze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Formulário enviado com sucesso!",
                });

                setForm({
                    name: "",
                    email: "",
                    whatsapp: "",
                    doubt: "",
                });
            } else {
                const errorMsg =
                    result.errors
                        ?.map((e: { field: string; message: string }) => e.message)
                        .join(", ") || "Erro ao enviar";

                setStatus({ type: "error", message: errorMsg });
            }
        } catch {
            setStatus({
                type: "error",
                message: "Erro de rede ao enviar o formulário.",
            });
        }
    };

    return (
        <section id="contato" className="flex flex-col gap-6 px-3 lg:px-48 py-30 bg-white">
            <h4 className="text-center text-h2 text-[#1B263B] font-black">Contato</h4>
            <p className="text-center text-body-default text-[#5E6472]">Se quiser conversar sobre oportunidades, projetos ou trocar ideias, fico à disposição para falar.</p>
            <p className="text-center text-body-lead font-bold text-[#4361EE]">Estou aberto a oportunidades como Product Designer, Desenvolvedor Front-end ou posições que envolvam experiência do usuário e desenvolvimento.</p>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-3 md:p-6 lg:p-6"
            >

                <fieldset className="flex flex-col gap-4 bg-[#EDF3FF] rounded-[14px] p-6">
                    <div className="flex flex-col gap-2 lg:gap-4 w-full md:flex-row">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-[#1B263B] text-body-default font-normal">
                                Nome completo <b className="text-[#EF4444]">*</b>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                                className="p-3 bg-white border border-[#4361EE] rounded-[14px] text-[#1B263B] text-body-default font-normal"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-[#1B263B] text-body-default font-normal">
                                E-mail <b className="text-[#EF4444] text-body-default font-normal">*</b>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Seu e-mail"
                                className="p-3 bg-white border border-[#4361EE] rounded-[14px] text-[#1B263B] text-body-default font-normal"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[#1B263B] text-body-default font-normal">
                            Whatsapp <b className="text-[#EF4444] text-body-default font-normal">*</b>
                        </label>
                        <input
                            type="text"
                            name="whatsapp"
                            value={form.whatsapp}
                            onChange={handleChange}
                            placeholder="Whatsapp"
                            className="p-3 bg-white border border-[#4361EE] rounded-[14px] text-[#1B263B] text-body-default font-normal"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[#1B263B] text-body-default font-normal">
                            Sua dúvida <b className="text-[#EF4444] text-body-default font-normal">*</b>
                        </label>
                        <textarea
                            name="doubt"
                            value={form.doubt}
                            onChange={handleChange}
                            placeholder="Descreva sua dúvida..."
                            className="p-3 bg-white border border-[#4361EE] rounded-[14px] text-[#1B263B] text-body-default font-normal h-25 lg:h-50"
                        />
                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isDisabled || status.type === "loading"}
                        className={`
                            px-6 py-4 rounded-[14px] w-full disabled:bg-[#5E6472] disabled:text-[#f9fafb] ]
                            disabled:border-0 disabled:hover:brightness-100 disabled:bg-none flex gap-2 justify-center items-center
                        `}
                    >
                        <Send size={16} />
                        {status.type === "loading" ? "Enviando..." : "Enviar"}
                    </Button>

                    {status.message && (
                        <p
                            className={`text-body-small ${status.type === "success" ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {status.message}
                        </p>
                    )}
                </fieldset>
            </form>
            <p className="text-center text-body-small text-[#5E6472] font-medium">Normalmente respondo em até 1 dia útil.</p>
        </section>
    )
}