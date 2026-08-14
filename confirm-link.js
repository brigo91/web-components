class ConfirmLink extends HTMLAnchorElement {
	connectedCallback() {
		this.addEventListener('click', event => {
			if (!confirm('Are you sure you want to leave this page?')) {
				event.preventDefault();
			}
		});
	}
}

customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' });
