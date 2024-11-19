import { ICandidateRepository } from "../../../domain/repositories/ICandidateRepository";

export class UseGetAllCandidate {
  private candidateRepository: ICandidateRepository;

  constructor(candidateRepository: ICandidateRepository) {
    this.candidateRepository = candidateRepository;
  }

  async execute(): Promise<any> {
    const response = await this.candidateRepository.getAllCandidates();
    return response;
  }
}
