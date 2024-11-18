import { Candidate } from "../../domain/entities/Candidate";
import { ICandidateRepository } from "../../domain/respositories/ICandidateRepository";
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
}
