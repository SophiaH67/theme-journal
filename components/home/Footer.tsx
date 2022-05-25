export default function Footer() {
  return (
    <div className="flex w-full items-center justify-between bg-gray-300 px-4 py-4">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <a
          className="text-gray-600 hover:text-gray-700"
          href="https://github.com/marnixah"
        >
          Marnix
        </a>
      </p>
      <p className="text-sm text-gray-600">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        in the Netherlands
      </p>
    </div>
  );
}
