export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const LOAD_DURATION_MS = 2000

export const loadMock = async (): Promise<string> => {
  await sleep(LOAD_DURATION_MS);
  return "MOCK";
};