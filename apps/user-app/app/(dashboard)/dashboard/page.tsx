import { Card } from "@repo/ui/card";
import BalanceChart from "../../../components/BalanceChart";

export default function (){



    return <div className="w-full h-screen">
    <div className="flex flex-col">
      <div className="text-4xl font-bold text-violet-500">Dashboard</div>
      <div className="lg:w-1/3 m-5">
      
      <BalanceChart />
      </div>
    </div>
  </div>
}