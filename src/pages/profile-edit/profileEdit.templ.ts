export default `
.container
    .row
        .col
            a(
                href="/index.html"
                class="btn-icon btn-icon_size_l mt-20"
                title="К чату"
            )
                i.material-icons arrow_back
            
        
    
    section.row.justify-content-center.profile
        .col-6.text_align_center
            form
                .row
                    .col-12
                        label(
                            class="cursor-pointer"
                            title="Поменять фото"
                        )
                            img(
                                src="/img/bg.jpg"
                                alt="Александр Щеголь"
                                class="profile__img"
                            )
                            input(
                                type="file"
                                name="avatar"
                                hidden
                            )
    
                .row.mt-40
                    .col-6
                        | !{inputName}
    
                    .col-6
                        | !{inputSecondName}
    
                .row.mt-20
                    .col-6
                        | !{inputDisplayName}
    
                    .col-6
                        | !{inputLogin}
    
                .row.mt-20
                    .col-6
                        | !{inputEmail}
    
                    .col-6
                        | !{inputPhone}
    
                .row.mt-20
                    .col-12
                        h5.text_align_left Сменить пароль
    
                .row.mt-10
                    .col-12
                        | !{inputOldPassword}
    
                .row.mt-20
                    .col-6
                        | !{inputNewPassword}
    
                    .col-6
                        | !{inputNewPasswordCheck}
    
                .row.mt-40
                    .col-12
                        | !{buttonSubmit}
    
            p.text_align_center.mt-20
                a(
                    href="/profile.html"
                    class="text_color_red"
                )
                  | Отмена
`