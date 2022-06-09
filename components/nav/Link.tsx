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
      <a className="text-md mx-1 text-gray-700 md:m-4 md:text-3xl">
        {children}
      </a>
    </NextLink>
  );
}
