export type Log = {
  slug: string;
  route: string;
  type: "error" | "warning" | "info";
  body: unknown;
};

export type LogSystem = (data: Log) => void;

export const newLog: LogSystem = data => {};
