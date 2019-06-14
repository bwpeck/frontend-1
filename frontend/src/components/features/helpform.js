import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addForm } from '../../action';

class HelpForm extends Component {

    state = {
        StudentName: '',
        title: '',
        description: '',
        categories: '',
        isLoading: false,
        id: Date.now(),
        error: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { StudentName: name, title: title, description: description, categories: category } = this.state;
        const newForm = { name, title, description, category };
        console.log(newForm);
        this.props.addForm(newForm)
        this.setState({
            StudentName: '',
            title: '',
            description: '',
            category: '',
            isLoading: false,
            id: Date.now(),
            error: ''
        })
    }

    render() {
        const { StudentName, title, description, categories } = this.state
        return (
            <form
                className='addHelpForm'
                onSubmit={this.handleSubmit}>
                <input
                    input='text'
                    name='StudentName'
                    placeholder='Student Name'
                    value={StudentName}
                    onChange={this.handleChange}
                    required
                />
                <input
                    input='text'
                    name='Problem'
                    placeholder='What can we help you with?'
                    value={title}
                    onChange={this.handleChange}
                    required
                />
                <input
                    input='text'
                    name='Description'
                    placeholder='Please provide further details'
                    value={description}
                    onChange={this.handleChange}
                    required
                />
                <input
                    input='text'
                    name='Category'
                    placeholder='What category is this problem from? i.e React, Redux, HTML, CSS?'
                    value={categories}
                    onChange={this.handleChange}
                    required
                />
                <button>Add HelpForm</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        StudentName: state.StudentName,
        title: state.title,
        description: state.description,
        categories: state.categories,
        isLoading: state.isLoading,
        error: state.error,
        id: state.id
    }
}


export default connect(mapStateToProps, { addForm })(HelpForm)