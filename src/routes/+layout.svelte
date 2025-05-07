<!-- src/routes/+layout.svelte -->
<slot />

<style>
  :global(::selection) {
    color: white;
    background: #9354BF;
  }

  :global(::-moz-selection) {
    color: white;
    background: #9354BF;
  }
</style>
