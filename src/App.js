import React from 'react';
import Something from './Something';
import Main from './Main.js';
import Test from './Test.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currPage: "main",
        };

        this.setPage = this.setPage.bind(this);
    }

    setPage(page) {
        this.setState({ currPage: page });
    }

    render() {
        let content;
        switch (this.state.currPage) {
            case "test":
                content = <Test setPage={this.setPage} />;
                break;
            case "main":
                content = <Main setPage={this.setPage} />;
                break;
            default:
                content = <h1>Error, choose a page</h1>;
        }

        return (
            <div className="div-bg" >
                {content}
            </div>
        )
    }
}
export default App;
