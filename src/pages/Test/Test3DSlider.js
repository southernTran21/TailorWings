import React, { Component } from 'react';
import './Test3DSlider.css'
// import Swiper from 'react-id-swiper';
import { Swipeable } from "react-swipeable";

class Test3DSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStatus: [true, false, false, false, false],
            currentIndex: 0
        }
    }

    onSwiped(direction) {
        let { selectedStatus, currentIndex } = this.state;
        if ( direction > 0 ) {
            selectedStatus[currentIndex] = false;
            currentIndex = (currentIndex === (selectedStatus.length - 1)) ? 0 : (currentIndex + 1);
            selectedStatus[currentIndex] = true;
            this.setState({
                currentIndex,
                selectedStatus
            })
        }else {
            selectedStatus[currentIndex] = false;
            currentIndex = currentIndex === 0 ? (selectedStatus.length - 1) : currentIndex -1;
            selectedStatus[currentIndex] = true;
            this.setState({
                currentIndex,
                selectedStatus
            })
        }
    }

    selectHandling = (e) => {
        let { selectedStatus, currentIndex } = this.state;
        switch (e.target.id) {
            case 'slide1':
                selectedStatus[currentIndex] = !selectedStatus[currentIndex];
                selectedStatus[0] = true;
                this.setState({
                    selectedStatus,
                    currentIndex: 0
                })
                break;
            case 'slide2':
                selectedStatus[currentIndex] = !selectedStatus[currentIndex];
                selectedStatus[1] = true;
                this.setState({
                    selectedStatus,
                    currentIndex: 1
                })
                break;
            case 'slide3':
                selectedStatus[currentIndex] = !selectedStatus[currentIndex];
                selectedStatus[2] = true;
                this.setState({
                    selectedStatus,
                    currentIndex: 2
                })
                break;
            case 'slide4':
                selectedStatus[currentIndex] = !selectedStatus[currentIndex];
                selectedStatus[3] = true;
                this.setState({
                    selectedStatus,
                    currentIndex: 3
                })
                break;
            case 'slide5':
                selectedStatus[currentIndex] = !selectedStatus[currentIndex];
                selectedStatus[4] = true;
                this.setState({
                    selectedStatus,
                    currentIndex: 4
                })
                break;

            default:
                break;
        }
    }

    render() {
        // const params = {
        //     effect: 'cube',
        //     grabCursor: true,
        //     freeMode: true,
        //     // loop: true,
        //     cubeEffect: {
        //         shadow: true,
        //         slideShadows: true,
        //         shadowOffset: 20,
        //         shadowScale: 0.94,
        //     },
        //     pagination: {
        //         el: '.swiper-pagination',
        //     }
        // }
        const { selectedStatus } = this.state;
        return (
            <Swipeable
                trackMouse
                preventDefaultTouchmoveEvent
                onSwipedLeft={() => this.onSwiped(+1)}
                onSwipedRight={() => this.onSwiped(-1)}
                style={{ width: '100%', height: '100%', marginTop: '20vh', display: 'flex', justifyContent: 'center' }}
            >
                <section style={{ padding: "none" }} id="slider">
                    <input style={{ display: "none" }} type="radio" name="slider" id="s1" checked={selectedStatus[0]} />
                    <input style={{ display: "none" }} type="radio" name="slider" id="s2" checked={selectedStatus[1]} />
                    <input style={{ display: "none" }} type="radio" name="slider" id="s3" checked={selectedStatus[2]} />
                    <input style={{ display: "none" }} type="radio" name="slider" id="s4" checked={selectedStatus[3]} />
                    <input style={{ display: "none" }} type="radio" name="slider" id="s5" checked={selectedStatus[4]} />
                    {/* <Swiper> */}
                    <label onClick={(e) => this.selectHandling(e)} htmlFor="s1" id="slide1">1</label>
                    <label onClick={(e) => this.selectHandling(e)} htmlFor="s2" id="slide2">2</label>
                    <label onClick={(e) => this.selectHandling(e)} htmlFor="s3" id="slide3">3</label>
                    <label onClick={(e) => this.selectHandling(e)} htmlFor="s4" id="slide4">4</label>
                    <label onClick={(e) => this.selectHandling(e)} htmlFor="s5" id="slide5">5</label>
                    {/* </Swiper> */}
                </section>
            </Swipeable>
        );
    }
}

export default Test3DSlider;