
document.addEventListener("DOMContentLoaded", function () {
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const addDisciplineBtn = document.getElementById('ctn-button-add');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-modal');
    const addContentBtn = document.getElementById('add-content');
    const listContents = document.getElementById('list-contents');
    const form = document.querySelector('form');

    openSidebarBtn.addEventListener('click', function () {
        sidebar.classList.add('active');
    });

    closeSidebarBtn.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    addDisciplineBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    addContentBtn.addEventListener('click', function () {
        const contentDiscipline = document.createElement('div');
        contentDiscipline.className = 'content-displine d-flex mb-3';
        contentDiscipline.innerHTML = `
            <input type="text" id="content-discipline" class="form-control" placeholder="Conteúdo">
            <div class="del-content fs-4 ms-2"><i class="bi-dash-circle text-danger"></i></div>
        `;
        listContents.appendChild(contentDiscipline);

        const delContentBtn = contentDiscipline.querySelector('.del-content');
        delContentBtn.addEventListener('click', function () {
            listContents.removeChild(contentDiscipline);
        });
    });

    listContents.addEventListener('click', function (event) {
        if (event.target.classList.contains('bi-dash-circle')) {
            event.target.closest('.content-displine').remove();
        }
    });

    document.querySelectorAll('.modal-content .day').forEach(day => {
        day.addEventListener('click', function () {
            day.classList.toggle('selected');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const discipline = document.getElementById('name-discipline').value;
        const days = document.querySelectorAll('.day.selected');
        const contents = document.querySelectorAll('#content-discipline');

        // API
        let jsonNewDiscipline = {
            discipline,
            days: Array.from(days).map(day => day.textContent),
            contents: Array.from(contents).map(content => content.value)
        }

        modal.style.display = 'none';
    });
});
