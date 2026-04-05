import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribe-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      // Prevent default page reload
      e.preventDefault();
      
      const emailInput = document.getElementById('email').value;
      
      if (emailInput) {
        // NOTE: Here you can place your Formspree or Web3Forms logic
        // For example:
        // fetch('https://formspree.io/f/YOUR_ENDPOINT_HERE', {
        //   method: 'POST',
        //   body: new FormData(form),
        //   headers: {
        //     'Accept': 'application/json'
        //   }
        // })
        
        // Simulating a successful submission state update dynamically
        form.querySelector('input').style.display = 'none';
        form.querySelector('button').style.display = 'none';
        
        formMessage.textContent = 'Thanks for subscribing! We will be in touch soon.';
        formMessage.classList.remove('hidden');
      }
    });
  }
});
