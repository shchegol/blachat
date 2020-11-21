export default `
if !classes
    - classes = ""
    
div(
    id=id
    _key=_key
    class="dropdown " + classes
)
    button(
        type="button"
        class="btn-icon"
    )
        if iconName
            i.material-icons #{iconName}
        else
            #{text}
            
    
    ul.dropdown__content
        if renderedItems.length > 0
        each item in renderedItems
            | !{item}
`;