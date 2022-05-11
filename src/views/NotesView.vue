<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Add New Note</button>
        </div>
      </div>
    </div>

    <div class="card mb-4" v-for="i in 3">
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
