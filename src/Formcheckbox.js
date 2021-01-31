import React, { Component } from 'react'

export default class Formcheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soal: "",
            A: "",
            B: "",
            C: "",
            D: ""
        }

    }

    Soal = (e)=>{
        this.setState({soal: e.target.value});
    }

    jwbA = (e)=> {
        this.setState({A: e.target.value})
    }
    jwbB = (e)=> {
        this.setState({B: e.target.value})
    }
    jwbC = (e)=> {
        this.setState({C: e.target.value})
    }
    jwbD = (e)=> {
        this.setState({D: e.target.value})
    }


    render() {
        return (
            <div>
            <div className="row" >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 classNames="card-title">Preview</h5>
                        {/* form CheckBox */}
                        <label>{this.state.soal}</label><p></p>
                        {/* pilihan Checkbox */}
                        <input class="form-check-input" type="checkbox" value={this.state.A} id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                        {this.state.A}
                        </label><br></br>
                        <input class="form-check-input" type="checkbox" value= {this.state.B} id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                           {this.state.B}
                        </label><br></br>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                           {this.state.C}
                        </label><br></br>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                           {this.state.D}
                        </label>

                        </div>
                    </div>
                </div>
                <div classNames="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Create Soal CheckBox</h5>
                               <form>
                               <div className="form-group">
                                    <label for="soal">Soal : </label>
                                     <input type="text" className="form-control" placeholder="Masukan Soal" onChange={this.Soal} required autoFocus={true}/>

                                </div>
                                <div className="form-group">
                                    <label for="jawabA">Jawaban A : </label>
                                     <input type="text" className="form-control" placeholder="Masukan Opsi Jawaban"  onChange={this.jwbA} required/>
                                </div>
                                <div className="form-group">
                                    <label for="jawabB">Jawaban B: </label>
                                     <input type="text" className="form-control" placeholder="Masukan Opsi Jawaban" onChange={this.jwbB} required/>
                                </div>
                                <div className="form-group">
                                    <label for="jawabC">Jawaban C: </label>
                                     <input type="text" className="form-control" placeholder="Masukan Opsi Jawaban" onChange={this.jwbC} required/>
                                </div>
                                <div className="form-group">
                                    <label for="jawabD">Jawaban D : </label>
                                     <input type="text" className="form-control" placeholder="Masukan Opsi Jawaban" onChange={this.jwbD} required/>
                                </div>
                                <div className="form-group">
                                    <label for="kunci">Kunci : </label>
                                     <input type="text" className="form-control" placeholder="Kunci Jawaban"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="skor">Skor : </label>
                                     <input type="text" className="form-control" placeholder="Skor"  required/>
                                </div>
                                <button onClick={this.handleChange}>Submit</button>
                               </form>
                                </div><br></br><br></br>
                                
                                
                            </div>
                        </div>
                        </div>
            </div>
        )
    }
}
