import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black grid place-items-center px-6">
      <div className="text-center">
        <Image
          src="/logo.PNG"
          alt="DK Motors"
          width={92}
          height={92}
          priority
          className="mx-auto opacity-90"
        />
        <div className="mt-6 h-px w-40 mx-auto bg-gradient-to-r from-transparent via-red-600/70 to-transparent" />
        <p className="mt-4 text-sm text-gray-400 tracking-widest">LOADING</p>
      </div>
    </div>
  );
}
