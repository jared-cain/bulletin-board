var  MyComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
});

ReactDOM.render(<div>
    <MyComponent text="Hello World!">
        This is a Hello
    </MyComponent>
    <MyComponent text="How ya der'rn?">
        This is a hur ya der'rn?
    </MyComponent>
    <MyComponent text="Goodbye!">
        This is a goodbye!
    </MyComponent>
    </div>, document.getElementById("container"));