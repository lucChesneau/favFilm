import React from 'react';

class Gallerie extends React.Component {
        render(){

                const {posterUrl} = this.props;


                return (
                        <div className='gallerie-container'>
                {
                        posterUrl.map(poster => <img src={poster} alt="poster"/>)
                }
                        </div>
                );
        }
}

export default Gallerie;