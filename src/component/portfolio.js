import React, {Component} from 'react';

import {Carousel} from '3d-react-carousal';
import {connect} from "react-redux";


import {DATA_ACTIONS} from './../redux/data/actions'

const {get_data} = DATA_ACTIONS

let slides = [
    <iframe className="mediaplay" src="https://www.youtube.com/embed/aYKqEKtrMDI" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/TGijN-kkKWU" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen></iframe>,
    <iframe className="mediaplay" src="https://www.youtube.com/embed/7PVtaCbD06U" frameBorder="0"
            allow="autoplay; encrypted-media" allowFullScreen>
    </iframe>];

class Portfolio extends Component {


    componentDidMount() {
        const {get_data} = this.props;
        get_data();
        console.log(this.props.data)
    }

    render() {
        const datas = this.props.data ? this.props.data.get('webdata') : {}
        console.log(this.props.data)

        let slides2url = datas ? datas.homevideos.split(',') : []
        let slides2 = []

        for (let i = 0; i < slides2url.length; i++) {
            if (slides2url[i].includes("youtube")) {
                slides2.push(<iframe className="mediaplay" src={slides2url[i]} frameBorder={0}
                                     allow="autoplay encrypted-media"
                                     allowFullScreen></iframe>)
            } else {
                slides2.push(<img src={slides2url[i]} className="mediaplay" alt="abdulla thanseeh"/>)
            }
        }

        return (
            <div className="App backgroundblack paddingTop" style={{backgroundColor: '#364d79', padding: '20px 10px',margin:'20px 0px'}}>


                <div className="container">
                    <div className="row">

                        <div className="col-sm-24 col-lg-12 text-center">
                            <h2 style={{color:'white',textWeight:'bold'}}>VIDEO GALLERY</h2>
                            {/*<hr className="star-primary"/>*/}
                            <div className="container">
                            {datas && <Carousel slides={slides2} autoplay={true}/>}
                            {!datas && <Carousel slides={slides} autoplay={true}/>}
                            </div>
                            </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default connect(state => ({
    data: state.data
}), {
    get_data
})(Portfolio)