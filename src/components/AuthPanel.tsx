"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

type AuthPanelProps = {
  onSuccess: () => void;
};

export function AuthPanel({ onSuccess }: AuthPanelProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    if (!supabase) {
      setLoading(false);
      setError("Falta configurar Supabase en variables de entorno.");
      return;
    }
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();
    if (!normalizedEmail || !normalizedPassword) {
      setLoading(false);
      setError("Completa email y contrasena.");
      return;
    }
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password: normalizedPassword,
    });
    if (loginError) {
      setLoading(false);
      setError("Credenciales invalidas.");
      return;
    }
    setLoading(false);
    onSuccess();
  };

  const handleRegister = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    if (!supabase) {
      setLoading(false);
      setError("Falta configurar Supabase en variables de entorno.");
      return;
    }
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();
    if (!normalizedEmail || !normalizedPassword) {
      setLoading(false);
      setError("Completa email y contrasena.");
      return;
    }
    const { data, error: registerError } = await supabase.auth.signUp({
      email: normalizedEmail,
      password: normalizedPassword,
    });
    if (registerError) {
      setLoading(false);
      setError(registerError.message);
      return;
    }
    setLoading(false);
    if (data.session) {
      onSuccess();
      return;
    }
    setInfo(
      "Usuario creado. Revisa tu correo para confirmar la cuenta y luego inicia sesion."
    );
    setMode("login");
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-(--border) bg-black/30 p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-(--muted)">
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`rounded-full px-3 py-1 transition cursor-pointer ${mode === "login"
            ? "bg-white/10 text-white"
            : "hover:text-white"
            }`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setMode("register")}
          className={`rounded-full px-3 py-1 transition cursor-pointer ${mode === "register"
            ? "bg-white/10 text-white"
            : "hover:text-white"
            }`}
        >
          Registro
        </button>
      </div>

      {mode === "login" ? (
        <LoginForm
          handleLogin={handleLogin}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          loading={loading}
        />
      ) : (
        <RegisterForm
          handleRegister={handleRegister}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          loading={loading}
        />
      )}
      {info && <p className="text-xs text-emerald-300">{info}</p>}
      {error && <p className="text-xs text-red-300">{error}</p>}
    </div>
  );
}
