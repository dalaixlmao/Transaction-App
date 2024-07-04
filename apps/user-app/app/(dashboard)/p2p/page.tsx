import SendCard from "../../../components/SendCard";

export default function () {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col">
        <div className="text-4xl font-bold text-violet-500">
          Transfer by phone number
        </div>
        <div className="md:w-1/3 m-5">
          <SendCard />
        </div>
      </div>
    </div>
  );
}
