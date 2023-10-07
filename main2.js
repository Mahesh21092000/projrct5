const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label:'BTC',
        data:[29378,33537,49631,59095,36684,33572,48847,48116,61004],
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label:'ETH',
        data:[31500,41000,88800,26000,46000,32628,5000,3000,18656,24832,36844],
        borderColor: 'blue',
        borderWidth: 2
       
    }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  ///show or hide side bar
  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn');
  const sidebar = document.querySelector('sidebar');

  menuBtn.addEventListener('click', ()=>{
    sidebar.style.display = 'block';
  })
  closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
  })

  //change theame

  const themeBtn = document.querySelector('.theme-Btn');

  themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
  })