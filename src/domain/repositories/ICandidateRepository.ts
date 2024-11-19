import { IResponseAddCandidateHTTP } from "../../infrastructure/interfaces/IResponseAddCandidateHTTP";
import { Candidate } from "../entities/Candidate";

export interface ICandidateRepository {
  add?(candidate: Candidate): Promise<IResponseAddCandidateHTTP>;
  getAllCandidates(): Promise<Candidate[]>;
  updateCandidate(candidate: Candidate): Promise<IResponseAddCandidateHTTP>;
}
