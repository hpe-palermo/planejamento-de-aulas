
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
    const calendar = document.querySelector('#calendar');
    const daysOfMonth = document.querySelector('#days-of-month');

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

        modal.style.display = 'none';
    });

    function createCalendar() {
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        document.getElementById('month').textContent = `${monthNames[currentMonth]} ${currentYear}`;
        let currentDay = firstDayOfMonth.getDay();
        let daysWeek = 0;
        let newWeek = document.createElement('div');
        newWeek.classList.add('week-of-month');
        let day = document.createElement('div');

        for (let i = 0; i < currentDay; i++) {
            day = document.createElement('div');
            day.classList.add('day-of-month');
            day.textContent = '';
            console.log(null)
            newWeek.appendChild(day);
            daysWeek++;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            day = document.createElement('div');
            day.classList.add('day-of-month');
            day.innerHTML = `<div>${i}</div>`;
            console.log(i)

            if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                day.classList.add('today');
            }

            newWeek.appendChild(day);
            daysWeek++;

            if (daysWeek % 7 === 0) {
                console.log('-------------------')
                daysOfMonth.appendChild(newWeek);
                newWeek = document.createElement('div');
                newWeek.classList.add('week-of-month');
            }
        }

    }

    createCalendar();
});
