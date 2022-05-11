<template>
  <div class="notes">
    <div class="card" v-for="i in 3">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nesciunt quam laborum quisquam fugiat labore
          ducimus architecto libero unde facere illo iure, aliquid repellat quasi excepturi ab omnis laudantium
          asperiores?
        </div>
      </div>

      <footer class="card-footer">
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<style>
.card {
  margin: 1rem;
}

@media (min-width: 1023px) {
  .card {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>
