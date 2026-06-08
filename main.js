document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const emailCliente = document.getElementById('email-cliente').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const destino = ['F.Nardoni', 'outlook.com.br'].join('@');
    const assunto = 'Interesse: Recuperação de Crédito Perante a Receita Federal';
    const corpo = 'Nome: ' + nome + '\nE-mail para retorno: ' + emailCliente + '\n\n' + mensagem;
    window.location.href = 'mailto:' + destino +
        '?subject=' + encodeURIComponent(assunto) +
        '&body=' + encodeURIComponent(corpo);
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 40);
}, { passive: true });

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => observer.observe(el));
} else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'));
}
