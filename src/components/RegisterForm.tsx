import type { FormEvent } from "react";

type RegisterFormProps = {
  handleRegister: (event?: FormEvent<HTMLFormElement>) => void;
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  loading?: boolean;
};

export function RegisterForm({
  handleRegister,
  email,
  password,
  setEmail,
  setPassword,
  loading,
}: RegisterFormProps) {
  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-3">
      <label className="text-xs uppercase tracking-[0.2em] text-(--muted)">
        Crea tu cuenta con email y contrasena
      </label>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-11 rounded-xl border border-(--border) bg-transparent px-4 text-white placeholder:text-(--muted) focus:outline-none focus:ring-2 focus:ring-(--accent-2)"
        placeholder="Email"
        type="email"
        autoComplete="email"
      />
      <input
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="h-11 rounded-xl border border-(--border) bg-transparent px-4 text-white placeholder:text-(--muted) focus:outline-none focus:ring-2 focus:ring-(--accent-2)"
        placeholder="Contrasena"
        type="password"
        autoComplete="new-password"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-11 rounded-xl cursor-pointer bg-(--accent) text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Guardando..." : "Registrar"}
      </button>
    </form>
  );
}