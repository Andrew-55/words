export type IrregularVerbCoupleType = {
  id: string;
  infinitive: string;
  translation: string;
};

export type IrregularVerbType = {
  id: string;
  infinitive: string;
  past: string;
  pastParticiple: string;
  translation: string;
};

export type IrregularVerbsCoupleType = {
  getAllVerbs: IrregularVerbCoupleType[];
};

export type IrregularVerbsType = {
  getAllVerbs: IrregularVerbType[];
};
