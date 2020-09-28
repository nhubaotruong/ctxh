import { render, Component } from 'preact';

class App extends Component {
    render() {
        return (
            <div>
                Hello, this is test
            </div>
        )
    }
}

render(<App />, document.body);