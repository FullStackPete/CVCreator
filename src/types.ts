export type resumeType = {
  name: string;
  lastname: string;
  desiredpos: string;
  about: string;
  phone: string;
  email: string;
  uniname: string;
  major: string;
  position: string;
  company: string;
  workYears: string;
  studyYears: string;
};
export type schoolExpType = {
  id: number;
  uniname: string;
  major: string;
  studyYears: string;
};
export type workExpType = {
  id: number;
  company: string;
  position: string;
  workYears: string;
};
export type formType =
  | "UtilitiesForm"
  | "BasicForm"
  | "SchoolForm"
  | "WorkForm"
  | null;

export type setImageType = React.Dispatch<React.SetStateAction<File | null>>;

export type UtilitiesFormType = {
  showDeleteOutput: boolean;
  handleOutputDelete: () => void;
  loadExampleData: () => void;
  setImage: setImageType; // lub odpowiedni typ dla obrazka
  downloadCV: () => void;
};
