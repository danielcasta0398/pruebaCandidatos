import { Candidate } from "../../../domain/entities/Candidate";
import { ICandidateRepository } from "../../../domain/repositories/ICandidateRepository";

export class UseCaseUpdateCandidate {
  private candidateRepository: ICandidateRepository;

  constructor(candidateRepository: ICandidateRepository) {
    this.candidateRepository = candidateRepository;
  }

  async execute(candidate: Candidate): Promise<any> {
    const response = await this.candidateRepository.updateCandidate(candidate);
    return response;
  }
}
