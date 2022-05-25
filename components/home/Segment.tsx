import classNames from "classnames";

interface Props {
  image: string;
  children: React.ReactNode;
  className?: string;
  left: boolean;
}

export default function Segment({ children, left, image, className }: Props) {
  return (
    <div
      className={classNames(
        "relative h-[20rem] rounded-3xl bg-cover",
        className
      )}
    >
      <div
        className={classNames(
          "absolute top-0 left-0 h-[20rem] w-full bg-cover bg-center bg-no-repeat md:w-1/2",
          { "md:ml-[50%]": left }
        )}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div
        className={classNames(
          "absolute top-0 left-0 h-[20rem] w-full rounded-3xl from-black via-black to-black bg-cover text-gray-200 opacity-30 md:from-transparent md:via-fuchsia-600 md:to-sky-400 md:opacity-100",
          left ? "bg-gradient-to-l" : "bg-gradient-to-r"
        )}
      ></div>
      <div className="absolute top-0 left-0 h-[20rem] w-full rounded-3xl text-gray-200">
        <div
          className={classNames(
            "flex w-full px-2 py-3 lg:px-6 lg:py-8",
            left ? "flex-row" : "flex-row-reverse"
          )}
        >
          <div className="table h-[17rem] w-full max-w-2xl md:h-[14rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
