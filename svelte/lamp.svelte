<script>
  let ligada = true;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: background-color 0.5s ease;
  }

  .lampada {
    width: 200px;
    height: auto;
    transition: opacity 0.5s ease;
    margin-bottom: 20px;
  }

  .btn {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
  }
</style>

<div class="container" style="background-color: {ligada ? '#ffffff' : '#000000'}">
  <img
    src={ligada ? 'lampada-acesa.png' : 'lampada-apagada.png'}
    alt="Lâmpada"
    class="lampada"
    style="opacity: {ligada ? 1 : 0.5}"
  />

  <button class="btn" on:click={() => (ligada = !ligada)}>
    Switch
  </button>
</div>
