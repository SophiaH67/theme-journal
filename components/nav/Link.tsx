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
      <a className="text-md m-4 text-gray-700 md:text-3xl">{children}</a>
    </NextLink>
  );
}
