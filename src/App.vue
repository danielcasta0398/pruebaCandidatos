<script setup lang="ts">
import { UseGetAllCandidate } from "./application/useCases/useCandidate/UseCaseGetAllCandidate";
import { UseCaseGetStateVacantes } from "./application/useCases/useCaseVacante/UseCaseGetStateVacantes";
import MainContent from "./components/layout/MainContent.vue";
import { backFetch } from "./config/adapters/backFetch.adapter";
import { HttpCandidateRepository } from "./infrastructure/repositories/HttpCandidateRepository";
import { HttpVacanteRepository } from "./infrastructure/repositories/HttpVacanteRepository";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { onMounted } from "vue";

onMounted(async () => {
  const vacanteRepository = new HttpVacanteRepository(backFetch);
  const candidateRepository = new HttpCandidateRepository(backFetch);
  const getAllCandidates = new UseGetAllCandidate(candidateRepository);
  const useCaseGetAllVacancieStates = new UseCaseGetStateVacantes(
    vacanteRepository
  );

  const candidates = await getAllCandidates.execute();
  const vacancieStates = await useCaseGetAllVacancieStates.execute();

  console.log("getAllCandidates", candidates);
  console.log("useCaseGetAllVacancieStates", vacancieStates);
});
</script>
<template>
  <div class="h-screen flex bg-gray-100">
    <div class="flex flex-col flex-grow">
      <DefaultLayout>
        <MainContent />
      </DefaultLayout>
    </div>
  </div>
</template>
