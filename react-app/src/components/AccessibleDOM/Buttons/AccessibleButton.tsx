import * as React from "react";

export interface IAccessibleButtonProps 
{
    screenReaderText: string[]
    setAriaLive: (text: string) => void
    children: string,
    ariaLabel: string
}

export interface AccessibleButtonState
{}

export class AccessibleButton extends React.Component<IAccessibleButtonProps,AccessibleButtonState>{
    constructor(props: IAccessibleButtonProps){
        super(props);
    }

    static defaultProps = {
        screenReaderText: "",
        setAriaLive: null,
        ariaLabel: ""
    }

    render()
    {
        return(
            <React.Fragment>
                <div className="accessible-button">
                    {
                        this.props.screenReaderText ? this.props.screenReaderText.map(text => 
                            {
                                <span className="screen-reader-text">text</span>
                            }) : null
                    }
                    <button type="button" aria-label={this.props.ariaLabel ? this.props.ariaLabel : undefined }>{this.props.children}</button>
                </div>
            </React.Fragment>
        );
    }
}