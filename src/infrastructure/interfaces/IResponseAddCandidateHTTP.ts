export interface IResponseAddCandidateHTTP {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: string;
  companyId: string;
  vacancy: Vacancy;
  vacancyId: string;
  firstName: string;
  lastName: string;
  email: null;
  phone: string;
  type: string;
  statusId: string;
  status: Status;
  linkedInURL: null;
  desiredSalary: null;
  startWorkDate: null;
  evaluation: null;
  web: null;
  location: null;
  hasDocument: boolean;
  comment: null;
  appliedAt: null;
  threadId: null;
  lastComment: null;
  numComments: number;
  imageProfileURL: null;
  checklist: null;
  createdAt: Date;
  updatedAt: Date;
  employeeId: null;
}

export interface Status {
  id: string;
  name: string;
  color: string;
  order: number;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
  icon: string;
  vacancyId: string;
  count: number;
}

export interface Vacancy {
  id: string;
  companyId: string;
  name: string;
  description: string;
  department: null;
  contractType: string;
  experience: null;
  createdById: string;
  status: string;
  openedAt: null;
  employeeFollowCount: number;
  candidateCount: number;
  createdAt: Date;
  updatedAt: Date;
  public: boolean;
  addressCountry: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  addressLine1: string;
  salaryRange: null;
  expectedEducation: string;
  expectedExperience: null;
  modality: null;
  locationVacancy: null;
  scheduleType: Category;
  category: Category;
  managers: number;
  numberOfNotifications: number;
  managersNotification: any[];
  indeedPublic: boolean;
  isInfojobs: boolean;
  infoJobsPublic: boolean;
  numberOfVacancies: null;
  scheduleTypeInfoJobs: string;
  contractTypeInfojobs: string;
  evaluationId: null;
  jobIndustryId: string;
  jobSubindustryId: string;
  levelId: string;
  infojobsVacancyId: string;
  aiAutomaticAnalysis: boolean;
  totalPositions: number;
  availablePositions: number;
  threadId: string;
  lastComment: null;
  numComments: number;
  primaryView: null;
  secondaryView: any[];
  vacancyUrl: null;
  linkedInCompanyId: null;
  linkedInCompanyName: null;
  linkedInPublic: boolean;
  formFields: FormFields;
  image: null;
}

export interface Category {
  id: string;
  companyId: string;
  name: string;
  createdAt: Date;
}

export interface FormFields {
  cv: boolean;
  email: boolean;
  phone: boolean;
  fullNames: boolean;
}

export interface Meta {
  currentPage: number;
  lastPage: number;
  total: number;
  perPage: number;
}
