document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-btn]');
    const tabsContainer= document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            const tabAdd = btn.target.dataset.tabBtn;
            const tab = document.querySelector(`[data-tab-id=${tabAdd}]`);
            hideAllTabs();
            tab.classList.add('shows__list--active');
            hideBtnActive();
            btn.target.classList.add('shows__tabs__button--active');
        })
    }

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(e){
    const classe ='faq__questions__item--is-open';
    const elementoPai = e.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function hideBtnActive(){
    const buttons = document.querySelectorAll('[data-tab-btn]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--active');
    }

}

function hideAllTabs(){
    const tabsContainer= document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--active');
    }
}