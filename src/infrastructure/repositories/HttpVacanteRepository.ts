import { HttpAdapter } from "../../config/adapters/http/http.adapter";
import { IVacanteRepository } from "../../domain/repositories/IVacanteRepository";

export class HttpVacanteRepository implements IVacanteRepository {
  private fetcher: HttpAdapter;

  constructor(fetcher: HttpAdapter) {
    this.fetcher = fetcher;
  }

  async getAllStatesVacancies(): Promise<any> {
    try {
      const response = await this.fetcher.get<any>(
        `/recruitment/v1/candidate-status/53ba9e95-2e7c-46a1-83ad-41af90f0cf85`
      );

      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
