import classNames from "classnames";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: string | StaticImageData;
  children: React.ReactNode;
  className?: string;
  left: boolean;
}

export default function Segment({ children, left, image, className }: Props) {
  return (
    <div
      className={classNames(
        "mx-0 mb-16 min-h-[20rem] rounded-3xl bg-cover",
        className
      )}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        className={classNames(
          "bg-gradient h-full min-h-[20rem] w-full rounded-3xl from-transparent via-fuchsia-600 to-sky-400 bg-cover text-gray-200",
          left ? "bg-gradient-to-l" : "bg-gradient-to-r"
        )}
      >
        <div
          className={classNames(
            "flex w-full px-2 py-3 lg:px-6 lg:py-8",
            left ? "flex-row" : "flex-row-reverse"
          )}
        >
          <div className="table h-full w-full max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
