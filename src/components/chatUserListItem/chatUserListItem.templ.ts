export default `
if !classes
    - classes = ""
    
li(
    id=id
    _key=_key
    class="user-list__item " + classes
    data-chat-id=_chatId
) 
    img(
        src=avatar
        alt=""
        class="user-list__avatar"
    )
    div.user-list__main 
        h5.user-list__title #{title}
        p.user-list__text #{text}
        
    if messageCount > 0 || date     
        div.user-list__support
            if date
                time.user-list__date #{date}
            if messageCount > 0
                span.badge #{messageCount}
`;