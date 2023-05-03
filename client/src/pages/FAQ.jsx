import React from 'react';

const Faq = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-3'>FAQ проекта AuctionWeb</h1>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Q: Что такое онлайн аукционы?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A: Онлайн аукционы - это интернет-формат торгов, в котором участники могут делать ставки на определенные товары и услуги.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q: Как зарегистрироваться на онлайн аукционе?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A: Чтобы зарегистрироваться на онлайн аукционе, вам нужно создать аккаунт на сайте аукциона и заполнить свои данные. После регистрации вы сможете участвовать в торгах.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q: Как победить на онлайн аукционе?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A: Чтобы победить на онлайн аукционе, вам нужно смотреть за текущей ценой на лот и делать свои ставки стратегически, чтобы перебить других участников.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Q: Как происходит оплата на онлайн аукционе?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A: Данный проект является курсовой работой, в которой нет оплаты, как таковой. Данный сайт представлен в ознакомительных и научных целях.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Q: Какой принцип работы ставок у вашего проекта?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A: У лота есть время начала ставок и время конца ставок. Когда время подходит к концу, лот убирается из выдачи, а у победителя он отобразится во вкладке "Победы".
                            <br/>Также у лота есть стартовая цена и цена шага. Стартовая цена является номиналом, а претендент на покупку данного лота должен поднять шаг, тем самым увеличив цену номинала или уже имеющегося шага у оппонента.
                            <br/>Мы боремся с людьми, ставящими в последнюю секунду, добавив скрипт "отсрочки". Когда до конца ставок остается менее 10 минут, то любая ставка добавит 5 минут к времени окончания ставок.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Q: Какие товары/услуги будут продаваться чаще остальных?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            A: В нашем проекте особое предпочтение отдается антиквариату и памятным вещам.
                            <br/> Это не означает, что будут продаваться только товары данного типа. Следите за панелью лотов!
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Faq;