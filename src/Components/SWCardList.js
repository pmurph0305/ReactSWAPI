import React from 'react';
import SWCard from './SWCard';
class SWCardList extends React.Component {

    render() {
        // var keys = Object.keys(this.props.array);
        // var values = Object.values(this.props.array);
        // console.log(keys);
        // console.log(values);
        console.log("Cardlist")
        return (
                <div>
                {
                    this.props.array.map((thing, index) =>
                    {
                        // var keys = Object.keys(person);
                        // var values = Object.values(person);
                        // console.log(keys);
                        // console.log(values);
                        return (
                            <SWCard
                                key={'key-'+index}
                                name={thing.name}
                                statsDisplayed={this.props.statsDisplayed}
                                keys={Object.keys(thing)}
                                values={Object.values(thing)}
                            />

                        )
                    })
                }
            </div>
            // <div>
            //     {this.props.type === 'people' &&
            //         this.props.array.map((person, index) =>
            //         {
            //             console.log("AH")
            //             return (
            //                 <SWCard
            //                     key={'key-'+index}
            //                     name={person.name}
            //                     stat1={person.height}
            //                     stat2={person.mass}
            //                     stat3={person.gender}
            //                 />

            //             )
            //         })
            //     }
            //     {this.props.type ==='planets' &&
            //         this.props.array.map((planet, index) => {
            //             return (
            //                 <SWCard
            //                     key={'key-'+index}
            //                     name={planet.name}
            //                     stat1={planet.rotation_period}
            //                     stat2={planet.population}
            //                     stat3={planet.climate}
                                
            //                 />
            //             )
            //         })
            //     }
            //     {this.props.type === 'starships' &&
            //         this.props.array.map((starship, index) => {
            //             return (
            //                 <SWCard
            //                     key={'key-'+index}
            //                     name={starship.name}
            //                     stat1={starship.model}
            //                     stat2={starship.manufacturer}
            //                     stat3={starship.cost_in_credits}
            //                 />
            //             )
            //         })

            //     }
            // </div>
        )
    }
}

export default SWCardList;