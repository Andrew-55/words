export type IrregularVerbType = {
  id: string;
  infinitive: string;
  translation: string;
};

export type IrregularVerbsType = {
  getAllVerbs: IrregularVerbType[];
};
