export function NavLink({ link, name }: { link: string, name: string }) {
  return (
    <a
      className="transition hover:text-white"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
};