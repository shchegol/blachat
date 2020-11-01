export default `
.chat
    aside.chat__side 
        header.chat__main-bar.chat__main-bar_no-border 
            a(
                href="profile.html"
                class="avatar"
                title="Профиль"
            )
                img(
                    src="/img/bg.jpg"
                    alt="Александр Щеголь"
                    class="avatar__img"
                )
            
            div.search
                form
                    label.input.input_inline 
                        span.input__icon 
                            i.material-icons search
                        
                        input(
                            type="text"
                            name="search"
                            class="input__field"
                            placeholder="Поиск по списку"
                            data-validation-type="text"
                        )
                
        div.chat__list 
            ul.user-list 
                li.user-list__item 
                    img(
                        src="/img/bg.jpg"
                        alt="Александр Щеголь"
                        class="user-list__avatar"
                    )
                    div.user-list__main 
                        h5.user-list__title Саша
                        p.user-list__text 
                            | Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        
                    
                    div.user-list__support 
                        time.user-list__date 20:00
                        span.badge 2
    
    main.chat__main 
        header.chat__main-bar 
            div.avatar 
                img(
                    src="/img/bg.jpg"
                    alt="Александр Щеголь"
                    class="avatar__img"
                )
            
            div.col 
                h5.title Саша
                p.subtitle Ровно 5 минут назад он был здесь
            
            div.col-auto 
                div.dropdown.dropdown_open_bl 
                    button(
                        type="button"
                        class="btn-icon"
                        title="Опции"
                    )
                        i.material-icons more_vert
                    
                    ul.dropdown__content 
                        li.dropdown__item 
                            i.material-icons edit
                            | Переименовать
                        
                        li.dropdown__item 
                            i.material-icons delete
                            | Удалить
    
        section.chat__messages 
            div.message-date 
                time.message-date__container 7 октября
    
                article.message-pack 
                    img(
                        src="/img/bg.jpg"
                        alt="Александр Щеголь"
                        class="message-pack__avatar"
                    )
    
                    div.message-pack__content 
                        div.message 
                            p.message__text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            div.message__support 
                                span.message__status 
                                    i.material-icons.done_all
                                
                                time.message__date 10:00
    
                        div.message 
                            p.message__text 
                                | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                | architecto aut, consectetur doloribus eaque est excepturi fugit id libero nam pariatur
                                | provident quis sed sit ut. Architecto atque doloremque quia.
                            div.message__support 
                                span.message__status 
                                    i.material-icons.done_all
                                
                                time.message__date 10:00
                            
                        
    
                        div.message message_status_read 
                            p.message__text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            div.message__support 
                                span.message__status 
                                    i.material-icons.done_all
                                
                                time.message__date 10:00
    
                article.message-pack.message-pack_answer 
                    img(
                        src="/img/bg.jpg"
                        alt="Александр Щеголь"
                        class="message-pack__avatar"
                    )
    
                    div.message-pack__content 
                        div.message message_status_read 
                            p.message__text 
                                | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                                | accusantium amet, cumque deleniti dolore dolorem, doloribus, ducimus eius eos illum
                                | ipsam
                                | non nostrum repudiandae rerum similique tenetur veniam veritatis voluptate.
                            
                            div.message__support 
                                span.message__status 
                                    i.material-icons.done_all
                                
                                time.message__date 10:00
                            
                        
                    
                
            
    
            div.message-date 
                time.message-date__container 8 октября
    
                article.message-pack 
                    img(
                        src="/img/bg.jpg"
                        alt="Александр Щеголь"
                        class="message-pack__avatar"
                    )
    
                    div.message-pack__content 
                        div.message 
                            p.message__text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            div.message__support 
                                span.message__status 
                                    i.material-icons.done_all
                                
                                time.message__date 10:00
                            
                        
    
                        div.message 
                            p.message__text 
                                | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                | architecto aut, consectetur doloribus eaque est excepturi fugit id libero nam pariatur
                                | provident quis sed sit ut. Architecto atque doloremque quia.
                            div.message__support 
                                span.message__status 
                                    i.material-icons.done_all
                                
                                time.message__date 10:00
                            
                        
    
                        div.message.message_status_read 
                            p.message__text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            div.message__support 
                                span.message__status 
                                    i.material-icons.done_all
                                
                                time.message__date 10:00
    
    
        div.chat__bottom-bar 
            div
                div.dropdown.dropdown_open_tr 
                    button(
                        type="button"
                        class="btn-icon"
                        title="Добавить файл"
                    )
                        i.material-icons attach_file
                    
    
                    ul.dropdown__content 
                        li.dropdown__item 
                            i.material-icons insert_photo
                            | Фото или Видео
                        
                        li.dropdown__item 
                            i.material-icons insert_drive_file
                            | Файл
                        
                        li.dropdown__item 
                            i.material-icons location_on
                            | Локация
            div.col
                form 
                    label.input.input_inline 
                        input(
                            class="input__field"
                            data-validation-type="text"
                        )
                    
            div
                button(
                    type="button"
                    class="btn-icon"
                    title="Отправить"
                )
                    i.material-icons send
`