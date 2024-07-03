import { Center } from "./center";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="p-4 rounded-xl bg-[#e0e0e0] shadow-custom">
      <div className="text-xl font-medium pb-2 border-b border-gray-400">{title}</div>
      <div>
        <Center>{children}</Center>
      </div>
    </div>
  );
}
