function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function search() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll('ul li.theme');

    items.forEach(item => {
        const headerText = item.querySelector('.theme-title').textContent.toLowerCase();
        const contentText = item.querySelector('.theme-content').textContent.toLowerCase();
        if (headerText.includes(filter) || contentText.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleContent(header) {
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.theme-content');
    allContents.forEach(c => {
        if (c !== content) {
            c.style.display = 'none';
        }
    });
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

function updateStatus(button, theme, status) {
    const label = button.parentElement.previousElementSibling.previousElementSibling;
    label.textContent = status === 'read' ? 'Прочитано' : 'К прочтению';
    label.style.borderColor = status === 'read' ? 'var(--status-read)' : 'var(--status-to-read)';
    label.style.color = status === 'read' ? 'var(--status-read)' : 'var(--status-to-read)';
    localStorage.setItem(theme, status);
    button.parentElement.style.display = 'none';
}

function showStatusMenu(icon) {
    const menu = icon.nextElementSibling;
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function loadStatuses() {
    const themes = document.querySelectorAll('.theme-title');
    themes.forEach(theme => {
        const themeName = theme.textContent.trim();
        const status = localStorage.getItem(themeName) || 'to-read';
        const label = theme.nextElementSibling;
        label.textContent = status === 'read' ? 'Прочитано' : 'К прочтению';
        label.style.borderColor = status === 'read' ? 'var(--status-read)' : 'var(--status-to-read)';
        label.style.color = status === 'read' ? 'var(--status-read)' : 'var(--status-to-read)';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);

    // Add event listeners for theme headers
    const themeHeaders = document.querySelectorAll('.theme-header');
    themeHeaders.forEach(header => {
        header.addEventListener('click', () => {
            toggleContent(header);
        });
    });

    // Load statuses from localStorage
    loadStatuses();
});
