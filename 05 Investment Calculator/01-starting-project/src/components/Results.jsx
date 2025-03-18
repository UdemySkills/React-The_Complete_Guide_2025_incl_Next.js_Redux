import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  console.log(input);
  return <>resultData.map()</>;
}
