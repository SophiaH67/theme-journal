import { NextPage } from "next";
import { useRouter } from "next/router";

const OfflinePage: NextPage = () => {
  const router = useRouter();

  return (
    <div className="h-screen max-h-screen bg-gradient-to-b from-fuchsia-600 to-sky-400">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">You are offline.</h1>
          <p className="text-lg text-white">
            Please connect to the internet to view this page.
          </p>
          <button
            className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
