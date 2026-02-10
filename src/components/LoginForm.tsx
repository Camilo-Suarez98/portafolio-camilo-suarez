import type { ChangeEvent, FormEvent } from "react";

type LoginFormProps = {
  handleLogin: (event?: FormEvent<HTMLFormElement>) => void;
  user: string;
  password: string;
  setUser: (value: string) => void;
  setPassword: (value: string) => void;
  loading?: boolean;
  error?: string | null;
};

export function LoginForm({
  handleLogin,
  user,
  password,
  setUser,
  setPassword,
  loading,
  error,
}: LoginFormProps) {
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-3 rounded-2xl border border-(--border) bg-black/30 p-4"
    >
      <label
        htmlFor="user"
        className="text-xs uppercase tracking-[0.2em] text-(--muted)"
      >
        Accede con usuario y contraseña para continuar
      </label>
      <input
        name="user"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        className="h-11 rounded-xl border border-(--border) bg-transparent px-4 text-white placeholder:text-(--muted) focus:outline-none focus:ring-2 focus:ring-(--accent-2)"
        placeholder="Usuario"
        type="text"
      />
      <input
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="h-11 rounded-xl border border-(--border) bg-transparent px-4 text-white placeholder:text-(--muted) focus:outline-none focus:ring-2 focus:ring-(--accent-2)"
        placeholder="Contrasena"
        type="password"
      />
      <button
        type="submit"
        className="h-11 rounded-xl bg-(--accent) text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={loading}
      >
        {loading ? "Verificando..." : "Entrar"}
      </button>
      {error && <p className="text-xs text-red-300">{error}</p>}
    </form>
  );
};
