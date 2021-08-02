export type TFreqNode = {
  name: string;
} & (
  | {
      children: TFreqNode[];
    }
  | { value: number }
);
