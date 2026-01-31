<template>
  <section class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-4">
      <!-- FUTURE STUDENTS -->
      <div
        class="relative bg-[url(/images/image1.jpeg)] bg-cover flex flex-col justify-between min-h-[400px] overflow-hidden feature-card feature-card-1">
        <div class="bg-blue-900/70 text-white p-9 flex flex-col justify-end h-full">
          <div>
            <div class="flex justify-center text-4xl mb-4">🐺</div>
            <h3 class="text-xl text-center font-bold mb-4">FUTURE STUDENTS</h3>
            <p class="text-sm opacity-90 leading-relaxed border-t-[1px] border-white pt-2">
              Bates' unique personality rests on the bedrock values of academic excellence,
              inclusivity, and social responsibility.
            </p>
          </div>
          <button class="mt-6 bg-white text-blue-900 text-bold px-5 py-2 rounded-md flex items-center gap-2 w-max transition-all duration-300 ease-in-out
         hover:translate-x-2 hover:text-zinc-950 hover:shadow-lg group">
            Learn More
            <span class="text-lg">››</span>
          </button>
        </div>

      </div>

      <!-- ACADEMIC PROGRAMS -->
      <div
        class="relative bg-[url(/images/image2.jpeg)] bg-cover flex flex-col justify-between min-h-[400px] overflow-hidden feature-card feature-card-2">
        <div class="bg-sky-900/70 text-white p-9 flex flex-col justify-end h-full">
          <div>
            <div class="text-4xl mb-4">💡</div>
            <h3 class="text-xl text-center font-bold mb-4">ACADEMIC PROGRAMS</h3>
            <p class="text-sm opacity-90 leading-relaxed border-t-[1px] border-white pt-2">
              A Bates education fosters intellectual inquiry and reflection,
              personal growth, and a commitment to the world beyond oneself.
            </p>
          </div>
          <button class="mt-6 bg-white text-sky-900 px-5 py-2 rounded-md flex items-center gap-2 w-max">
            Learn More
            <span class="text-lg">››</span>
          </button>
        </div>
      </div>

      <!-- CALENDARS & KEY DATES -->
      <div
        class="relative bg-[url(/images/image3.jpeg)] bg-cover flex flex-col justify-between min-h-[400px] overflow-hidden feature-card feature-card-3">
        <div class="bg-cyan-900/70 text-white p-9 flex flex-col justify-end h-full">
          <div>
            <div class="text-4xl mb-4">📣</div>
            <h3 class="text-xl text-center font-bold mb-4">CALENDARS & KEY DATES</h3>
            <p class="text-sm opacity-90 leading-relaxed border-t-[1px] border-white pt-2">
              Explore key academic dates, campus visits, public events,
              class schedules, alumni activities, arts, athletics, and more.
            </p>
          </div>
          <button class="mt-6 bg-white text-cyan-900 px-5 py-2 rounded-md flex items-center gap-2 w-max ">
            Learn More
            <span class="text-lg">››</span>
          </button>
        </div>
      </div>

      <!-- VIRTUAL CAMPUS TOURS -->
      <div
        class="relative bg-[url(/images/image4.jpeg)] bg-cover flex flex-col justify-between min-h-[400px] overflow-hidden feature-card feature-card-4">
        <div class="bg-teal-900/70 text-white p-10 flex flex-col justify-end h-full">
          <div>
            <div class="text-4xl mb-4">📍</div>
            <h3 class="text-xl text-center font-bold mb-4">VIRTUAL CAMPUS TOURS</h3>
            <p class="text-sm opacity-90 leading-relaxed border-t-[1px] border-white pt-2">
              Take a virtual tour, learn about admission and financial aid,
              and speak with current students.
            </p>
          </div>
          <Button label="Learn More" color="teal" bglatar="green-900" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../component/ui/ButtonComponent.vue'
</script>

<style scoped>
.feature-card {
  clip-path: polygon(0 12%, 100% 4%, 100% 100%, 0 100%);
}

/* Connected slanted tops from left to right */
.feature-card-1 {
  clip-path: polygon(0 -4%, 100% 4%, 100% 100%, 0 100%);
}

.feature-card-2 {
  clip-path: polygon(0 4%, 100% 12%, 100% 100%, 0 100%);
}

.feature-card-3 {
  clip-path: polygon(0 12%, 100% 18%, 100% 100%, 0 100%);
}

.feature-card-4 {
  clip-path: polygon(0 18%, 100% 2%, 100% 100%, 0 100%);
}
</style>
