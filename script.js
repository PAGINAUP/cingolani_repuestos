document.addEventListener('DOMContentLoaded', () => {
    // Search form simulation
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');

    if(searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            searchResults.classList.remove('hidden');
            searchResults.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> Buscando stock en sistema...</p>';
            
            setTimeout(() => {
                searchResults.innerHTML = `
                    <p><strong>Hemos recibido tu búsqueda.</strong></p>
                    <p>Por favor contactate por <a href="#contacto" style="color:var(--primary-color); font-weight:bold;">WhatsApp</a> o completá el pedido especial para confirmarte disponibilidad y precio.</p>
                `;
            }, 1000);
        });
    }

    // Order form dummy
    const orderForm = document.getElementById('order-form');
    if(orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Presupuesto solicitado con éxito! Nos comunicaremos a la brevedad.');
            orderForm.reset();
        });
    }

    // Chatbot Toggle
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot');
    const chatbotClose = document.getElementById('chatbot-close');
    
    if(chatbotToggle && chatbotContainer && chatbotClose) {
        chatbotToggle.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
        });

        chatbotClose.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });
    }

    // Chatbot send message
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatbotBody = document.getElementById('chatbot-body');

    const sendMessage = () => {
        const text = chatInput.value.trim();
        if(text) {
            // User message
            const userMsg = document.createElement('div');
            userMsg.className = 'chat-message user';
            userMsg.textContent = text;
            chatbotBody.appendChild(userMsg);
            
            chatInput.value = '';
            chatbotBody.scrollTop = chatbotBody.scrollHeight;

            // Bot response
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'chat-message bot';
                botMsg.textContent = 'Gracias. Registramos tu consulta. El lunes por la mañana nos pondremos en contacto con vos.';
                chatbotBody.appendChild(botMsg);
                chatbotBody.scrollTop = chatbotBody.scrollHeight;
            }, 1000);
        }
    };

    if(chatSend && chatInput) {
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') sendMessage();
        });
    }
});
