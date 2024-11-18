import { Candidate } from "../../../domain/entities/Candidate";
import { ICandidateRepository } from "../../../domain/respositories/ICandidateRepository";
import { IResponseAddCandidateHTTP } from "../../../infrastructure/interfaces/IResponseAddCandidateHTTP";

export class UseAddCandidate {
  private candidateRepository: ICandidateRepository;

  constructor(candidateRepository: ICandidateRepository) {
    this.candidateRepository = candidateRepository;
  }

  async execute(candidate: Candidate): Promise<IResponseAddCandidateHTTP> {
    if (this.candidateRepository.add) {
      const response = await this.candidateRepository.add(candidate);
      return response;
    } else {
      throw new Error("Add method is not defined on candidate repository");
    }
  }
}
