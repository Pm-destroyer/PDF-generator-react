import React, { Component } from 'react'
import PDF from './PDF';

export default class Post extends Component {

    state = {
        title: '',
        image: '',
        content: '',
        onSubmission: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    submitPost = (e) => {
        if (!this.state.title || !this.state.content) {
            alert('Enter the required field');
            e.preventDefault();
        } else {
            this.setState({
                onSubmission: true
            });
        }
    }

    render() {
        return (

            <>
                {
                    !this.state.onSubmission ?
                        (<div className="container">
                            <form method='post'>
                                <div className="input-group mb-3">
                                    <input onChange={this.onChange('title')} type="text" className="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                <label htmlFor="basic-url" className="form-label">Your image URL</label>
                                <div className="input-group mb-3">
                                    <input onChange={this.onChange('image')} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                </div>

                                <div className="input-group">
                                    <textarea onChange={this.onChange('content')} className="form-control" aria-label="With textarea"></textarea>
                                </div>

                                <button onClick={this.submitPost} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>) :
                        (<PDF title={this.state.title} content={this.state.content} image={this.state.image} />)
                }
            </>
        );
    }
}

