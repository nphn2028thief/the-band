const buyTicketsBtn = document.querySelectorAll('.js-buy-ticket');
        const modal = document.querySelector('.js-modal');
        const modalClose = document.querySelector('.js-modal-close');
        const modalContainer = document.querySelector('.js-modal-container');

        // Close modal ticket
        function hideTicketModal() {
            modal.classList.remove('modal-open');
        }

        // Get buy ticket button
        for (const buyTicketBtn of buyTicketsBtn) {
            buyTicketBtn.addEventListener('click', function () {
                modal.classList.add('modal-open');
            })
        }

        // Modal close button
        modalClose.addEventListener('click', hideTicketModal);

        // Click in the space of the modal
        modal.addEventListener('click', hideTicketModal);

        // Prevent propagation behavior
        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation();
        })