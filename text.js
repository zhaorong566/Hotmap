document.addEventListener('DOMContentLoaded', () => {
    const mapCards = document.querySelectorAll('.map-card');
    const tooltip = document.getElementById('tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDescription = document.getElementById('tooltip-description');

    mapCards.forEach(card => {
        card.addEventListener('mousemove', (event) => {
            const title = card.dataset.title;
            const description = card.dataset.description;

            tooltipTitle.textContent = title;
            tooltipDescription.textContent = description;

            let x = event.clientX + 15;
            let y = event.clientY + 15;

            if (x + tooltip.offsetWidth + 20 > window.innerWidth) {
                x = event.clientX - tooltip.offsetWidth - 15;
            }
            if (y + tooltip.offsetHeight + 20 > window.innerHeight) {
                y = event.clientY - tooltip.offsetHeight - 15;
            }

            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;

            tooltip.classList.add('visible');
        });

        card.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });

        // 添加点击事件用于放大
        card.addEventListener('click', () => {
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modal-img');
            const captionText = document.getElementById('modal-caption');

            const img = card.querySelector('img');
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.textContent = card.dataset.title;

            document.body.style.overflow = 'hidden';
        });
    });

    // 关闭模态框按钮
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal-close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
});
