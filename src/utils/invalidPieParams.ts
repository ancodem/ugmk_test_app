export default function invalidPieParams(factoryId: number, monthNumber: number): boolean {
  return Boolean(!factoryId || factoryId > 2 || monthNumber || monthNumber > 12);
}

