import React from 'react'
class Carousel extends React.Component{
    state={
        photo:[],
        active:0
    }    
    static getDerivedStateFromProps({ media }){
        //default photo
        let photos = ["http://placecorgi.com/600/600"];
        if(media.length){
            photos=media.map(({large})=>large);
        }
        console.log(media);
        return {photos};
    }
    render(){
        const { photos, active } = this.state;
        console.log(active);
        return (
        <div className="carousel">
            <img src={photos[active]} alt="animal" />
            <div className="carousel-smaller">
            {photos.map((photo, index) => (
                <img
                key={photo}
                src={photo}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
                onClick={this.handleIndexClick}
                data-index={index}
                />
            ))}
            </div>
        </div>
        );
    }
    // add event listener
    handleIndexClick = event => {
        this.setState({
        active: event.target.dataset.index
        });
    };
}




  
export default Carousel;