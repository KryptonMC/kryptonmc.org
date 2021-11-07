import React, { Component } from 'react';
import './GenericSection.scss';
import WikiReference from './WikiReference';
import { Info, Warn, Error } from './Callout';
import hljs from 'highlight.js';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import { DeviceSizes } from './breakpoints';

export default class GenericSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
        // this.codeBlock = React.createRef()
    }

    render() {
        return (
            <div className="generic-section">
                {this.props.code !== undefined && (
                    <div className="code-section">
                        <pre>
                            {this.props.codeUrl !== undefined && (
                                <a href={this.props.codeUrl} rel={'nofollow'}>
                                    <i className="fas fa-link" />
                                </a>
                            )}
                            <CodeBlock
                                text={this.props.code}
                                language={
                                    this.props.codeLanguage === undefined
                                        ? 'kotlin'
                                        : this.props.codeLanguage
                                }
                                showLineNumbers={false}
                                startingLineNumber={1}
                                theme={atomOneDark}
                                customStyle={{
                                    fontSize: '14px',
                                    padding: '20px'
                                }}
                            />
                        </pre>
                    </div>
                )}
                <div>
                    <div
                        style={{
                            width: this.size,
                            paddingLeft: this.padding,
                            paddingRight: this.padding
                        }}
                    >
                        <h3>{this.props.title}</h3>
                        {this.props.paragraphs.map((p) => (
                            <p
                                key={p.substr(0, 30)}
                                dangerouslySetInnerHTML={{ __html: p }}
                            />
                        ))}
                        {this.props.info !== undefined && (
                            <Info text={this.props.info} />
                        )}
                        {this.props.warn !== undefined && (
                            <Warn text={this.props.warn} />
                        )}
                        {this.props.error !== undefined && (
                            <Error text={this.props.error} />
                        )}
                        {this.props.wiki !== undefined && (
                            <WikiReference {...this.props.wiki} />
                        )}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    updateDimensions() {
        this.setState({ width: document.body.scrollWidth });
    }

    get size() {
        if (this.state.width <= DeviceSizes.MEDIUM) return '100%';
        return this.props.code === undefined ? '70%' : '600px';
    }

    get padding() {
        if (this.state.width <= DeviceSizes.MEDIUM) return '0px';
        return this.props.code === undefined
            ? this.state.width / 6.4 + 'px'
            : '0px';
    }
}
