import { Candidate } from "../../domain/entities/Candidate";
import { ICandidateRepository } from "../../domain/repositories/ICandidateRepository";
import { IResponseAddCandidateHTTP } from "../interfaces/IResponseAddCandidateHTTP";

import { HttpAdapter } from "../../config/adapters/http/http.adapter";

export class HttpCandidateRepository implements ICandidateRepository {
  private fetcher: HttpAdapter;

  constructor(fetcher: HttpAdapter) {
    this.fetcher = fetcher;
  }

  async add(candidate: Candidate): Promise<IResponseAddCandidateHTTP> {
    const response = await this.fetcher.post<IResponseAddCandidateHTTP>(
      `recruitment/v1/candidates`,
      { ...candidate }
    );
    return response;
  }

  async getAllCandidates(): Promise<Candidate[]> {
    try {
      const response = await this.fetcher.get<Candidate[]>(
        `/recruitment/v1/vacancies/53ba9e95-2e7c-46a1-83ad-41af90f0cf85/candidates`
      );

      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async updateCandidate(candidate: Candidate): Promise<any> {
    try {
      const response = await this.fetcher.put<any>(
        `recruitment/v1/candidates/${candidate.id}`,
        { ...candidate }
      );
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
