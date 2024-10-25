function displayDomain(): void {
    const siteTitleElement = document.querySelector<HTMLElement>('.site-title');
    const hostname = window.location.hostname;
    const domainParts = hostname.split('.');

    const domainName = domainParts.length >= 2 ? domainParts.slice(-2).join('.') : hostname;

    if (siteTitleElement) {
        siteTitleElement.innerHTML = domainName;
    }

    document.title = domainName;
}

window.addEventListener('load', displayDomain);
