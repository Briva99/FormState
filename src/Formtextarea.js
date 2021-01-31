import React, { Component } from 'react'

export default class Formtextarea extends Component {
    render() {
        return (
            <div>
            <div className="row" >
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 classNames="card-title">Preview</h5>
                        </div>
                    </div>
                </div>
                <div classNames="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Create Soal TextArea</h5>
                                <form>
                                <div className="form-group">
                                    <label for="soal">Soal : </label>
                                     <input type="text" className="form-control" placeholder="Masukan Soal"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="kunci">Kunci : </label>
                                     <input type="text" className="form-control" placeholder="Masukan Kunci Jawaban"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="skor">skor: </label>
                                     <input type="text" className="form-control" placeholder="Skor"  required/>
                                </div>
                                </form>
                            </div><br></br><br></br>
                            <a href="google.com" class="btn btn-primary">Submit</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
