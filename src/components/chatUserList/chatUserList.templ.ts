export default `
if !classes
    - classes = ""

ul(
    id=id
    _key=_key
    class="user-list " + classes
)
    if renderedItems.length > 0
        each item in renderedItems
            | !{item}
`;