<script>
    let turned = true;
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
  
    .lamp {
      width: 200px;
      height: auto;

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
  
  <div class="container" style="background-color: {turned ? '#ffffff' : '#000000'}">
    <img
      src={turned ? 'bulb-on.png' : 'bulb-off.png'}
      alt="lamp"
      class="lamp"
      style="opacity: {turned ? 1 : 0.5}"
    />
  
    <button class="btn" on:click={() => (turned = !turned)}>
      Switch
    </button>
  </div>
  