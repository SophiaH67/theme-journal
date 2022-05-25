import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  left: boolean;
}

export default function SegmentDescription({ children, left }: Props) {
  return (
    <div className="relative my-8 pb-4 text-xl text-gray-700 md:text-2xl">
      <p className="m-2 max-w-3xl text-white md:mx-16 md:p-0">
        {/* This text exists so that the CSS parser calculates height properly */}
        {children}
      </p>
      <p
        className={classNames(
          "absolute top-0 m-2 max-w-3xl md:mx-16 md:p-0",
          left ? "left-0" : "right-0"
        )}
      >
        {children}
      </p>
    </div>
  );
}
