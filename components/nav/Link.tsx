import NextLink from "next/link";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NextLink href={href}>
      <a className="m-4 text-3xl text-gray-700">{children}</a>
    </NextLink>
  );
}
