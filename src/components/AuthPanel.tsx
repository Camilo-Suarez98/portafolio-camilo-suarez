"use client";

import { useEffect, useState } from "react";

type AuthPanelProps = {
  onSuccess: () => void;
  demoCredentials: {
    user: string;
    password: string;
  };
};

type StoredUser = {
  user: string;
  password: string;
};

const STORAGE_KEY = "portfolio_auth_user";

const getStoredUser = (): StoredUser | null => {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
};

const saveStoredUser = (user: StoredUser) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

export function AuthPanel({ onSuccess, demoCredentials }: AuthPanelProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const seedFromEnv = async () => {
      const existing = getStoredUser();
      try {
        const response = await fetch("/api/login", {
          method: "GET",
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Seed failed");
        const data = (await response.json()) as {
          user?: string;
          password?: string;
        };
        if (!isMounted) return;
        if (data.user && data.password) {
          saveStoredUser({
            user: data.user,
            password: data.password,
          });
          setUser(data.user);
          return;
        }
      } catch {
        if (!isMounted) return;
        if (!existing) {
          saveStoredUser({
            user: demoCredentials.user,
            password: demoCredentials.password,
          });
          setUser(demoCredentials.user);
        }
      }
    };
    seedFromEnv();
    return () => {
      isMounted = false;
    };
  }, [demoCredentials.password, demoCredentials.user]);

  const handleLogin = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setError(null);
    setLoading(true);
    const stored = getStoredUser();
    if (!stored) {
      setLoading(false);
      setError("No existe un usuario registrado. Crea uno primero.");
      return;
    }
    if (stored.user === user.trim() && stored.password === password.trim()) {
      setLoading(false);
      onSuccess();
      return;
    }
    setLoading(false);
    setError("Credenciales invalidas.");
  };

  const handleRegister = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setError(null);
    setLoading(true);
    if (!user.trim() || !password.trim()) {
      setLoading(false);
      setError("Completa usuario y contrasena.");
      return;
    }
    saveStoredUser({
      user: user.trim(),
      password: password.trim(),
    });
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-(--border) bg-black/30 p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-(--muted)">
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`rounded-full px-3 py-1 transition ${mode === "login"
            ? "bg-white/10 text-white"
            : "hover:text-white"
            }`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setMode("register")}
          className={`rounded-full px-3 py-1 transition ${mode === "register"
            ? "bg-white/10 text-white"
            : "hover:text-white"
            }`}
        >
          Registro
        </button>
      </div>

      {mode === "login" ? (
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <label className="text-xs uppercase tracking-[0.2em] text-(--muted)">
            Accede con usuario y contrasena
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
            disabled={loading}
            className="h-11 rounded-xl bg-(--accent) text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Verificando..." : "Entrar"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <label className="text-xs uppercase tracking-[0.2em] text-(--muted)">
            Crea tu usuario
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
            disabled={loading}
            className="h-11 rounded-xl bg-(--accent) text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Guardando..." : "Registrar"}
          </button>
        </form>
      )}
      {error && <p className="text-xs text-red-300">{error}</p>}
    </div>
  );
}
