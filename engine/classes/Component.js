// Class Component represents a component that can be attached to a GameObject

class Component{
    parent = null
    get transform(){
        return this.parent.transform
    }
}

window.Component = Component