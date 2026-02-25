export function SocialLink({ link, name }: { link: string, name: string }) {
  return (
    <p>
      {name}:{" "}
      <a
        className="text-white underline decoration-(--accent-2) decoration-2 underline-offset-4"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {link}
      </a>
    </p>
  );
};
