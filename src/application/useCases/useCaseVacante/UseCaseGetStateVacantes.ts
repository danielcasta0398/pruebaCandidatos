import { IVacanteRepository } from "../../../domain/repositories/IVacanteRepository";
import { IResponseAddCandidateHTTP } from "../../../infrastructure/interfaces/IResponseAddCandidateHTTP";

export class UseCaseGetStateVacantes {
  private vacanteRepository: IVacanteRepository;

  constructor(vacanteRepository: IVacanteRepository) {
    this.vacanteRepository = vacanteRepository;
  }

  async execute(): Promise<IResponseAddCandidateHTTP> {
    const response = await this.vacanteRepository.getAllStatesVacancies();
    return response;
  }
}
