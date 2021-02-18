class AddNewTask extends Component {
    state = {
        inputValue: undefined
    }
    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            inputValue: value
        });
        console.log(this.state.inputValue); // inchia stex ush console log anum 
    }
     render() {
         console.log("Render", this.state.inputValue); // isk stex normal
         return (
             <div>
                 <input type="text" placeholder="type in here" onChange={this.handleChange} ></input>
             </div>
         )
     }
 }


 // HARC 2
