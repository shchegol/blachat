export default `
.container
    .row
        .col
            | !{buttonBack}
            
        
    
    section.row.justify-content-center.profile
        .col-6.text_align_center
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
                            
            | !{form}
`