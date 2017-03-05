import React, {Component} from "react";

export default class ContentEditable extends Component
{
    constructor(props) {
        super(props);

        this.state = { content: this.props.content };
    }

    _updateContent = (event) => {
        let content = event.target.innerText;
        this.props.onContentUpdate(content);
    };

    render() {
        let { content } = this.state;

        return (
            <div ref='content-editor' className={this.props.className}>
                <div contentEditable="true" onInput={this._updateContent}>{content}</div>
            </div>
        )
    }
}