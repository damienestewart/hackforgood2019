import * as React from "react";

export interface ISnapFrameProps{}
export interface ISnapFrameState{}

export class SnapFrame extends React.Component<ISnapFrameProps,ISnapFrameState>{
    constructor(props: ISnapFrameProps){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <iframe src="https://snap.berkeley.edu/snap/snap.html" style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%"
                }}></iframe>
            </React.Fragment>
        )
    }
}