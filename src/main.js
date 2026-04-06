import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribe-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById('email').value;
      const button = form.querySelector('button');
      
      if (emailInput) {
        // Change button to loading state
        const originalText = button.innerHTML;
        button.innerHTML = 'Sending...';
        button.disabled = true;

        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
              subject: 'New Consultation Request!',
              email: emailInput,
              message: `A founder has requested to connect. Their email is: ${emailInput}`
            })
          });

          const result = await response.json();

          if (result.success) {
            form.querySelector('input').style.display = 'none';
            button.style.display = 'none';
            
            formMessage.textContent = 'Thanks for reaching out! We will be in touch within 24 hours.';
            formMessage.style.color = '#fff';
            formMessage.style.marginTop = '16px';
            formMessage.classList.remove('hidden');
          } else {
            throw new Error('Form submission failed');
          }
        } catch (error) {
          button.innerHTML = originalText;
          button.disabled = false;
          
          formMessage.textContent = 'Oops! Something went wrong. Please try emailing us directly.';
          formMessage.style.color = '#ff8fa3';
          formMessage.style.marginTop = '16px';
          formMessage.classList.remove('hidden');
        }
      }
    });
  }
});
