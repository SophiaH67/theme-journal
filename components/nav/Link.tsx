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
      <a className="text-gray-700 m-4 text-xl">{children}</a>
    </NextLink>
  );
}
